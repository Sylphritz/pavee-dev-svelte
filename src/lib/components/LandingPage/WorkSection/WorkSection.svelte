<script>
	import SectionBlock from '../SectionBlock/SectionBlock.svelte'
	import WorkSectionBlock from './WorkSectionBlock/WorkSectionBlock.svelte'
</script>

<SectionBlock id="my-work" title="My Work">
	<WorkSectionBlock
		title="Weather Forecast App"
		demoUrl="https://vue-weather-app-codementor.netlify.app/"
		githubUrl="https://github.com/Sylphritz/weather-forecast-app"
		imageUrl="/images/weather-app.jpg"
		tags={['Vue.js', 'TypeScript', 'SCSS', 'TailwindCSS', 'Pinia', 'Vue Router']}
	>
		This is a weather forecast vanilla Vue.js mini application I made for educational purposes. This
		project is written in TypeScript. It utilizes Pinia state management library for managing the
		color mode and user's coordinates. The UI uses TailwindCSS classes and Font Awesome icons. As
		for the forecast API, I use the open-source weather API Open Meteo.
	</WorkSectionBlock>
	<WorkSectionBlock
		title="Pavee.dev Personal Site"
		githubUrl="https://github.com/Sylphritz/pavee-dev-svelte"
		imageUrl="/images/portfolio-site.jpg"
		tags={['SvelteKit', 'TypeScript', 'SCSS', 'TailwindCSS', 'Vitest']}
	>
		It's this website! This personal site was made with SvelteKit, utilizing its ability to generate
		static pages to reduce the load time. Fully responsive and SEO-optimized. The source code is
		available on Github.
	</WorkSectionBlock>
</SectionBlock>
