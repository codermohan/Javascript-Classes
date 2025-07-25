var simpleObj={
    age:10,
    name:'Krishna',
    address:'ongole'
};

const {age,...remainingValues} = {...simpleObj};
//const {age,address} = {...simpleObj};
console.log('Age:',age);
console.log('Remaining Values :',remainingValues);
//console.log('Address:',address);


var arr = ['Mohan','venkata','krishna'];

const [firstName, secondName, thirdName] = [...arr];
console.log('FirstName:',firstName);

var arrOfObjs = [
    {
    cAge:10,
    cname:'Krishna',
    caddress:'ongole'
},
{
    cAge:20,
    cname:'Krish',
    caddress:'ong'
},
{
    cAge:11,
    cname:'Kris',
    caddress:'Unknown'
}
];

const [,,{cAge}]=[...arrOfObjs];
console.log("output is:",cAge);