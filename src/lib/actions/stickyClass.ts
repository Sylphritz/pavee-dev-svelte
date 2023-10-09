import type { Action } from 'svelte/action'

export const stickyClass: Action<HTMLElement, string> = (node, className) => {
	const observer = new IntersectionObserver(
		([event]) => {
			event.target.classList.toggle(className, event.intersectionRatio < 1)
		},
		{
			threshold: 1
		}
	)

	observer.observe(node)

	return {
		destroy: () => {
			observer.unobserve(node)
		}
	}
}
