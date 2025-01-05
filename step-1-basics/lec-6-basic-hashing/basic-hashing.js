function frequencyCount(arr, queries) {
  // pre-compute
  const arrResult = new Array(arr.length + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    arrResult[arr[i]]++;
  }

  // fetch
  const arrCheckResult = new Array(queries.length).fill(0);
  for (let i = 0; i < queries.length; i++) {
    arrCheckResult[i] = arrResult[queries[i]];
  }

  return arrCheckResult;
}

function characterHashing(s, queries) {
  // pre-compute
  const counter = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    counter[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  // fetch
  const result = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    result[i] = counter[queries[i].charCodeAt(0) - "a".charCodeAt(0)];
  }

  return result;
}

function mapFrequency(arr, queries) {
  // pre-compute
  const map = new Map();
  // for (let i = 0; i < arr.length; i++) {
  //   if (map.has(arr[i])) {
  //     map.set(arr[i], map.get(arr[i]) + 1);
  //   } else {
  //     map.set(arr[i], 1);
  //   }
  // }

  // simpler way
  arr.forEach((num) => {
    map.set(num, (map.get(num) || 0) + 1);
  });

  console.log("Map", map);

  const sortedMap = [...map.entries()].sort((a, b) => a[0] - b[0]);
  console.log("Sorted Map", sortedMap);

  const sortedMapByValue = [...map.entries()].sort((a, b) => a[1] - b[1]);
  console.log("Sorted Map by Value", sortedMapByValue);

  // fetch
  const result = new Array(queries.length).fill(0);
  for (let i = 0; i < queries.length; i++) {
    result[i] = map.get(queries[i]);
  }
  return result;
}

function mapCharacterFrequency(s, queries) {
  // pre-compute
  const map = new Map();
  // for (let i = 0; i < s.length; i++) {
  //   if (map.has(s[i])) {
  //     map.set(s[i], map.get(s[i]) + 1);
  //   } else {
  //     map.set(s[i], 1);
  //   }
  // }

  // simpler way
  s.split("").forEach((char) => map.set(char, (map.get(char) || 0) + 1));

  console.log("Map", map);

  // fetch
  const result = new Array(queries.length).fill(0);
  for (let i = 0; i < queries.length; i++) {
    result[i] = map.get(queries[i]);
  }
  return result;
}

function lowMaxFreq(arr) {
  // pre-compute
  const map = new Map();
  // for (let i = 0; i < arr.length; i++) {
  //   if (map.has(arr[i])) {
  //     map.set(arr[i], map.get(arr[i]) + 1);
  //   } else {
  //     map.set(arr[i], 1);
  //   }
  // }

  arr.forEach((num) => map.set(num, (map.get(num) || 0) + 1));

  const sortedMap = [...map.entries()].sort((a, b) => a[1] - b[1]);
  return { low: sortedMap.at(0)[0], high: sortedMap.at(-1)[0] };
}

function main() {
  console.log("- Problems on Hashing and Map -\n");

  console.log("Frequency Count");
  console.log(frequencyCount([1, 1, 2, 4, 4, 4, 5, 6, 6, 3, 4, 1], [1, 2, 4]));
  console.log("\n");

  console.log("Character Hashing");
  console.log(characterHashing("abrakadabra", ["a", "b", "k"]));
  console.log("\n");

  console.log("Frequency Count using Map");
  console.log(mapFrequency([1, 1, 2, 4, 4, 4, 5, 6, 6, 3, 4, 1], [1, 2, 4]));
  console.log("\n");

  console.log("Character Frequency using Map");
  console.log(mapCharacterFrequency("abrakadabra", ["a", "b", "k"]));
  console.log("\n");

  console.log("Low and Max Frequency");
  console.log(lowMaxFreq([10, 5, 10, 15, 10, 5]));
  console.log("\n");
}

main();
