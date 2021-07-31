interface addNumbersProps {
  a: number;
  b: number;
}

export function addNumbers({ a, b }: addNumbersProps): number {
  return a + b;
}

export const addStrings = (str1: string, str2: string): string =>
  `${str1} ${str2}`;

export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

export const printFormat = (title: string, param: string | number): void =>
  console.log(`${title} ${param}`);

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`data fetched from ${url}`);

interface introduceProps {
  salutation: string;
  names: string[];
}

function introduce({ names, salutation }: introduceProps): string {
  return `${salutation} ${names.join(' ')}`;
}

interface getNameProps {
  user: {
    first: string;
    last: string;
  };
}

export function getName({ user }: getNameProps): string {
  return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`;
}
