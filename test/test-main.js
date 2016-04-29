import test from 'ava'

const x = 1

test('if ava is running', t => {
	t.is(true, x === 1)
})
