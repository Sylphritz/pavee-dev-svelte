import { marked } from 'marked'

import { getPostBySlug } from '$lib/api/posts'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
	const data = await getPostBySlug(params.slug)
	return {
		...data,
		body: data.body ? marked.parse(data.body) : ''
	}
}
