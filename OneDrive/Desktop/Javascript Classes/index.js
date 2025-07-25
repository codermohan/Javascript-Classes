//var obj={
//    name:'Mohan krishna',
//    age:26,
//    getName:function() {
//        console.log('some value');
//    },
 //   Phone: [1222112233, 1122221111],
//    address:{
 //       streetname:'gopal nagar',
  //      village:'Ongole',
   //     zipcode:523001
    //}
//}
//console.log(obj);
//-----------------------------------------------------------------------------------------------------

var obj={
    age:10,
    name:'sai'
};
console.log(obj,'General Object Model');

var obj2=Object.create(obj);
console.log(obj2,'object create method');

function add(){
    this.a =10,
    this.b =20
}
const addObj = new add();
console.log(addObj,'Functional or constructor obj');

class Add{
    a=10;
    b=20;
}
const classObj = new Add();
console.log(classObj,'class based object');
function sub(){
    this.a=10,
    this.b=20
}
const subObj = new sub();
console.log(subObj,"no function parameters");