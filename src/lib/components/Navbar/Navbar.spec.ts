import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import { mockNavigation } from '$lib/__mocks__/navigation.mock';
import Navbar from './Navbar.svelte';

describe('Test <Navbar /> component', () => {
	it('Render the component properly', () => {
		render(Navbar, { props: { items: mockNavigation } });

		expect(screen.getByTestId('logo-test-id')).toBeDefined();

		expect(screen.queryByText('Home')).toBeDefined();
		expect(screen.queryByText('About')).toBeDefined();
		expect(screen.getByTestId('button-test-0')).toBeDefined();
		expect(screen.getByTestId('button-test-1')).toBeDefined();
	});
});
