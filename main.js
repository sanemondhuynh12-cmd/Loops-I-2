// Leave this one in place
var sum = 0;

 for (var i = 0; i < 5; i++) {
     sum += i;
     console.log("My current sum is: " + sum);
 }

// Then write the while loop version below
var sum = 0;
var i = 0;

while (i<5) {
    sum += i;
    console.log("My current sum is: " + sum);
    i++;
}