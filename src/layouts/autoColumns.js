import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass/styled-components'
import { centerProp, markProp } from '../props'

const AutoColumns = ({
  gap = 20,
  min = 128,
  center = false,
  mark = false,
  sx,
  ...props
}) => (
  <Box
    sx={{
      ...centerProp(center),
      ...markProp(mark),
      ...sx,
      display: 'grid',
      gridGap: gap,
      gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`
    }}
    {...props}
  />
)

AutoColumns.propTypes = {
  center: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  mark: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
AutoColumns.defaulProps = {
  gap: '20px',
  min: 128
}

export default AutoColumns
