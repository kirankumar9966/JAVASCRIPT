class Savings_Account{
    min_Bal=500;
    constructor(id,name,amount){
        this.id=id;
        this.name=name;
        this.amount=amount;
    }
    open_Acct(){}
    deposit(){}
    get_Bal(){
        return this.amount-this.min_Bal
    }
    get_Statement(){}
    close_Account(){}
}
let c1 =new Savings_Account(101,"kiran",65000);
let c2 =new Savings_Account(102,"upendra",75000);
console.log(c1.get_Bal())
console.log(c2.get_Bal())
console.log(c1);
console.log(c2);

/*let kiran_bal =c1.get_Bal()
let upendra_bal=c2.get_Bal()
console.log(kiran_bal);
console.log(upendra_bal);
console.log(new Savings_Account(101,"kiran",65000).get_Bal());
console.log(new Savings_Account(102,"upendra",75000).get_Bal());*/