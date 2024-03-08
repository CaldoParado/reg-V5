<script lang="ts">
	import { goto } from '$app/navigation';
	import { AuthService } from '$lib/services/Auth.service';
	import { DBService } from '$lib/services/DB.service';
	import { showModal } from '$lib/services/Modal.service';
	import { showSuccess } from '$lib/services/Utils/Notification.service';
	import { handleInput } from '../../lib/services/Utils/Input.service';
	import Auth from '../modals/Auth.modal.svelte';
	import Domicilios from '../modals/Domicilios.modal.svelte';

	function toggleMenu() {
		window.ELECTRON_API.toggleMenu();
	}
	const closeApp = () => window.ELECTRON_API.closeApp();

	function handleSubmit(ev: SubmitEvent) {
		ev.preventDefault();
		const formData = new FormData(ev.target as HTMLFormElement);
		const formObject = Object.fromEntries(formData);
		console.log(formData, formObject);
	}

	function handleAdmin() {
		return goto('/login');
	}
</script>

<div>
	<button on:click={() => showModal(Auth)}>Open auth</button>
	<button on:click={toggleMenu}> Toggle menu </button>
	<hr />
	<button on:click={handleAdmin}> Admin </button>
	<button on:click={closeApp}> Close </button>
	<hr />
	<hr />
	<form on:submit|preventDefault={handleSubmit}>
		<input type="text" name="username" placeholder="usuario" use:handleInput />
		<input type="text" name="contrasena" placeholder="contrasenia" use:handleInput />
		<button type="submit"> Enviar </button>
	</form>
</div>
