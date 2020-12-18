import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import 'jest-styled-components'

import MockTheme from './../../../mockTheme'

import { Tabs } from '.'

afterEach(cleanup)

test('it renders', () => {
  const tabs = render(
    <MockTheme>
      <Tabs
        initialTab={0}
        tabContent={[
          {
            name: 'Tab 1',
          },
          {
            name: 'With icon',
            icon: <img src="//unsplash.it/16/16" />,
          },
          {
            name: 'Tab 2',
          },
          {
            name: 'With icon',
            icon: <img src="//unsplash.it/16/16" />,
          },
          {
            name: 'With icon',
            icon: <img src="//unsplash.it/16/16" />,
          },
          {
            name: 'With icon',
            icon: <img src="//unsplash.it/16/16" />,
          },
        ]}
      />
    </MockTheme>,
  )

  const self = tabs.container.firstChild.firstChild

  expect(self).toMatchSnapshot()

  expect(self).toHaveAttribute('data-is-tab-active', 'true')
})
