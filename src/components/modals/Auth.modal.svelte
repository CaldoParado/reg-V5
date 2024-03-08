<script lang="ts">
	import { AuthService } from '$lib/services/Auth.service';
	import { DBService } from '$lib/services/DB.service';
	import { getEmployees } from '$lib/services/Employee.service';
	import { hideModal } from '$lib/services/Modal.service';
	import { handleInput } from '$lib/services/Utils/Input.service';
	import { showError, showSuccess } from '$lib/services/Utils/Notification.service';

	function login(event: SubmitEvent) {
		const fd = new FormData(event.target as HTMLFormElement);
		const data: { email: string; password: string } = Object.fromEntries(fd) as {
			email: string;
			password: string;
		};
		DBService.getInstance()
			.authByMail(data.email, data.password)
			.then(() => {
				showSuccess('¡Autenticado con éxito!');
				hideModal();
				window.location.reload();
			})
			.catch((err) => showError('Error en la autenticación'));
	}

	function handleCerrarSesion() {
		AuthService.getInstance().logOut();
		showSuccess('¡sesión cerrada!');
	}
</script>

<div class="auth-modal">
	<form on:submit|preventDefault={login}>
		{#await getEmployees()}
			<div>Cargando</div>
		{:then emps}
			{#each emps as emp (emp.id)}
				<div>
					<input type="radio" id="emp-{emp.id}" name="email" value={emp.user + '@cp.com'} />
					<label for="emp-{emp.id}">{emp.name}</label>
				</div>
			{/each}
		{/await}
		<!-- <label for="email">Username</label>
		<input type="text" name="email" placeholder="Email" use:handleInput /> -->
		<label for="password">Contrasena</label>
		<input
			type="text"
			name="password"
			placeholder="Contrasena"
			use:handleInput
			autocomplete="off"
			inputmode="text"
		/>
		<button type="submit">Entrar</button>
	</form>
	<button on:click={handleCerrarSesion}>Cerrar sesión</button>
</div>

<style>
	.auth-modal {
		width: 50vw;
		height: 50vh;
		display: grid;
		place-content: center;
	}
</style>
