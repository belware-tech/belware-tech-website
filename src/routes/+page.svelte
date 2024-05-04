<script lang="ts">
	import Hero from '$lib/components/Hero/Hero.svelte';
	import About from '$lib/components/About/About.svelte';
	import Projects from '$lib/components/Projects/Projects.svelte';
	import TechStack from '$lib/components/TechStack/TechStack.svelte';
	import Contact from '$lib/components/Contact/Contact.svelte';

	import projects from '$lib/constants/projects';
	import techStack from '$lib/constants/techStack';
	import socialMedia from '$lib/constants/social';
</script>

<main>
	<section id="home">
		<Hero />
	</section>
	<section id="about" class="flex flex-col bg-tertiary-500">
		<About />
	</section>
	<section id="projects" class="flex flex-col bg-white">
		<Projects {projects} />
	</section>
	<section
		id="tech"
		class="flex flex-col bg-gradient-to-t from-tertiary-900 to-tertiary-700"
	>
		<TechStack {techStack} />
	</section>
	<section
		id="contact"
		class="flex flex-col bg-gradient-to-b from-tertiary-900 to-black"
	>
		<Contact {socialMedia} />
	</section>
</main>
