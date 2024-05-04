'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Card, Col, Row, Space, Spin } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function TaxBenefitsInformationPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [userTaxBenefits, setUserTaxBenefits] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userId) {
      enqueueSnackbar('User not authenticated', { variant: 'error' })
      router.push('/home')
      return
    }

    const fetchUserTaxBenefits = async () => {
      try {
        const data = await Api.UserTaxBenefit.findManyByUserId(userId, {
          includes: ['benefit'],
        })
        setUserTaxBenefits(data)
      } catch (error) {
        enqueueSnackbar('Failed to fetch tax benefits', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    fetchUserTaxBenefits()
  }, [userId, router])

  return (
    <PageLayout layout="full-width">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Tax Benefits Information</Title>
        <Paragraph>
          Here you can find detailed information about the tax benefits you are
          eligible for based on your financial activities.
        </Paragraph>
        {loading ? (
          <Spin size="large" />
        ) : (
          <Row gutter={[16, 16]}>
            {userTaxBenefits?.map(utb => (
              <Col key={utb.id} span={24} md={12} lg={8}>
                <Card
                  title={utb.benefit?.description}
                  bordered={false}
                  actions={[
                    <InfoCircleOutlined
                      key="info"
                      onClick={() => router.push(`/tax-benefits/${utb.id}`)}
                    />,
                  ]}
                >
                  <Text strong>Eligibility Criteria:</Text>
                  <Paragraph>{utb.benefit?.eligibilityCriteria}</Paragraph>
                  <Text strong>Applicable Year:</Text>
                  <Paragraph>{utb.applicableYear}</Paragraph>
                  <Text strong>Date Created:</Text>
                  <Paragraph>
                    {dayjs(utb.dateCreated).format('YYYY-MM-DD')}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Space>
    </PageLayout>
  )
}
