var gridGen = require("../grid-graph.js")

require("tap").test("grid gen", function(t) {

  console.log(gridGen([3, 3], [true, false]))

  t.end()
})