import * as React from 'react'
import { Text as RebassText } from 'rebass/styled-components'
import PropTypes from 'prop-types'
import { markProp } from '../props'

const Text = ({ children, mark = false, sx, ...props }) => {
  return (
    <RebassText {...props} oneLine={false} sx={{ ...markProp(mark), ...sx }}>
      {children}
    </RebassText>
  )
}

Text.propTypes = {
  mark: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  sx: PropTypes.object
}

export default Text
