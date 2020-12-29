// -*- coding: utf-8, tab-width: 2 -*-

import test from 'p-tape';
import equal from 'equal-pmb';

import hf from '..';


test('.header', (t) => {
  t.plan(2);
  const actual = String(hf.header());
  equal(actual.slice(-4), '--\n\n');
  equal.lines(actual, [
    '%YAML 1.1',
    '# -*- coding: UTF-8, tab-width: 4 -*-',
    '---',
    '',
    '',
  ]);
  t.equal(hf.header({ tabw: 2 })[1],
    '# -*- coding: UTF-8, tab-width: 2 -*-');
  t.ok(true);
});


test('.footer', (t) => {
  t.plan(1);
  const actual = String(hf.footer());
  equal(actual, '\n...\n');
  t.ok(true);
});


test('.wrapBody', (t) => {
  t.plan(3);
  const input = 'foo: bar';
  const want = [
    '%YAML 1.1',
    '# -*- coding: UTF-8, tab-width: 4 -*-',
    '---',
    '',
    input,
    '',
    '...',
  ];

  const st = hf.wrapBody(input);
  t.equal(typeof st, 'string');
  equal.named('wrap string', () => equal.lines(st, [...want, '']));

  const ar = hf.wrapBody([input]);
  t.equal(typeof ar, 'object');
  equal.named('wrap array', () => equal.lists(ar, want));

  t.ok(true);
});













console.info('+OK basics test passed.');
