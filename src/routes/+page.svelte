<script lang="ts">
	// import { register } from 'swiper/element/bundle';
	// register();
	import Products from '../components/Products.svelte';
	import Favorites from '../components/Favorites.svelte';
	import Options from '../components/Options.svelte';
	import Factura from '../components/Factura.svelte';
	import Control from '../components/Control.svelte';

	import Recipt from '../components/Recipt.svelte';
	import Modal from '../components/modals/Modal.svelte';
	import { onMount } from 'svelte';

	export let data;
	onMount(() => {
		// console.log('preloaded data is:', data);
		// const setText = (e: KeyboardEvent) => {
		// 	console.log('at window', e.key);
		// };
		// window.addEventListener('keydown', setText);
		// return () => {
		// 	window.removeEventListener('keydown', setText);
		// };
	});
</script>

<div id="ticket">
	<Recipt />
</div>
<main>
	<div class="left-pane" style="--depth: 2;">
		<Products products={data.products} />
	</div>
	<div class="favorite-pane" style="--depth: 1;">
		<Favorites products={data.products}/>
		<Options complements={data.complements}/>
	</div>
	<div class="control-pane" style="--depth: 2;">
		<Factura />
		<Control />
	</div>
</main>
<Modal />

<style>
	#ticket {
		opacity: 0.2;
		position: fixed;
		top: 0;
		left: 0;
		pointer-events: none;

		border: 1px solid black;
		max-width: 80mm;
		min-width: 80mm;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
		/* z-index: -1; */
	}

	.left-pane {
		grid-area: prods;
	}
	.favorite-pane {
		display: flex;
		flex-direction: column;
		grid-area: favorites;
		gap: 5px;
	}
	.control-pane {
		grid-area: control;
		display: flex;
		flex-direction: column;
	}
	main {
		width: 100vw;
		height: 100vh;
		background-color: antiquewhite;
		display: grid;
		grid-template-columns: 1.5fr 0.5fr 0.75fr;

		grid-template-areas:
			'prods favorites control'
			'prods favorites control';
	}
	main > * {
		height: 100vh;
	}
	main * {
		background-color: rgba(65, 25, 0, calc(var(--depth, 1) * 0.1));
	}

	@media print {
		#ticket {
			z-index: 1;
		}
		main {
			display: none;
		}
	}

	@media screen and (max-width: 480px) {
		main {
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-areas:
				'prods prods control'
				'favorites favorites control';
		}
	}
</style>
