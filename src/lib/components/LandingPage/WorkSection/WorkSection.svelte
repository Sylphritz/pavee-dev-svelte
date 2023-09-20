<script>
	import ExternalLinkIcon from '$lib/components/Common/Icons/ExternalLinkIcon/ExternalLinkIcon.svelte'
	import TagList from '$lib/components/Common/TagList/TagList.svelte'
	import SectionBlock from '../SectionBlock/SectionBlock.svelte'
</script>

<SectionBlock id="my-work" title="My Work">
	<div class="work-card">
		<div class="flex-grow">
			<h3>Something Something</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo alias culpa quas dolores
				corporis, delectus harum molestiae odit perferendis vero placeat ipsam corrupti
				reprehenderit in optio quo aspernatur dignissimos amet?
			</p>
			<a href="#" target="_blank" class="block mb-6 text-lg font-bold"
				>Live demo <ExternalLinkIcon className="-mt-1 text-sm" /></a
			>
			<TagList
				tags={[
					'Vue 3',
					'Option API',
					'Vue Router',
					'Pinia',
					'Option API',
					'Vue Router',
					'Pinia',
					'Option API',
					'Vue Router',
					'Pinia'
				]}
			/>
		</div>
		<div class="basis-1/2 flex-none overflow-hidden">
			<img src="https://placehold.co/600x400" class="object-contain" />
		</div>
	</div>
	<div class="work-card">
		<div class="flex-grow">
			<h3>Something Something</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo alias culpa quas dolores
				corporis, delectus harum molestiae odit perferendis vero placeat ipsam corrupti
				reprehenderit in optio quo aspernatur dignissimos amet?
			</p>
			<a href="#" target="_blank" class="block mb-6 text-lg font-bold"
				>Live demo <ExternalLinkIcon className="-mt-1 text-sm" /></a
			>
			<TagList
				tags={[
					'Vue 3',
					'Option API',
					'Vue Router',
					'Pinia',
					'Option API',
					'Vue Router',
					'Pinia',
					'Option API',
					'Vue Router',
					'Pinia'
				]}
			/>
		</div>
		<div class="basis-1/2 flex-none overflow-hidden">
			<img src="https://placehold.co/600x400" class="object-contain" />
		</div>
	</div>
	<div class="work-card">
		<div class="flex-grow">
			<h3>Something Something</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo alias culpa quas dolores
				corporis, delectus harum molestiae odit perferendis vero placeat ipsam corrupti
				reprehenderit in optio quo aspernatur dignissimos amet?
			</p>
			<a href="#" target="_blank" class="block mb-6 text-lg font-bold"
				>Live demo <ExternalLinkIcon className="-mt-1 text-sm" /></a
			>
			<TagList
				tags={[
					'Vue 3',
					'Option API',
					'Vue Router',
					'Pinia',
					'Option API',
					'Vue Router',
					'Pinia',
					'Option API',
					'Vue Router',
					'Pinia'
				]}
			/>
		</div>
		<div class="basis-auto md:basis-1/2 flex-none overflow-hidden">
			<img src="https://placehold.co/600x400" class="object-contain" />
		</div>
	</div>
</SectionBlock>

<style lang="scss">
	.work-card {
		@apply relative py-6 mb-3 flex flex-col-reverse md:flex-row gap-6;

		&::after {
			@apply absolute left-1/2 -translate-x-1/2 bottom-0 h-1 -mb-px w-1/2 bg-gradient-to-r from-transparent via-red-500 to-transparent pointer-events-none;

			content: '';
		}

		h3 {
			@apply text-2xl lg:text-4xl;
		}
	}
</style>
