import React, { useState } from 'react'

import { CSSProperties } from 'styled-components'
import {
  StyledTabs,
  StyledTab,
  StyledTabContent,
  StyledIcon,
} from './index.styled'
import { Text } from 'components/atoms'

import { useId } from 'react-id-generator'

type TabContent = {
  name: string
  icon?: JSX.Element
}

export type Props = {
  tabContent: Array<TabContent>
  className?: string
  initialTab?: number
  style?: CSSProperties
}

const Tabs = ({ style, initialTab, tabContent, className }: Props) => {
  const [activeTab, setActiveTab] = useState(initialTab || 0)
  const idList = useId(tabContent.length)

  return (
    <StyledTabs style={style} className={className}>
      {tabContent.map((tab, i) => (
        <StyledTab
          data-is-tab-active={activeTab === i || undefined}
          onClick={() => setActiveTab(i)}
          key={idList[i]}
        >
          <StyledTabContent>
            {tab.icon && <StyledIcon>{tab.icon}</StyledIcon>}
            <Text size="sm" type="bold">
              {tab.name}
            </Text>
          </StyledTabContent>
        </StyledTab>
      ))}
    </StyledTabs>
  )
}

export { Tabs }
