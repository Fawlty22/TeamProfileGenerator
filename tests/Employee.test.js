const Employee = require('../lib/Employee')

test('creates Employee object', () => {
    const employee = new Employee('Dave', 2, 'jimmy@gmail.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe(2);
    expect(employee.email).toBe('jimmy@gmail.com');
})