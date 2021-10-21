import * as React from 'react'
import Flex from './flex'
import PropTypes from 'prop-types'

const Row = ({ children, ...props }) => {
  return (
    <Flex flexDirection='row' {...props}>
      {children}
    </Flex>
  )
}

Row.propTypes = {
  center: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  test: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  sx: PropTypes.object
}

export default Row
