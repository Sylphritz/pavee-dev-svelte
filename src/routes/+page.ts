import type { PageLoad } from './$types'

export const load: PageLoad = async () => {
	return {
		title: 'Pavee Udomkarnpaisarn - Pavee.dev'
	}
}

export const prerender = true
