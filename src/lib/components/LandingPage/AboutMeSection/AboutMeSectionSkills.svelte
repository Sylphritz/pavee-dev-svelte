<div>
	<h3>Skills</h3>

	<div class="flex flex-col gap-3 mb-10">
		<div class="skills-grid-cell">
			<h4 class="mb-2">Frontend</h4>
			<div class="flex flex-col lg:flex-row flex-wrap gap-3 mb-3">
				<div class="flex-auto bg-slate-700/30 p-3">
					<div class="text-lg font-bold">Vue.js/Nuxt.js</div>
					<ul>
						<li>Certified Vue.js Developer</li>
						<li>Nuxt.js</li>
						<li>Composition API, Option API</li>
						<li>Pinia, Vuex</li>
						<li>Vue Router</li>
					</ul>
				</div>
				<div class="flex-auto bg-slate-700/30 p-3">
					<div class="text-lg font-bold">HTML/CSS/JavaScript</div>
					<ul>
						<li>HTML5</li>
						<li>CSS, SASS/SCSS, TailwindCSS</li>
						<li>Responsive Design</li>
					</ul>
					<div class="text-lg font-bold">JavaScript</div>
					<ul>
						<li>JavaScript, TypeScript</li>
						<li>JSON</li>
						<li>RESTful API Consumption</li>
					</ul>
				</div>
				<div class="flex-auto bg-slate-700/30 p-3">
					<div class="text-lg font-bold">Testing Libraries</div>
					<ul>
						<li>Jest</li>
						<li>Vitest</li>
					</ul>

					<div class="text-lg font-bold">Other Frameworks</div>
					<ul>
						<li>Svelte/SvelteKit</li>
						<li>Astro</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="skills-grid-cell">
			<h4 class="mb-2">Backend</h4>
			<div class="flex flex-col lg:flex-row flex-wrap gap-3 mb-3">
				<div class="flex-auto bg-slate-700/30 p-3">
					<div class="text-lg font-bold">Node.js</div>
					<ul>
						<li>Express.js</li>
						<li>Webpack, Vite</li>
						<li>NPM, Yarn, PNPM</li>
					</ul>
				</div>
				<div class="flex-auto bg-slate-700/30 p-3">
					<div class="text-lg font-bold">Cloud Services</div>
					<ul>
						<li>Cloudflare: Pages, Workers, R2, D1</li>
						<li>Firebase</li>
						<li>Supabase</li>
					</ul>
				</div>
				<div class="flex-auto bg-slate-700/30 p-3">
					<div class="text-lg font-bold">Database</div>
					<ul>
						<li>MySQL</li>
						<li>PosgreSQL</li>
						<li>SQLite</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="skills-grid-cell">
			<h4>Others</h4>
			<div class="flex flex-col lg:flex-row flex-wrap gap-3 mb-3">
				<div class="flex-auto bg-slate-700/30 p-3">
					<div class="text-lg font-bold">Collaboration Tools</div>
					<ul>
						<li>Figma</li>
						<li>Slack, Discord</li>
						<li>Zoom</li>
					</ul>
				</div>
				<div class="flex-auto bg-slate-700/30 p-3">
					<div class="text-lg font-bold">Version Control</div>
					<ul>
						<li>Git</li>
						<li>Github, Gitlab, Bitbucket</li>
					</ul>
				</div>
				<div class="flex-auto bg-slate-700/30 p-3">
					<div class="text-lg font-bold">Other Skills</div>
					<ul>
						<li>Agile Development Environment</li>
						<li>Python</li>
						<li>Data Science</li>
						<li>Data Visualization</li>
						<li>Machine Learning</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.skills-grid-cell {
		@apply p-3 bg-gradient-to-b from-red-500/20 to-transparent;

		h4 {
			@apply uppercase text-lg font-normal opacity-80;

			letter-spacing: 0.6rem;
		}

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
</style>
