<script lang="ts">
	export let title: string
</script>

<h2 class="section-title block relative font-['Lexend_Variable'] pb-2 uppercase text-4xl">
	{title}
</h2>

<style>
	.section-title::before {
		@apply block absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-transparent to-transparent;

		content: '';
	}
</style>
