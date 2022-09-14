<script>
    import Input from "../../components/Input.svelte"
    import Button from "../../components/Button.svelte"
    let firstName = '';
    let lastName = '';
    let email = '';
    let password = '';

    const submit = () => {
        console.log("value------>", firstName)
    }

</script>


<body>
<form>
    <h4 class="title">Sign Up</h4>
    <Input label="First Name" bind:value={firstName}/>
    <Input label="Last Name" bind:value={lastName}/>
    <Input label="Email" bind:value={email}/>
    <Input label="Password" bind:value={password}/>
    <Button label="Sign Up" submit={submit}></Button>
</form>
</body>

<style>
    body {
        align-items: center;
        display: flex;
        justify-content: center;
        height: 100vh;
    }

    form {
        text-align: center;
        border: 1px solid black;
        border-radius: 20px;
        box-sizing: border-box;
        height: auto;
        padding: 20px;
        width: 320px;
    }
    .title{
        margin: 0 25px 25px 25px;
        font-weight: 900;
        font-size: 1.875rem;
        color: rgb(55 65 81/var(--tw-text-opacity));
    }
</style>

