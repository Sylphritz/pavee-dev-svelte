<script lang="ts">
	import type { PageServerData } from './$types'

	export let data: PageServerData
</script>

<svelte:head>
	<title>{data.title} - Pavee.dev</title>
</svelte:head>

<content>
	{@html data.body}
</content>
