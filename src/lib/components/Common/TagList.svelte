<script lang="ts">
	export let tags: string[] = []
</script>

<div class="flex flex-row flex-wrap w-full gap-2">
	{#each tags as tag}
		<span class="py-1 px-2 bg-red-200/30">{tag}</span>
	{/each}
</div>
