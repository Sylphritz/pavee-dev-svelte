<script>
	import SectionBlock from './SectionBlock.svelte'
	import WorkSectionBlock from './WorkSection/WorkSectionBlock.svelte'
</script>

<SectionBlock id="my-work" title="Showcase">
	<WorkSectionBlock
		title="Nuxt.js Headless CMS"
		githubUrl="https://github.com/Sylphritz/pavee-dev-cms"
		imageUrls={['/images/nuxt-backend-01.jpg', '/images/nuxt-backend-02.jpg']}
		tags={[
			'Vue.js',
			'Nuxt.js',
			'TypeScript',
			'TailwindCSS',
			'SASS/SCSS',
			'Pinia',
			'Vee-Validate',
			'Firebase',
			'Cloudflare Pages',
			'Turso (SQLite)'
		]}
	>
		<p class="mb-4">
			A full-stack <strong>headless CMS</strong> built from the ground up with
			<strong>Nuxt.js</strong> without using any UI libraries. It provides blog post data for this
			very site. It's got <strong>fully working CRUD operations</strong> for posts and categories. The
			data is stored on the edge using Turso SQLite database.
		</p>

		<ul>
			<li>
				<b>Framework:</b> Vue.js (Nuxt.js)
				<ul>
					<li>Composition API</li>
					<li>Pinia</li>
					<li>Vee-Validate</li>
				</ul>
			</li>
			<li><b>Styling:</b> SASS/SCSS, TailwindCSS</li>
			<li><b>Authentication:</b> Firebase</li>
			<li><b>Database:</b> Turso SQLite (with Drizzle ORM)</li>
			<li><b>Hosting:</b> Cloudflare Pages</li>
			<li>
				<b>Others:</b>
				<ul>
					<li><b>Frontsource</b> - a self-hosted Google Fonts library</li>
					<li><b>Marked</b> - turns Markdown into HTML</li>
					<li><b>DOMPurify</b> - sanitizes DOM elements</li>
				</ul>
			</li>
		</ul>
	</WorkSectionBlock>
	<WorkSectionBlock
		title="Pavee.dev Fully Responsive Site"
		githubUrl="https://github.com/Sylphritz/pavee-dev-svelte"
		imageUrls={['/images/paveedev01.jpg', '/images/paveedev02.jpg']}
		tags={[
			'Svelte/SvelteKit',
			'TypeScript',
			'TailwindCSS',
			'SASS/SCSS',
			'Static Site Generation (SSG)',
			'Cloudflare Pages'
		]}
	>
		<p class="mb-4">
			A <strong>fully responsive</strong> static website. This is the front-end part of the headless
			CMS above. <strong>This is the very site you're currently looking at.</strong> It is built with
			SvelteKit. It consumes APIs provided by the CMS and renders everything as a static page with SvelteKit's
			Static Site Generation plugin.
		</p>

		<ul class="mb-3">
			<li>
				<b>Framework:</b> SvelteKit
				<ul>
					<li>Static Site Generation (SSG) mode</li>
				</ul>
			</li>
			<li><b>Styling:</b> SASS/SCSS, TailwindCSS</li>
			<li><b>API:</b> from the headless CMS above</li>
			<li><b>Hosting:</b> Cloudflare Pages</li>
			<li>
				<b>Others:</b>
				<ul>
					<li><b>Frontsource</b> - a self-hosted Google Fonts library</li>
					<li><b>date-fns</b> - for formatting date and time</li>
					<li><b>Marked</b> - turns Markdown into HTML</li>
					<li><b>DOMPurify</b> - sanitizes DOM elements</li>
					<li><b>highlight.js</b> - for code block syntax highlighting</li>
				</ul>
			</li>
		</ul>

		<p>
			This site is hosted on Cloudflare Pages for free <i>forever</i> as serving static content doesn't
			incur any cost.
		</p>
	</WorkSectionBlock>
</SectionBlock>

<style lang="scss">
	ul {
		@apply pl-4;

		li {
			&::before {
				@apply mr-2;

				content: '-';
			}
		}
	}
</style>
