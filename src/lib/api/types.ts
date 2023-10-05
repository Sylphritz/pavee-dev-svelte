export interface GetMultipleWithPaginationProps {
	page: number
	perPage: number
}

export interface Pagination {
	page: number
	perPage: number
	total: number
}

export interface Category {
	name: string
	slug: string
	description: string
}

export interface Post {
	id: number
	userId: string
	title: string
	slug: string
	metaDescription: string
	body: string
	categoryId: number
	category: Category
	createdAt: string
	updatedAt: string
}

export interface Posts {
	pagination: Pagination
	data: Post[]
}
