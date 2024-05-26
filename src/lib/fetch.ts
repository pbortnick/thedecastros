import {
	createClient,
	fetchExchange,
	cacheExchange,
	type AnyVariables,
	type DocumentInput,
	type OperationContext,
} from '@urql/core'
import { vercelStegaSplit } from '@vercel/stega'

type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}

const IS_IN_PREVIEW = process.env.HASHI_ENV === 'preview'

// Return draft content from Dato app is in preview mode
// Default to production endpoint if undefined to avoid unexpectedly exposing draft content
let url = process.env.HASHI_DATO_ENVIRONMENT
	? `https://graphql.datocms.com/environments/${process.env.HASHI_DATO_ENVIRONMENT}`
	: 'https://graphql.datocms.com'

if (IS_IN_PREVIEW) url += '/preview'

const datoProjectSlug = process.env.HASHI_DATO_PROJECT || 'hashicorp'

const visualEditingHeaders = IS_IN_PREVIEW
	? {
			'X-Visual-Editing': 'vercel-v1',
			'X-Base-Editing-Url': `https://${datoProjectSlug}.admin.datocms.com`,
		}
	: {}

const token = process.env.HASHI_DATO_TOKEN || '2f7896a6b4f1948af64900319aed60'

const defaultHeaders = { Authorization: token }

const client = createClient({
	url,
	exchanges: [fetchExchange],
	fetchOptions() {
		return {
			headers: {
				...defaultHeaders,
			},
		}
	},
})

function buildContext(
	context?: Partial<OperationContext>,
	options?: CmsQueryOptions,
): Partial<OperationContext> {
	let builtContext: Partial<OperationContext> = {}
	if (context) {
		builtContext = { ...context }
	}

	if (options?.enableVisualEditing && IS_IN_PREVIEW) {
		builtContext.fetchOptions = {
			headers: {
				// These fetchOptions will override the built-in fetchOptions,
				// so we need to re-apply the defaultHeaders.
				...defaultHeaders,
				...visualEditingHeaders,
			},
		} as RequestInit
	}

	return builtContext
}

interface CmsQueryOptions {
	enableVisualEditing?: boolean
}

export function cmsQuery<
	Data = any,
	Variables extends AnyVariables = AnyVariables,
>(
	args: {
		query: DocumentInput<Data, Variables>
		context?: Partial<OperationContext>
		options?: CmsQueryOptions
	} & (Variables extends Exact<{ [key: string]: never }>
		? // eslint-disable-next-line @typescript-eslint/ban-types
			{}
		: { variables: Variables }),
) {
	return client
		.query(
			args.query,
			'variables' in args && args.variables
				? args.variables
				: ({} as Variables),
			args.context || args.options
				? buildContext(args.context, args.options)
				: undefined,
		)
		.toPromise()
}

/**
 * Takes in a Vercel Visual Editing string and returns the string without
 * hidden data.
 */
export function v<T extends string>(s: T): T {
	return vercelStegaSplit(s).cleaned as T
}

export default client

export { createClient, fetchExchange, cacheExchange }
