<script lang="ts">
	import images from '$lib/assets/images';
	import { isMobile } from '$lib/stores/mobileStore';
	import smoothScroll from '$lib/utils/smoothScroll';
	import { t } from '$lib/i18n/i18n';
	import translations from './translations';

	$: polygonPoints = $isMobile ? '0,0 0,0 100,0 0,20' : '0,0 10,0 10,0 0,100';

	const handleClickBtn = (section: string): void => smoothScroll(section);
</script>

<div class="h-screen flex flex-col md:flex-row">
	<div class="flex flex-1 flex-col bg-white items-center justify-center">
		<div class="flex flex-col gap-12 text-surface-900 mx-8 lg:ml-32 my-8">
			<h1 class="font-semibold text-5xl lg:text-7xl">
				<span class="font-bold text-primary-500 text-6xl lg:text-8xl">
					{$t(translations, 'title.one')}
				</span><br />
				{$t(translations, 'title.two')}
			</h1>
			<p class="text-2xl text-surface-700 font-light leading-relaxed">
				{$t(translations, 'paragraph')}
			</p>
			<div class="flex justify-start items-center gap-4">
				<button
					type="button"
					class="btn variant-filled-primary text-xl"
					on:click={() => handleClickBtn('projects')}
					>{$t(translations, 'btn.projects')}</button
				>
				<button
					type="button"
					class="btn variant-ringed-secondary text-xl"
					on:click={() => handleClickBtn('contact')}
					>{$t(translations, 'btn.contact')}</button
				>
			</div>
		</div>
	</div>

	<div
		class="flex flex-col flex-1 relative bg-gradient-to-b variant-gradient-primary-tertiary"
	>
		<svg
			class="absolute inset-0 w-full h-full"
			viewBox="0 0 100 100"
			preserveAspectRatio="none"
		>
			<polygon points={polygonPoints} class="fill-white text-transparent"
			></polygon>
		</svg>

		{#if !$isMobile}
			<div
				class="flex flex-col items-center justify-center h-full opacity-10 relative"
			>
				<img
					src={images.LOGO_WHITE}
					alt="White Belware Logo"
					class="rotate-image"
				/>
			</div>
		{/if}
	</div>
</div>

<style>
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	.rotate-image {
		animation: spin 30s linear infinite;
	}
</style>
