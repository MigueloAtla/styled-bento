import React, { useEffect, useState } from 'react'
import Row from './row'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'
import { Column } from '..'

const useWidth = () => {
  const [width, setWidth] = useState(undefined)
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth / 16)
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
    }
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return [width, setWidth]
}

const Masonry = ({
  theme,
  children,
  cols = 4,
  gap,
  mark = false,
  ...props
}) => {
  const [columns, setColumns] = useState([])
  const [width, setWidth] = useWidth()
  useEffect(() => {
    setWidth(window.innerWidth / 16)
  }, [])

  const masonry = (cols) => {
    const col = []
    const rows = Math.ceil(children.length / cols)
    let i = 0
    while (i < cols) {
      let j = 0
      const colChildren = []
      while (j < rows) {
        colChildren.push(children[i + cols * j])
        j++
      }
      col.push(
        <Column sx={{ gap }} width='100%' key={i}>
          {colChildren}
        </Column>
      )
      i++
    }
    setColumns(col)
  }

  const responsiveCols = () => {
    const w = parseInt(width)
    theme.breakpoints.forEach((breakpoint, i) => {
      const bp = parseInt(breakpoint.slice(0, -2))
      if (i === 0) {
        if (w <= bp) {
          masonry(cols[i])
          return null
        }
      } else if (i > 0 && i < theme.breakpoints.length - 1) {
        if (w > parseInt(theme.breakpoints[i - 1].slice(0, -2)) && w <= bp) {
          if (!cols[i]) {
            cols[i] = cols[cols.length - 1]
          }
          masonry(cols[i])
          return null
        }
      } else {
        if (w >= bp) {
          if (!cols[i]) {
            cols[i] = cols[cols.length - 1]
          }
          masonry(cols[i])
          return null
        }
      }
    })
  }

  useEffect(() => {
    responsiveCols()
  }, [width])

  return (
    <Row sx={{ gap }} mark={mark} {...props}>
      {columns.length > 0 && columns}
    </Row>
  )
}

Masonry.propTypes = {
  center: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  mark: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}
Masonry.defaulProps = {
  center: false,
  mark: false
}

export default withTheme(Masonry)
