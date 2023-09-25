<div>
	<h3>Skills & Experience</h3>

	<div class="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-3 md:gap-6 mb-10">
		<div class="skills-grid-cell">
			<h4>Frontend</h4>
			<ul>
				<li>
					Vue.js
					<ul>
						<li>Certified Vue.js Developer</li>
						<li>Option API, Composition API</li>
						<li>Pinia/Vuex</li>
						<li>Vue Router</li>
					</ul>
				</li>
				<li>HTML5/CSS3</li>
				<li>JavaScript, TypeScript</li>
				<li>TailwindCSS</li>
				<li>Svelte, SvelteKit</li>
				<li>Astro</li>
			</ul>
		</div>
		<div class="skills-grid-cell">
			<h4>Backend</h4>
			<ul>
				<li>Node.js</li>
				<li>Python</li>
				<li>Firebase</li>
				<li>Supabase</li>
				<li>Cloudflare</li>
			</ul>
		</div>
		<div class="skills-grid-cell">
			<h4>Other</h4>
			<ul>
				<li>Figma</li>
				<li>Web Design</li>
				<li>NPM, Yarn, PNPM</li>
				<li>Git</li>
				<li>Slack, Discord</li>
				<li>Data Science & Machine Learning</li>
			</ul>
		</div>
	</div>
</div>

<style lang="scss">
	.skills-grid-cell {
		@apply p-3 bg-gradient-to-b from-red-500/20 to-transparent;

		h4 {
			@apply uppercase text-lg font-normal opacity-70;

			letter-spacing: 0.6rem;
		}

		& > ul {
			& > li {
				@apply mb-2 bg-slate-700/30 p-2;

				ul {
					@apply pl-3;

					li {
						@apply mb-0;

						&::before {
							@apply mr-2;

							content: '-';
						}
					}
				}
			}
		}
	}
</style>
