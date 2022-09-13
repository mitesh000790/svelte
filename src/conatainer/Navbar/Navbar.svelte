<script>
    const HEADER = "Music";

    const NAVBAR_DATA = [
        { id: 1, url: "/", label: "" },
        { id: 2, url: "#/login", label: "Login" },
        { id: 3, url: "#/sign-up", label: "SignUp" },
        { id: 4, url: "#/add-music", label: "Add Music"},
    ];
</script>

<section id="nav-bar">
    <nav class="navbar main-bgcolor navbar-expand-md navbar-dark">
        <a class="navbar-brand company_brand" href="/">
            {HEADER}
        </a>
        <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                {#each NAVBAR_DATA as list}
                    <li class="nav-item">
                        <a class="nav-link light-color" href={list.url}>{list.label}</a>
                    </li>
                {/each}
            </ul>
        </div>
    </nav>
</section>

<style>
    #nav-bar {
        position: sticky;
        top: 0;
        z-index: 10;
    }

    .navbar {
        padding: 15px 20px !important;
    }

    .navbar-nav{
        align-items: flex-start;
    }

    .navbar-nav li {
        padding: 0 0 0 20px;
    }

    .navbar-nav li a {
        font-weight: 600;
        text-transform: uppercase;
        float: right;
        text-align: left;
    }
</style>
