export const getResponsiveArrFromProp = (breakpoints) => {
  return (prop) => {
    let arr = Array.from({ length: breakpoints.length + 1 }, (_) => '')
    if (Object.prototype.toString.call(prop) === '[object Object]') {
      if (prop !== undefined) {
        for (const el in prop) {
          if (el === '_' || el === 'default') {
            arr = Array.from(
              { length: breakpoints.length + 1 },
              (_) => prop[el]
            )
          }
          if (breakpoints[el] !== undefined) {
            const index = breakpoints.indexOf(breakpoints[el])
            for (let i = index + 1; i < breakpoints.length + 1; i++) {
              arr[i] = prop[el]
            }
          }
        }
        return arr
      }
    }
    return prop
  }
}
