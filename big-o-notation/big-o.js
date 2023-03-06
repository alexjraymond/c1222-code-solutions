/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {

  //                             # of times run | n amount
  const seen = {};                  // 1, 1
  const unique = [];                // 1, 1
  for (
    let i = 0;                      // 1, 1
    i < words.length;               // n, n
    i++                             // n
  ) {
    const word = words[i];          // n
    if (!seen[word]) {              // n
      seen[word] = true;            // n
      unique[unique.length] = word; // n
    }
  }
  return unique;                    // 1
} // Big O Notation for uniqueLinear: n

function uniqueQuadratic(words) {
  const unique = [];                // 1
  for (
    let i = 0;                      // n
    i < words.length;               // n
    i++                             // n
  ) {
    const word = words[i];          // n
    let isUnique = true;            // n
    for (
      let c = 0;                    // runs 1 time, n
      c < i;                        // n^2
      c++                           // n^2
    ) {
      const comparing = words[c];   // n^2
      if (comparing === word) {     // n^2
        isUnique = false;           // n^2
      }
    }
    if (isUnique) {                 // n
      unique[unique.length] = word; // n
    }
  }
  return unique;                    // 1
} // Big O Notation for uniqueQuadratic: n^2
