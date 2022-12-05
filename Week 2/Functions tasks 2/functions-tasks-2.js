// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrBy2(arr) {
    for (let i = 0; i < arr.length; i += 1) {
      arr[i] *= 2
    } return arr
  }
  const numbersCopy = [...numbers]

  console.log({
    numbers,
    result: mulArrBy2(numbersCopy)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
console.log('---');
{
  function powerArrBy2(arr) {
    for (let i = 0; i < arr.length; i += 1) {
      arr[i] **= 2
    } return arr
  }

  const numbersCopy1 = [...numbers];

  console.log({
    numbers,
    result: powerArrBy2(numbersCopy1)
  });
}
console.log('---');
console.groupEnd();
console.log();



console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve) ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrElementsByIndex(arr) {
    for (let i = 0; i < arr.length; i += 1) {
      arr[i] *= i
    } return arr
  }

  const numbersCopy2 = [...numbers];

  console.log({
    numbers,
    result: mulArrElementsByIndex(numbersCopy2)
  });
}
console.log('---');
console.groupEnd();
console.log();




console.group('4. Atrinkti tiktai teigiamų elementų masyvą');
console.log('---');
{
  function filterPositives(arr) {
    let positives = [];
    let x = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] > 0) {
        positives[x] = arr[i]
        x++
      }
    } return positives
  };

  console.log({
    numbers,
    result: filterPositives(numbers)
  });

}


console.log('---');
console.groupEnd();
console.log();


console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
  function filterNegatives(arr) {
    let negatives = [];
    let x = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] < 0) {
        negatives[x] = arr[i]
        x++
      }
    } return negatives
  }

  console.log({
    numbers,
    result: filterNegatives(numbers)
  });

}
console.log('---');
console.groupEnd();
console.log();

console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
  function filterEquals(arr) {
    let equals = [];
    let x = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] % 2 === 0) {
        equals[x] = arr[i]
        x++
      }
    } return equals
  }

  console.log({
    numbers,
    result: filterEquals(numbers)
  });

}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
  function filterOdds(arr) {
    let odds = [];
    let x = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] % 2 === 1 || arr[i] % 2 === -1) {
        odds[x] = arr[i]
        x++
      }
    } return odds
  }

  console.log({
    numbers,
    result: filterOdds(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
{
  function arrAbsoluteValues(arr) {
    let absolute = [];
    let x = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] < 0) {
        absolute[x] = arr[i] * -1
        x++
      }
    } return absolute
  }

  console.log('---');
  console.log({
    numbers,
    result: arrAbsoluteValues(numbers)
  });
  console.log('---');
}
console.groupEnd();
console.log();


console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
console.log('---');
{
  function powArrElementsByIndex(arr) {
    for (let i = 0; i < arr.length; i += 1) {
      arr[i] **= i
    } return arr
  }

  const numbersCopy4 = [...numbers]

  console.log({
    numbers,
    result: powArrElementsByIndex(numbersCopy4)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
  function filterNaturals(arr) {
    let naturals = [];
    let x = 0;
    for (i = 0; i < arr.length; i += 1) {
      if (arr[i] !== 1.02) {
        naturals[x] = arr[i]
        x++
      }
    } return naturals
  }

  console.log({
    numbers,
    result: filterNaturals(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
console.log('---');
{
  function absArrElements(arr) {
    let abs = [];
    let x = 0;
    for (let i = 0; i < arr.length; i += 1) {
      abs[x] = Math.round(arr[i])
      x++
    } return abs
  }
  console.log({
    numbers,
    result: absArrElements(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
  function filterEverySecond(arr) {
    for (let i = 1; i < arr.length; i += 2) {
      console.log(arr[i])
    } return arr
  }
  filterEverySecond(numbers);
  console.log(numbers)

}
console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
  function filterEveryFifth(arr) {
    for (i = 4; i < arr.length; i += 5) {
      console.log(arr[i])
    } return arr
  }

  filterEveryFifth(numbers)
  console.log(numbers)
}
console.log('---');
console.groupEnd();


console.group('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
  function printArr(arr) {
    for (i = 0; i < arr.length; i += 1) {
      console.log(`${i} => ${arr[i]}`)
    }
  }

  printArr(numbers);
  console.log(numbers);

}
console.log('---');
console.groupEnd();


console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
  function sumArr(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i += 1) {
      sum += arr[i]
    } return sum
  }

  console.log({
    numbers,
    result: sumArr(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
  function avgArr(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i += 1) {
      sum += arr[i]
    } return sum / arr.length
  }

  console.log({
    numbers,
    result: avgArr(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
  function arrMax(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    } return largest
  }

  console.log({
    numbers,
    result: arrMax(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  function arrMin(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    } return smallest
  }

  console.log({
    numbers,
    result: arrMin(numbers)
  });
}
console.log('---');
console.groupEnd();