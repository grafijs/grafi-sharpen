var assert = require('assert')
var grafi = require('./grafi-sharpen.js')

var imageData = grafi.sharpen({data: [255, 255, 255, 255], width: 1, height: 1})

assert(imageData.constructor.toString().match(/function\s(\w*)/)[1] === 'ImageData',
  'returned object is an instance of ImageData')
