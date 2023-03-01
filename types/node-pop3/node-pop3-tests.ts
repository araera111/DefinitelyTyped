import Pop3Command from './index';

const pop3 = new Pop3Command({
    host: 'exmaple.co.jp',
    user: 'exampleUser',
    password: 'examplePassword',
});

// $ExpectType Promise<string[][]>
pop3.UIDL(1);

// $ExpectType Promise<string[][]>
pop3.LIST(1);

// @ts-expect-error
pop3.RETR();

// $ExpectType Promise<string>
pop3.RETR(1);
