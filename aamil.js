// problem-1: check peime.
let num= 5;

let fac=0;
for(let i=1; i<=num; i++){
  if(num%i==0){
    fac++
}
}
if(fac==2){
console.log(num, "is prime")
}
else{
console.log(num, "is not prime")
}

//problem-2: palindrome

let str="samas";

let bag= "";
for(let i=str.length-1; i>=0; i--){
bag = bag + str[i];
}
if(bag==str){
console.log("Yes");
}
else {
console.log("No")
}
