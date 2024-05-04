<script lang="ts">
	import { t } from '$lib/i18n/i18n';
	import translations from './translations';
</script>

<div class="flex flex-col mx-8 lg:mx-32 my-32 gap-16">
	<div class="flex flex-col text-center justify-center items-center gap-4">
		<div class="flex flex-col gap-2">
			<h2 class="text-6xl font-semibold">
				{$t(translations, 'title.one')}
				<span class="uppercase font-bold text-primary-500"
					>{$t(translations, 'title.two')}</span
				>
			</h2>
			<hr class="w-72 h-2 bg-secondary-500" />
		</div>

		<p class="text-2xl leading-relaxed font-light">
			{$t(translations, 'paragraph')}
		</p>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		<div
			class="flex flex-col card card-hover p-4 rounded-2xl variant-ringed-primary gap-4"
		>
			<span class="font-semibold text-2xl"
				>{$t(translations, 'service.one.title')}</span
			>
			<p class="text-xl font-light">
				{$t(translations, 'service.one.description')}
			</p>
		</div>
		<div
			class="flex flex-col card card-hover p-4 rounded-2xl variant-ringed-secondary gap-4"
		>
			<span class="font-semibold text-2xl"
				>{$t(translations, 'service.two.title')}</span
			>
			<p class="text-xl font-light">
				{$t(translations, 'service.two.description')}
			</p>
		</div>
		<div
			class="flex flex-col card card-hover p-4 rounded-2xl variant-ringed-surface gap-4"
		>
			<span class="font-semibold text-2xl"
				>{$t(translations, 'service.three.title')}</span
			>
			<p class="text-xl font-light">
				{$t(translations, 'service.three.description')}
			</p>
		</div>
	</div>
</div>
