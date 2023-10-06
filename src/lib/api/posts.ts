import { cmsClient } from './client/cmsClient'
import type { GetMultipleWithPaginationProps, Post, Posts } from './types'

export const getAllPosts = async ({
	page,
	perPage
}: GetMultipleWithPaginationProps): Promise<Posts> => {
	return await cmsClient({
		path: '/posts',
		query: {
			page,
			perPage
		}
	})
}

export const getPostBySlug = async (slug: string): Promise<Post> => {
	return await cmsClient({
		path: `/posts/${slug}`
	})
}
