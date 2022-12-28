console.group("28. Sukurkite funkciją, kuri atspausdina žodį atvirkščiai 'abc' -> 'cba'");
{
    function strReverse(str) {
        let result = '';
        for (let i = str.length - 1; i > -1; i--) {
            result += str[i];
        }
        console.log(result)
    }
    console.log('---');
    console.log('%cIncome: viens du trys', 'color: red');
    strReverse('viens du trys');
    console.log('%cIncome: as tave myliu', 'color: red');
    strReverse('as tave myliu');
    console.log('%cIncome: Bairis seniuk', 'color: red');
    strReverse('Bairis seniuk');
    console.log('---');
}
console.groupEnd();
console.log();


// 29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)
//  mama -> false
//  mamam -> true
//  123321 -> true
//  123456 -> false
console.group("29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)");
{

    function isPalyndrome(str) {
        let strReverse = '';
        for (let i = str.length - 1; i > -1; i--) {
            strReverse += str[i];
        }
        return strReverse === str ? true : false;
    }

    console.log('---');
    console.log({
        'mama': isPalyndrome('mama'),
        'mamam': isPalyndrome('mamam'),
        '123321': isPalyndrome('123321'),
        '123456': isPalyndrome('123456'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

// 30. Sukurkite funkciją, kuri taiso pastraipos klaidas:
//  Pirma sakinio raidė didžioji
//  Po skiriamojo ženklo tarpas, o prieš skiriamajį ženklą nėra tarpo (skiriamieji ženklai: .,!?)
//  Bet kokį kiekį tapų pakeičia vienu tarpu
//    mėgstu pieną , bet medų nelabai.labanakt. -> Mėgstu pieną, bet medų nelabai. Labanakt.
console.group("30. Sukurkite funkciją, kuri taiso pastraipos klaidas");
{

    const capitalizeFirstLetter = (word) => word[0].toUpperCase() + word.slice(1);


    const fixedParagraph = (paragraph) => paragraph.split(/([.?!])/).slice(0, -1)
        .map((sentence) => sentence.trim())
        .map(capitalizeFirstLetter)
        .join('')
        .replaceAll(/\s+/g, ' ')
        .replaceAll(' ,', ',')
        .replaceAll(/([.?!,])([^\s])/g, '$1 $2')

    const paragraph = '    labas , as jonas . Tave      vadina Kęstu? Taip ir žinojau  !    ';

    console.log(fixedParagraph(paragraph))
    console.log(paragraph);
    console.log('---');
}
console.groupEnd();
console.log();

// 31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą:
//  labas, aš esu grybas -> ['labas', 'aš', 'esu', 'grybas']
console.group("31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą");
{
    function splitSentence(sentence) {
        return sentence.split(' ');
    }
    console.log('---');
    console.log({
        'Labas aš Jonas': splitSentence('Labas aš Jonas'),
        'Kėgliai yra gerai': splitSentence('Kėgliai yra gerai'),
    })
    console.log('---');
}
console.groupEnd();
console.log();


// 32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį
//  Ši funkcija turi grąžinti masyvą sudarytą iš atskirtų dalių:
//  explode('Man patinka sniegas', ' ');  -> ['man', 'patinka', 'sniegas'];  
//  explode('home/about/13', '/');        -> ['home', 'about', '13'];  
console.group("32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį");
{
    function explode(str, separator) {
        return str.split(`${separator}`);
    }
    console.log('---');
    console.log({
        "'Man patinka sniegas', ' '": explode('Man patinka sniegas', ' '),
        "'home/about/13', '/'": explode('home/about/13', '/'),
    })
    console.log('---');
}
console.groupEnd();
console.log();