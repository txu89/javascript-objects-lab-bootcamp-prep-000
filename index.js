var recipes = {}

function updateObjectWithKeyandValue(object, key, value) {
  var newObject = Object.assign({}, {[key], value})
  return newObject
}