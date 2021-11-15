const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern')

test('creates a new Intern object', () => {
    const intern = new Intern('Isaac', 19755, 'IsaacTheIntern@gmail.com', 'Harvard');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.getRole()).toEqual('Intern')
})