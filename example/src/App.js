import React from 'react'

import { AutoColumns, Flex, Column, Row, Bento } from 'bento-ui'
import { Text } from 'rebass/styled-components'

const App = () => {
  return (
    <>
      <AutoColumns>
        <Text alignSelf='center' justifySelf='center'>
          hei
        </Text>
        <Column center mark>
          <p>hei</p>
          <p>hei</p>
        </Column>
        <Row
          center
          mark
          sx={{
            border: ['1px solid green', '1px solid pink', '10px solid blue']
          }}
        >
          <p>hei</p>
          <p>hei</p>
        </Row>
        <Bento
          mark='pink'
          gap={['10px', '50px', '100px']}
          areas={[
            `'header' 'content'`,
            `'header header'
            'sidebar content'`,
            `'header header'
            'content sidebar'`
          ]}
        >
          {({ Header, Content, Sidebar }) => (
            <>
              <Header as={AutoColumns} center mark='blue'>
                <Text>Header</Text>
                <Text>Header</Text>
              </Header>
              <Content>Content</Content>
              <Sidebar mark center as={Row}>
                Sidebar
              </Sidebar>
            </>
          )}
        </Bento>
      </AutoColumns>
      <Flex flexDirection={['row', 'column']}>
        <Text>Hei</Text>
        <Text>Hei</Text>
        <Text>Hei</Text>
      </Flex>
    </>
  )
}

export default App
