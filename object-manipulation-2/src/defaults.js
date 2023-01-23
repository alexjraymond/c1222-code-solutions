/* exported defaults */

// psuedocode
// we want to do the patrick star meme, take properties from source and put it over there (target)

function defaults(target, source) {

  for (var key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }

}
