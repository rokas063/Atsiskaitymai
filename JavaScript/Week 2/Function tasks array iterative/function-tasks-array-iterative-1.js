const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];
console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
{
  // ...sprendimas ir spausdinimas
  function printAllPeople(person) {
    console.log(person)
  }
  people.forEach(printAllPeople);

}
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių vardus ir pavardes, atskirtus brūkšneliu');
{
  // ...sprendimas ir spausdinimas
  function getNamesSurnames(person) {
    console.log(`${person.name} - ${person.surname}`);
  }
  people.forEach(getNamesSurnames);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
  // ...sprendimas ir spausdinimas
  function maritalStatus(person) {
    console.log(`${person.name}, ${person.surname}, married: ${person.married}`);
  }
  people.forEach(maritalStatus);
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  // ...sprendimas ir spausdinimas
  function getIncome(person) {
    return person.sex + " " + person.income
  }

  const income = people.map(getIncome);
  console.log(income);

}
console.groupEnd();

console.groupCollapsed('5. Sukurkite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  // ...sprendimas ir spausdinimas
  function copyFullName(person) {
    return `${person.name} ${person.surname}, ${person.sex}`
  };

  const fullName = people.map(copyFullName);
  console.log(fullName);

}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  // ...sprendimas ir spausdinimas
  function printMale(person) {
    return person.sex === 'male'
  }

  const male = people.filter(printMale);
  console.log(male);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  // ...sprendimas ir spausdinimas
  function printFemale(person) {
    return person.sex === 'female'
  }

  const female = people.filter(printFemale);
  console.log(female);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  // ...sprendimas ir spausdinimas
  function hasCars(person) {
    if (person.hasCar === true)
      console.log(person.name, person.surname)
  }
  people.forEach(hasCars);

}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  // ...sprendimas ir spausdinimas
  function married(person) {
    if (person.married === true)
      return person
  }

  const marriedpeople = people.filter(married);
  console.log(marriedpeople);
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  // ...sprendimas ir spausdinimas
  let femaleCount = 0;
  let maleCount = 0;

  function increasePeopleCount(person) {
    if (person.sex === 'female' && person.hasCar === true) femaleCount++;
    else if (person.sex === 'male' && person.hasCar === true) maleCount++;
  }

  people.forEach(increasePeopleCount);
  console.log({ femaleCount, maleCount });
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  // ...sprendimas ir spausdinimas
  function incomeToSalary(person) {
    return person['salary'] = person['income'], delete person['income']
  }

  const salary = people.filter(incomeToSalary);
  console.log(salary);
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės');
{
  // ...sprendimas ir spausdinimas
  function newObj(person) {
    return {
      age: person.age,
      income: person.income,
      married: person.married,
      hasCar: person.hasCar
    }
  }

  const newPeopleObj = people.map(newObj);
  console.log(newPeopleObj)

}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  // ...sprendimas ir spausdinimas
  function nameChange(person) {
    return {
      fullname: `${person.name} ${person.surname}`,
      sex: person.sex,
      age: person.age,
      income: person.income,
      married: person.married,
      hasCar: person.hasCar
    }
  }

  const fullname = people.map(nameChange);
  console.log(fullname);
}
console.groupEnd();