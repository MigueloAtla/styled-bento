import * as React from 'react'
import { Flex as Layout } from 'rebass'
import PropTypes from 'prop-types'
import { centerProp, testProp } from '../props'

const Flex = ({
  children,
  flexDirection,
  center = false,
  test = false,
  sx,
  ...props
}) => {
  return (
    <Layout
      flexDirection={flexDirection}
      {...props}
      sx={{ ...centerProp(center), ...testProp(test), ...sx }}
    >
      {children}
    </Layout>
  )
}

Flex.propTypes = {
  center: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  test: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  flexDirection: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.oneOf(['row', 'column'])
  ]),
  sx: PropTypes.object
}

export default Flex
