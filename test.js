import test from 'ava';
import execa from 'execa';
import lmgtfy from '.';

test('lmgtfy', t => {
  t.is(lmgtfy('unicorns github'), 'https://lmgtfy.com/?q=unicorns%20github');
});

test('cli', async t => {
  t.is(
    await execa.stdout('./cli.js', ['unicorns github']),
    'https://lmgtfy.com/?q=unicorns%20github'
  );

  t.is(
    await execa.stdout('./cli.js', ['unicorns', 'github']),
    'https://lmgtfy.com/?q=unicorns%20github'
  );
});
