import * as React from 'react'
import Flex from './flex'
import PropTypes from 'prop-types'

const Column = ({ children, ...props }) => {
  return (
    <Flex flexDirection='column' {...props}>
      {children}
    </Flex>
  )
}

Column.propTypes = {
  center: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  mark: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  sx: PropTypes.object
}

export default Column
