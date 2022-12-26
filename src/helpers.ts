import { echo } from 'shelljs';

export function setOutput(name: string, value: string): void {
  echo(`"${name}=${value}" >> $GITHUB_OUTPUT`);
}

type Props = Record<string, string>;

export function setOutputs<T extends Props>(outputs: T): void {
  Object.entries(outputs).forEach(([key, value]) => {
    setOutput(key, value);
  });
}
