import { getAllPosts } from '$lib/api/posts'
import { POSTS_PER_PAGE } from '$lib/constants'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
	const dataParams = {
		page: Number(params.pageNumber),
		perPage: POSTS_PER_PAGE
	}

	return {
		title: 'Posts',
		...(await getAllPosts(dataParams))
	}
}
