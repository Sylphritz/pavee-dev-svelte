<script lang="ts">
	import type { Pagination } from '$lib/api/types'

	export let pagination: Pagination

	$: totalPages = Math.ceil(pagination.total / pagination.perPage) || 1
	$: previousPageUrl = pagination.page - 1 <= 1 ? '/blog' : `/blog/page/${pagination.page - 1}`
</script>

<div class="flex flex-row justify-center gap-3">
	{#if pagination.page === 1}
		<div class="inline-block pointer-events-none text-gray-300">&lt; Previous</div>
	{:else}
		<a href={previousPageUrl} class="inline-block">&lt; Previous</a>
	{/if}
	<div>Page {pagination.page} of {totalPages}</div>
	{#if pagination.page === totalPages}
		<div class="inline-block pointer-events-none text-gray-300">Next &gt;</div>
	{:else}
		<a href="/blog/page/{pagination.page + 1}" class="inline-block">Next &gt;</a>
	{/if}
</div>
