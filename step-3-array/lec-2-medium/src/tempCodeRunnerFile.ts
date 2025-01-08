  let counter = 0;
  let sum = 0;
  let map = new Map<number, number>();

  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (map.has(sum - k)) {
      counter += map.get(sum - k)!;
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return counter;