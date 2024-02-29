// run();

// function run(){
//     console.log("running");
// }

// //function assignment

// let a=function walk(){
//     console.log('walk');
// }
// //a();
// //walk();
// let b=a;
// b();

// let stand=function(){
//     console.log('anonyms');
// }
// stand();

//function with parameter

// function sum(a,b)
// {
//     return a+b;
// }
// //console.log(sum(1));

// console.log(sum(1,2,3,4,5));

// function sum(a,b)
// {   let total=0;
//     for(let value in arguments)
//         total=total+value;
//     return total;
// }
// let ans=sum();
// console.log(ans);

// function sum(a,...args)
// {
//     console.log(a,args);
// }
// sum(1,2,3,4,5);

// function interest(p,r=2,t=1)
// {
//     return p*r*t/100;
// }
// console.log(interest(1000,undefined,2));

// let person={
//     fName:'love',
//     lName:'rahul',
   
//     get fullName()
//     {
//         return `${person.fName} ${person.lName}`;
//     },
//     set fullName(value)
//     {
//         if (typeof value!==String) {
//           throw new Error("send the string"); 
//         }
//         let a=value.split(' ');
//         person.fName=a[0];
//         person.lName=a[1];

//     }

// }
//     // console.log(person);

// // function funname(){
// //     return `${person.fName}     ${person.lName}`;
// // }
// try{
// person.fullName=1;
// }
//  catch(e){
//      alert(e);
//  }
// console.log(person.fullName);

// { 
//     var a=4;
//     }
// console.log(a);

// for( var i=0; i<5; i++)
// {

// }
// console.log(i);

// let ab=5;
// function xyz(){
//     let a=5;
// }

let arr=[1,2,3,4];

let ans=arr.reduce((accumlator,currentvalue)=>accumlator+currentvalue,0);
console.log(ans);