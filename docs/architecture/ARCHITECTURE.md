
```mermaid
flowchart TD
  subgraph api["Public modules src/"]
    direction TB
    add["add"]
    ceil["ceil"]
    clamp["clamp"]
    defaultTo["defaultTo"]
    defaultToAny["defaultToAny"]
    divide["divide"]
    toFinite["toFinite"]
    toInteger["toInteger"]
    toNumber["toNumber"]
    at["at"]
    castArray["castArray"]
    chunk["chunk"]
    compact["compact"]
    difference["difference"]
    drop["drop"]
    slice["slice"]
    countBy["countBy"]
    every["every"]
    filter["filter"]
    map["map"]
    reduce["reduce"]
    get["get"]
    keys["keys"]
    isEmpty["isEmpty"]
    isArguments["isArguments"]
    isArrayLike["isArrayLike"]
    isArrayLikeObject["isArrayLikeObject"]
    isBoolean["isBoolean"]
    isBuffer["isBuffer"]
    isDate["isDate"]
    isLength["isLength"]
    isObject["isObject"]
    isObjectLike["isObjectLike"]
    isSymbol["isSymbol"]
    isTypedArray["isTypedArray"]
    eq["eq"]
    camelCase["camelCase"]
    capitalize["capitalize"]
    endsWith["endsWith"]
    toString["toString"]
    upperFirst["upperFirst"]
    words["words"]
    memoize["memoize"]
  end

  subgraph private["Private helper entry points src/.internal/"]
    direction TB
    math["createMathOperation"]
    rounding["createRound"]
    baseAt["baseAt"]
    flatten["baseFlatten"]
    baseDifference["baseDifference"]
    assign["baseAssignValue"]
    arrayReduce["arrayReduce"]
    baseGet["baseGet"]
    getTag["getTag"]
    root["root"]
    nodeTypes["nodeTypes"]
    isPrototype["isPrototype"]
    arrayLikeKeys["arrayLikeKeys"]
    baseEach["baseEach"]
    baseReduce["baseReduce"]
    caseFirst["createCaseFirst"]
    unicodeWords["unicodeWords"]
  end

  add --> math
  divide --> math
  ceil --> rounding
  at --> baseAt
  at --> flatten
  difference --> baseDifference
  difference --> flatten
  countBy --> assign
  defaultToAny --> arrayReduce
  get --> baseGet
  isArguments --> getTag
  isBoolean --> getTag
  isBuffer --> root
  isDate --> getTag
  isDate --> nodeTypes
  isEmpty --> getTag
  isEmpty --> isPrototype
  isSymbol --> getTag
  isTypedArray --> getTag
  isTypedArray --> nodeTypes
  keys --> arrayLikeKeys
  reduce --> arrayReduce
  reduce --> baseEach
  reduce --> baseReduce
  upperFirst --> caseFirst
  words --> unicodeWords

  camelCase --> upperFirst
  camelCase --> words
  camelCase --> toString
  capitalize --> upperFirst
  capitalize --> toString
  chunk --> slice
  chunk --> toInteger
  countBy --> reduce
  defaultToAny --> defaultTo
  difference --> isArrayLikeObject
  drop --> slice
  drop --> toInteger
  isArguments --> isObjectLike
  isArrayLike --> isLength
  isArrayLikeObject --> isArrayLike
  isArrayLikeObject --> isObjectLike
  isBoolean --> isObjectLike
  isDate --> isObjectLike
  isEmpty --> isArguments
  isEmpty --> isArrayLike
  isEmpty --> isBuffer
  isEmpty --> isTypedArray
  isTypedArray --> isObjectLike
  keys --> isArrayLike
  toFinite --> toNumber
  toInteger --> toFinite
  toNumber --> isObject
  toNumber --> isSymbol
  toString --> isSymbol
```
