<script lang="ts">
	import type { INav } from '$lib/interfaces/nav.interface';
	import { locale, t } from '$lib/i18n/i18n';
	import { isMobile } from '$lib/stores/mobileStore';
	import { AppBar, getDrawerStore } from '@skeletonlabs/skeleton';

	import translations from './translations';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import images from '$lib/assets/images';
	import mobileNavbarSettings from '$lib/constants/mobileNavbarSettings';

	const drawerStore = getDrawerStore();

	const handleLanguageChange = (): void => {
		locale.set($locale === 'en' ? 'es' : 'en');
	};

	export let items: INav[];
</script>

<AppBar
	background="bg-gradient-to-br from-tertiary-900 to-tertiary-500"
	shadow="shadow-xl"
	padding="px-8 py-4 lg:px-32"
>
	<svelte:fragment slot="lead">
		<img
			src={images.LOGO}
			alt="Logo"
			data-testid="logo-test-id"
			width="32px"
			height="32px"
		/>
		<span class="text-xl ml-4 font-semibold"
			>Belware<span class="text-primary-500 font-bold">Tech</span></span
		>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		{#if !$isMobile}
			{#each items as item, index}
				<button
					class="btn variant-ringed-secondary"
					on:click={item.onClick}
					data-testid="button-test-{index}"
					>{$t(translations, item.name)}</button
				>
			{/each}
			<button
				on:click={handleLanguageChange}
				type="button"
				class="btn-icon variant-ringed-primary uppercase">{$locale}</button
			>
		{:else}
			<button
				type="button"
				class="btn-icon variant-ringed-primary"
				on:click={() => {
					drawerStore.open(mobileNavbarSettings);
				}}
			>
				<Icon name="bars" width="w-6" height="h-6" fill="fill-primary-500" />
			</button>
		{/if}
	</svelte:fragment>
</AppBar>
