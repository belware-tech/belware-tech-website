<script lang="ts">
	import type { ISocial } from '$lib/interfaces/social.interface';
	import type { IContactForm } from '$lib/interfaces/contactForm.interface';

	import { t } from '$lib/i18n/i18n';
	import { enhance } from '$app/forms';

	import translations from './translations';
	import Icon from '$lib/components/Icon/Icon.svelte';
	export let socialMedia: ISocial[];

	let formState: IContactForm = {
		firstname: '',
		lastname: '',
		subject: '',
		email: '',
		message: '',
	};

	$: isFormValid = Object.values(formState).every(
		(value) => value.trim() !== '',
	);
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
			<form name="contact-form" use:enhance method="POST" class="flex flex-col gap-8" netlify-honeypot="bot-field" data-netlify="true">
				<input type="hidden" name="form-name" value="contact-form" />
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<label class="label">
						<input
							class="input"
							type="text"
							placeholder={$t(translations, 'form.firstname')}
							name="firstname"
							bind:value={formState.firstname}
							minlength="1"
							maxlength="256"
						/>
					</label>
					<label class="label">
						<input
							class="input"
							type="text"
							placeholder={$t(translations, 'form.lastname')}
							name="lastname"
							bind:value={formState.lastname}
							minlength="1"
							maxlength="256"
						/>
					</label>
					<label class="label">
						<input
							class="input"
							type="text"
							placeholder={$t(translations, 'form.subject')}
							name="subject"
							bind:value={formState.subject}
							minlength="1"
							maxlength="256"
						/>
					</label>
					<label class="label">
						<input
							class="input"
							type="email"
							placeholder={$t(translations, 'form.email')}
							name="email"
							bind:value={formState.email}
							minlength="1"
							maxlength="256"
						/>
					</label>
				</div>
				<label class="label">
					<textarea
						class="textarea"
						rows="4"
						minlength="1"
						maxlength="600"
						placeholder={$t(translations, 'form.text')}
						name="message"
						bind:value={formState.message}
					/>
				</label>
				<button
					class="btn variant-ghost-primary w-full"
					disabled={!isFormValid}
				>
					{$t(translations, 'form.submit')}
				</button>
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
