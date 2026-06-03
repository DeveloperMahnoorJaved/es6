  //old code........
// let name = "Mahnoor";

// console.log("My name is " + name );

// let  age = 23;

// console.log(`i am ${age}years old`);

// const wish = () =>{
//   console.log("Happy birthday!");
// }
// wish();

//ARROW FUNCTIONS......
const mahnoor = (name) =>{
  console.log(`Hello` + name);
}
mahnoor("Ali")


//example 2....................
const greet = (a,b,c) =>{
  console.log(`mahnoor` + a + b + c );
}
greet("Amna" ,"Ayesha", "Zainab");
//example 3.................

const add = (a, b) => { console.log(a + b); };
add(10,20); 

//example 4...........
const square = (num) => {
    return num * num;
};
console.log(square(10));


//example 5.............

const square = num => num * num;
console.log(square(3));

//syntax of arrow funtion............
// const functionname = () =>{};
const cook =() => {
console.log(`Iam mahnoor`)
}
cook();
