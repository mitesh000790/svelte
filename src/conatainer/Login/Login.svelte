<script>
    import Input from "../../components/Input.svelte"
    import Button from "../../components/Button.svelte"
    import { userToken } from "../store/store"
    let email = '';
    let password = '';

    const submit = () => {
        const payload = {
            email: email,
            password: password
        }

        if((email === '' && password === '')){
            console.log("All field are required")
        } else {
            let options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(payload)
            }

            let fetchRes = fetch(
                    "http://localhost:3000/login",
                    options);
            fetchRes.then(res =>

                res.json()).then(d => {
                localStorage.setItem("userToken", d.token);
                userToken.update(() =>d.token);
                if(d.message === 'Login Successful'){
                    email = '';
                    password = '';
                }
            })
        }
    }

</script>

<body>
    <form>
        <h4 class="title">Login</h4>
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




