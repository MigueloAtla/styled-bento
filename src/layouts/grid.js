import React from 'react'
import Flex from './flex'
import { Box } from 'rebass/styled-components'
import styled from 'styled-components'
import { grid } from 'styled-system'
import PropTypes from 'prop-types'
import { markProp, centerProp } from '../props'

const GridLayout = styled(Box)`
  display: grid;
  ${grid}
`

const Grid = ({
  children,
  placeContent,
  center = false,
  mark = false,
  gap = 0,
  sx,
  ...props
}) => {
  return (
    <GridLayout
      {...props}
      sx={{
        ...centerProp(center),
        placeContent,
        ...markProp(mark),
        gap,
        ...sx
      }}
    >
      {/* {children} */}
      {React.Children.map(children, (child) => {
        const {
          gridColumn,
          gridRow,
          gridArea,
          justifySelf,
          alignSelf,
          placeSelf
        } = child.props
        console.log(placeSelf)
        return React.cloneElement(child, {
          sx: {
            gridColumn,
            gridRow,
            gridArea,
            justifySelf,
            alignSelf,
            placeSelf
          }
        })
      })}
    </GridLayout>
  )
}

Flex.propTypes = {
  center: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  mark: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  flexDirection: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.oneOf(['row', 'column'])
  ]),
  sx: PropTypes.object,
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Grid
