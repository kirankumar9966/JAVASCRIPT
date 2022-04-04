class Emp{
    constructor(a,b,c){
        this.emp_Id=a;
        this.emp_Name=b;
        this.esal=c;
    }
    get_Emp_Details(){
       console.log("Emp_Name:",this.emp_Name)
    }
} 
    let e1 =new Emp(101,"kiran",30000)
    let e2 =new Emp(102,"kiru",40000)
    console.log(e1);
    console.log(e2);
    /*e1.get_Employee_Details()
    e2.get_Employee_Details()*/
