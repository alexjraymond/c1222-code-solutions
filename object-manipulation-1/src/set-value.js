/* exported setValue */

// PseudoCode
// We are changing the value at certain points in the object
// look @ the object
// reference the object at "key"
// change it to "value"

// PseudoCode with Codey Words
// if we set the object at the key location to value, then we can print object at key

function setValue(object, key, value) {
  object[key] = value;
  return object[key];

}
