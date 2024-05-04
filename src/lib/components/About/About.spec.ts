import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import About from './About.svelte';

describe('Test <About /> component', () => {
	it('renders correctly', () => {
		const { getByText } = render(About);

		expect(getByText('🌐 Website Development')).toBeDefined();
		expect(
			getByText(
				'From engaging, responsive designs to custom functionalities, we create websites that truly represent your business and its unique needs.',
			),
		).toBeDefined();

		expect(getByText('⚒️ Ongoing Support')).toBeDefined();
		expect(
			getByText(
				'We ensure your website remains cutting-edge with regular updates, security checks, and performance enhancements.',
			),
		).toBeDefined();

		expect(getByText('💬 Consulting Services')).toBeDefined();
		expect(
			getByText(
				'Our experts provide strategic insights to help you leverage the latest technologies, optimizing your online presence and business operations.',
			),
		).toBeDefined();
	});
});
