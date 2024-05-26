import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	schema: [
		{
			'https://maximum-muskrat-91.hasura.app/v1/graphql': {
				headers: {
					'x-hasura-admin-secret':
						'MnMAgKxVZGKVBzJOjO0R2e5ObZwf605im0MwOzBiXBYTsiXFGWBByH602IAEpqRT',
				},
			},
		},
	],
	documents: ['src/**/*.graphql'],
	generates: {
		'./src/gql/': {
			preset: 'client',
		},
	},
}

export default config
