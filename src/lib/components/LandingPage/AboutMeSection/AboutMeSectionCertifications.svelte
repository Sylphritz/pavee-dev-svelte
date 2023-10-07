<script>
	import ExternalLinkIcon from '$lib/components/Common/Icons/ExternalLinkIcon.svelte'

	const certUrl = 'https://certificates.dev/vuejs/certificates/9a2ba08f-b145-473a-ab04-f829b26a720c'
</script>

<div>
	<h3>Certifications</h3>

	<div class="flex flex-column gap-6">
		<div
			class="cert-block w-full p-4 flex flex-row justify-between bg-gradient-to-b from-red-500/20 to-red-500/10 gap-6"
		>
			<div class="flex-grow">
				<h4>Certified Vue.js Developer</h4>
				<p class="mb-6">
					One of the first people to become <strong>an officially certified Vue.js developer</strong
					>
					through a series of proctored exams crafted by Vue.js experts and
					<b
						>reviewed and signed by <a href="https://twitter.com/youyuxi" target="_blank"
							>Evan You</a
						></b
					>, the creator of Vue.js.
				</p>
				<a class="inline-block py-2 uppercase tracking-widest" href={certUrl} target="_blank"
					>View the proof of certification <ExternalLinkIcon className="-mt-1" /></a
				>
			</div>
			<div class="flex-none w-1/3 hidden md:block">
				<a href={certUrl} target="_blank" class="block">
					<img
						src="/images/vuejs-cert.jpg"
						class="object-contain w-full"
						width="1000"
						height="700"
						alt="Official Vue.js Certification"
					/>
				</a>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.cert-block {
		h4 {
			@apply font-normal uppercase tracking-widest text-2xl;
		}
	}
</style>
