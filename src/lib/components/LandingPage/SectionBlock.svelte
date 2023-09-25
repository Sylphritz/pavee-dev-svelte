<script lang="ts">
	import SectionBlockTitle from './SectionBlock/SectionBlockTitle.svelte'

	export let title: string
	export let id: string | null = null
</script>

<section {id} class="mb-3 py-3">
	{#if title}
		<SectionBlockTitle {title} />
	{/if}
	<slot />
</section>
