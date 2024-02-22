<script lang="ts">
	import { Product } from '$lib/models/bill.model';
	
	// import { fullPrice } from '$lib/models/bill.model';
	import _bill from '$lib/services/Bill.service';

	// $: doubled = Object.values($_bill.reduce((ac, prod) => {
	// 	if (ac[prod.id] && ac[prod.id].compareProduct(prod)) {
	// 		ac[prod.id].quantity += prod.quantity;
	// 	} else {
	// 		ac[prod.id] = new Product({ ...prod });
	// 	}
	// 	return ac;
	// }, {} as { [key: string]: Product }));

	// $: console.log(doubled);
	// const prods = $_bill;

	

</script>

<div class="container">
	<div class="header">Controles superiores</div>
	<div class="prods">

		{#each $_bill as prod (prod)}
			<button id={`${prod}`} class="prod">
				<!-- {`${prod.name} - ${prod.fullPrice()} #${prod.quantity}`} -->
				<!-- {JSON.stringify(prod.compl)} -->
				{prod.name} - {prod.complements.map((c) => c.name + c.value)} - {prod.quantity}
			</button>
		{/each}
	</div>
	<div class="controls">
		<button class="bill-control" />
		<button class="bill-control" />
		<button class="bill-control" />
		<button class="bill-control" on:click={() => _bill.set([])} />
	</div>
</div>

<style>
	.container {
		height: 40vh;
		display: flex;
		flex-direction: column;
		gap: 1%;
		border: 1px solid black;
	}
	.container > div {
		width: 100%;
		text-align: center;
		height: auto;
	}

	.prods {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		border: 1px solid black;
		gap: 10%;
		padding: 1.5%;
		overflow-y: scroll;
	}
	.prod {
		width: 100%;
		height: 35px;
	}
	.controls {
		padding: 0 5%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.bill-control {
		width: 15%;
		aspect-ratio: 1;
	}
</style>
