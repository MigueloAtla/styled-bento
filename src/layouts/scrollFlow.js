import * as React from 'react'
import { Flex as Layout } from 'rebass/styled-components'
import PropTypes from 'prop-types'
import { centerProp, markProp } from '../props'
import styled from 'styled-components'

const BREAKPOINTS = {
  large: 1024,
  medium: 832,
  small: 640
}

const Slidee = styled(Layout)`
  width: 100vw;
  overflow-x: scroll;
  align-items: center;
  height: 200px;
  @media (max-width: 64em) {
    height: calc(100vh - 30px);
    overflow-x: hidden;
    align-items: flex-start;
    padding-top: 30px;
    margin-left: 60px;
    margin-bottom: 60px;
    justify-content: center;
  }
  @media (max-width: 40em) {
    margin-left: 0px;
    height: auto;
  }
`
const Slider = styled(Layout)`
  height: 100%;
  width: max-content;
  transition: transform 0.2s linear;
  margin: 0 100px;
  gap: 30px;
  cursor: pointer;
  @media (max-width: 64em) {
    flex-direction: column;
    width: 90%;
    margin: 0;
  }
`

const Flex = ({
  children,
  flexDirection,
  center = false,
  mark = false,
  gap = 0,
  sx,
  ...props
}) => {
  const scrollContainer = React.useRef(null)
  const delta = React.useRef(0)
  const [translate, setTranslate] = React.useState(0)
  const x = React.useRef(0)
  const y = React.useRef(0)

  React.useState(() => {
    console.log(translate)
  }, [translate])

  const scroll = (e) => {
    if (window.innerWidth > BREAKPOINTS.large) {
      // document.scrollingElement.scrollTop = 0
      delta.current = e.deltaY * 1
      // console.log(scrollContainer.current.clientWidth)

      if (
        translate - delta.current <= 0 &&
        translate >
          -scrollContainer.current.children[0].clientWidth +
            window.innerWidth / 1.1
      ) {
        setTranslate((s) => s - delta.current)
      }
      if (translate - delta.current > 0) {
        setTranslate(0)
      }
      if (
        translate <=
        -scrollContainer.current.children[0].clientWidth +
          window.innerWidth / 1.1
      ) {
        if (delta.current > 0) {
          setTranslate(
            -scrollContainer.current.children[0].clientWidth +
              window.innerWidth / 1.1
          )
        } else {
          setTranslate((s) => s - delta.current)
        }
      }
      // requestRef.current = window.requestAnimationFrame(scroll) // scrollContainer.current.scrollLeft += delta.current
    }
  }

  return (
    <Slidee
      ref={(el) => (scrollContainer.current = el)}
      flexDirection={flexDirection}
      {...props}
      sx={{ ...centerProp(center), ...markProp(mark), gap, ...sx }}
    >
      <Slider
        style={{
          transform: `translate3d(${translate}px, 0, 0)`
        }}
        onWheel={scroll}
      >
        {children}
      </Slider>
    </Slidee>
  )
}

Flex.propTypes = {
  center: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  mark: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  flexDirection: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.oneOf(['row', 'column'])
  ]),
  sx: PropTypes.object,
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Flex
