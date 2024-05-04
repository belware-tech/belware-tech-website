import type { INav } from '$lib/interfaces/nav.interface';

import smoothScroll from '$lib/utils/smoothScroll';

const navigation: INav[] = [
	{
		name: 'nav.home',
		onClick: () => smoothScroll('home'),
		icon: 'home',
	},
	{
		name: 'nav.about',
		onClick: () => smoothScroll('about'),
		icon: 'about',
	},
	{
		name: 'nav.projects',
		onClick: () => smoothScroll('projects'),
		icon: 'projects',
	},
	{
		name: 'nav.contact',
		onClick: () => smoothScroll('contact'),
		icon: 'contact',
	},
];

export default navigation;
