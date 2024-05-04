'use client'

import { useState } from 'react'
import { Button, Form, Input, InputNumber, DatePicker, Typography } from 'antd'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CreateFinancialGoalPage() {
  const [form] = Form.useForm()
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const onFinish = async (values: any) => {
    try {
      const formattedValues = {
        ...values,
        deadline: values.deadline.format('YYYY-MM-DD'),
        userId: userId,
      }
      await Api.FinancialGoal.createOneByUserId(userId, formattedValues)
      enqueueSnackbar('Financial goal created successfully', {
        variant: 'success',
      })
      router.push('/financial-goals')
    } catch (error) {
      enqueueSnackbar('Failed to create financial goal', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <Title level={2}>Create a New Financial Goal</Title>
        <Text>Please fill in the form below to set a new financial goal.</Text>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            targetAmount: 0,
            currentAmount: 0,
          }}
        >
          <Form.Item
            name="targetAmount"
            label="Target Amount"
            rules={[
              { required: true, message: 'Please input the target amount!' },
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
          <Form.Item
            name="currentAmount"
            label="Current Amount"
            rules={[
              { required: true, message: 'Please input the current amount!' },
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
          <Form.Item
            name="deadline"
            label="Deadline"
            rules={[{ required: true, message: 'Please select the deadline!' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create Financial Goal
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  )
}
