import { CMS_API_HOST, CMS_API_PREFIX, CMS_USER_ID } from '$env/static/private'
import type { CmsClientProps } from './types'

export const cmsClient = async ({ path, query }: CmsClientProps) => {
	let queryString = `?userId=${CMS_USER_ID}`

	if (query) {
		const keyValueStrings = Object.entries(query).map(
			([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
		)
		queryString += `&${keyValueStrings.join('&')}`
	}

	return (
		await fetch(`${CMS_API_HOST}${CMS_API_PREFIX}${path}${queryString}`, {
			method: 'GET'
		})
	).json()
}
