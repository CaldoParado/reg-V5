<script lang="ts">
	import { addProduct } from '$lib/services/Bill.service';
	import { type Product } from '$lib/models/bill.model';

	export let products: Promise<Product[]>;
</script>

<div class="prods-container">
	<div class="products">
		{#await products then prods}
			{#each prods as elem, i}
				<button class="element product-button" on:click={() => addProduct(elem)}>{elem.name}</button
				>
			{/each}
		{/await}
	</div>
	<div class="prods-selector">
		<button class="prod-tabs"> confg </button>
		{#each Array(5).keys() as kind}
			<button class="prod-tab">
				Aver {kind}
			</button>
		{/each}
	</div>
</div>

<style>
	.prod-tab {
		width: 24%;
		height: 100%;
		border: 1px solid black;
	}
	.prods-container {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}
	.prods-selector {
		display: flex;
		overflow-x: auto;
		overflow-y: hidden;
		flex: 1;
	}
	.products {
		flex: 9;
		display: grid;
		gap: 10px;
		padding: 10px;

		grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));

		overflow-y: scroll;
	}
	.element {
		width: 100%;
		min-width: 70px;
		aspect-ratio: 1;
	}
</style>
