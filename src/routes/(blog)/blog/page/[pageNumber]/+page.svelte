<script lang="ts">
	import type { PageServerData } from './$types'
	import PostsList from '$lib/components/Posts/PostsList.svelte'

	export let data: PageServerData
</script>

<PostsList {data} />
