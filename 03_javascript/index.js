var buffetPrice = function (age)
{
    //var price = 0;

    if (age <=0 ){
        return (-1);
    }

    if (age < 10) {
        return (20);
        //price = 20;
    }
    else if ((age > 10) && (age < 20)) {
        return (30);
        //price = 30;
    }
    //else
    
        return (40);
        //price = 40;
        //return (price);
}

console.log("age = 9: $" + buffetPrice(9));
console.log("age = 11: $" + buffetPrice(11));
console.log("age = 25: $" + buffetPrice(25));
