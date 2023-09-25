<script lang="ts">
	import type { ComponentType } from 'svelte'

	export let url: string
	export let text: string
	export let icon: ComponentType | null = null
</script>

<a
	href={url}
	target="_blank"
	class="w-full flex flex-row items-center justify-start text-gray-200 hover:text-rose-400 gap-3 mb-3 last:mb-0"
>
	<div class="inline-block text-3xl align-middle -mt-1">
		{#if icon}
			<svelte:component this={icon} />
		{/if}
	</div>
	<span>{text}</span>
</a>
