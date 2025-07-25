var obj = {
    a: 10,
    b: 20,
    getMessage: function(param1){
        return this.a+this.b+param1;
    }
};

console.log("The function is:",obj.getMessage(25));

function Add(param1){
    this.a = 20;
    this.b =35;
    this.getMessage = function(innerparam1){
        return this.a+this.b+param1+innerparam1;
    }
}

const addObj = new Add(22);
console.log(addObj.getMessage(100));


class Addition{
    a=10;
    b=20;
    c;
    constructor(param1){
        this.c = param1;
    }
    getMessage(innerpar){
        return this.a+this.b+this.c+innerpar;
    }
}

const addObj1 = new Addition(200);
console.log("Printed Message",addObj1.getMessage(26));