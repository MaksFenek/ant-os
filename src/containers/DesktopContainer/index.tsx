import React from 'react'
import {Layout} from 'antd'

import {DesktopFooter} from 'src/components'

import './desktop.scss'

const {Content} = Layout

export const Desktop: React.FC = ({children}) => {
  return (
    <Layout className="desktop">
      <Content className="desktop-content">{children}</Content>
      <DesktopFooter />
    </Layout>
  )
}
