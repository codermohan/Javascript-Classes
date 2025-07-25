var obj = {};

Object.defineProperty(obj,'age',{
    value:33,
    writable:true
})

console.log(obj);

obj.age=40;
console.log(obj);

var obj2={};
Object.defineProperties(obj2,{
    name:{
        value:'Mohan',
        writable:true
    },
    age:{
        value:33,
        writable:true
    },
    id:{
        value: 3
    }
});

console.log('Multi Properties',obj2);
obj2['name']='Krishna';
console.log("After changing:",obj2);