import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

const UPPER_INPUT = '.Camel-case_this{}';
const LOWER_INPUT = '.camel-case_this{}';

const UPPER_OUTPUT = '.CamelCaseThis{}';
const LOWER_OUTPUT = '.camelCaseThis{}';

const FORCE_LOWER = { forceCaseStyle: 'lowerCamelCase' };
const FORCE_UPPER = { forceCaseStyle: 'UpperCamelCase' };
const FORCE_OFF = { forceCaseStyle: 'off' };

function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.deepEqual(result.css, output);
            t.deepEqual(result.warnings().length, 0);
        });
}

test('Transforms UpperInput to camelcase, default options', t=> {
    return run(t, UPPER_INPUT, LOWER_OUTPUT, {});
});

test('Transforms lowerInput to camelcase, default options', t=> {
    return run(t, LOWER_INPUT, LOWER_OUTPUT, {});
});

test('Transforms UpperInput to camelcase, forced lower', t=> {
    return run(t, UPPER_INPUT, LOWER_OUTPUT, FORCE_LOWER);
});

test('Transforms lowerInput to camelcase, forced lower', t=> {
    return run(t, LOWER_INPUT, LOWER_OUTPUT, FORCE_LOWER);
});

test('Transforms UpperInput to camelcase, forced Upper', t=> {
    return run(t, UPPER_INPUT, UPPER_OUTPUT, FORCE_UPPER);
});

test('Transforms lowerInput to camelcase, forced Upper', t=> {
    return run(t, LOWER_INPUT, UPPER_OUTPUT, FORCE_UPPER);
});

test('Transforms UpperInput to camelcase, forced off', t=> {
    return run(t, UPPER_INPUT, UPPER_OUTPUT, FORCE_OFF);
});

test('Transforms lowerInput to camelcase, forced Upper', t=> {
    return run(t, LOWER_INPUT, LOWER_OUTPUT, FORCE_OFF);
});
