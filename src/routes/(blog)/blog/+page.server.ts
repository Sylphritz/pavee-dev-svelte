import { getAllPosts } from '$lib/api/posts'
import { POSTS_PER_PAGE } from '$lib/constants'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const params = {
		page: 1,
		perPage: POSTS_PER_PAGE
	}

	return {
		title: 'Posts',
		...(await getAllPosts(params))
	}
}
