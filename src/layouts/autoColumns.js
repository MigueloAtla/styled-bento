import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass/styled-components'

const AutoColumns = ({ gap = 20, min = 128, ...props }) => (
  <Box
    sx={{
      display: 'grid',
      gridGap: gap,
      gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`
    }}
    {...props}
  />
)

AutoColumns.propTypes = {
  /** Grid gap between children */
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Minimun width of each children before grid breaks to a new column */
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
AutoColumns.defaulProps = {
  gap: '20px',
  min: 128
}

export default AutoColumns
