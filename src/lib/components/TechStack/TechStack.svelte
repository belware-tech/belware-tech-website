<script lang="ts">
	import type { ITech } from '$lib/interfaces/tech.interface';
	import { t } from '$lib/i18n/i18n';
	import translations from './translation';
	import Icon from '$lib/components/Icon/Icon.svelte';

	export let techStack: ITech[];
</script>

<div class="flex flex-col mx-8 lg:mx-32 my-32 gap-16">
	<div class="flex flex-col gap-2 self-center">
		<h3 class="text-3xl font-medium text-center">
			{$t(translations, 'title.one')}
			<span class="uppercase font-bold text-secondary-500"
				>{$t(translations, 'title.two')}</span
			>
			{$t(translations, 'title.three')}
		</h3>
		<hr class="w-60 h-2 bg-primary-500" />
	</div>

	<div class="logo-cloud grid-cols-2 lg:!grid-cols-4 gap-1">
		{#each techStack as tech}
			<div class="logo-item variant-ghost-secondary">
				<Icon name={tech.icon} width="w-8" height="h-8" />
				<span>{tech.name}</span>
			</div>
		{/each}
	</div>
</div>
