import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Hero from './Hero.svelte';

describe('Test <Hero /> component', () => {
	it('renders correctly', () => {
		const { getByText } = render(Hero);

		expect(getByText('Where innovation')).toBeDefined();
		expect(getByText('meets practicality.')).toBeDefined();

		expect(getByText('Our Projects')).toBeDefined();
		expect(getByText("Let's Talk")).toBeDefined();
	});
});
