import { debug, getInput, setFailed } from '@actions/core';
import { setOutputs } from './helpers';
import { wait } from './wait';

async function run(): Promise<void> {
  try {
    const ms: string = getInput('milliseconds');
    debug(`Waiting ${ms} milliseconds ...`);

    debug(new Date().toTimeString());
    await wait(parseInt(ms, 10));
    const time = new Date().toTimeString();
    debug(time);

    setOutputs({ time });
  } catch (error) {
    if (error instanceof Error) setFailed(error.message);
  }
}

run();
