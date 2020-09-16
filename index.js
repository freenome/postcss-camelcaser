module.exports = function camelcaser(options) {
    return {
        postcssPlugin: 'camelcaser',
        Root(css) {
            options = options || {};
            var forceCaseStyle = options.forceCaseStyle || 'lowerCamelCase';

            css.walkRules(function (rule) {
                var output = rule.selector.replace(/(-|_){1,}\w/g,
                    function (match) {
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
            });
        }
    };
};

module.exports.postcss = true;
