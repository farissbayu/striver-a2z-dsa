  for (let [key, value] of map.entries()) {
    if (value > Math.floor(arr.length / 2)) {
      return key;
    }
  }

  return -1;
