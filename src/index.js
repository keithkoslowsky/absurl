'use strict';

exports.domain = '';
exports.protocol = 'http';
exports.uriSchemes = {
    'http': true,
    'https': true,
    'javascript': true,
    'mailto': true,
    'phone': true,
    'telephone': true,
};

exports.url = (str) => {
    if (! this.domain) {console.log('domain must be set.'); process.exit(1); }
    str = str.trim();

    if (str.startsWith('//')) return this.protocol + ':' + str;

    if (str.startsWith('/')) return this.protocol + '://' + this.domain + str;
    
    for (const scheme of Object.keys(this.uriSchemes)) {
	if (scheme === 'http'
	    && str.startsWith('http://' + this.domain)
	    && this.protocol === 'https') {
	    return 'https' + str.slice(4);
	} else if (str.startsWith(scheme + ':')) return str;
    }

    return this.protocol + '://' + this.domain + '/' + str;
};
