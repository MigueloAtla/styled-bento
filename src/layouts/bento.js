import React from 'react'
import Flex from './flex'
import { Box } from 'rebass/styled-components'
import styled from 'styled-components'
import { grid } from 'styled-system'
import PropTypes from 'prop-types'
import { markProp, centerProp } from '../props'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const Grid = styled(Box)`
  display: grid;
  ${grid}
`

const Bento = ({ children, areas, gap, mark = false, sx, ...props }) => {
  console.log(props)
  const splitSpaces = areas.map((area) => {
    return area.match(/[a-z-]+/gi)
  })

  const concatenated = [].concat(...splitSpaces)
  const set = Array.from(new Set(concatenated))

  const display = {}

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
      ...props
    }) => {
      return (
        <Box
          sx={{
            gridArea: item,
            display: display[item]
          }}
          {...props}
        >
          <Flex
            sx={{ ...markProp(mark), ...centerProp(center), ...sx }}
            as={as}
            width='100%'
            height='100%'
          >
            {children}
          </Flex>
        </Box>
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
      gridGap={gap}
      {...props}
    >
      {children(Areas)}
    </Grid>
  )
}

Bento.propTypes = {
  /** Centers the children, can be:
   * 1. center={true} or center: for horizontal and vertical centering
   * 2. center={'h'} for horizontal centering
   * 2. center={'v'} for vertical centering
   * */
  center: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  mark: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}
Bento.defaulProps = {
  center: false,
  mark: false
}

export default Bento
