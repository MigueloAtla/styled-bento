import React from 'react'
import Flex from './flex'
import { Box } from 'rebass/styled-components'
import styled, { withTheme } from 'styled-components'
import { grid } from 'styled-system'
import PropTypes from 'prop-types'
import { markProp, centerProp } from '../props'
import { getResponsiveArrFromProp } from '../utils'

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
  const { breakpoints } = props.theme
  const getResponsiveArrFromPropWithBreakpoints =
    getResponsiveArrFromProp(breakpoints)
  const adaptedSx = {}
  for (const key in sx) {
    adaptedSx[key] = getResponsiveArrFromPropWithBreakpoints(sx[key])
  }
  return (
    <GridLayout
      {...props}
      sx={{
        ...centerProp(center),
        placeContent: getResponsiveArrFromPropWithBreakpoints(placeContent),
        ...markProp(mark),
        gap,
        ...adaptedSx
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
          placeSelf,
          sx
        } = child.props

        return React.cloneElement(child, {
          sx: {
            gridColumn: getResponsiveArrFromPropWithBreakpoints(gridColumn),
            gridRow: getResponsiveArrFromPropWithBreakpoints(gridRow),
            gridArea: getResponsiveArrFromPropWithBreakpoints(gridArea),
            justifySelf: getResponsiveArrFromPropWithBreakpoints(justifySelf),
            alignSelf: getResponsiveArrFromPropWithBreakpoints(alignSelf),
            placeSelf: getResponsiveArrFromPropWithBreakpoints(placeSelf),
            ...sx
          }
        })
      })}
    </GridLayout>
  )
}

Flex.propTypes = {
  center: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  mark: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  // flexDirection: PropTypes.oneOfType([
  //   PropTypes.array,
  //   PropTypes.oneOf(['row', 'column'])
  // ]),
  sx: PropTypes.object
}

export default withTheme(Grid)
