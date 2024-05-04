import { RouterObject } from '@web/core/router'
import { useDesignSystem } from '@web/designSystem'
import { Model } from '@web/domain'
import { useAuthentication } from '@web/modules/authentication'
import { Col, Layout, Row } from 'antd'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { Leftbar } from './components/Leftbar'
import { Logo } from './components/Logo'
import { SubNavigation } from './components/SubNavigation'
import { Topbar } from './components/Topbar/index.layout'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const authentication = useAuthentication()
  const user = authentication?.user as Model.User

  const { isMobile } = useDesignSystem()

  const goTo = (url: string) => {
    router.push(url)
  }

  const goToUserPage = (url: string) => {
    router.push(url.replace(':id', user?.id))
  }

  const itemsLeftbar = [
    {
      key: '/home',
      label: 'Dashboard',
      onClick: () => goTo('/home'),
    },

    {
      key: '/bank-accounts',
      label: 'Manage Bank Accounts',
      onClick: () => goTo('/bank-accounts'),
    },

    {
      key: '/bank-accounts/create',
      label: 'Add Bank Account',
      onClick: () => goTo('/bank-accounts/create'),
    },

    {
      key: '/expenses',
      label: 'Manage Expenses',
      onClick: () => goTo('/expenses'),
    },

    {
      key: '/expenses/create',
      label: 'Add Expense',
      onClick: () => goTo('/expenses/create'),
    },

    {
      key: '/financial-goals',
      label: 'Manage Financial Goals',
      onClick: () => goTo('/financial-goals'),
    },

    {
      key: '/financial-goals/create',
      label: 'Add Financial Goal',
      onClick: () => goTo('/financial-goals/create'),
    },

    {
      key: '/bills',
      label: 'Manage Bills',
      onClick: () => goTo('/bills'),
    },

    {
      key: '/bills/create',
      label: 'Add Bill',
      onClick: () => goTo('/bills/create'),
    },

    {
      key: '/reports',
      label: 'Spending Reports',
      onClick: () => goTo('/reports'),
    },

    {
      key: '/tax-benefits',
      label: 'Tax Benefits',
      onClick: () => goTo('/tax-benefits'),
    },
  ]

  const itemsUser = []

  const itemsTopbar = []

  const itemsSubNavigation = [
    {
      key: '/home',
      label: 'Dashboard',
    },

    {
      key: '/bank-accounts',
      label: 'Manage Bank Accounts',
    },

    {
      key: '/bank-accounts/create',
      label: 'Add Bank Account',
    },

    {
      key: '/expenses',
      label: 'Manage Expenses',
    },

    {
      key: '/expenses/create',
      label: 'Add Expense',
    },

    {
      key: '/financial-goals',
      label: 'Manage Financial Goals',
    },

    {
      key: '/financial-goals/create',
      label: 'Add Financial Goal',
    },

    {
      key: '/bills',
      label: 'Manage Bills',
    },

    {
      key: '/bills/create',
      label: 'Add Bill',
    },

    {
      key: '/reports',
      label: 'Spending Reports',
    },

    {
      key: '/tax-benefits',
      label: 'Tax Benefits',
    },
  ]

  const itemsMobile = [
    {
      key: 'profile',
      label: 'Profile',
      onClick: () => goTo(RouterObject.route.PROFILE),
    },
    {
      key: 'notifications',
      label: 'Notifications',
      onClick: () => goTo(RouterObject.route.NOTIFICATIONS),
    },
    ...itemsTopbar,
    ...itemsLeftbar,
  ]

  const isLeftbar = itemsLeftbar.length > 0 && !isMobile

  return (
    <>
      <Layout>
        <Row
          style={{
            height: '100vh',
            width: '100vw',
          }}
        >
          {isLeftbar && (
            <Col>
              <Leftbar
                items={itemsLeftbar}
                itemsUser={itemsUser}
                logo={<Logo className="m-2" />}
              />
            </Col>
          )}

          <Col
            style={{
              flex: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <Topbar
              isMobile={isMobile}
              items={itemsTopbar}
              itemsMobile={itemsMobile}
              logo={!isLeftbar && <Logo width={40} height={40} />}
            />

            <Col
              style={{
                flex: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <SubNavigation items={itemsSubNavigation} />

              {children}
            </Col>
          </Col>
        </Row>
      </Layout>
    </>
  )
}
