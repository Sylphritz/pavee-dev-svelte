import type { PageLoad } from './$types'

export const load: PageLoad = async () => {
	return {
		title: 'Blog - Pavee.dev'
	}
}

export const prerender = true
