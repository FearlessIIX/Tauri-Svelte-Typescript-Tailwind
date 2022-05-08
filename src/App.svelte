<script lang="ts">
	export let name: string;
	const word : string = "tailwind is working as intended"
</script>

<main class="w-max p-4 text-center m-0">
	<h1 class="uppercase text-6xl font-thin text-svelte-orange">Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<p class="text-blue-800 text-center">{word}</p>
</main>