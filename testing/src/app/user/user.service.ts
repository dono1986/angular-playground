export class UserService {
    userName = 'Max';

    test: number[] = [1, 2, 3];

    user = {
        name: 'Max'
    };

    getNumbers() {
        console.log(this.test.slice());
        return this.test.slice();
    }

    getUser() {
        return this.user;
    }

    getUserName(): string {
        console.log(this.userName);
        return this.userName;
    }

    logShit() {
        console.log('shit');
    }
}
