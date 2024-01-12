<script lang="ts">
</script>

<div class="container">
	{#each Array(30).keys() as elem}
		<button class="product-button elem">
			{`${elem} A/PA chorizo`}
		</button>
	{/each}
</div>

<style>
	.container {
		flex: 1.618;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
		overflow-y: auto;
		gap: 2%;
		justify-items: center;
		padding: clamp(5px, 5%, 8px) 0;
	}
	.elem {
		min-width: 80px;
		width: 47.5%;
		aspect-ratio: 1;
	}
</style>
