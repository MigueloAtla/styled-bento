import React from 'react'

import { AutoColumns, Flex, Column, Row, Grid } from 'bento-ui'
import { Text } from 'rebass/styled-components'

const App = () => {
  return (
    <>
      <AutoColumns>
        <Text alignSelf='center' justifySelf='center'>
          hei
        </Text>
        <Column center test>
          <p>hei</p>
          <p>hei</p>
        </Column>
        <Row
          center
          test
          sx={{
            border: ['1px solid green', '1px solid pink', '10px solid blue']
          }}
        >
          <p>hei</p>
          <p>hei</p>
        </Row>
        <Grid
          test='pink'
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
              <Header as={AutoColumns} center test='blue'>
                <Text>Header</Text>
                <Text>Header</Text>
              </Header>
              <Content>Content</Content>
              <Sidebar test center as={Row}>
                Sidebar
              </Sidebar>
            </>
          )}
        </Grid>
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
