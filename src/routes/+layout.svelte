<script>
	import Header from './Header.svelte';
</script>

<se-app>
	<Header />

	<se-container>
		<main>
			<slot />
		</main>
	</se-container>
</se-app>
