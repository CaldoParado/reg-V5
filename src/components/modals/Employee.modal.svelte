<script lang="ts">
	import { getEmployees } from '$lib/services/Employee.service';
	import { hideModal } from '$lib/services/Modal.service';
	import { Employee } from '$lib/models/employee.model';

	export let filterRole:string = '';
	$:{
		console.log('filterRole:', filterRole)
	}

	function filteredEmployees(): Employee[]{
		return getEmployees().filter(e => !filterRole || e.roles.includes(filterRole));
	}
</script>

<div class="base-modal modal-employees">
	<h3 class="modal-employees-title">Selecciona un empleado</h3>
	<div class="modal-employees-content">
		{#each filteredEmployees() as employee}
			<button class="employee-card" on:click={hideModal}> Emp {employee.name}</button>
		{/each}
	</div>
</div>

<style>
	.modal-employees {
		padding: 12px 24px 24px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.modal-employees-title {
		padding: 12px;
	}
	.modal-employees-content {
		max-height: 60vh;
		overflow-y: scroll;
		border-radius: 15px;
		box-shadow: inset 6px 6px 12px #bababa, inset -6px -6px 12px #ffffff;

		display: grid;
		gap: 12px;
		padding: 14px;
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
	}
	.employee-card {
		border: 2px solid #f005;
		border-radius: 8px;
		padding: 24px;

		aspect-ratio: 4/3;
	}
</style>
