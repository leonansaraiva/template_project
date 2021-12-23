<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';

	console.log('here..')
	import { goto } from '$app/navigation';
	import { user } from '../store/store';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let user_value;

	user.subscribe(value => {
		user_value = value;
		console.log(`logout user=${JSON.stringify(user_value)}`)

	})

	onMount(() => {
		console.log($page.path)

	// console.log(`logout user=${JSON.stringify(user_value)}`)
	// 	if(user_value < 2) {
	// 		goto('/');
	// 	}

	});


	
</script>

<Header />

<main>
	<slot />
</main>


<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
