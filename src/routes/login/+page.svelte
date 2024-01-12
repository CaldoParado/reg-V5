<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;

    function login(){
        return goto('/');
    }
</script>

<div class="login-container">
	<section>login</section>
    <button on:click={login}>login</button>
</div>

<style>
    section{
        width: 50%;
        height: 50%;
        border: 1px solid black;
    }
	.login-container {
        width: 100vw;
        height: 100vh;
		display: grid;
        place-items: center;
		
	}
</style>
