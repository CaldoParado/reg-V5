<script lang="ts">
	import { hideModal, modalStore } from '$lib/services/Modal.service';
	import { afterUpdate, onMount } from 'svelte';
	import { scale } from 'svelte/transition';

	/** Representa el componente a mostrar dentro del modal */
	let component: ConstructorOfATypedSvelteComponent | null = null;
	/** Las propiedades a pasar al componente del modal */
	let props: { [key: string]: any } = {};

	$: {
		component = $modalStore.component;
		props = $modalStore.props.data!;
	}

	$: {
		console.log($modalStore.props.data)
	}

	let modal: HTMLElement;

	/**
	 * Cierra el modal si se hace click en el overlay y no es un modal permanente.
	 * @param {MouseEvent} e - El evento del click
	 */
	function handleClose(e: MouseEvent) {
		if (!!props?.retain) return;
		e.target === modal && hideModal();
	}
</script>

{#if component}
	<button bind:this={modal} class="modal-overlay" on:click={handleClose}>
		<div class="modal-content" transition:scale>
			<svelte:component this={component} {...props} />
		</div>
	</button>
{/if}

<style>
	.modal-overlay::before {
		content: '';
		z-index: -1;
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		backdrop-filter: blur(3px);
	}
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 100;
		background-color: #ccc8;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.modal-content {
		max-width: 80vw;
		max-height: 75vh;
		border-radius: 15px;
		overflow: auto;
		position: relative;
		box-shadow: 12px 12px 38px #949494aa, -12px -12px 38px #a4a4a4aa;
	}
</style>
