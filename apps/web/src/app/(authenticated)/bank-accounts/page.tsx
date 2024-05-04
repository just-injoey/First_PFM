'use client'

import { useEffect, useState } from 'react'
import {
  Button,
  Table,
  Modal,
  Form,
  Input,
  InputNumber,
  Typography,
} from 'antd'
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

export default function BankAccountsManagementPage() {
  const [bankAccounts, setBankAccounts] = useState<Model.BankAccount[]>([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [currentAccount, setCurrentAccount] =
    useState<Model.BankAccount | null>(null)
  const [form] = Form.useForm()
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id

  useEffect(() => {
    if (userId) {
      fetchBankAccounts()
    }
  }, [userId])

  const fetchBankAccounts = async () => {
    try {
      const accounts = await Api.BankAccount.findManyByUserId(userId, {
        includes: ['user'],
      })
      setBankAccounts(accounts)
    } catch (error) {
      enqueueSnackbar('Failed to fetch bank accounts', { variant: 'error' })
    }
  }

  const showDeleteConfirm = (bankAccountId: string) => {
    confirm({
      title: 'Are you sure delete this account?',
      icon: <ExclamationCircleOutlined />,
      content: 'This action cannot be undone',
      onOk() {
        deleteBankAccount(bankAccountId)
      },
    })
  }

  const deleteBankAccount = async (bankAccountId: string) => {
    try {
      await Api.BankAccount.deleteOne(bankAccountId)
      enqueueSnackbar('Bank account deleted successfully', {
        variant: 'success',
      })
      fetchBankAccounts()
    } catch (error) {
      enqueueSnackbar('Failed to delete bank account', { variant: 'error' })
    }
  }

  const handleEdit = (account: Model.BankAccount) => {
    setCurrentAccount(account)
    form.setFieldsValue({
      accountName: account.accountName,
      accountType: account.accountType,
      balance: account.balance,
    })
    setIsModalVisible(true)
  }

  const handleUpdate = async (values: any) => {
    if (!currentAccount) return
    try {
      await Api.BankAccount.updateOne(currentAccount.id, {
        ...values,
        userId: currentAccount.userId,
      })
      enqueueSnackbar('Bank account updated successfully', {
        variant: 'success',
      })
      fetchBankAccounts()
      setIsModalVisible(false)
      setCurrentAccount(null)
    } catch (error) {
      enqueueSnackbar('Failed to update bank account', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Account Name',
      dataIndex: 'accountName',
      key: 'accountName',
    },
    {
      title: 'Account Type',
      dataIndex: 'accountType',
      key: 'accountType',
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
      render: (balance: number) => `$${balance.toFixed(2)}`,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Model.BankAccount) => (
        <>
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
            style={{ marginRight: 8 }}
          >
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            onClick={() => showDeleteConfirm(record.id)}
            danger
          >
            Delete
          </Button>
        </>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Bank Accounts Management</Title>
      <Text>
        Manage your bank accounts. You can edit or delete any account listed
        below.
      </Text>
      <Table
        columns={columns}
        dataSource={bankAccounts}
        rowKey="id"
        style={{ marginTop: 20 }}
      />
      <Modal
        title="Edit Bank Account"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleUpdate} layout="vertical">
          <Form.Item
            name="accountName"
            label="Account Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="accountType"
            label="Account Type"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="balance"
            label="Balance"
            rules={[{ required: true }]}
          >
            <InputNumber
              min={0}
              formatter={value => `$ ${value}`}
              parser={value => value!.replace(/\$\s?|(,*)/g, '')}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form>
      </Modal>
    </PageLayout>
  )
}
