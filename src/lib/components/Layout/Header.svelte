<script lang="ts">
	import HeaderNavigation from './Header/HeaderNavigation.svelte'
	import { stickyClass } from '$lib/actions/stickyClass'
</script>

<header
	class="py-3 flex flex-row justify-between md:justify-start items-baseline gap-3 -top-px sticky z-20 transition-all"
	use:stickyClass={'pinned'}
>
	<a
		href="/"
		class="inline-block text-2xl font-bold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent hover:text-transparent font-['Lexend_Variable'] tracking-tight"
		>PAVEE<small class="opacity-60 text-green-300">.dev</small></a
	>
	<HeaderNavigation />
</header>
