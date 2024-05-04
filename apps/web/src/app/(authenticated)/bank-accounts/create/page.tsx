'use client'

import { useEffect, useState } from 'react'
import {
  Button,
  Form,
  Input,
  InputNumber,
  Typography,
  Col,
  Row,
  Select,
} from 'antd'
import { BankTwoTone } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CreateBankAccountPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id

  const [form] = Form.useForm()

  useEffect(() => {
    if (!authentication.isAuthenticated) {
      enqueueSnackbar('You need to be logged in to access this page', {
        variant: 'error',
      })
      router.push('/home')
    }
  }, [authentication.isAuthenticated, router])

  const handleFormSubmit = async (values: any) => {
    try {
      await Api.BankAccount.createOneByUserId(userId!, {
        accountName: values.accountName,
        accountType: values.accountType,
        balance: values.balance,
        userId: userId!,
      })
      enqueueSnackbar('Bank account created successfully!', {
        variant: 'success',
      })
      router.push('/bank-accounts')
    } catch (error) {
      enqueueSnackbar('Failed to create bank account', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={18} md={12} lg={10} xl={8}>
          <Title level={2}>
            <BankTwoTone /> Create New Bank Account
          </Title>
          <Text type="secondary">
            Fill in the details below to add a new bank account to your profile.
          </Text>
          <Form
            form={form}
            layout="vertical"
            onFinish={handleFormSubmit}
            requiredMark={false}
          >
            <Form.Item
              label="Account Name"
              name="accountName"
              rules={[
                { required: true, message: 'Please input the account name!' },
              ]}
            >
              <Input placeholder="e.g., My Savings Account" />
            </Form.Item>
            <Form.Item
              label="Account Type"
              name="accountType"
              rules={[
                { required: true, message: 'Please select the account type!' },
              ]}
            >
              <Select placeholder="Select account type">
                <Option value="savings">Savings</Option>
                <Option value="checking">Checking</Option>
                <Option value="investment">Investment</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Initial Balance"
              name="balance"
              rules={[
                {
                  required: true,
                  message: 'Please input the initial balance!',
                },
              ]}
            >
              <InputNumber
                formatter={value =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }
                parser={value => value!.replace(/\$\s?|(,*)/g, '')}
                style={{ width: '100%' }}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Add Bank Account
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}
