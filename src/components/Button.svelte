<script>
    import { Button, MaterialApp } from 'svelte-materialify';
    export let label;
    export let submit;
</script>

<main class="button">
    <MaterialApp>
        <div class="d-flex flex-column flex-sm-row justify-space-between">
            <Button style="width: 100% !important;" outlined class="primary-text" on:click={submit}>{label}</Button>
        </div>
    </MaterialApp>
</main>

<style>
    .button{
        margin: 10px 0;
    }
</style>
