import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Contact from './Contact.svelte';

describe('Test <Contact /> component', () => {
	it('renders correctly', () => {
		const socialMedia = [
			{ linkTo: 'https://example.com', icon: 'twitter', name: 'twitter' },
			{ linkTo: 'https://example.com', icon: 'facebook', name: 'facebook' },
		];

		const { getByText, getByPlaceholderText, getAllByRole } = render(Contact, {
			props: { socialMedia },
		});

		expect(getByText('Contact')).toBeDefined();
		expect(getByText('Us')).toBeDefined();

		expect(getByPlaceholderText('Firstname')).toBeDefined();
		expect(getByPlaceholderText('Lastname')).toBeDefined();
		expect(getByPlaceholderText('Subject')).toBeDefined();
		expect(getByPlaceholderText('Email')).toBeDefined();
		expect(getByPlaceholderText('Tell us how can we help you!')).toBeDefined();

		expect(getByText('Submit')).toBeDefined();

		const socialMediaIcons = getAllByRole('link');
		expect(socialMediaIcons.length).toBe(socialMedia.length);
		socialMediaIcons.forEach((icon, index) => {
			expect(icon.getAttribute('href')).toBe(socialMedia[index].linkTo);
		});

		expect(
			getByText(
				'All rights reserved to @BelwareTech | ' + new Date().getFullYear(),
			),
		).toBeDefined();
	});

	// Add more tests as needed
});
