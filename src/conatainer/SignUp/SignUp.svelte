<script>
    import Input from "../../components/Input.svelte"
    import Button from "../../components/Button.svelte"
    let firstName = '';
    let lastName = '';
    let email = '';
    let password = '';

    import { signUp } from "../store/store"

    const submit = () => {
        const payload = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }

        if((firstName === '' && lastName === '' && email === '' && password === '')){
            console.log("All field are required")
        } else {
            let options = {
                method: 'POST',
                headers: {
                    'Content-Type':
                            'application/json;charset=utf-8'
                },
                body: JSON.stringify(payload)
            }

            let fetchRes = fetch(
                    "http://localhost:3000/register",
                    options);
            fetchRes.then(res =>
                    res.json()).then(d => {
                    if(d.message === 'User Created Successfully'){
                        firstName = '';
                        lastName = '';
                        email = '';
                        password = '';
                    }
            })
        }
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

