import React from 'react'

import {
  AutoColumns,
  Flex,
  Column,
  Row,
  Bento,
  ResizableText,
  Text,
  Masonry,
  Box
} from 'bento-ui'
import { ThemeProvider } from 'styled-components'

export const theme = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    blue: '#07c',
    lightgray: '#f6f6ff'
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  },
  variants: {},
  text: {},
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary'
    }
  }
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ResizableText as='h1' maxSize='60px' color={['black', 'white']}>
        This text is pretended to take only a line
      </ResizableText>

      <Bento
        mark='yellow'
        margin='50px'
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
      <AutoColumns>
        <Text as='h1' alignSelf='center' justifySelf='center'>
          hei
        </Text>
        <Column center mark>
          <p>hei</p>
          <Text mark fontSize={[3, 4, 5]} fontWeight='bold' color='primary'>
            Text
          </Text>
        </Column>
        <Row
          gap='10px'
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

      <AutoColumns>
        <Text>hei</Text>
        <Text>hei</Text>
        <Text>hei</Text>
        <Text>hei</Text>
        <Text>hei</Text>
        <Text>hei</Text>
      </AutoColumns>
      <Row bg={['white', 'green']} color='black'>
        <div>hola!!!!!!!!!!!!!</div>
        <div>hola!!!!!!!!!!!!!</div>
        <div>hola!!!!!!!!!!!!!</div>
        <div>hola!!!!!!!!!!!!!</div>
        <div>hola!!!!!!!!!!!!!</div>
      </Row>
      <Column>
        <div>hola!!!!!!!!!!!!!</div>
        <div>hola!!!!!!!!!!!!!</div>
        <div>hola!!!!!!!!!!!!!</div>
        <div>hola!!!!!!!!!!!!!</div>
        <div>hola!!!!!!!!!!!!!</div>
      </Column>
      <Masonry cols={[4, 5, 6, 7]} mark='violet'>
        <Box mark='white' height='50px'>
          Hei 0
        </Box>
        <Box mark='white' height='50px'>
          Hei 1
        </Box>
        <Box mark='white' height='150px'>
          Hei 2
        </Box>
        <Box mark='white' height='80px'>
          Hei 3
        </Box>
        <Box mark='white' height='50px'>
          Hei 4
        </Box>
        <Box mark='white' height='100px'>
          Hei 5
        </Box>
        <Box mark='white' height='120px'>
          Hei 6
        </Box>
        <Box mark='white' height='70px'>
          Hei 7
        </Box>
        <Box mark='white' height='70px'>
          Hei 8
        </Box>
        <Box mark='white' height='70px'>
          Hei 9
        </Box>
        <Box mark='white' height='70px'>
          Hei 10
        </Box>
        <Box mark='white' height='70px'>
          Hei 11
        </Box>
        <Box mark='white' height='70px'>
          Hei 12
        </Box>
        <Box mark='white' height='70px'>
          Hei 13
        </Box>
        <Box mark='white' height='70px'>
          Hei 14
        </Box>
        <Box mark='white' height='70px'>
          Hei 15
        </Box>
      </Masonry>
    </ThemeProvider>
  )
}

export default App
