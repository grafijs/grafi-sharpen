;(function(){

import '../node_modules/grafi-formatter/src/formatter'
import '../node_modules/grafi-convolution/src/convolution'
import 'sharpen'

  var grafi = {}
  grafi.sharpen = sharpen

  if (typeof module === 'object' && module.exports) {
    module.exports = grafi
  } else {
    this.grafi = grafi
  }
}())
