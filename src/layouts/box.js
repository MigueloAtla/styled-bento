import * as React from 'react'
import { Box as Layout } from 'rebass/styled-components'
import PropTypes from 'prop-types'
import { markProp } from '../props'

const Box = ({ children, mark = false, sx, ...props }) => {
  return (
    <Layout {...props} sx={{ ...markProp(mark), ...sx }}>
      {children}
    </Layout>
  )
}

Box.propTypes = {
  mark: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  sx: PropTypes.object
}

export default Box
