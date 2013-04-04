"use strict"

var polyLine = require("poly-line")
  , cartesianProduct = require("simplicial-cartesian-product")
  , iota = require("iota-array")
  , sc = require("simplicial-complex")

function gridGraph(shape, periodic) {
  periodic = periodic || false
  var result = []
  for(var i=0; i<shape.length; ++i) {
    var line = polyLine(iota(shape[i]),
        periodic.length ? periodic[i] : periodic
      )
    if(i > 0) {
      result = cartesianProduct(result, line)
    } else {
      result = line
    }
  }
  return sc.normalize(result)
}

module.exports = gridGraph