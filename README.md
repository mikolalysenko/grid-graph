# grid-graph
Generates n-dimensional grid graphs.

## Install

    npm install grid-graph
    
## Example

```javascript

var gridGen = require("grid-graph")

//A 5x5 grid
console.log(gridGen([5, 5]))

//A 3x3x3 cube
console.log(gridGen([3, 3, 3]))

//Periodic grids are allowed too.  Example, 4x6 torus:
console.log(gridGen([3,4], true))

//You can also make the grid periodic along only some axes.  Example cylinder:
console.log(gridGen([5,5], [true, false]))
```

### `require("grid-graph")(shape[, periodic])`
Generates a grid graph

* `shape` is an array of the dimensions of each axis
* `periodic` is an optional argument which is either an array of truthy values which determine whether or not to make some axis periodic.

**Returns** An array of edges for the newly generated grid.

Credits
=======
(c) 2013 Mikola Lysenko. MIT License