import { exec } from 'child_process';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function setOutput(name: string, value: string) {
  return exec(`echo "${name}=${value}" >> $GITHUB_OUTPUT`);
}

type Props = Record<string, string>;

export function setOutputs<T extends Props>(outputs: T): void {
  Object.entries(outputs).forEach(([key, value]) => {
    setOutput(key, value);
  });
}
