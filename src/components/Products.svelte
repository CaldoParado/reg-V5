<script lang="ts">
	import { addProduct } from '$lib/services/Bill.service';
	import { type Product } from '$lib/models/bill.model';
	import Keyboard from 'svelte-keyboard';

	export let products: Promise<Product[]>;
	const onKeydown = (event: CustomEvent) => {
		console.log(event.detail, event);
	};
	const onKeydown2 = (event: CustomEvent) => {
		console.log('2',event.detail, event);
	};
</script>

<div class="prods-container">
	<!-- <Keyboard on:keydown={onKeydown} /> -->
	<div class="products">
		{#await products then prods}
			{#each prods as elem, i}
				<button class="element product-button" on:click={() => addProduct(elem)}>{elem.name}</button
				>	
			{/each}
		{/await}
	</div>
	<!-- <Keyboard 
	on:keydown={onKeydown2}
	custom="{[{ row: 0, value: "1"},{ row: 0, value: "2"},{ row: 0, value: "3"},
{ row: 1, value: "4"},{ row: 1, value: "5"},{ row: 2, value: "7"},
{ row: 2, value: "8"},{ row: 2, value: "9"},{ row: 1, value: "6"},{ row: 3, value: "Backspace"},]}"
	/> -->

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
		max-width: 120px;
		aspect-ratio: 1;
	}
</style>
