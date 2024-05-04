<script lang="ts">
	import type { INav } from '$lib/interfaces/nav.interface';
	import { locale, t } from '$lib/i18n/i18n';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import Icon from '../Icon/Icon.svelte';
	import images from '$lib/assets/images';
	import translations from './translations';

	export let items: INav[];

	const drawerStore = getDrawerStore();

	const handleLanguageChange = (): void => {
		locale.set($locale === 'en' ? 'es' : 'en');
		drawerStore.close();
	};

	const handleClickOnItem = (item: INav): void => {
		drawerStore.close();
		item.onClick();
	};
</script>

<div class="flex flex-col h-full p-4 gap-8">
	<div class="flex">
		<img
			src={images.LOGO}
			alt="Logo"
			data-testid="logo-test-id"
			width="32px"
			height="32px"
		/>
		<span class="text-3xl ml-4 font-semibold"
			>Belware<span class="text-primary-500 font-bold">Tech</span></span
		>
	</div>

	<div class="flex flex-col w-full gap-4">
		{#each items as item, index}
			<button
				type="button"
				class="btn variant-ringed-secondary p-4"
				data-testid="button-test-{index}"
				on:click={() => handleClickOnItem(item)}
			>
				<div class="flex items-center gap-4 justify-between">
					<Icon
						name={item.icon}
						width="w-6"
						height="h-6"
						fill="fill-primary-100"
					/>
					<span class="text-left">{$t(translations, item.name)}</span>
				</div>
			</button>
		{/each}
	</div>

	<button
		class="btn p-4 variant-ringed-primary uppercase justify-self-end"
		on:click={handleLanguageChange}
		>{$t(translations, 'language')} {$locale.toLowerCase()}</button
	>
</div>
