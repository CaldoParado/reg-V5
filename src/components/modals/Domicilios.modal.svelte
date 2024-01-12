<script lang="ts">
	import { hideModal } from '$lib/services/Modal.service';
	import { onMount } from 'svelte';

	let counter = 0;
	let increment = () => {
		// console.log('increment', counter);
		counter += 1;
	};
	let divRef: HTMLElement;

	onMount(() => {
		// console.log('maire viaaaa; divRef:', divRef)
		const handleKeyDown = (ev: KeyboardEvent) => {
			ev.stopPropagation();
			
			console.log('at dom.modal jeje', ev.key);
		};
		divRef.addEventListener('keydown', handleKeyDown);
		return () => {
			divRef.removeEventListener('keydown', handleKeyDown);
		};
	});
</script>

<div class="modal-dom" bind:this={divRef}>
	holaaaa este es el modal de domicilios
	<button on:click={hideModal}> cerrar </button>

	<h1>
		counter: {counter}
	</h1>
	<input type="text">
	<button on:click|stopPropagation={() => increment()}> increment </button>
</div>

<style>
	.modal-dom {
		background-color: aqua;
		width: 65vw;
		pointer-events: fill;
	}
</style>
