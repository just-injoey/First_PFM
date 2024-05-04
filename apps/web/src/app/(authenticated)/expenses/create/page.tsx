'use client'

import { useState, useEffect } from 'react'
import { Form, Input, Button, DatePicker, Select, Typography } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CreateExpensePage() {
  const [categories, setCategories] = useState([])
  const [form] = Form.useForm()
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await Api.Category.findMany()
        setCategories(categoriesData)
      } catch (error) {
        enqueueSnackbar('Failed to fetch categories', { variant: 'error' })
      }
    }

    fetchCategories()
  }, [])

  const onFinish = async values => {
    try {
      const formattedValues = {
        ...values,
        date: values.date.format('YYYY-MM-DD'),
        userId,
      }
      await Api.Expense.createOneByUserId(userId, formattedValues)
      enqueueSnackbar('Expense added successfully', { variant: 'success' })
      router.push('/expenses')
    } catch (error) {
      enqueueSnackbar('Failed to add expense', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Title level={2}>Add New Expense</Title>
        <Text type="secondary">
          Fill in the details below to add a new expense to your financial
          records.
        </Text>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="amount"
            label="Amount"
            rules={[{ required: true, message: 'Please input the amount!' }]}
          >
            <Input prefix="$" type="number" />
          </Form.Item>
          <Form.Item
            name="date"
            label="Date"
            rules={[{ required: true, message: 'Please select the date!' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="categoryId"
            label="Category"
            rules={[{ required: true, message: 'Please select a category!' }]}
          >
            <Select placeholder="Select a category" allowClear>
              {categories.map(category => (
                <Option key={category.id} value={category.id}>
                  {category.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
              Add Expense
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  )
}
