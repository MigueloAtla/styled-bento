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

export const testProp = (test) => {
  return { border: test && `1px dashed ${test === true ? 'black' : test}` }
}
