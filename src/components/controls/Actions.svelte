<script>
	import { showModal } from '$lib/services/Modal.service';
	import Domicilios from '../modals/Domicilios.modal.svelte';
	import Employee from '../modals/Employee.modal.svelte';
	import { getEmployees } from '$lib/services/Employee.service';
	import AuthModal from '../modals/Auth.modal.svelte';
	import { handleInput } from '$lib/services/Utils/Input.service';
</script>

<div class="actions">
	<button
		class="action"
		style="--span: 2;"
		on:click={() => showModal(Domicilios, { retain: true })}
	>
		Domicilio
	</button>
	<button class="action" style="--span: 1;"> Llevar </button>

	<div class="action" style="--span: 2;">
		<div class="action-input">
			<input placeholder="Billete" type="number" inputmode="numeric" use:handleInput />
			<span class="sufix-icon">$</span>
		</div>
		<div class="action-input">
			<input type="number" placeholder="cantidad" inputmode="numeric" use:handleInput />
			<span class="sufix-icon">X</span>
		</div>
	</div>
	<button class="action" style="--span: 1;" />

	<button class="action"> RRR </button>
	<button class="action" on:click={() => showModal(AuthModal)} style="--span: 1;"> Cajeros </button>
	<button class="action"> Abrir caja </button>
	<!-- <button class="action" style="--span: 3;"/> -->
</div>

<style>
	.actions {
		flex: 1;
		height: 100%;
		display: grid;
		gap: 2.5%;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: 1fr;
	}
	.action {
		grid-area: 'doms';
		grid-column: span var(--span, 1);
		border-radius: var(--border-radius, 8px);
	}
	.action-input {
		border-radius: 5px;
		box-sizing: border-box;
		height: 45%;
		margin: 2px 5px;
		/* width: 50%; */
		position: relative;
	}
	.action-input input{
		width: 100%;
		height: 100%;
		font-size: 1.5rem;

	}
	.action-input span{
		position: absolute;
		right: 10px;
		top: 10px;
		color: #aaa7;
		font-size: 1.5rem;

	}

</style>
