import React from 'react'
import Flex from './flex'
import { Box } from 'rebass/styled-components'
import styled, { withTheme } from 'styled-components'
import { grid } from 'styled-system'
import PropTypes from 'prop-types'
import { markProp, centerProp } from '../props'

const GridLayout = styled(Box)`
  display: grid;
  ${grid}
`
const Grid = ({
  children,
  placeContent,
  center = false,
  mark = false,
  gap = 0,
  sx,
  ...props
}) => {
  return (
    <GridLayout
      {...props}
      sx={{
        ...centerProp(center),
        placeContent,
        ...markProp(mark),
        gap,
        ...sx
      }}
    >
      {/* {children} */}
      {React.Children.map(children, (child) => {
        const {
          gridColumn,
          gridRow,
          gridArea,
          justifySelf,
          alignSelf,
          placeSelf,
          sx
        } = child.props

        // console.log(placeSelf)
        const getResponsiveArrFromProp = (prop) => {
          let arr = Array.from(
            { length: props.theme.breakpoints.length + 1 },
            (_) => ''
          )
          if (typeof prop === 'object') {
            if (prop !== undefined) {
              console.log(prop)
              for (const el in prop) {
                if (el === '_' || el === 'default') {
                  arr = Array.from(
                    { length: props.theme.breakpoints.length + 1 },
                    (_) => prop[el]
                  )
                }
                if (props.theme.breakpoints[el] !== undefined) {
                  const index = props.theme.breakpoints.indexOf(
                    props.theme.breakpoints[el]
                  )
                  for (
                    let i = index + 1;
                    i < props.theme.breakpoints.length + 1;
                    i++
                  ) {
                    arr[i] = prop[el]
                  }
                }
              }
            }
            console.log(arr)
            return arr
          }
          return prop
        }

        // let arr = Array.from(
        //   { length: props.theme.breakpoints.length + 1 },
        //   (_) => ''
        // )
        // if (typeof gridRow === 'object') {
        //   if (gridRow !== undefined) {
        //     console.log(gridRow)
        //     for (const el in gridRow) {
        //       if (el === '_' || el === 'default') {
        //         arr = Array.from(
        //           { length: props.theme.breakpoints.length + 1 },
        //           (_) => gridRow[el]
        //         )
        //       }
        //       if (props.theme.breakpoints[el] !== undefined) {
        //         const index = props.theme.breakpoints.indexOf(
        //           props.theme.breakpoints[el]
        //         )
        //         for (
        //           let i = index + 1;
        //           i < props.theme.breakpoints.length + 1;
        //           i++
        //         ) {
        //           arr[i] = gridRow[el]
        //         }
        //       }

        //       console.log(arr)
        //     }
        //   }
        // }
        return React.cloneElement(child, {
          sx: {
            gridColumn: getResponsiveArrFromProp(gridColumn),
            gridRow: getResponsiveArrFromProp(gridRow),
            gridArea: getResponsiveArrFromProp(gridArea),
            justifySelf: getResponsiveArrFromProp(justifySelf),
            alignSelf: getResponsiveArrFromProp(alignSelf),
            placeSelf: getResponsiveArrFromProp(placeSelf),
            ...sx
          }
        })
      })}
    </GridLayout>
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

export default withTheme(Grid)
