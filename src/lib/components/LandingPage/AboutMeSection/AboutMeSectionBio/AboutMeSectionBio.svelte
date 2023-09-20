<script lang="ts">
	import GithubIcon from '$lib/components/Common/Icons/GithubIcon/GithubIcon.svelte'
	import LinkedinIcon from '$lib/components/Common/Icons/LinkedinIcon/LinkedinIcon.svelte'
	import MailIcon from '$lib/components/Common/Icons/MailIcon/MailIcon.svelte'
	import TwitterXIcon from '$lib/components/Common/Icons/TwitterXIcon/TwitterXIcon.svelte'
	import SocialMediaLink from '$lib/components/Common/SocialMediaLink/SocialMediaLink.svelte'

	const yearsOfExperience = new Date().getFullYear() - 2014 - 1
</script>

<div class="flex flex-row gap-6 flex-wrap mb-10">
	<div class="basis-auto md:basis-1/2 flex-grow">
		<p>
			Hi, I'm <strong>Pavee Udomkarnpaisarn</strong> from Thailand. I'm a front-end developer with {yearsOfExperience}
			years of development experience (and counting!). I'm specialized in
			<strong>Vue.js application development</strong>.
		</p>
		<p>
			I also dabble in other front-end frameworks such as Svelte and Astro (this site was built with
			Astro!) and am open to learn more about them as I work.
		</p>
	</div>
	<div class="flex-shrink-0 flex-grow basis-auto md:basis-1/3 p-6 bg-red-600/20">
		<SocialMediaLink text="@Sylphritz" url="https://github.com/Sylphritz" icon={GithubIcon} />
		<SocialMediaLink text="@PaveeDev" url="https://x.com/PaveeDev" icon={TwitterXIcon} />
		<SocialMediaLink
			text="Pavee Udomkarnpaisarn"
			url="https://www.linkedin.com/in/pavee-udomkarnpaisarn-64957437/"
			icon={LinkedinIcon}
		/>
		<SocialMediaLink
			text="pudomkarnpaisarn@gmail.com"
			url="mailto:pudomkarnpaisarn@gmail.com"
			icon={MailIcon}
		/>
	</div>
</div>
