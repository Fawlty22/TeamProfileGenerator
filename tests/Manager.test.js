const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager')

test('creates a new Manager object', () => {
    const manager = new Manager('Bill', 45229, 'BillytheKid@gmail.com', 608);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.getRole()).toEqual('Manager')
})