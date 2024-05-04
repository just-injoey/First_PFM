'use client'

import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Typography, Button, Statistic, Space } from 'antd'
import {
  DollarCircleOutlined,
  BankOutlined,
  FileTextOutlined,
  AlertOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [user, setUser] = useState<Model.User | null>(null)

  useEffect(() => {
    if (!userId) {
      enqueueSnackbar('User not found, please login.', { variant: 'error' })
      return
    }

    const fetchData = async () => {
      try {
        const userData = await Api.User.findOne(userId, {
          includes: [
            'bankAccounts',
            'expenses',
            'financialGoals',
            'bills',
            'notifications',
          ],
        })
        setUser(userData)
      } catch (error) {
        enqueueSnackbar('Failed to fetch user data.', { variant: 'error' })
      }
    }

    fetchData()
  }, [userId])

  const navigateTo = (path: string) => {
    router.push(path)
  }

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Dashboard</Title>
      <Text>Welcome back, {user?.name || 'User'}!</Text>

      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card onClick={() => navigateTo('/bank-accounts')}>
            <Statistic
              title="Total Balance"
              value={user?.bankAccounts?.reduce(
                (acc, account) => acc + account.balance,
                0,
              )}
              prefix={<DollarCircleOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card onClick={() => navigateTo('/expenses')}>
            <Statistic
              title="Total Expenses"
              value={user?.expenses?.reduce(
                (acc, expense) => acc + expense.amount,
                0,
              )}
              prefix={<BankOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card onClick={() => navigateTo('/financial-goals')}>
            <Statistic
              title="Financial Goals"
              value={user?.financialGoals?.length}
              prefix={<FileTextOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card onClick={() => navigateTo('/bills')}>
            <Statistic
              title="Upcoming Bills"
              value={
                user?.bills?.filter(bill =>
                  dayjs(bill.dueDate).isAfter(dayjs()),
                ).length
              }
              prefix={<AlertOutlined />}
            />
          </Card>
        </Col>
      </Row>

      <Space direction="vertical" size="large" style={{ marginTop: 24 }}>
        <Button type="primary" onClick={() => navigateTo('/reports')}>
          View Reports
        </Button>
        <Button onClick={() => navigateTo('/tax-benefits')}>
          Tax Benefits
        </Button>
      </Space>
    </PageLayout>
  )
}
