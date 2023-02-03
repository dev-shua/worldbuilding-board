const convertToRGB = (str: string): string | null => {
  // if (str.length !== 6) {
  //   throw "Only six-digit hex colors are allowed."
  // }

  // const aRGBHex = str.match(/.{1,2}/g)
  // const aRGB = [
  //   parseInt(aRGBHex[0], 16),
  //   parseInt(aRGBHex[1], 16),
  //   parseInt(aRGBHex[2], 16)
  // ].join(' ')

  const shortHandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const hex = str.replace(shortHandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b
  })

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ].join(' ') : null
}

export {
  convertToRGB
}