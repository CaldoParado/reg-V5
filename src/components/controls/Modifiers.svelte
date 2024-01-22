<script>
	function toggleMenu() {
		window.ELECTRON_API.toggleMenu();
	}
	const closeApp = () => window.ELECTRON_API.closeApp();
</script>

<div>
	<input type="text" />
	<hr />
	<button on:click={toggleMenu}> Toggle menu </button>
	<hr />
	<button on:click={closeApp}> Close </button>
	<hr />
	<button on:click={toggleMenu}> Toggle menu </button>
</div>
