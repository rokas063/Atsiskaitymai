console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  // ...sprendimas ir spausdinimas
  function returnFirstArrayElement(array) {
    const firstnumber = array[0];
    return firstnumber;
  }

  const numbers = [1, 2, 3, 4, 5];
  console.log('Numbers before', numbers);
  const firstnumber = returnFirstArrayElement(numbers);
  console.log('Return first element', firstnumber);
}

console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  // ...sprendimas ir spausdinimas
  function deleteFirstArrayElement(array) {
    const firstElement = array[0];
    delete array[0];
    for (let i = 1; i < array.length; i++) {
      array[i - 1] = array[i];
    }
    array.length = array.length - 1;
    return firstElement;
  }

  const numbers = [1, 2, 3, 4, 5];
  console.log('Numbers before', numbers);
  const firstElement = deleteFirstArrayElement(numbers);
  console.log('numbers after removal', numbers);
  console.log('removed element', firstElement)


}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  // ...sprendimas ir spausdinimas
  function returnLastArrayElement(array) {
    const lastnumber = array.slice(-1);
    return lastnumber;
  }

  const numbers = [1, 2, 3, 4, 5];
  console.log('Numbers before return', numbers);
  const lastnumber = returnLastArrayElement(numbers);
  console.log('Return last element', lastnumber);

}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  // ...sprendimas ir spausdinimas
  function deleteLastArrayElement(array) {
    const lastElement = array.slice(-1);
    delete array.slice(-1);
    for (let i = 1; i > array.slice; i++) {
      array[i - 1] = array[i];
    }
    array.length = array.length - 1;
    return lastElement;
  }

  const numbers = [1, 2, 3, 4, 5];
  console.log('Numbers before', numbers);
  const lastElement = deleteLastArrayElement(numbers);
  console.log('numbers after removal', numbers);
  console.log('removed element', lastElement)
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  // ...sprendimas ir spausdinimas
  function elementsamount(array) {
    return length = array.length
  }
  const numbers = [1, 2, 3, 4, 5];
  console.log('Numbers before', numbers);
  const amount = elementsamount(numbers);
  console.log('Numbers amount', amount)
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  // ...sprendimas ir spausdinimas
  function lastelementindex(array) {
    return array.indexOf(array[array.length - 1])
  }
  const numbers = [1, 2, 3, 4, 5];
  console.log('Numbers before', numbers);
  const index = lastelementindex(numbers);
  console.log('Numbers index', index)
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  // ...sprendimas ir spausdinimas
  function allindexdownwards(array) {
    let i = 0;
    while (i < array.length) {
      { console.log(i); };
      i++;
    }
  }
  const numbers = [1, 2, 3, 4, 5];
  console.log('Numbers index', numbers);
  allindexdownwards(numbers);
}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  // ...sprendimas ir spausdinimas
  function printIndexRow() {
    const array = [1, 2, 3, 4, 5]
    for (let i = 0; i < array.length; i++) {
      console.log(array[i])
    }
  }
  printIndexRow();
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  // ... sprendimas ir spausdinimas

  function allindexandmassive(array) {
    let i = 0;

    while (i <= array.length - 1) {
      console.log(`[${[i]}] => ${array[i]}`);
      i++;
    }
  }

  const numbers = [1, 2, 3, 4, 5];
  console.log('All index and massive');
  allindexandmassive(numbers);

}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  // ...sprendimas ir spausdinimas
  function allelementsdown(array) {
    let i = array.length - 1;
    while (i >= 0) {
      { console.log(array[i]); };
      i--;
    }
  }
  const numbers = [1, 2, 3, 4, 5];
  console.log('All elements reverse down');
  allelementsdown(numbers);

}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  // ...sprendimas ir spausdinimas
  
  function allmassiveelementsinline(array) {
    let resultLine = '';
    let i = 0;
    while (i < array.length) {
      const isNotLast = i < array.length - 1;
      resultLine += [i];
      i++;
      if (isNotLast) {
        resultLine += ', ';
      }
    }
    console.log(resultLine)
  }
  const numbers = [1, 2, 3, 4, 5];
  console.log('All massive elements in one line');
  allmassiveelementsinline(numbers);
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  // ...sprendimas ir spausdinimas
  function allmassiveelementsinline(array) {
    let resultLine = '';
    let i = 0;
    while (i < array.length) {
      const isNotLast = i < array.length - 1;
      resultLine += array[i];
      i++;
      if (isNotLast) {
        resultLine += ', ';
      }
    }
    console.log(resultLine)
  }
  const numbers = [1, 2, 3, 4, 5];
  console.log('All massive elements in one line');
  allmassiveelementsinline(numbers);
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  // ...sprendimas ir spausdinimas
  function allindexandmassiveelementsinline(array) {
    let resultLine = '';
    let i = 0;
    while (i < array.length) {
      const isNotLast = i < array.length - 1;
      resultLine += `[${[i]}] => ${array[i]}`;
      i++;
      if (isNotLast) {
        resultLine += ', ';
      }
    }
    console.log(resultLine)
  }
  const numbers = [1, 2, 3, 4, 5];
  console.log('All massive index and elements in one line');
  allindexandmassiveelementsinline(numbers);
}
console.groupEnd();