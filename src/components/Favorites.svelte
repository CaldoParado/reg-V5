<script lang="ts">
	import { ProductService } from '$lib/services/Products.service';
	import { type Product } from '$lib/models/bill.model';
	import { addProduct } from '$lib/services/Bill.service';

	export let products: Promise<Product[]>;

	function filterFavs(prods: Product[]) {
		return prods.filter((p) => p.favorite);
	}
</script>

<div class="container">
	<!-- {#each Array(5).keys() as elem} -->
	{#await products}
		<h1>hummm</h1>
	{:then prods}
		{#each filterFavs(prods) as elem}
			<button class="product-button elem" on:click={() => addProduct(elem)}>
				{`${elem.name}`}
			</button>
		{/each}
	{/await}
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
