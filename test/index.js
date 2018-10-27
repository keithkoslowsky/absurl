const assert = require('assert');

const absurl = require('../src/index');
absurl.domain = 'example.com';
absurl.protocol = 'https';
absurl.uriSchemes = {
    'http': true,
    'https': true,
    'javascript': true,
    'mailto': true,
    'phone': true,
    'telephone': true,
};

// protocol independent
assert.equal(
    absurl.url('//example.com/foobar'),
    'https://example.com/foobar',
    absurl.url('//example.com/foobar') + ' => ' + 'https://example.com/foobar'
);

// relative with forward slash
assert.equal(
    absurl.url('/foobar'),
    'https://example.com/foobar',
    absurl.url('/foobar') + ' => ' + 'https://example.com/foobar'
);

// relative no slash
assert.equal(
    absurl.url('foobar'),
    'https://example.com/foobar',
    absurl.url('foobar') + ' => ' + 'https://example.com/foobar'
);

// valid uris
assert.equal(
    absurl.url('https://example.com'),
    'https://example.com',
    absurl.url('https://example.com') + ' => ' + 'https://example.com'
);

// http to https local
assert.equal(
    absurl.url('http://example.com'),
    'https://example.com',
    absurl.url('http://example.com') + ' => ' + 'https://example.com'
);

// external url http
assert.equal(
    absurl.url('http://foobar.com'),
    'http://foobar.com',
    absurl.url('http://foobar.com') + ' => ' + 'http://foobar.com'
);

// external url https
assert.equal(
    absurl.url('https://foobar.com'),
    'https://foobar.com',
    absurl.url('https://foobar.com') + ' => ' + 'https://foobar.com'
);

assert.equal(
    absurl.url('mailto:foobar@example.com'),
    'mailto:foobar@example.com',
    absurl.url('mailto:foobar@example.com') + ' => '
	+ 'mailto:foobar@example.com'
);

assert.equal(
    absurl.url('javascript:void(1)'),
    'javascript:void(1)',
    absurl.url('javascript:void(1)') + ' => ' + 'javascript:void(1)'
);


