<script lang="ts">
	import type { IProject } from '$lib/interfaces/project.interface';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { writable } from 'svelte/store';
	import { t } from '$lib/i18n/i18n';

	import translations from './translations';

	const transformCard = writable(false);

	export let projects: IProject[];
	let currentProjectIndex = 0;

	const getNextProjectIndex = (): void => {
		currentProjectIndex = (currentProjectIndex + 1) % projects.length;
	};

	const checkDeviceWidth = (): void => {
		transformCard.set(window.matchMedia('(max-width: 1536px)').matches);
	};

	onMount(() => {
		const interval = setInterval(getNextProjectIndex, 5000);
		checkDeviceWidth();

		window.addEventListener('resize', checkDeviceWidth);

		return () => {
			window.removeEventListener('resize', checkDeviceWidth);
			clearInterval(interval);
		};
	});

	$: polygonPoints = $transformCard
		? '0,0 0,0 100,20 100,0'
		: '0,0 10,0 10,0 0,100';
</script>

<div class="flex flex-col mx-8 lg:mx-32 my-32 gap-16">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<div class="flex flex-col gap-8 ml-0 xl:ml-12 2xl:ml-40">
			<div class="flex flex-col gap-2">
				<h2 class="text-5xl xl:text-6xl font-semibold text-surface-900">
					{$t(translations, 'title.one')} <br />
					<span class="uppercase font-bold text-primary-500"
						>{$t(translations, 'title.two')}</span
					>
				</h2>
				<hr class=" h-2 bg-tertiary-500 w-72 xl:w-96" />
			</div>
			<p class="text-xl text-surface-900 leading-relaxed font-light">
				{$t(translations, 'paragraph.one')}
			</p>
			<p class="text-xl text-surface-900 leading-relaxed font-light">
				{$t(translations, 'paragraph.two')}
			</p>
		</div>
		<div class="flex flex-col">
			{#if projects.length > 0}
				<div transition:fade={{ delay: 250, duration: 300 }}>
					<a
						target="_blank"
						href={projects[currentProjectIndex].linkTo}
						class="flex 2xl:flex-row flex-col card !bg-transparent justify-between shadow-xl"
					>
						<div class="flex flex-col gap-4 p-8">
							<header>
								<h3 class="text-3xl font-semibold text-primary-500">
									{projects[currentProjectIndex].title}
								</h3>
								<h4 class="text-xl uppercase text-surface-900">
									{projects[currentProjectIndex].client}
								</h4>
							</header>
							<article>
								<p class="text-surface-800 font-light text-xl leading-relaxed">
									{$t(translations, projects[currentProjectIndex].description)}
								</p>
							</article>
						</div>
						<div
							class="flex flex-col flex-1 relative bg-gradient-to-b variant-gradient-primary-tertiary"
						>
							<svg
								class="absolute inset-0 w-full h-full"
								viewBox="0 0 100 100"
								preserveAspectRatio="none"
							>
								<polygon
									points={polygonPoints}
									class="fill-white text-transparent"
								></polygon>
							</svg>
							<img
								src={projects[currentProjectIndex].imageSrc}
								alt={projects[currentProjectIndex].title}
								class="max-w-full max-h-full object-cover 2xl:max-w-96 2xl:max-h-96"
							/>
						</div>
					</a>
				</div>
			{/if}
		</div>
	</div>
</div>
