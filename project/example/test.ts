import arrayMap = require('../dist/test-array-map')

arrayMap([1, 2, 3], item=> item + 4).forEach(item => console.log(item.toFixed()))