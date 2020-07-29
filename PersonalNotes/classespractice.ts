abstract class Department {
//Cannot create an instan1ce of an abstract class
    static fiscalYear = 2020
    public name: string;
   protected readonly id:string;
   protected employees: string[] =[]
    constructor(n: string, id:string){
        this.name = n
        this.id = id
    }

    abstract describe(this: Department):void

    addEmployee(employee:string){
        this.employees.push(employee)
    }
    printEmployee(){
        console.log(this.employees)
    }

   static createEmployee(person:string){
        return {name:name}
    }
}

// const accounting = new Department("d1","Accounting");
// console.log(accounting)
// accounting.describe()
// accounting.addEmployee('manu')
// accounting.addEmployee('max')


class ITDepartment extends Department{
 admins:string[]
constructor(id:string,  admins:string[]){
    super(id,'IT')
    this.admins = admins
}
describe(){
    console.log("IT department using abstract method")
}
}

const it = new ITDepartment('d2',['Manu'])

class AccountingDepartment extends Department{
    private reports:string[] = []
    constructor(id:string,reports:string[]){
        super(id, 'Accounting')
        this.reports = reports

        
    }
    describe(){
        console.log("accounting using and making its describe login using the abstract")
    }

    addReports(text:string){
        this.reports.push(text)
    }

    removeLastReport(){
        this.reports.pop()
    }
    addEmployee(employee:string){
        this.employees.push(employee)
    }
}