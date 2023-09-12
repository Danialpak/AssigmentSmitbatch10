
    var num1 = 10;
    var num2 = 6;
    var result;

    document.write("Sum Of " + num1 + "  and " + num2 + " is " + (num1+num2));

    var num1 = 10;
    var num2 = 6;
    var result;

    document.write("Subtracion Of " + num1 + "  and " + num2 + " is " + (num1-num2));
    document.write("<br>Multiplication Of " + num1 + "  and " + num2 + " is " + (num1*num2));
    document.write("<br>Division Of " + num1 + "  and " + num2 + " is " + (num1/num2));
    document.write("<br>Modulus Of " + num1 + "  and " + num2 + " is " + (num1%num2));


    var num;
    document.write("Value after variable declaration is: ", num);
    num = 5;
    document.write("<br>Initial value: ", num);
    num++
    document.write("<br>Value after increment is: ", num);
    num = num+7
    document.write("<br>Value after addition of 7 is: ", num);
    num--
    document.write("<br>Value after decrement is: ", num);
    num = num%3
    document.write("<br>The remainder is : ", num);

    var ticketPrice = 600;
    document.write('Total cost to buy 5 tickets is ', ticketPrice*5 ,"PKR");

    var tableNum = 4;
    document.write('Table of ', tableNum);
    for(let i = 1; i <=10; i++){
        document.write('<br>', tableNum , ' × ', i, ' = ', tableNum*i);
    }

    var celciusTemp = 25;
    document.write(celciusTemp, '°C is ', (celciusTemp*(9/5))+32, '°F <br>' );
    var fahrenheitTemp = 70;
    document.write(fahrenheitTemp, '°F is ', (fahrenheitTemp-32)*(5/9), '°C' );

    var priceItem1 = 499;
    var quantityItem1 = 3;
    var priceItem2 = 569;
    var quantityItem2 = 9;
    var shippingCharges = 99;

    document.write("<h1>Shopping Cart</h1>");
    document.write('<br>Price of item 1 is ', priceItem1);
    document.write('<br>Quantity of item 1 is ',quantityItem1);
    document.write('<br>Price of item 2 is ', priceItem2);
    document.write('<br>Quantity of item 2 is ',quantityItem2);
    document.write('<br><br>Total cost of your order is ', (priceItem1*quantityItem1)+(priceItem2*quantityItem2)+shippingCharges );

    var totalMarks = 520;
    var obtainedMarks = 498;

    document.write("<h1>Marks Sheet</h1>");
    document.write('<br>Total Marks: ', totalMarks);
    document.write('<br>Obtained Marks: ', obtainedMarks);
    document.write('<br>Percentage ', (obtainedMarks/totalMarks)*100, '%');


    document.write("<h1>Currency to PKR</h1>");
    document.write('Total Currency in PKR is ', (10*306.03)+(25*81.59));

    var num = 5;
    document.write(((num+5)*10)/2);

    var currYear = 2023;
    var birthYear = 2001;
    document.write("<h1>Age Calculator</h1>");
    document.write('<br>Curent Year: ', currYear);
    document.write('<br>Birth Year: ', birthYear);
    document.write('<br>Your Age is: ', currYear-birthYear);


    var radius = 20;

    document.write("<h1>The Geometrizer</h1>");
    document.write('<br>Radius of Circle: ', radius);
    document.write('<br>Circumference of Circle: ', 2*3.142*radius);
    document.write('<br>Area of Circle: ', 3.142*(radius*radius));


    var favSnack = 'Chocolate Chip'
    var currAge = 15
    var maxAge = 65
    var snackPerDay = 3

    document.write("<h1>The Lifetime Supply Calculator</h1>");
    document.write('<br>Favorite Snack: ', favSnack);
    document.write('<br>Current Age: ', currAge);
    document.write('<br>Estimated Maximun Age: ', maxAge);
    document.write('<br>Amount of snacks per day: ', snackPerDay);
    document.write("<br>You will need ", snackPerDay*((maxAge-currAge)*365) ," ", favSnack, " to last you until the ripe old age of ", maxAge);

    