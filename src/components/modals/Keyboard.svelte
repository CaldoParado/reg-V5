<script lang="ts">
	import { keyboardStore } from '$lib/services/Keyboard.service';
	import Keyboard from 'svelte-keyboard';
	import { scale, slide } from 'svelte/transition';

	let component: ConstructorOfATypedSvelteComponent | null = null;
	let handler: (ev: CustomEvent) => void = () => {};
	let type: string = 'standard';

	$: {
		component = $keyboardStore.component;
		handler = $keyboardStore.handler;
		type = $keyboardStore.type;
		// props = $modalStore.props.data!;
	}

	const numeric_keys = [
		{ row: 1, value: '1' },
		{ row: 1, value: '2' },
		{ row: 1, value: '3' },
		{ row: 2, value: '4' },
		{ row: 2, value: '5' },
		{ row: 2, value: '6' },
		{ row: 3, value: '7' },
		{ row: 3, value: '8' },
		{ row: 3, value: '9' },
		{ row: 4, value: '00' },
		{ row: 4, value: '0' },
		{ row: 4, value: 'Backspace' }
	];
</script>

{#if component}
	<!-- <h1 class="example">hola</h1> -->
	<div class="example" transition:slide>
		{#if type === 'search'}
			<Keyboard on:keydown={handler} layout="crossword" --min-width="3.5rem"/>
		{:else if type === 'numeric'}
			<Keyboard on:keydown={handler} custom={numeric_keys} --min-width="5rem" />
		{:else}
			<Keyboard on:keydown={handler} --min-width="3rem"/>
		{/if}
	</div>
	<!-- <svelte:component this={component} /> -->
{/if}

<style>
	.example {
		position: fixed;
		bottom: 30px;
		right: 50%;
		translate: 50%;
		/* inset: 10px; */
		background-color: #aaa;
		padding: 0.5rem;
		border-radius: 8px;
		z-index: 1001;
		/* animation: deploy 0.5s; */
	}

	/* @keyframes deploy {
		from {
			transform: translateY(100%);
			scale: 0.85;
		}

		to {
			transform: translateY(0%);
			scale: 1;
		}
	} */
</style>
