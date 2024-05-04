'use client'

import { useEffect, useState } from 'react'
import { Button, Table, Modal, Form, Input, DatePicker, Typography } from 'antd'
import {
  ExclamationCircleOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
const { confirm } = Modal
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function FinancialGoalsManagementPage() {
  const [financialGoals, setFinancialGoals] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [currentGoal, setCurrentGoal] = useState(null)
  const { enqueueSnackbar } = useSnackbar()
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id

  useEffect(() => {
    if (userId) {
      fetchFinancialGoals()
    }
  }, [userId])

  const fetchFinancialGoals = async () => {
    try {
      const goals = await Api.FinancialGoal.findManyByUserId(userId)
      setFinancialGoals(goals)
    } catch (error) {
      enqueueSnackbar('Failed to fetch financial goals', { variant: 'error' })
    }
  }

  const showDeleteConfirm = goalId => {
    confirm({
      title: 'Are you sure delete this goal?',
      icon: <ExclamationCircleOutlined />,
      content: 'This action cannot be undone',
      onOk() {
        deleteGoal(goalId)
      },
      onCancel() {},
    })
  }

  const deleteGoal = async goalId => {
    try {
      await Api.FinancialGoal.deleteOne(goalId)
      fetchFinancialGoals()
      enqueueSnackbar('Goal deleted successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to delete goal', { variant: 'error' })
    }
  }

  const handleEditGoal = goal => {
    setCurrentGoal(goal)
    setIsModalVisible(true)
  }

  const handleOk = async values => {
    try {
      const updatedValues = {
        ...values,
        deadline: values.deadline.format('YYYY-MM-DD'),
      }
      if (currentGoal) {
        await Api.FinancialGoal.updateOne(currentGoal.id, updatedValues)
        enqueueSnackbar('Goal updated successfully', { variant: 'success' })
      } else {
        await Api.FinancialGoal.createOneByUserId(userId, updatedValues)
        enqueueSnackbar('Goal created successfully', { variant: 'success' })
      }
      fetchFinancialGoals()
      setIsModalVisible(false)
      setCurrentGoal(null)
    } catch (error) {
      enqueueSnackbar('Failed to save goal', { variant: 'error' })
    }
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    setCurrentGoal(null)
  }

  const columns = [
    {
      title: 'Target Amount',
      dataIndex: 'targetAmount',
      key: 'targetAmount',
    },
    {
      title: 'Current Amount',
      dataIndex: 'currentAmount',
      key: 'currentAmount',
    },
    {
      title: 'Deadline',
      dataIndex: 'deadline',
      key: 'deadline',
      render: text => dayjs(text).format('YYYY-MM-DD'),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <>
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEditGoal(record)}
          />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => showDeleteConfirm(record.id)}
          />
        </>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Manage Financial Goals</Title>
      <Text>Track and manage your financial goals.</Text>
      <Button type="primary" onClick={() => setIsModalVisible(true)}>
        Add New Goal
      </Button>
      <Table columns={columns} dataSource={financialGoals} rowKey="id" />
      <Modal
        title="Financial Goal"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          initialValues={
            currentGoal
              ? { ...currentGoal, deadline: dayjs(currentGoal.deadline) }
              : {}
          }
          onFinish={handleOk}
        >
          <Form.Item
            name="targetAmount"
            label="Target Amount"
            rules={[{ required: true }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="currentAmount"
            label="Current Amount"
            rules={[{ required: true }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="deadline"
            label="Deadline"
            rules={[{ required: true }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </PageLayout>
  )
}
