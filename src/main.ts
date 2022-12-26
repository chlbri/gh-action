import * as core from '@actions/core';
import { echo } from 'shelljs';
import { wait } from './wait';

async function run(): Promise<void> {
  try {
    const ms: string = core.getInput('milliseconds');
    core.debug(`Waiting ${ms} milliseconds ...`); // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true

    core.debug(new Date().toTimeString());
    await wait(parseInt(ms, 10));
    core.debug(new Date().toTimeString());

    echo(
      '-e',
      `"time=${new Date().toLocaleTimeString()}" >> $GITHUB_OUTPUT`,
    );
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
