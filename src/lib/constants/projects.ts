import type { IProject } from '$lib/interfaces/project.interface';
import images from '$lib/assets/images';

const projects: IProject[] = [
	{
		title: '🔗LangChain Rust',
		client: 'Belware',
		description: 'project.langchain',
		imageSrc: images.PROJECT_LANGCHAIN,
		linkTo: 'https://github.com/Abraxas-365/langchain-rust',
	},
	{
		title: '💻 Open GitHub Copilot CLI',
		client: 'Belware',
		description: 'project.copilot',
		imageSrc: images.PROJECT_PILOT,
		linkTo: 'https://github.com/Abraxas-365/open-gh-copilot',
	},
	{
		title: '⚒️ Buccelli Roofing Services',
		client: 'Buccelli Construction & Consulting',
		description: 'project.buccelli',
		imageSrc: images.PROJECT_BUCCELLI,
		linkTo: 'https://buccelliconstruction.com/',
	},
];

export default projects;
