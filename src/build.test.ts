import { execFileSync, ExecFileSyncOptions } from 'child_process';
import { join } from 'path';
import { test } from 'vitest';

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  const exec = process.execPath;
  const path = join(__dirname, '..', 'build', 'index.js');
  const options: ExecFileSyncOptions = {
    env: {
      INPUT_MILLISECONDS: '500',
    },
  };
  console.log(execFileSync(exec, [path], options).toString());
});
