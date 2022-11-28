console.group('https://edabit.com/challenge/x2LS9YvyK38uH8B7J');
{
    mostExpensive ({
        "Diamond Earrings": 980,
        "Gold Watch": 250,
        "Pearl Necklace": 4650
    }) ➞  "The most expensive one is the Pearl Necklace"

    mostExpensive({
        "Silver Bracelet": 280,
        "Gemstone Earrings": 180,
        "Diamond Ring": 3500
    }) ➞ "The most expensive one is the Diamond Ring"



    function mostExpensive(obj) {
        return "The most expensive one is the " + Object.keys(obj).reduce((a, c) => obj[a] > obj[c] ? a : c);
    }


    console.groupEnd();

    //Better solution :)
    const num1 = parseFloat(prompt("Diamond Earrings: "));
    const num2 = parseFloat(prompt("Gold Watch: "));
    const num3 = parseFloat(prompt("Pearl Necklace: "));
    let largest;

    if (num1 >= num2 && num1 >= num3) {
        largest = num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        largest = num2;
    }
    else {
        largest = num3;
    }

    console.log("The most expensive one is " + largest);
}
