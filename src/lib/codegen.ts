const path = require('node:path')
const { printSchema } = require('graphql')
const { loadSchema } = require('@graphql-tools/load')
const { UrlLoader } = require('@graphql-tools/url-loader')
const { generate } = require('@graphql-codegen/cli')

function resolveReactComponentFragments(dependencies, cwd) {
	const components = Object.keys(dependencies).filter((name) =>
		name.startsWith('@hashicorp/react-'),
	)

	return components.map((packageName) =>
		path.join(
			path.dirname(
				require.resolve(path.join(packageName, 'package.json'), {
					paths: [cwd],
				}),
			),
			'*.graphql',
		),
	)
}

/**
 *
 * @param {string} datoUrl
 * @param {Record<string, string>} datoHeaders
 * @param {Record<string, string>} dependencies
 * @param {string} cwd
 */
async function generateDatoTypes(datoUrl, datoHeaders, dependencies, cwd) {
	const schema = await loadSchema(datoUrl, {
		headers: { ...datoHeaders, 'X-Exclude-Invalid': 'true' },
		loaders: [new UrlLoader()],
	})
	console.log('Creating TypeScipt definition file for Dato models...')

	await generate(
		{
			schema: printSchema(schema),
			documents: [
				...resolveReactComponentFragments(dependencies, cwd),
				'./lib/**/*.graphql',
				'./layouts/**/*.graphql',
				'./components/**/*.graphql',
				'./pages/**/*.graphql',
				'./views/**/*.graphql',
				'./app/**/*.graphql',
			],
			generates: {
				[`${process.cwd()}/types/dato.ts`]: {
					plugins: [
						'typescript',
						'typescript-operations',
						'typed-document-node',
					],
					config: {
						strictScalars: true,
						// TODO: change this to unknown
						defaultScalarType: 'any',
						scalars: {
							BooleanType: 'boolean',
							CustomData: 'Record<string, unknown>',
							IntType: 'number',
							FloatType: 'number',
							Date: 'string',
							DateTime: 'string',
							ItemId: 'string',
							// TODO: change this to unknown
							JsonField: 'any',
							MetaTagAttributes: 'Record<string, string>',
							UploadId: 'string',
						},
						namingConvention: {
							enumValues: 'keep',
						},
						enumsAsTypes: true,
						pureMagicComment: true,
					},
				},
				[`${process.cwd()}/schema.json`]: {
					plugins: ['introspection'],
					config: {
						minify: true,
					},
				},
			},
			hooks: {
				afterAllFileWrite: process.env.CI
					? []
					: ['npx @biomejs/biome format --write --files-max-size 10000000'],
			},
			config: {
				skipDocumentsValidation: {
					ignoreRules: ['OverlappingFieldsCanBeMerged'],
				},
			},
		},
		true,
	)
}

module.exports = { generateDatoTypes }
