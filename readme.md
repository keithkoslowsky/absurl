

## Installation
`npm install absurl`

## Basic example
```js
const absurl = require('absurl');
absurl.domain = 'example.com';
console.log(absurl.url('/foobar'));
// output: http://example.com/foobar
```

To make your links always be https:
```js
absurl.protocol = 'https';
```

The above will make the URL be https, assuming it matches the `domain`, even if the URL is http.

## Defaults
```js
absurl.domain = ''; // none, this must be set by the user
absurl.protocol = 'http'; // optional
absurl.uriSchemes = { // optional
    'http': true,
    'https': true,
    'javascript': true,
    'mailto': true,
    'phone': true,
    'telephone': true,
};
```
If your website is https, then be sure to set `absurl.protocol = 'https'`.

Most links these days will be one of the `absurl.uriSchemes` but if it is not, then you will need to define uriSchemes yourself. For instance, to include `ftp` and all the defaults, then you would do:

```js
absurl.uriSchemes = { // optional, defaults are in this example
    'ftp': true,		  
    'http': true,
    'https': true,
    'javascript': true,
    'mailto': true,
    'phone': true,
    'telephone': true,
};
```
*Note: your uriSchemes can be anything you want, however, the URL MUST be uriScheme and then a :. For example, `ftp://foobar.com/file`. If your URLs lack a :, it will not work.