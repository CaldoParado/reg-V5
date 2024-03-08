<script lang="ts">
	import Modifiers from './controls/Modifiers.svelte';
	import Actions from './controls/Actions.svelte';
	import Auth from './controls/Auth.svelte';
	import { payBill, resetBill } from '$lib/services/Bill.service';
	import { DBService } from '$lib/services/DB.service';

	const options = [
		{
			name: 'Actions',
			component: Actions
		},
		{
			name: 'Modifiers',
			component: Modifiers
		},
		{
			name: 'Cuenta',
			component: Auth
		}
	];

	let current = options[0].component;
</script>

<div class="container">
	<button
		class="pay-button"
		on:click={() => {
			payBill();
		}}
	>
		PAGAR
		<img src="images/cocinerito.svg" alt="" style="max-height: 50px; aspect-ratio: 1;"/>
		<!-- <svg width="16" height="16">
			<use xlink:href="assetsiconos.svg#icono1"></use>
		  </svg> -->
	</button>
	<div class="tabs">
		{#each options as option}
			<button on:click={() => (current = option.component)} class="tab">{option.name}</button>
		{/each}
	</div>
	<div class="content">
		<svelte:component this={current} />
	</div>
</div>

<style>
	.tabs {
		border: 1px solid black;
		display: flex;
		gap: 1%;
		/* padding: 2.5%; */
	}
	.tabs:first-child {
		border-top-left-radius: var(--boder-radius, 8px);
		background-color: #5ed060;
	}
	.tab {
		flex: 1;
		aspect-ratio: 1.5;
	}
	.content {
		border: 1px solid black;
		flex: 1;
		/* height: auto; */
		padding: 2%;
	}
	.container > div {
		width: 100%;
	}
	.container {
		/* max-height: 50vh; */
		padding: 0 2%;
		flex: 1.618;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		overflow-y: auto;
		gap: 1%;
		border: 1px solid black;
		display: flex;
		flex-direction: column;
		justify-content: stretch;
	}
	.pay-button {
		width: 100%;
		display: flex;
		flex-direction: row;
		gap: 15px;
		align-items: center;
		justify-content: center;	
		aspect-ratio: 7/2;
		/* height: 100%; */
		border-radius: var(--boder-radius, 8px);
		font-size: 2rem;
		font-weight: bold;
		background-color: #5ed060;
		border: 1px solid black;
	}
</style>
