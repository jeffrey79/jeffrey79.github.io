var n = parseInt(prompt("Enter a number")); 
var mul = function (n, m)
{
    return (n*m);
}
//outer
for (var outer = 2; outer < 13; outer++)
{
    console.info("\nMultiplication table: %d", outer);
    for (var inner = 1; inner < 13; inner++)
    {
        console.log("%d * %d = %d", outer, inner, mul(outer, inner));
    }
}

var i = 0;
while (i<10)
{
    console.log("i = %d", i);
    i++;
}