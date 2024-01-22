<script lang="ts">
	import type { Product } from '$lib/models/bill.model';
	import { addComplements } from '$lib/services/Bill.service';

	import { fly } from 'svelte/transition';

	export let complements: Promise<Product[]>;
	let collapsed: boolean = true;
</script>

<div class="container-options">
	<button on:click={() => (collapsed = !collapsed)} class="elem product-button"> elem </button>
	<button on:click={() => (collapsed = !collapsed)} class="elem product-button"> elem </button>
	<button on:click={() => (collapsed = !collapsed)} class="elem product-button"> elem </button>
	<!-- <button on:click={()=> collapsed= !collapsed} class="elem product-button"> elem </button> -->
</div>
{#if !collapsed}
	<div class="content-options" in:fly={{ x: 0, y: 1000, duration: 125 }}>
		{#await complements then comps}
			{#each comps as c}
				<button on:click={() => addComplements(c)}>
					{c.name}
				</button>
			{/each}
		{/await}
	</div>
{/if}

<style>
	.container-options {
		display: flex;
		transition: all 0.5s ease-in-out;
		gap: 1%;
	}
	/* .container-options */
	.elem {
		flex: 1;
		height: 9.5vh;
	}
	.elem:first-child {
		border-top-left-radius: var(--border-radius, 8px);
		border-bottom-left-radius: var(--border-radius, 8px);
	}
	.elem:last-child {
		border-top-right-radius: var(--border-radius, 8px);
		border-bottom-right-radius: var(--border-radius, 8px);
	}
	.content-options {
		flex: 1;
	}
</style>
