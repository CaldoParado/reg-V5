<script>
	let counter = 0;

	const increase = () => {
		counter++;
	};
</script>

<div class=".modal-test">
	<h4>this would be the test modal, i assume is not destructed, but it is not rendered</h4>

	<button on:click={increase}> increase </button>
</div>
