<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	// export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	//  export const router = false;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	// export const prerender = false;
	// export const ssr = false



</script>


<svelte:head>
	<title>About</title>
</svelte:head>

<!-- {#if !user.admin} -->

<div class="content">
	<h1>Página Privada</h1>

	<p>
		Página permitida apenas para administradores!
	</p>



	
</div>
<!-- {/if} -->
<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
