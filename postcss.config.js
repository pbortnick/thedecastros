// Next.js allows for plugins to be specified as an array of arrays, but this
// isn't supported by Vitest, so use a helper function to convert the array of
// arrays to an object.
function standardSyntax(plugins) {
	const _plugins = {}
	plugins.forEach((p) => {
		if (Array.isArray(p)) {
			_plugins[p[0]] = p[1]
		} else {
			_plugins[p] = {}
		}
	})
	return _plugins
}

const baseConfig = {
	plugins: [
		[
			'postcss-preset-env',
			{
				stage: 3,
				browsers: ['defaults'],
				features: {
					'nesting-rules': true,
					'custom-media-queries': {
						'--small': '(max-width: 767px)',
						'--small-up': '(min-width: 0px)',
						'--medium': '(min-width: 768px) and (max-width: 1119px)',
						'--medium-up': '(min-width: 768px)',
						'--large': '(min-width: 1120px)',
					},
					'custom-properties': false,
				},
			},
		],
		['postcss-normalize', { browsers: 'defaults' }],
	],
}

module.exports = {
	...baseConfig,
	plugins: standardSyntax(baseConfig.plugins),
}
