<script lang="ts">
	import { AppShell, initializeStores, Drawer } from '@skeletonlabs/skeleton';
	import navigation from '$lib/constants/navigation';
	import '../app.postcss';

	import { onMount } from 'svelte';
	import { isMobile } from '$lib/stores/mobileStore';
	import NavBarMobile from '$lib/components/NavBarMobile/NavBarMobile.svelte';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';

	initializeStores();

	const checkDeviceWidth = (): void => {
		isMobile.set(window.matchMedia('(max-width: 767px)').matches);
	};

	onMount(() => {
		checkDeviceWidth();
		window.addEventListener('resize', checkDeviceWidth);

		return () => {
			window.removeEventListener('resize', checkDeviceWidth);
		};
	});
</script>

<svelte:head><title>BelwareTech</title></svelte:head>

<Drawer>
	<NavBarMobile items={navigation} />
</Drawer>

<AppShell>
	<svelte:fragment slot="header"><Navbar items={navigation} /></svelte:fragment>
	<slot />
</AppShell>
