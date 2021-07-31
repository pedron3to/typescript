let userName: string = 'pedro';
let hasLoggedIn: boolean = true;

userName += 'neto';
console.log(userName);

let myNumber: number = 10;

let myRegex: RegExp = /foo/;

const names: string[] = userName.split(' ');

const myValues: Array<Number> = [1, 2, 3];

interface Person {
  first: string;
  last: string;
}

const myPerson: Person = {
  first: 'pedro',
  last: 'neto',
};

const ids: Record<number, string> = {
  10: 'a',
  20: 'b',
};

ids[30] = 'c';

const out: number[] = [1, 2, 3].map((v) => v * 10);
