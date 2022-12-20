// ------------------------------------ 1 Dalis ------------------------------------ 
// 1. Sukurti objektų(žmonių) masyvą su 8 elementais, kuriame būtų:
//   - name
//   - surname
//   - age
//   - height
//   - weight
//   - sex

const people = [
    {
        name: 'Eight',
        surname: 'Fox',
        age: '26',
        height: '180',
        weight: '50',
        sex: 'male'
    },
    {
        name: 'Ona',
        surname: 'Wolf',
        age: '13',
        height: '165',
        weight: '55',
        sex: 'female'
    },
    {
        name: 'Kuklu',
        surname: 'Aram',
        age: '35',
        height: '170',
        weight: '58',
        sex: 'female'
    },
    {
        name: 'Athur',
        surname: 'Arms',
        age: '75',
        height: '180',
        weight: '115',
        sex: 'male'
    },
    {
        name: 'Olga',
        surname: 'Ruskov',
        age: '55',
        height: '164',
        weight: '50',
        sex: 'female'
    },
    {
        name: 'Adam',
        surname: 'Wednesday',
        age: '30',
        height: '190',
        weight: '81',
        sex: 'male'
    },
    {
        name: 'Wednesday',
        surname: 'Adams',
        age: '16',
        height: '172',
        weight: '75',
        sex: 'female'
    },
    {
        name: 'Cloun',
        surname: 'It',
        age: '16',
        height: '173',
        weight: '110',
        sex: 'male'
    },
];
// 2. Panaudojant array.forEach:
//   - Atspausdinti kiekvieną elementą
//   - Atspausdinti kiekvieno elemento pilną vardą
//   - Atspausdinti kiekvieno elemento kūno masės indeksą

{
    console.log('---Atspausdinti kiekvieną elementą---');
    people.forEach(people => console.log(people));


    console.log('---Atspausdinti kiekvieno elemento pilną vardą---');
    people.forEach(people => console.log(people.name + ' ' + people.surname));

    console.log('---Atspausdinti kiekvieno elemento kūno masės indeksą---');
    people.forEach(people => console.log(people.weight / ((people.height / 100) ** 2)));
}
console.groupEnd();


// 3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:
//   - kurių vardas ilgesnis nei 6 simboliai
//   - kurių svoris didesnis nei 80kg
//   - kurie aukštesni nei 185cm

{
    console.log('kurių vardas ilgesnis nei 6 simboliai');
    console.log(people.filter(item => item.name.length > 6));

    console.log('kurių svoris didesnis nei 80kg');
    console.log(people.filter(item => item.weight > 80));

    console.log('kurie aukštesni nei 185cm');
    console.log(people.filter(item => item.height > 185));
}
console.groupEnd();



// 4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti
//   - ūgius
//   - svorius
//   - ūgius, svorius ir amžius : [{height, weight, age}, ...]
//   - KMI indeksus
//   - KMI indeksus ir amžius

{
    console.log('ūgiai:');
    const newPeopleHeight = people.map(item => item.height);
    console.log(newPeopleHeight);

    console.log('svoriai:')
    const newPeopleWeight = people.map(item => item.weight);
    console.log(newPeopleWeight);

    console.log('ūgis, svoris, amžius:');
    const newPeopleHWA = people.map(({ height, weight, age }) => ({ height, weight, age }));
    console.log(newPeopleHWA)

    console.log('KMI ineksai:')
    const newPeopleKmi = people.map(({ height, weight }) => ({
        kmi: weight / ((height / 100) ** 2)
    }))
    console.log(newPeopleKmi);

    console.log('KMI ir amžius:')
    const newPeopleKmiAge = people.map(({ height, weight, age }) => ({
        kmi: weight / ((height / 100) ** 2),
        age
    }))
    console.log(newPeopleKmiAge);
}


// 5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti
//   - svorių vidurkį
//   - ūgio vidurkį

{
    console.log('svorių vidrukis: ', people.reduce((prev, current) => Number(current.weight) + prev, 0) / people.length);

    console.log('ūgio vidurkis: ', people.reduce((prev, current) => Number(current.height) + prev, 0) / people.length);
}
console.groupEnd();


// ------------------------------------ 2 Dalis ------------------------------------ 
// 0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:
//     Person klasėje:    
//     - sukurti vidinį metodą: getBMI();     // suskaičiuoja kūno masės indeksą
//     - sukurti vidinį metodą: toString();   // atspausdina žmogų su esamom savybėm
// 1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg 
// 2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5
// 3. Atrinkti vaikus, su antsvoriu (KMI > 30)
// 4. Atrinkti pensininkus, su antsvoriu (KMI > 30)
// 5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]

{
    class Person {
        name;
        surname;
        height;
        weight;
        sex;
        age;

        constructor({ name, surname, height, weight, sex, age }) {
            this.name = name;
            this.surname = surname;
            this.height = height;
            this.weight = weight;
            this.sex = sex;
            this.age = age;
        }

        getBMI = () => {
            return this.weight / ((this.height / 100) ** 2)
        }

        toString = () => {
            const { name, surname, ...rest } = this

            console.log(Object.entries(rest))
            const propString = Object.entries(rest)
                .filter(([_, propVal]) => typeof propVal !== 'function')
                .reduce((propString, [name, val]) => propString + `\n\t${name}: ${val}`, '');
            return `${name} ${surname}:` + propString;
        }
    }

    const peopleArr = people.map(p => new Person(p));

    console.group('0. Pasinaudojant 1 dalies asmens apibūdinimu, sukurti Person klasę, kuri apipavidalina tokio tipo objektą');
    {
    }
    console.groupEnd();


    console.group('1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg ');
    {
        console.table(peopleArr.filter(el => el.sex === 'female' && el.age < 20 && el.weight > 70));
    }
    console.groupEnd();


    console.group('2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5');
    {
        console.table(peopleArr.filter(el => el.sex === 'male' && el.age > 25 && el.getBMI() < 18.5));
    }
    console.groupEnd();


    console.group('3. Atrinkti vaikus, su antsvoriu (KMI > 30)');
    {
        console.table(peopleArr.filter(el => el.age < 18 && el.getBMI() > 30));
    }
    console.groupEnd();


    console.group('4. Atrinkti pensininkus, su antsvoriu (KMI > 30)');
    {
        console.table(peopleArr.filter(el => el.age > 65 && el.getBMI() > 30));
    }
    console.groupEnd();
    

    console.group('5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]');
    {
        console.table(peopleArr.filter(el => el.getBMI() < 18.5 || el.getBMI() > 25));
    }
    console.groupEnd();

}
console.groupEnd();


// ------------------------------------ 3 Dalis -------------------------------------
// Peržiūrėti video:
// https://www.youtube.com/watch?v=JaMCxVWtW58

// Geras Žaidimas pasitreniravimui:
//   https://www.typing.com/student/game/tommyq

// Rekomenduoju pasikartoti greitasias komandas