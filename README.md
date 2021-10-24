# styled-bento

> Layout atoms based on styled-system and rebass

[![NPM](https://img.shields.io/npm/v/bento-ui.svg)](https://www.npmjs.com/package/styled-bento) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save styled-bento
```
## Usage

Theese components are builded in top of rebass and styled-system, so if you don't know about rebass you should visit their documentation:
[Rebass page](https://rebassjs.org/)


```jsx
import { Column } from 'styled-bento'

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
import { Column } from 'styled-bento'

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

### Bento
Bento is a conceptual way to understand grid with template areas, designed for maintain semantics for a good code readability , easy responsive flexibility and composability.
Bento is inspired by [atomic-layout](https://redd.gitbook.io/atomic-layout/) package but with rebass in mind.

```jsx
import { Grid } from 'styled-bento'

const App = () => {
  return (
    <Grid
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
    </Grid>
  )
}
```
### Column
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
### Row
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

### AutoColumns

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

## License

MIT © [MigueloAtla](https://github.com/MigueloAtla)
