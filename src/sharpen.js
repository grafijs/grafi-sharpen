/**
  ## sharpen method
  Brief description

  ### Parameters
    - imageData `Object`: ImageData object
    - option `Object` : Option object

  ### Example
      //code sample goes here
 */
function sharpen (imgData, option) {
  // check options object & set default variables
  option = option || {}
  option.monochrome = option.monochrome || false
  option.level = option.level || 1

  var filter = [0, -option.level, 0,
                -option.level, option.level * 4 + 1, -option.level, 0,
                -option.level, 0]

  return convolution(imgData, {filter: filter, radius: 1, monochrome: option.monochrome})
}
