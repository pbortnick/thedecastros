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
		['src/gql/types.ts']: {
			plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
			config: {
				enumsAsTypes: true,
				pureMagicComment: true,
				scalars: {
					date: 'unknown',
				},
			},
		},
	},
	ignoreNoDocuments: true,
}

export default config
