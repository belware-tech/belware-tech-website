import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import TechStack from './TechStack.svelte';

describe('Test <TechStack /> component', () => {
	it('renders correctly', () => {
		const techStack = [{ name: 'React', icon: 'reactIcon' }];

		const { getByText } = render(TechStack, { props: { techStack } });

		expect(getByText('tech')).toBeDefined();
		expect(getByText('React')).toBeDefined();
	});
});
