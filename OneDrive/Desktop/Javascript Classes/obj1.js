var obj = {
    age: 10
};

obj.name = 'Krish';
obj['address'] = 'Ongole';

const arr=[1,2,3,55];
obj['arr']=arr;

const obj1={
    mobile: 9292929292,
    state: 'AP'
};
obj.next=obj1;

console.log("Object  Values:",obj);