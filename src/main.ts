import * as core from '@actions/core';
import { setOutput } from './helpers';
import { wait } from './wait';

async function run(): Promise<void> {
  try {
    const ms: string = core.getInput('milliseconds');
    core.debug(`Waiting ${ms} milliseconds ...`); // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true

    core.debug(new Date().toTimeString());
    await wait(parseInt(ms, 10));
    const time = new Date().toTimeString();
    core.debug(time);

    setOutput('time', time);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
