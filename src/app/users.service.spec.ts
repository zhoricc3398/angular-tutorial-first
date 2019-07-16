import { UsersService } from "./users.service";

describe('Users Service tests', () => {
    let service: UsersService;

    beforeEach(() => {
        service = new UsersService();
    })

    it('Default users should be empty', () => {
        expect(service.users.length).toBe(0);
    });

    it('Method addUser should add user to users', () => {
        service.addUser({ test: 'test' });
        expect(service.users[0].test).toBe('test');
    });

    it('Method getUsers should return added user', () => {
        expect(service.getUsers()).toBe(service.users)
    });

    it('Method removeUser should remove specified user', () => {
        service.addUser({ test: 'test' });
        service.addUser({ test1: 'test1' });
        expect(service.removeUser(0)).toBe(service.users)
        expect(service.users.length).toBe(1)
        expect(service.users[0].test1).toBe('test1')
    })

    it('Method verify should return specified user', () => {
        const test = { email: 'mail', password: 'pass' };
        service.addUser(test);
        expect(service.verify('mail', 'pass')).toBe(test)
    })

});