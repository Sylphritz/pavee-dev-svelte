import { getAllPosts } from '$lib/api/posts'
import type { LayoutServerLoad } from './$types'

const LATEST_POST_COUNT = 5

export const load: LayoutServerLoad = async () => {
	const params = {
		page: 1,
		perPage: LATEST_POST_COUNT
	}

	const results = await getAllPosts(params)

	return {
		latestPosts: results.data
	}
}
