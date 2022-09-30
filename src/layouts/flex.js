import * as React from 'react'
import { Flex as Layout } from 'rebass/styled-components'
// import PropTypes from 'prop-types'
import { centerProp, markProp } from '../props'

const Flex = ({
  children,
  flexDirection,
  center = false,
  mark = false,
  sx,
  flexGap = 0,
  ...props
}) => {
  return (
    <Layout
      flexDirection={flexDirection}
      {...props}
      sx={{ ...centerProp(center), ...markProp(mark), gap: flexGap, ...sx }}
    >
      {children}
    </Layout>
  )
}

// Flex.propTypes = {
//   center: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
//   mark: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
//   flexDirection: PropTypes.oneOfType([
//     PropTypes.array,
//     PropTypes.oneOf(['row', 'column'])
//   ]),
//   sx: PropTypes.object,
// }

export default Flex
