<script lang="ts">
	import type { Posts } from '$lib/api/types'
	import { formatDate } from '$lib/utils/dateFormat'
	import Pagination from '$lib/components/Common/Pagination.svelte'

	export let data: Posts
</script>

<h2 class="text-center">All Posts</h2>

<p class="text-center">
	This is where I talk about things like web development and sometimes IRL stuff.
</p>

<div class="py-3">
	<Pagination pagination={data.pagination} />
</div>

<div class="flex flex-col gap-6 max-w-full">
	{#each data.data as post}
		<div class="block p-6 bg-gradient-to-b from-red-400/10 to-red-900/30 gap-3">
			<div class="text-lg"><a href="/blog/{post.slug}">{post.title}</a></div>
			<small class="block pb-3 text-gray-100/70">
				{formatDate(post.createdAt)} · {post.category.name}
			</small>
			<p class="m-0">
				{post.metaDescription}
			</p>
		</div>
	{/each}
</div>

<div class="py-3">
	<Pagination pagination={data.pagination} />
</div>
