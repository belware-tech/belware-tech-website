import type { INav } from '$lib/interfaces/nav.interface';

export const mockNavigation: INav[] = [
	{
		name: 'Home',
		icon: 'home',
		onClick: () => {
			return;
		},
	},
	{
		name: 'About',
		icon: 'about',
		onClick: () => {
			return;
		},
	},
];
