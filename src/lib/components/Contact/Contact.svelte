<script lang="ts">
	import type { ISocial } from '$lib/interfaces/social.interface';

	import { t } from '$lib/i18n/i18n';
	import { enhance } from '$app/forms';
	import translations from './translations';
	import Icon from '$lib/components/Icon/Icon.svelte';
	export let socialMedia: ISocial[];
</script>

<div class="flex flex-col mx-8 lg:mx-32 my-32 gap-16">
	<div class="flex flex-col gap-2 justify-center items-center">
		<h2 class="text-6xl font-semibold">
			{$t(translations, 'title.one')}
			<span class="uppercase font-bold text-primary-500"
				>{$t(translations, 'title.two')}</span
			>
		</h2>
		<hr class="w-80 h-2 bg-secondary-500" />
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-4">
		<div class="flex flex-col gap-8">
			<div class="flex flex-col gap-2 justify-center">
				<h2 class="text-3xl font-semibold">
					{$t(translations, 'talk.one')}
					<span class="uppercase font-bold text-secondary-500"
						>{$t(translations, 'talk.two')}</span
					>
				</h2>
				<hr class="w-40 h-1 bg-primary-500" />
			</div>
			<form use:enhance method="POST" class="flex flex-col gap-8">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<label class="label">
						<input
							class="input"
							type="text"
							placeholder={$t(translations, 'form.firstname')}
							name="firstname"
						/>
					</label>
					<label class="label">
						<input
							class="input"
							type="text"
							placeholder={$t(translations, 'form.lastname')}
							name="lastname"
						/>
					</label>
					<label class="label">
						<input
							class="input"
							type="text"
							placeholder={$t(translations, 'form.subject')}
							name="subject"
						/>
					</label>
					<label class="label">
						<input
							class="input"
							type="email"
							placeholder={$t(translations, 'form.email')}
							name="email"
						/>
					</label>
				</div>
				<label class="label">
					<textarea
						class="textarea"
						rows="4"
						maxlength="600"
						placeholder={$t(translations, 'form.text')}
						name="message"
					/>
				</label>
				<button class="btn variant-ghost-primary w-full"
					>{$t(translations, 'form.submit')}</button
				>
			</form>
		</div>
		<div class="flex flex-col justify-center items-center gap-8">
			<div class="flex justify-evenly w-full">
				{#each socialMedia as social}
					<a
						target="_blank"
						href={social.linkTo}
						class="btn-icon variant-outline-primary w-20 lg:w-32 h-20 lg:h-32"
					>
						<Icon
							name={social.icon}
							width="w-12 lg:w-20"
							height="h-12 lg:h-20"
							fill="fill-primary-500"
						/>
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>

<div class="flex w-full bg-black justify-center items-center p-4">
	<span class="text-surface-600">
		{$t(translations, 'rights')} | {new Date().getFullYear().toString()}</span
	>
</div>
