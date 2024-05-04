'use client'

import { Button, Form, Input, DatePicker, Select, Typography } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
const { Title, Text } = Typography
const { Option } = Select
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CreateBillPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const [categories, setCategories] = useState<Model.Category[]>([])
  const [form] = Form.useForm()

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

  const onFinish = async (values: any) => {
    try {
      const newBill = {
        amountDue: values.amountDue,
        dueDate: dayjs(values.dueDate).format('YYYY-MM-DD'),
        isPaid: false,
        categoryId: values.categoryId,
      }

      await Api.Bill.createOneByUserId(userId!, newBill)
      enqueueSnackbar('Bill created successfully', { variant: 'success' })
      router.push('/bills')
    } catch (error) {
      enqueueSnackbar('Failed to create bill', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>Create New Bill</Title>
        <Text type="secondary">
          Enter the details of the bill you want to add to your records.
        </Text>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="amountDue"
            label="Amount Due"
            rules={[
              { required: true, message: 'Please input the amount due!' },
            ]}
          >
            <Input prefix="$" type="number" />
          </Form.Item>
          <Form.Item
            name="dueDate"
            label="Due Date"
            rules={[{ required: true, message: 'Please select the due date!' }]}
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
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
              Add Bill
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  )
}
