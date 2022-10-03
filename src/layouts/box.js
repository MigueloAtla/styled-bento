import * as React from 'react'
import { Box as Layout } from 'rebass/styled-components'
import { withTheme } from 'styled-components'
// import PropTypes from 'prop-types'
import { markProp } from '../props'
import { getResponsiveArrFromProp } from '../utils'

const Box = ({ children, mark = false, sx, ...props }) => {
  const { breakpoints } = props.theme
  const getResponsiveArrFromPropWithBreakpoints =
    getResponsiveArrFromProp(breakpoints)
  const adaptedSx = {}
  for (const key in sx) {
    adaptedSx[key] = getResponsiveArrFromPropWithBreakpoints(sx[key])
  }
  return (
    <Layout {...props} sx={{ ...markProp(mark), ...adaptedSx }}>
      {children}
    </Layout>
  )
}

// Box.propTypes = {
//   mark: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
//   sx: PropTypes.object
// }

export default withTheme(Box)
