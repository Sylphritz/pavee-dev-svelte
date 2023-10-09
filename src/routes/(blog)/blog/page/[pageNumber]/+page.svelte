<script lang="ts">
	import type { PageData } from './$types'
	import PostsList from '$lib/components/Posts/PostsList.svelte'

	export let data: PageData
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<PostsList {data} />
