// import { Client, cacheExchange, fetchExchange } from 'urql'

// const client = new Client({
// 	url: process.env.HASURA_URL as string,
// 	exchanges: [cacheExchange, fetchExchange],
// 	fetchOptions() {
// 		return {
// 			headers: {
// 				'x-hasura-admin-secret': process.env.HASURA_SECRET as string,
// 			},
// 		}
// 	},
// })

import {
	cacheExchange,
	createClient,
	fetchExchange,
	type AnyVariables,
	type DocumentInput,
} from '@urql/core'
import { registerUrql } from '@urql/next/rsc'

const makeClient = () => {
	return createClient({
		url: process.env.HASURA_URL as string,
		exchanges: [cacheExchange, fetchExchange],
		fetchOptions() {
			return {
				headers: {
					'x-hasura-admin-secret': process.env.HASURA_SECRET as string,
				},
			}
		},
	})
}

const { getClient } = registerUrql(makeClient)

type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}

export default function cmsQuery<
	Data = unknown,
	Variables extends AnyVariables = AnyVariables,
>(
	args: {
		query: DocumentInput<Data, Variables>
	} & (Variables extends Exact<{ [key: string]: never }>
		? // eslint-disable-next-line @typescript-eslint/ban-types
			{}
		: { variables: Variables }),
) {
	return getClient()
		.query(
			args.query,
			'variables' in args && args.variables
				? args.variables
				: ({} as Variables),
		)
		.toPromise()
}
