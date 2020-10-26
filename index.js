module.exports = function camelcaser(options) {
    options = options || {};
    let forceCaseStyle = options.forceCaseStyle || 'lowerCamelCase';
    return {
        postcssPlugin: 'camelcaser',
        Rule(rule) {
            let output = rule.selector.replace(/(-|_)+\w/g, function (match) {
                return match[match.length - 1].toUpperCase();
            });
            switch (forceCaseStyle) {
                case 'off':
                    break;
                case 'UpperCamelCase':
                    output = output.replace(/(\W)[a-z]/g, function (match) {
                        return match.toUpperCase();
                    });
                    break;
                case 'lowerCamelCase':
                default:
                    output = output.replace(/(\W)[A-Z]/g, function (match) {
                        return match.toLowerCase();
                    });
                    break;
            }
            rule.selector = output;
        },
    };
};

module.exports.postcss = true;
