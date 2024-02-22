<script>
	import { showModal } from '$lib/services/Modal.service';
	import ProductManagement from '../modals/ProductManagement.modal.svelte';

</script>

<button> auth </button>
<hr />
<button> manage-prods </button>
<button class="action" on:click={() => showModal(ProductManagement, {retain: false})} style="--span: 2;">
    Product management
</button>
