import React from 'react'
import Flex from './flex'
import { Box } from 'rebass/styled-components'
import Grid from './grid'
// import PropTypes from 'prop-types'
import { markProp, centerProp } from '../props'
import { withTheme } from 'styled-components'
import { getResponsiveArrFromProp } from '../utils'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const Bento = ({ children, areas, mark = false, sx, ...props }) => {
  const splitSpaces = areas.map((area) => {
    return area.match(/[a-z0-9-]+/gi)
  })

  console.log(splitSpaces)

  const concatenated = [].concat(...splitSpaces)
  const set = Array.from(new Set(concatenated))

  const display = {}

  const { breakpoints } = props.theme
  const getResponsiveArrFromPropWithBreakpoints =
    getResponsiveArrFromProp(breakpoints)

  splitSpaces.map((area, i) => {
    set.map((s, i) => {
      if (display[s] === undefined) display[s] = []
      const found = area.some((r) => s.indexOf(r) >= 0)
      display[s].push(found ? 'flex' : 'none')
    })
  })

  const Areas = {}

  for (const item of set) {
    Areas[capitalizeFirstLetter(item)] = ({
      children,
      as,
      mark,
      center,
      sx,
      gap = 0,
      ...props
    }) => {
      const Component = as
      return (
        // <Box
        //   sx={{
        //     gridArea: item,
        //     display: display[item]
        //   }}
        //   {...props}
        // >
        as ? (
          <Component
            sx={{
              display: display[item],
              gridArea: item,
              ...markProp(mark),
              ...centerProp(center),
              ...sx
            }}
            // width='100%'
            // height='100%'
            gap={gap}
            {...props}
          >
            {children}
          </Component>
        ) : (
          <Box
            sx={{
              display: display[item],
              gridArea: item,
              ...markProp(mark),
              ...centerProp(center),
              ...sx
            }}
            // width='100%'
            // height='100%'
            gap={gap}
            as={as}
            {...props}
          >
            {children}
          </Box>
        )
        // </Box>
      )
    }
  }

  return (
    <Grid
      sx={{
        ...markProp(mark),
        ...sx
      }}
      gridTemplateAreas={areas}
      {...props}
    >
      {/* {children(Areas)} */}

      {React.Children.map(children(Areas).props.children, (child) => {
        console.log(child)
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
    </Grid>
  )
}

// Bento.propTypes = {
//   /** Centers the children, can be:
//    * 1. center={true} or center: for horizontal and vertical centering
//    * 2. center={'h'} for horizontal centering
//    * 2. center={'v'} for vertical centering
//    * */
//   center: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
//   mark: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
// }
// Bento.defaulProps = {
//   center: false,
//   mark: false
// }

export default withTheme(Bento)
