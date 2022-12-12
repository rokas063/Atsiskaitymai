console.group("1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis");
{
    // Funkcijos deklaravimas
    function printCapital(str) {
        return console.log(str.toUpperCase());
    }
    console.log('---');
    console.log("abcd");
    printCapital("abcd");
    console.log("AAAA");
    printCapital("AAAA");
    console.log("aBcD");
    printCapital("aBcD");
    console.log('---');

}
console.groupEnd();
console.log();

console.group("2. Sukurkite funkciją, kuri atspausdina tekstą mažosiomis raidėmis");
{
    // Funkcijos deklaravimas
    function printLower(str) {
        return console.log(str.toLowerCase());
    }
    console.log('---');
    console.log("ABCD");
    printLower("abcd");
    console.log("AAAA");
    printLower("AAAA");
    console.log("aBcD");
    printLower("aBcD");
    console.log('---');
}
console.groupEnd();
console.log();

console.group("3. Sukurkite funkciją, kuri atspausdina pirmojo parametro pirmają raidę");
{
    // Funkcijos deklaravimas
    function printFirstLetter(str) {
        return console.log(str.charAt(0));
    }
    console.log('---');
    // console.log("ABCD");
    printFirstLetter("abcd");
    // console.log("AAAA");
    printFirstLetter("AAAA");
    // console.log("aBcD");
    printFirstLetter("aBcD");
    console.log('---');

}
console.groupEnd();
console.log();

console.group("4. Sukurkite funkciją, kuri atspausdina pirmojo parametro paskutinę raidę");
{
    // Funkcijos deklaravimas
    function printLastLetter(str) {
        return console.log(str.charAt(str.length - 1));
    }
    console.log('---');
    printLastLetter('Labas');
    printLastLetter('Ate');
    printLastLetter('Brieda');
    console.log('---');
}
console.groupEnd();
console.log();

console.group("5. Sukurkite funkciją, kuri atspausdina pirmojo parametro viduriniają raidę");
{

    function printMiddleLetter(str) { // Funkcijos deklaravimas
        return console.log(str.charAt((str.length - 1) / 2));
    }
    console.log('---');
    printMiddleLetter('Labas');
    printMiddleLetter('Ate');
    printMiddleLetter('Brieda');
    console.log('---');
}

{
    function printMiddleLetter(str) {

        let position;
        let length;

        if (str.length % 2 === 1) {
            position = str.length / 2;
            length = 1;
        } else {
            position = str.length / 2 - 1;
            length = 2;
        }

        console.log(str.substring(position, position + length));
    }

    console.log('---');
    printMiddleLetter('Labas');
    printMiddleLetter('Ate');
    printMiddleLetter('Brieda');
    console.log('---');
}
console.groupEnd();
console.log();

