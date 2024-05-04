'use client'

import { useEffect, useState } from 'react'
import { Typography, Card, Row, Col, Statistic, Spin, Alert } from 'antd'
import { PieChartOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function SpendingReportsPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const [loading, setLoading] = useState(true)
  const [reports, setReports] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    if (!userId) {
      enqueueSnackbar('User not authenticated', { variant: 'error' })
      router.push('/home')
      return
    }

    Api.Report.findManyByUserId(userId, { includes: ['reportDetails'] })
      .then(data => {
        setReports(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch reports:', err)
        setError('Failed to load reports')
        setLoading(false)
      })
  }, [userId, router])

  return (
    <PageLayout layout="full-width">
      <Title level={2}>
        <PieChartOutlined /> Spending Reports
      </Title>
      <Text type="secondary">
        Detailed insights into your spending patterns.
      </Text>
      {loading ? (
        <Spin size="large" />
      ) : error ? (
        <Alert type="error" message={error} />
      ) : (
        <Row gutter={[16, 16]}>
          {reports?.map(report => (
            <Col key={report.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                title={`Report: ${dayjs(report.generatedDate).format('MMMM D, YYYY')}`}
              >
                {report.reportDetails?.map(detail => (
                  <Statistic
                    key={detail.id}
                    title={detail.detailDescription}
                    value={detail.value}
                    prefix="$"
                  />
                ))}
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </PageLayout>
  )
}
