interface printToFileProps {
  text: string;
  callback: () => void;
}

export function printToFile({ callback, text }: printToFileProps): void {
  console.log(text);
  callback();
}

export type MutationFunction = (v: number) => number;

export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}
