'use client'

import { useEffect, useState } from 'react'
import { Button, Col, Form, Input, Row, Select, Table, Typography } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ExpensesManagementPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const [expenses, setExpenses] = useState([])
  const [categories, setCategories] = useState([])
  const [form] = Form.useForm()

  useEffect(() => {
    if (userId) {
      fetchExpenses()
      fetchCategories()
    }
  }, [userId])

  const fetchExpenses = async () => {
    try {
      const expensesData = await Api.Expense.findManyByUserId(userId, {
        includes: ['category'],
      })
      setExpenses(expensesData)
    } catch (error) {
      enqueueSnackbar('Failed to fetch expenses', { variant: 'error' })
    }
  }

  const fetchCategories = async () => {
    try {
      const categoriesData = await Api.Category.findMany()
      setCategories(categoriesData)
    } catch (error) {
      enqueueSnackbar('Failed to fetch categories', { variant: 'error' })
    }
  }

  const handleCreateExpense = async values => {
    try {
      await Api.Expense.createOneByUserId(userId, {
        ...values,
        date: dayjs(values.date).format('YYYY-MM-DD'),
      })
      enqueueSnackbar('Expense created successfully', { variant: 'success' })
      form.resetFields()
      fetchExpenses()
    } catch (error) {
      enqueueSnackbar('Failed to create expense', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: text => dayjs(text).format('YYYY-MM-DD'),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: category => category?.name,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Expenses Management</Title>
      <Text>Manage and categorize your expenses efficiently.</Text>
      <Row justify="center" style={{ marginTop: 20 }}>
        <Col span={24}>
          <Form form={form} layout="vertical" onFinish={handleCreateExpense}>
            <Form.Item name="date" label="Date" rules={[{ required: true }]}>
              <Input type="date" />
            </Form.Item>
            <Form.Item
              name="amount"
              label="Amount"
              rules={[{ required: true }]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              name="categoryId"
              label="Category"
              rules={[{ required: true }]}
            >
              <Select placeholder="Select a category">
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
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 20 }}>
        <Col span={24}>
          <Table dataSource={expenses} columns={columns} rowKey="id" />
        </Col>
      </Row>
    </PageLayout>
  )
}
