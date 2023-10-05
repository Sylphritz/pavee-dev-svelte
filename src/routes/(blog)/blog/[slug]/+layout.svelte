<script lang="ts">
	import '$assets/styles/posts.scss'
	import 'highlight.js/scss/atom-one-dark.scss'

	import hljs from 'highlight.js'

	import { page } from '$app/stores'
	import { afterNavigate } from '$app/navigation'
	import type { LayoutServerData } from './$types'
	import { formatDate } from '$lib/utils/dateFormat'

	export let data: LayoutServerData

	afterNavigate(() => {
		hljs.highlightAll()
	})
</script>

<div class="flex flex-row">
	<div class="blog-post-body flex-auto mx-auto basis-2/3 lg:pr-5">
		<h1 class="mb-1">{$page.data.title}</h1>
		<div class="block text-gray-100/80 mb-6 text-sm">
			{formatDate($page.data.createdAt)} · {$page.data.category.name}
		</div>
		<slot />
	</div>
	<div class="flex-none basis-1/3 hidden lg:block p-3">
		<div class="text-xl font-bold mb-3">Latest Posts</div>
		{#each data.latestPosts as post}
			<div class="mb-3">
				<a href="/blog/{post.slug}" class="block">{post.title}</a>
				<div>{post.metaDescription}</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	h1 {
		@apply leading-tight tracking-tight;
	}
</style>
