// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{
  const newArr = numbers.map(function mulArrBy2(arr) {
    return arr * 2;
});

  console.log({
    numbers,
    result: newArr
  });
}
console.log('---');
console.groupEnd();
console.log();


console.group('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
console.log('---');
{
  const newArr = numbers.map(function powerArrBy2(arr) {
    return arr ** 2;
  });

  console.log({
    numbers,
    result: newArr
  });
}
console.log('---');
console.groupEnd();
console.log();



console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve) ir išsaugoti naujame masyve');
console.log('---');
{
  const newArr = numbers.map(function mulArrElementsByIndex(arr, index) {
    return arr * index;
  });

  console.log({
    numbers,
    result: newArr
  });
}
console.log('---');
console.groupEnd();
console.log();


console.group('4. Atrinkti tiktai teigiamų elementų masyvą');
console.log('---');
{
  const positiveNumbersArray = numbers.filter(function filterPositives(arr) {
    return arr > 0
  });

  console.log({
    numbers,
    result: positiveNumbersArray
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
  const negativeNumbersArray = numbers.filter(function filterNegatives(arr) {
    return arr < 0
  });

  console.log({
    numbers,
    result: negativeNumbersArray
  });
}
console.log('---');
console.groupEnd();
console.log();


console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
  evenNumbersArray = numbers.filter(function filterEquals(arr) {
    return arr % 2 === 0
  });

  console.log({
    numbers,
    result: evenNumbersArray
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
  oddNumbersArray = numbers.filter(function filterOdds(arr) {
    return arr % 2 === 1 || arr % 2 === -1
  });

  console.log({
    numbers,
    result: oddNumbersArray
  });
}
console.log('---');
console.groupEnd();
console.log();


console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
{
  const negativeTurnedPositive = numbers.map(function arrAbsoluteValues(arr) {
    if(arr < 0) {
        return arr * -1
    } return arr
  });

  console.log('---');
  console.log({
    numbers,
    result: negativeTurnedPositive
  });
  console.log('---');
}
console.groupEnd();
console.log();



console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
console.log('---');
{
  const newArr = numbers.map(function powArrElementsByIndex(arr, index) {
    return arr ** index
  })

  console.log({
    numbers,
    result: newArr
  });
}
console.log('---');
console.groupEnd();
console.log();


console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
  const naturals = numbers.filter(function filterNaturals(arr) {
    return arr !== 1.02
  });
  console.log({
    numbers,
    result: naturals
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
console.log('---');
{
  const getIntegers = numbers.map(function absArrElements(arr) {
    return Math.round(arr)
  });
  console.log({
    numbers,
    result: getIntegers
  });
}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
  const getEverySecondElement = numbers.filter(function filterEverySecond(arr, index) {
    return index % 2 === 0
  });

  console.log({
    numbers,
    result: getEverySecondElement
  });
}
console.log('---');
console.groupEnd();


console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
   function filterEveryFifth(arr) {
    const result = [];
    for(let i = 4; i < arr.length; i += 5) {
        result.push(arr[i])
    } return result
  };

  console.log({
    numbers,
    result: filterEveryFifth(numbers)
  });
}
console.log('---');
console.groupEnd();


console.group('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
  numbers.forEach(function printArr(arr, index) {
    console.log(`${index} => ${arr}`);
  })

}
console.log('---');
console.groupEnd();


console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
  const sumAllElelements = numbers.reduce(function sumArr(sum, element) {
    return sum + element;
  });

  console.log({
    numbers,
    result: sumAllElelements
  });
}
console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
  const averageAllElements = numbers.reduce(function avgArr(sum, element) {
    return sum + element / numbers.length
  }, 0) 

  console.log({
    numbers,
    result: averageAllElements
  });
}
console.log('---');
console.groupEnd()

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
  const getMaxElement = numbers.reduce(function arrMax(prev, cur) {
    return (prev > cur ? prev : cur);
  }, 0);

  console.log({
    numbers,
    result: getMaxElement
  });
}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  const getMinElement = numbers.reduce(function arrMin(prev, cur) {
    return (prev < cur ? prev : cur)
  })

  console.log({
    numbers,
    result: getMinElement
  });
}
console.log('---');
console.groupEnd();