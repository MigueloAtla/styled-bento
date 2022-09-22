# styled-bento

> Layout atoms based on styled-system and rebass

[![NPM](https://img.shields.io/npm/v/bento-ui.svg)](https://www.npmjs.com/package/styled-bento) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save styled-bento
```
## Usage

Theese components are builded in top of rebass and styled-system, so if you don't know about theese libraries, you should visit their documentation:\
[Rebass page](https://rebassjs.org/)\
[Styled System](https://styled-system.com/)

```jsx
import { Flex } from 'styled-bento'

const App = () => {
  return (
    <Flex 
      width={[1, 2, 5]}
      justifyContent={['column', 'row']}>
      <p>Responsive<p>
      <p>Props<p>
    </Flex>
  )
}
```


```jsx
import { Flex } from 'styled-bento'

const App = () => {
  return (
    <Flex 
      width={[1, 2, 5]}
      justifyContent={['column', 'row']}>
      <p>Responsive<p>
      <p>Props<p>
    </Flex>
  )
}
```

Styled bento exports the following components:
- [Bento](#Bento)
- [Box](#Box)
- [Flex](#Flex)
- [AutoColums](#AutoColums)
- [Column](#Column)
- [Row](#Row)
- [Masonry](#Masonry)
- [Text](#Text)
- [ResizableText](#ResizableText)

Basic props:
| Prop   | Type             | Required | Default |
| ------ | ---------------- | -------- | ------- |
| mark   | Bool \|\| String | false    | false   |
| center | Bool \|\| String | false    | false   |

* **mark**: display a dashed border in the component.
  - mark='color' changes the color of the border.
* **center**: centers horizontally and vertically the content, equivalent to **justify-content: center** and **align-items: center**.
  - center='v || h' applies only one orientation to center.

### Mark and Center
Passing booleans
```jsx
// centers horizontally and vertically and it's marked with black border
const markAndCentered = () => {
  return (
    <Flex mark center>
      <p>Marked<p>
      <p>And Centered<p>
    </Flex>
  )
}
```
Passing strings
```jsx
// centers vertically and it's marked with yellow border

const markYellowAndVerticallyCentered = () => {
  return (
    <Flex mark='yellow' center='v'>
      <p>Vertically,<p>
      <p>yellow marks<p>
    </Flex>
  )
}

```

# Bento
Bento is a conceptual way to understand grid with template areas, designed to maintain clear semantics for a good code readability, and easy responsive flexibility and composability.
Bento is inspired by [atomic-layout](https://redd.gitbook.io/atomic-layout/) package but with rebass in mind.

Why use this pattern?

```jsx
import { Bento } from 'styled-bento'

const App = () => {
  return (
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
  )
}
```
[Try the Demo.](https://styled-bento-examples.vercel.app/bento)

# Column
```jsx
import { Column } from 'styled-bento'

const App = () => {
  return (
    <Column>
      <p>We<p>
      <p>are<p>
      <p>in<p>
      <p>a<p>
      <p>column<p>
    </Column>
  )
}
```
[Try the Demo.](https://styled-bento-examples.vercel.app/column)


# Row
```jsx
import { Row } from 'styled-bento'

const App = () => {
  return (
    <Row>
      <p>side<p>
      <p>by<p>
      <p>side<p>
      <p>paragraph<p>
    </Row>
  )
}
```
[Try the Demo.](https://styled-bento-examples.vercel.app/row)

# AutoColumns

```jsx
import { AutoColumns } from 'styled-bento'

const App = () => {
  return (
    <AutoColumns>
      <p>side<p>
      <p>by<p>
      <p>side<p>
      <p>paragraph<p>
    </AutoColumns>
  )
}
```
[Try the Demo.](https://styled-bento-examples.vercel.app/autoColumns)


# Masonry
Masonry layout.

Basic props:
| Prop   | Type             | Required | Default |
| ------ | ---------------- | -------- | ------- |
| cols   | int array        | false    | [3]     |
| gap    | int              | false    | 0       |

```jsx
import { Masonry } from 'styled-bento'

const App = () => {
  <Masonry cols={[4, 5, 6, 7]} mark='violet'>
    <Box mark='white' height='50px'>1</Box>
    <Box mark='white' height='150px'>2</Box>
    <Box mark='white' height='80px'>3</Box>
    <Box mark='white' height='50px'>4</Box>
    <Box mark='white' height='100px'>5</Box>
  </Masonry>
}
```
[Try the Demo.](https://styled-bento-examples.vercel.app/masonry)

# Text
[Try the Demo.](https://styled-bento-examples.vercel.app/text)

# ResizableText
Text that autoresizes to take one line in every screen size.

Basic props:
| Prop   | Type             | Required | Default |
| ------ | ---------------- | -------- | ------- |
| maxSize| int              | false    | null    |
| center | Bool \|\| String | false    | false   |

[Try the Demo.](https://styled-bento-examples.vercel.app/resizableText)


## License

MIT © [MigueloAtla](https://github.com/MigueloAtla)
