
    var a = 10;

    document.write('Result:');
    document.write('<br>The Value of a is: ' ,a);

    document.write('<br>-----------------------------------------');

    document.write('<br><br>The value of ++a is: ', ++a);
    document.write('<br>Now the value of a is:', a)

    
    document.write('<br><br>The value of a++ is: ', a++);
    document.write('<br>Now the value of a is:', a)

    
    document.write('<br><br>The value of --a is: ', --a);
    document.write('<br>Now the value of a is:', a)

    
    document.write('<br><br>The value of a-- is: ', a--);
    document.write('<br>Now the value of a is:', a)


    var a = 2, b = 1;
    var result = --a - --b + ++b + b--;

    document.write('a is ', a);
    document.write('<br>b is ', b);
    document.write('<br>result is ', result);

    var userName = prompt('Enter Your Name');
    alert('Welcome '+ userName + ' to Our Website');

    var tableNum = prompt('Enter Table number');
    if(tableNum == ''){
        tableNum = 5;
    }
    document.write('Table of ', tableNum);
    for(let i = 1; i <=10; i++){
        document.write('<br>', tableNum , ' × ', i, ' = ', tableNum*i);
    }

var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

var totalMarks = 100;

var obtainedMarks1 = prompt("Enter obtained marks for " + subject1 + ":");
var obtainedMarks2 = prompt("Enter obtained marks for " + subject2 + ":");
var obtainedMarks3 = prompt("Enter obtained marks for " + subject3 + ":");

document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td><td>" + (obtainedMarks1/totalMarks)*100 + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td><td>" + (obtainedMarks2/totalMarks)*100 + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td><td>" + (obtainedMarks3/totalMarks)*100 + "%</td></tr>");
document.write("</table>");