import test from 'ava';
import execa from 'execa';
import m from './';

test('lmgtfy', t => {
  t.is(m('unicorns github'), 'http://lmgtfy.com/?q=unicorns%20github');
});

test('cli', async t => {
  t.is(
    await execa.stdout('./cli.js', ['unicorns github']),
    'http://lmgtfy.com/?q=unicorns%20github'
  );

  t.is(
    await execa.stdout('./cli.js', ['unicorns', 'github']),
    'http://lmgtfy.com/?q=unicorns%20github'
  );
});
