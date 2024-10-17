function pattern1(size) {
  console.log("Pattern 1");
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
  console.log();
}

function pattern2(size) {
  console.log("Pattern 2");
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
  console.log();
}

function pattern3(size) {
  console.log("Pattern 3");
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write((j + 1).toString());
    }
    console.log();
  }
  console.log();
}

function pattern4(size) {
  console.log("Pattern 4");
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write((i + 1).toString());
    }
    console.log();
  }
  console.log();
}

function pattern5(size) {
  console.log("Pattern 5");
  for (let i = size; i > 0; i--) {
    for (let j = i; j > 0; j--) {
      process.stdout.write("*");
    }
    console.log();
  }
  console.log();
}

function pattern6(size) {
  console.log("Pattern 6");
  for (let i = size; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      process.stdout.write((j + 1).toString());
    }
    console.log();
  }
  console.log();
}

function pattern7(size) {
  console.log("Pattern 7");
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      process.stdout.write("#");
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      process.stdout.write("*");
    }
    for (let j = size; j < 2 * size - i - 1; j++) {
      process.stdout.write("#");
    }
    console.log();
  }
  console.log();
}

function pattern8(size) {
  console.log("Pattern 8");
  for (let i = 0; i < size; i++) {
    // space
    for (let j = 0; j < i; j++) {
      process.stdout.write("#");
    }
    // star
    for (let j = 0; j < 2 * size - 2 * i - 1; j++) {
      process.stdout.write("*");
    }

    // space
    for (let j = 0; j < i; j++) {
      process.stdout.write("#");
    }
    console.log();
  }
  console.log();
}

function main() {
  pattern1(5);
  pattern2(5);
  pattern3(5);
  pattern4(5);
  pattern5(5);
  pattern6(5);
  pattern7(5);
  pattern8(5);
}

main();
