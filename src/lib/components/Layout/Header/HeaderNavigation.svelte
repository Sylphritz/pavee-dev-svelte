<nav>
	<ul class="flex flex-row gap-3">
		<li><a href="#my-work">My Work</a></li>
		<li><a href="#contact">Contact</a></li>
	</ul>
</nav>

<style lang="scss">
	li {
		@apply inline-block flex-shrink-0 cursor-pointer opacity-80 hover:opacity-100;

		a {
			@apply font-bold text-gray-200 hover:text-rose-400;
		}
	}
</style>
