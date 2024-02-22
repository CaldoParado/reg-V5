<script>
	import { showModal } from '$lib/services/Modal.service';
	import Domicilios from '../modals/Domicilios.modal.svelte';
	import Employee from '../modals/Employee.modal.svelte';
	import { getEmployees } from '$lib/services/Employee.service';
</script>

<div class="actions">
	<button class="action"> Responsable </button>
	<button
		class="action"
		on:click={() =>
			showModal(Employee, {
				retain: true,
				data: {
					filterRole: 'cashier'
				}
			})}
		style="--span: 2;"
	>
		Cajeros
	</button>
	<button class="action" style="--span: 2;"> Domicilio </button>
	<button class="action" on:click={() => showModal(Domicilios, { retain: true })}>
		Abrir caja
	</button>
	<!-- <button class="action" style="--span: 3;"/> -->

	<button class="action" />
	<button class="action" style="--span: 2;"> Llevar </button>
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
</style>
