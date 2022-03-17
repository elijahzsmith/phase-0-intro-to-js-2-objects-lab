// Write your solution in this file!

const employee = {
    name : "John",
    streetAddress : "123 Open Rd"
}

const updateEmployeeWithKeyAndValue = employee => {
    const newEmployee = { ...employee, name: "Sam", streetAddress: "11 Broadway"}; 
    return newEmployee;
}

const destructivelyUpdateEmployeeWithKeyAndValue = employee => { 
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
}

const deleteFromEmployeeByKey = employee => {
    const newEmployee = { ...employee }
    delete newEmployee.name;
    return newEmployee
}

const destructivelyDeleteFromEmployeeByKey = employee => {
    delete employee.name;
    return employee;
}
