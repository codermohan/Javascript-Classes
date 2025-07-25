var simpleObj={
    age:10,
    name:'sai'
};
console.log("whole Object",simpleObj);
const keys = Object.keys(simpleObj);
console.log('keys of object',keys);
for(let i=0;i<keys.length;i++){
    console.log('key:',keys[i]);
    console.log('Values:',simpleObj[keys[i]]);
}



console.log('************for in Loop***************');
for(const key in simpleObj){
    console.log('key:',key);
    console.log('Values:',simpleObj[key]);
}

console.log('*************for each loop****************');
keys.forEach((key)=>{
  console.log('key:',key);
  console.log('Values:',simpleObj[key]);  
})

console.log('*****************for of****************');
for(const iterator of keys){
    console.log('key:',iterator);
    console.log('Values:',simpleObj[iterator]);
}