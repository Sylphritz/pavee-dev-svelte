<script lang="ts">
	import ExternalLinkIcon from '$lib/components/Common/Icons/ExternalLinkIcon.svelte'
	import TagList from '$lib/components/Common/TagList.svelte'

	export let title: string
	export let demoUrl: string | null = null
	export let githubUrl: string | null = null
	export let tags: string[] = []
	export let imageUrls: string[]
</script>

<div class="work-showcase-block">
	<div class="flex-grow">
		<h3>{title}</h3>
		<div class="mb-3">
			<slot />
		</div>
		<div class="mb-6">
			{#if demoUrl}
				<a href={demoUrl} target="_blank" class="block mb-2 text-lg font-bold"
					>Live demo <ExternalLinkIcon className="-mt-1 text-sm" /></a
				>
			{/if}
			{#if githubUrl}
				<a href={githubUrl} target="_blank" class="block mb-2 text-lg font-bold"
					>See on Github <ExternalLinkIcon className="-mt-1 text-sm" /></a
				>
			{/if}
		</div>
		<TagList {tags} />
	</div>
	<div class="basis-2/5 flex-none overflow-hidden">
		{#each imageUrls as url}
			<img src={url} class="object-contain mb-3 last:m-0" width="600" height="400" alt={title} />
		{/each}
	</div>
</div>

<style lang="scss">
	.work-showcase-block {
		@apply relative py-6 mb-3 flex flex-col-reverse md:flex-row gap-6;

		&::after {
			@apply absolute left-1/2 -translate-x-1/2 bottom-0 h-1 -mb-px w-1/2 bg-gradient-to-r from-transparent via-red-500 to-transparent pointer-events-none last:hidden;

			content: '';
		}

		h3 {
			@apply text-2xl lg:text-4xl;
		}
	}
</style>
