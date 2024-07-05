// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let num = 1;
while(num <= 5){
  console.log(num);
  num++;
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let n = 1;
do{
  console.log(n);
  n++;
}while(n <= 5);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

for(let i = 0; i<=5; i++){
  console.log(i);
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

for(let n = 10; n >=1; n--){
  console.log(n);
}

let j = 10;
while(j>=1){
  console.log(j);
  j--;
}

let m = 10;
do{ 
  console.log(m )
  m--;
}while(m>1)


// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
for(let z = 7; z <=27; z++){
  console.log(z);
}

let k = 7;
while(k<=27){
  console.log(k);
  k++;
}

let x = 7;
do{ 
  console.log(x )
  x++;
}while(x<27)


// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
for(let a = 10; a<=100; a+=10 ){
  console.log(a);
}

let b = 10;
while(b <= 100){
  console.log(b);
  b+=10;
}

let c = 10
do{
  console.log(c);
  c+=10;
}while(c<100)

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.


let counterFour = 1;
//you put while counterFour < 2 and keep decrementing so counterFour will always be less than 2.
//you can fix this by incrementing instead of decrementing or change the 2 to -100.
while (counterFour !== -100 ){
  console.log("HELP ME!");
  counterFour--;
}
  

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

let favNum = 24;
for(let f = 0; f<=favNum; f++){
  console.log(f);
}


// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

let numb = 88;
for(let v = 0; v<= 100; v++){
  if(v === numb){
    console.log(`${v} my favorite number!`);
  }
  else{
    console.log(`${v} not my favorite number`);
  }
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
/*
I think using *for loop or *do while loop is best if you want to do something at least one time even if it doesn't meet the condition because
those loop do something first then check the conditions unlike while loop which check the conditions first
 so use *while loop if you want more accurate result like to do something only if it meet the conditions.
*/  


// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/
for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log(`counting down from ${outsideCounter}`);
  for (let insideCounter = outsideCounter; insideCounter >0 ; insideCounter-- ) {
    console.log(`inside ${insideCounter}`);
  }
  console.log("***********************************");
}


// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//Exercise 10 was kinda hard, I was analysing all 3 loops but all them do the same thing 
// no I did not use any references for this one.

// Email your file to us or commit your file to GitHub and email us a link.
