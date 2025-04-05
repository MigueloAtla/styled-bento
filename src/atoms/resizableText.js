import * as React from 'react'
import { Box, Text as RebassText } from 'rebass/styled-components'
// import PropTypes from 'prop-types'
import { markProp } from '../props'

const ResizableText = ({
  children,
  mark = false,
  as = 'p',
  maxSize,
  sx,
  ...props
}) => {
  const titleRef = React.useRef()
  const [width, setWidth] = React.useState(0)
  const [height, setHeight] = React.useState(0)

  // use effect
  React.useLayoutEffect(() => {
    setWidth(titleRef.current.querySelector('text').getBBox().width)
    setHeight(titleRef.current.querySelector('text').getBBox().height)
    titleRef.current.setAttribute('viewBox', `0 0 ${width} ${height}`)
  }, [width])

  return (
    <React.Fragment>
      <Box {...props} as={as} sx={{ ...markProp(mark), ...sx }}>
        <svg
          ref={titleRef}
          style={{
            maxHeight: maxSize,
            overflow: 'visible',
            fill: 'currentcolor'
          }}
        >
          <text fontFamily='inherit' fontWeight='inherit' y='50%'>
            {children}
          </text>
        </svg>
      </Box>
    </React.Fragment>
  )
}

// ResizableText.propTypes = {
//   mark: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
//   sx: PropTypes.object
// }

export default ResizableText
