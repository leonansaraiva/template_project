<script context="module">
	let user = {}
	let routerProtected 

	import { page } from '$app/stores';

	// export async function load({ page, fetch, session, stuff }) {
	// 	const url = 'http://localhost:8080/users/10'


	// 	const res = await fetch(url);
	// 	user =  await res.json()
	// 	console.log(user)
	// 	console.log(page)
	// 	console.log(`path ${page.path}`)

	// 	console.log(stuff)
	
	// 	routerProtected = !user.admin && page.path === '/about'

	// 	console.log(routerProtected)

	// 	if(routerProtected){
	// 		return{  
	// 			redirect:'/login',
	// 			status:302
	// 		}
	// 	}   

    //     return {}
    // }
</script>

<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';

</script>

<Header />

<main>
	<slot></slot>
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
