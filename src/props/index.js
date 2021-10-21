export const centerProp = (center) => {
  let centered = {}
  switch (center) {
    case 'h':
      centered = { alignItems: 'center' }
      break
    case 'v':
      centered = { justifyContent: 'center' }
      break
    case true:
      centered = {
        alignItems: 'center',
        justifyContent: 'center'
      }
      break
  }
  return centered
}

export const markProp = (mark) => {
  return { border: mark && `1px dashed ${mark === true ? 'black' : mark}` }
}
