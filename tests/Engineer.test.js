const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates a new Engineer object', () => {
    const engineer = new Engineer('Phil', 1234, 'PhilTheEngineer@gmail.com', 124);

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(Number));
    expect(engineer.getRole()).toEqual('Engineer')

})