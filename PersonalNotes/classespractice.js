"use strict";
class Department {
    constructor(n, id) {
        this.employees = [];
        this.name = n;
        this.id = id;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployee() {
        console.log(this.employees);
    }
    static createEmployee(person) {
        return { name: name };
    }
}
//Cannot create an instan1ce of an abstract class
Department.fiscalYear = 2020;
// const accounting = new Department("d1","Accounting");
// console.log(accounting)
// accounting.describe()
// accounting.addEmployee('manu')
// accounting.addEmployee('max')
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log("IT department using abstract method");
    }
}
const it = new ITDepartment('d2', ['Manu']);
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = [];
        this.reports = reports;
    }
    describe() {
        console.log("accounting using and making its describe login using the abstract");
    }
    addReports(text) {
        this.reports.push(text);
    }
    removeLastReport() {
        this.reports.pop();
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