console.group("6. Sukurkite funkciją, kuri grąžina simbolių darinio raidžių skaičių");
{
    function getDoubleLetterCount(str) {
        return str.length;
    }
    console.log('---');
    console.log({
        'labas': getDoubleLetterCount('labas'),
        'kranas': getDoubleLetterCount('kranas'),
        'kebabas': getDoubleLetterCount('kebabas'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("7. Sukurkite funkciją, kuri grąžina simbolių darinio raidžių skaičių padaugintą iš dviejų");
{
    function getDoubleLetterCount(str) {
        return str.length * 2;
    }
    console.log('---');
    console.log({
        'labas': getDoubleLetterCount('labas'),
        'kranas': getDoubleLetterCount('kranas'),
        'kebabas': getDoubleLetterCount('kebabas'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("8. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių");
{
    function getArgsLetterSum(a, b) {
        return a.length + b.length;
    }
    console.log('---');
    console.log({
        'labas, abc': getArgsLetterSum('labas', 'abc'),
        'kranas, jonas': getArgsLetterSum('kranas', 'jonas'),
        'kebabas, kefyras': getArgsLetterSum('kebabas', 'kefyras'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("9. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 'a' raidė, priešingu atveju <false>");
{
    function containsLetterA(str) {
        return str.includes('a') ? true : false;
    }
    console.log('---');
    console.log({
        'labas': containsLetterA('labas'),
        'kempė': containsLetterA('kempė'),
        'Finakolė': containsLetterA('Finakolė'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("10. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false");
{
    function containsLetter(str, letter) {
        return str.includes(letter) ? true : false;
    }
    console.log('---');
    console.log({
        'labas, a': containsLetter('labas', 'a'),
        'kempė, a': containsLetter('kempė', 'a'),
        'Finakolė, u': containsLetter('Finakolė', 'u'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("11. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių");
{
    function isEvenNumberOfLetters(str) {
        if (str.length % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
    console.log('---');
    console.log({
        'labas': isEvenNumberOfLetters('labas'),
        'kempės': isEvenNumberOfLetters('kempės'),
        '123123': isEvenNumberOfLetters('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("12. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje");
{
    function getNumberOfVowels(str) {

        let voweles = 'AaĄąEeĘęĖėIiĮįYyOoUuŲųŪū';

        let numberOfVowels = 0;

        for (let i = 0; i < str.length; i += 1) {
            if (voweles.indexOf(str[i]) >= 0) {
                numberOfVowels += 1;
            } else {
                numberOfVowels += 0;
            }
        }
        return numberOfVowels;
    }
    console.log('---');
    console.log({
        'aaaaa': getNumberOfVowels('aaaaa'),
        'sasasasa': getNumberOfVowels('sasasasa'),
        'aeyuioąčė': getNumberOfVowels('aeyuioąčė'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("13. Sukurkite funkciją, kuri grąžina priebalsių kiekį žodyje");
{
    function getNumberOfConsonants(str) {

        let consonants = 'BbCcČčDdFfGgHhJjKkLlMmNnPpRrSsŠšTtVvZzŽžQqWwXx';

        let numberOfVowels = 0;

        for (let i = 0; i < str.length; i += 1) {
            if (consonants.indexOf(str[i]) >= 0) {
                numberOfVowels += 1;
            } else {
                numberOfVowels += 0;
            }
        }
        return numberOfVowels;
    }
    console.log('---');
    console.log({
        'aaaaa': getNumberOfConsonants('aaaaa'),
        'sasasasa': getNumberOfConsonants('sasasasa'),
        'aeyuioąčė': getNumberOfConsonants('aeyuioąčė'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("14. Sukurkite funkciją, kuri grąžina <true>, jeigu NĖRA skaimenų");
{
    function isOnlyLetters(str) {
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0; i < numbers.length; i += 1) {
            const number = numbers[i];
            if (str.includes(number)) return false;
        }
        return true;
    }

    console.log('---');
    console.log({
        'labas': isOnlyLetters('labas'),
        'kempės': isOnlyLetters('kempės'),
        '123123': isOnlyLetters('123123'),
    })
    console.log('---');
}
{
    const createStringChecker = (symbolsArr) => {
        return (text) => {
            for (let i = 0; i < symbolsArr.length; i++) {
                const symbol = symbolsArr[i];
                if (text.includes(symbol)) return true;
            }

            return false;

        }
    }
}
console.groupEnd();
console.log();

console.group("15. Sukurkite funkciją, kuri grąžina 'a' raidžių kiekį žodyje");
{
    function letterACount(str) {
        const letterA = 'a';
        let aCount = 0;

        for (let i = 0; i < str.length; i++) {
            if (letterA.indexOf(str[i]) !== -1) {
                aCount++;
            }
        }
        return aCount;
    }
    console.log('---');
    console.log({
        'labas': letterACount('labas'),
        'kempės': letterACount('kempės'),
        '123123': letterACount('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("16. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje");
{
    function letterCount(str, searchLetter) {
        let letterCount = 0;
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) === searchLetter) {
                letterCount++
            }
        }
        return letterCount;
    }
    console.log('---');
    console.log({
        'labas, a': letterCount('labas', 'a'),
        'kempės, k': letterCount('kempės', 'k'),
        '123123, z': letterCount('123123', 'z'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("17. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) 'a' raidės vietą žodyje");
{
    function lastIndexOfLetterA(str) {
        return str.indexOf('a') === -1 ? 'neturi "a"' : 'turi "a"';
    }
    console.log('---');
    console.log({
        'labas': lastIndexOfLetterA('labas'),
        'kempės': lastIndexOfLetterA('kempės'),
        '123123': lastIndexOfLetterA('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("18. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) vartotojo perduotos raidės vietą žodyje");
{
    function lastIndexOfLetter(str, searchLetter) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === searchLetter) {
                return `turi ${searchLetter}`;
            }
        }
        return `neturi ${searchLetter}`;
    }
    console.log('---');
    console.log({
        'labas, a': lastIndexOfLetter('labas', 'a'),
        'kempės, k': lastIndexOfLetter('kempės', 'k'),
        '123123, z': lastIndexOfLetter('123123', 'z'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("19. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais 'a' raidės pasikartojimais žodyje");
{
    function indexesOfLetterA(str) {
        const letterA = 'a';
        const newArray = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] === letterA) {
                newArray.push(i);
            }
        }
        return newArray.length;
    }
    console.log('---');
    console.log({
        'labas': indexesOfLetterA('labas'),
        'kempės': indexesOfLetterA('kempės'),
        '123123': indexesOfLetterA('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("20. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais vartotojo įvestos raidės pasikartojimais žodyje");
{
    function indexesOfLetter(str, searchLetter) {
        const newArray = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] === searchLetter) {
                newArray.push(i);
            }
        }
        return newArray.length;
    }
    console.log('---');
    console.log({
        'labas, a': indexesOfLetter('labas', 'a'),
        'kempės, m': indexesOfLetter('kempės', 'm'),
        '123123, 2': indexesOfLetter('123123', '2'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("21. Sukurkite funkciją, kuri ištrintų pirmą surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
    function removeFirstLetterA(str) {
        const firstLetterA = str.indexOf('a');
        if (firstLetterA !== -1) {
            return str.slice(0, firstLetterA) + str.slice(firstLetterA + 1);
        }
        return str;
    }
    console.log('---');
    console.log({
        'labas': removeFirstLetterA('labas'),
        'kempiniukas': removeFirstLetterA('kempiniukas'),
        '123123': removeFirstLetterA('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("22. Sukurkite funkciją, kuri ištrintų paskutinę surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
    function removeLastLetterA(str) {
        const firstLetterA = str.lastIndexOf('a');
        if (firstLetterA !== -1) {
            return str.slice(0, firstLetterA) + str.slice(firstLetterA + 1);
        }
        return str;
    }
    console.log('---');
    console.log({
        'labas': removeLastLetterA('labas'),
        'kempiniukas': removeLastLetterA('kempiniukas'),
        '123123': removeLastLetterA('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("23. Sukurkite funkciją, kuri ištrintų visus 'a' raidės pasikartojimus žodyje");
{
    function removeAllOccurencesOfLetterA(str) {
        return str.replaceAll('a', '')
    }
    console.log('---');
    console.log({
        'labas': removeAllOccurencesOfLetterA('labas'),
        'kempiniukas': removeAllOccurencesOfLetterA('kempiniukas'),
        '123123': removeAllOccurencesOfLetterA('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("24. Sukurkite funkciją, kuri ištrintų visus, vartotojo įvestos raidės pasikartojimus žodyje");
{
    function removeAllOccurencesOfLetter(str, letter) {
        return str.replaceAll(letter, '')
    }
    console.log('---');
    console.log({
        'labas, a': removeAllOccurencesOfLetter('labas', 'a'),
        'kempiniukas, i': removeAllOccurencesOfLetter('kempiniukas', 'i'),
        '123123, 3': removeAllOccurencesOfLetter('123123', '3'),
    })
    console.log('---');
}
console.groupEnd();
console.log();


console.group("25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.");
{
    function filterLetters(str, lettersToRemove) {
        for (let i = 0; i < lettersToRemove.length; i += 1) {
            str = str.replaceAll(lettersToRemove[i], '');
        }
        return str;
    }
    console.log('---');
    const str = filterLetters('Brangakmienio paveikslas', ['a', 'i']);
    console.log(str);
    console.log('---');
}
console.groupEnd();
console.log();

console.group("26. Sukurkite funkciją, kuri pirmu parametrų priimą sakinį, kiekvieną tarpą pakeičia brūkšneliu ir grąžina pakeistą sakinį");
{
    function replaceSpaceWithDash(str) {
        return str.replaceAll(' ', '-');
    }
    console.log('---');
    console.log({
        'viens du trys': replaceSpaceWithDash('viens du trys'),
        'as tave myliu': replaceSpaceWithDash('as tave myliu'),
        'Bairis seniuk': replaceSpaceWithDash('Bairis seniuk'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("27. Sukurkite funkciją, kuri pirmu parametru priima sakinį, ir kiekvieno žodžio pirmają raidę padaro didžiąja");
{
    function capitalize(str) {
        const newArray = str.split(' ');
        for (let i = 0; i < newArray.length; i += 1) {
            newArray[i] = newArray[i].charAt(0).toUpperCase().slice(1) + newArray[i].slice(1);
        }
        return newArray.join(' ');
    }
    console.log('---');
    console.log({
        'viens du trys': capitalize('viens du trys'),
        'as tave myliu': capitalize('as tave myliu'),
        'Bairis seniuk': capitalize('Bairis seniuk'),
    })
    console.log('---');
}
console.groupEnd();
console.log();