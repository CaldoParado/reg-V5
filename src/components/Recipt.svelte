<script>
	import _bill from '$lib/services/Bill.service';
</script>

<div class="ticket">
	<div class="ticket-head" >
        Header
    </div>
	<div class="ticket-body">
		{#each $_bill as prod (prod)}
			<button id={`${prod}`} class="ticket-prod">
				{`${prod.name} - ${prod.quantity * prod.value} #${prod.quantity}`}
			</button>
		{/each}
	</div>
</div>

<style>
    .ticket{

        /* width: 100%; */
        background: cyan;
    }
    .ticket-body{
        background-color: pink;
        display: flex;
        flex-direction: column;
    }
    .ticket-prod{
        flex: 1;
    }
</style>
