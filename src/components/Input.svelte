<script>
    import { TextField, Row, Col, MaterialApp } from 'svelte-materialify';
    import { createEventDispatcher } from "svelte"

    const dispatch = createEventDispatcher();

    export let label;
    export let value;

</script>

<main class="input">
    <MaterialApp>
        <TextField dense outlined bind:value={value}>{label}</TextField>
    </MaterialApp>
</main>

<style>
    .input{
        margin: 10px 0;
    }
</style>



