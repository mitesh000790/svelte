<script>
    import Router from 'svelte-spa-router'
    import Home from './conatainer/Home/Home.svelte'
    import Login from './conatainer/Login/Login.svelte'
    import Navbar from './conatainer/Navbar/Navbar.svelte'
    import SignUp from './conatainer/SignUp/SignUp.svelte'
    import AddMusic from './conatainer/AddMusic/AddMusic.svelte'

    let routes = {
        "/": Home,
        "/login": Login,
        "/sign-up": SignUp,
        "/add-music": AddMusic,
    }
</script>




<Navbar/>
<main>
	<Router {routes}/>
</main>
