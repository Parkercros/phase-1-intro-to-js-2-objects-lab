// initialize employee object
const employee = { name: 'John Doe', streetAddress: '123 Main St' };

// updateEmployeeWithKeyAndValue() function
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}

// destructivelyUpdateEmployeeWithKeyAndValue() function
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// deleteFromEmployeeByKey() function
function deleteFromEmployeeByKey(employee, key) {
    const { [key]: deletedKey, ...updatedEmployee } = employee;
    return updatedEmployee;
}

// destructivelyDeleteFromEmployeeByKey() function
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

module.exports = {
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey,
}


