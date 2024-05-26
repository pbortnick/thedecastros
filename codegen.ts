import dotenv from 'dotenv'
import type { CodegenConfig } from '@graphql-codegen/cli'

dotenv.config({
	path: './.env.local',
	override: true,
})

const config: CodegenConfig = {
	schema: [
		{
			[process.env.HASURA_URL as string]: {
				headers: {
					'x-hasura-admin-secret': process.env.HASURA_SECRET as string,
				},
			},
		},
	],
	documents: ['src/**/*.graphql'],
	generates: {
		'./src/gql/': {
			preset: 'client',
			presetConfig: {
				gqlTagName: 'gql',
			},
		},
	},
	ignoreNoDocuments: true,
}

export default config
