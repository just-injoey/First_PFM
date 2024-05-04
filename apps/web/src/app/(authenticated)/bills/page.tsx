'use client'

import { useEffect, useState } from 'react'
import {
  Button,
  Table,
  Tag,
  Modal,
  Form,
  Input,
  DatePicker,
  Select,
} from 'antd'
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function BillsManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [bills, setBills] = useState<Model.Bill[]>([])
  const [categories, setCategories] = useState<Model.Category[]>([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userBills = await Api.Bill.findManyByUserId(userId, {
          includes: ['category'],
        })
        setBills(userBills)
        const categories = await Api.Category.findMany()
        setCategories(categories)
      } catch (error) {
        enqueueSnackbar('Failed to fetch data', { variant: 'error' })
      }
    }

    fetchData()
  }, [userId])

  const handleDelete = async (billId: string) => {
    try {
      await Api.Bill.deleteOne(billId)
      setBills(bills.filter(bill => bill.id !== billId))
      enqueueSnackbar('Bill deleted successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to delete bill', { variant: 'error' })
    }
  }

  const handleAddOrUpdateBill = async (values: any) => {
    const formattedValues = {
      ...values,
      dueDate: values.dueDate.format('YYYY-MM-DD'),
      userId,
      isPaid: values.isPaid || false,
    }

    try {
      let updatedBills = [...bills]
      if (values.id) {
        await Api.Bill.updateOne(values.id, formattedValues)
        updatedBills = updatedBills.map(bill =>
          bill.id === values.id ? { ...bill, ...formattedValues } : bill,
        )
      } else {
        const newBill = await Api.Bill.createOneByUserId(
          userId,
          formattedValues,
        )
        updatedBills.push(newBill)
      }
      setBills(updatedBills)
      setIsModalVisible(false)
      enqueueSnackbar('Bill saved successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to save bill', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Amount Due',
      dataIndex: 'amountDue',
      key: 'amountDue',
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
      render: (text: string) => dayjs(text).format('YYYY-MM-DD'),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (category: Model.Category) => category?.name,
    },
    {
      title: 'Paid',
      dataIndex: 'isPaid',
      key: 'isPaid',
      render: (isPaid: boolean) =>
        isPaid ? (
          <Tag color="green">Paid</Tag>
        ) : (
          <Tag color="volcano">Pending</Tag>
        ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Model.Bill) => (
        <>
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              form.setFieldsValue({ ...record, dueDate: dayjs(record.dueDate) })
              setIsModalVisible(true)
            }}
          />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
            style={{ marginLeft: 8 }}
          />
        </>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1>Bills Management</h1>
        <p>
          Manage and categorize your bills, view due dates, and mark bills as
          paid.
        </p>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setIsModalVisible(true)}
        >
          Add Bill
        </Button>
        <Table
          columns={columns}
          dataSource={bills}
          rowKey="id"
          style={{ marginTop: 16 }}
        />

        <Modal
          title="Add/Edit Bill"
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          onOk={() => form.submit()}
        >
          <Form form={form} onFinish={handleAddOrUpdateBill} layout="vertical">
            <Form.Item name="id" hidden>
              <Input />
            </Form.Item>
            <Form.Item
              name="amountDue"
              label="Amount Due"
              rules={[
                { required: true, message: 'Please input the amount due!' },
              ]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              name="dueDate"
              label="Due Date"
              rules={[
                { required: true, message: 'Please select the due date!' },
              ]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              name="categoryId"
              label="Category"
              rules={[{ required: true, message: 'Please select a category!' }]}
            >
              <Select>
                {categories.map(category => (
                  <Select.Option key={category.id} value={category.id}>
                    {category.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="isPaid" label="Paid" valuePropName="checked">
              <CheckCircleOutlined />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}
