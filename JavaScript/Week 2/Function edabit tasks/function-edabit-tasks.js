console.groupCollapsed('1 - https://edabit.com/challenge/JesaFi5ntBEbGT8bu');
{
  function convert(hours, minutes) {
    return 60 * minutes + 60 * 60 * hours
  }

  const result1 = convert(1, 3);
  const result2 = convert(2, 0);
  const result3 = convert(0, 0);
  console.log(
    result1,
    result2,
    result3
  );
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/Q2j5FTFtsk7PdzrQk');
{
  function remainder(x, y) {
    return x % y;
  }

  const result1 = remainder(1, 3);
  const result2 = remainder(3, 4);
  const result3 = remainder(5, 5);
  console.log(
    result1,
    result2,
    result3
  );
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/QaApgtePE6QrCZ64o');
{
  function getFirstValue(arr) {
    return arr[0];
  }

  const result = getFirstValue([2, 3, 1, 6]);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/3LpBLgNRyaHMvNb4j');
{
  function addition(number1, number2) {
    return number1 + number2;
  }
  console.log(addition(1, 3));
  console.log(addition(-4, -8));
  console.log(addition(8, 3));
}

console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/ARr5tA458o2tC9FTN');
{
  function hello() {
    return "hello edabit.com";
  }
  const result = hello();
  console.log(result);
}

console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/bL7hSc6Zh4zZJzGmw');
{
  function calcAge(age) {
    return age * 365;
  }
  console.log(calcAge(65));
  console.log(calcAge(0));
  console.log(calcAge(20));
}

console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/NAQhEoxbofPidLxm9');
{
  function addition(number) {
    return number + 1;
  }
  console.log(addition(0));
  console.log(addition(9));
  console.log(addition(-3));
}

console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/wAdE9te55cowBLcPs');
{
  function circutPower(voltage, current) {
    return voltage * current;
  }
  console.log(circutPower(230, 10));
  console.log(circutPower(110, 3));
  console.log(circutPower(480, 20));
}

console.groupEnd();

console.groupCollapsed('9 - https://edabit.com/challenge/3CaszbdZYGN4otQD8');
{
  function triArea(base, height) {
    return (base * height) / 2;
  }
  console.log(triArea(3, 2));
  console.log(triArea(7, 4));
  console.log(triArea(10, 10));
}

console.groupEnd();

console.group('10 - https://edabit.com/challenge/j7yQbF3J3rToHsDBP');
{
  function cubes(a) {
    return a ** 3;
  }
  const result = cubes(5);
  console.log(result);
}
console.groupEnd();

console.group('11 - https://edabit.com/challenge/QaApgtePE6QrCZ64o');
{
  function getFirstValue(arr) {
    return arr[0];
  }
  const firstNum = getFirstValue([10]);
  console.log(firstNum);
}
console.groupEnd();

console.group('12 - https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj');

function canNest(arr1, arr2) {
  const result = Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2);
  return result;
}
const result32 = canNest([1, 2, 3, 4], [0, 6]);
const result33 = canNest([3, 1], [4, 0]);
const result34 = canNest([9, 9, 8], [8, 9]);
const result35 = canNest([1, 2, 3, 4], [2, 3]);
console.log({ result32, result33, result34, result35 });
console.groupEnd();

console.group('13 - https://edabit.com/challenge/Q3n42rEWanZSTmsJm');

function minMax(array) {
  return [Math.min(...array), Math.max(...array)];
}

const result1 = minMax([1, 2, 3, 4, 5]);
const result2 = minMax([2334453, 5]);
const result3 = minMax([1]);
console.log({ result1, result2, result3 });

console.groupEnd();

console.group('14 - https://edabit.com/challenge/tYHkTdFrEmWfxpPKF');

function matchHouses(step) {
  if (step === 0) {
    return 0;
  } else {
    return (step * 6) - (step - 1);
  }
}

const result39 = matchHouses(1);
const result40 = matchHouses(4);
const result41 = matchHouses(87);
console.log({ result39, result40, result41 });

console.groupEnd();

console.group('15 - https://edabit.com/challenge/vvuAkYEAArrZvmp6X');

function bitwiseAND(n1, n2) {
  let bitAND = n1 & n2;
  return bitAND;
}
const result42 = bitwiseAND(7, 12);
console.log({ result42 });

console.groupEnd();