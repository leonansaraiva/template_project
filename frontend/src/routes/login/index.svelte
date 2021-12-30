<script context="module">
	import { signin } from '../users/_api';

</script>


<script>
	// export let users;
    import { Button, Icon, Styles } from 'sveltestrap';
    import { Alert } from 'sveltestrap';
	import { userStore , INITIAL_STATE} from "../../store/store";


    let user = {}

    

    async function logout() {
        console.log('logout')

        userStore.set({
                    ...INITIAL_STATE
        })

        console.log($userStore)
    }


    async function show() {
        console.log('store')

        console.log($userStore)
    }

    async function login() {
		console.log('create')
       
        const userSignin = await signin(user);
        console.log(userSignin)
        if(userSignin) {
            console.log($userStore)

            userStore.set({
                    ...INITIAL_STATE,
                    ...userSignin,
                })

            console.log($userStore)

            //  goto('/users')
            visible = false
        } else {
            visible = true
        }
       
	}
    let visible = false;

</script>


<svelte:head>
	<title>Create User</title>
</svelte:head>
<Styles />

<form on:submit|preventDefault={login}>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  bind:value="{user.email}">
        <div id="emailHelp" class="form-text">Entre com seu E-mail</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword" class="form-label">Senha</label>
      <input type="password" class="form-control" id="exampleInputPassword"  bind:value="{user.password}">
    </div>
  
    <button type="submit" class="btn btn-primary">
        Login <Icon name="emoji-smile-fill" />
    </button>
   
    <button type="button" class="btn btn-primary" on:click="{logout}">
        Logout <Icon name="emoji-smile-fill" />
    </button>

</form>
<hr>

<button type="button" class="btn btn-primary" on:click="{show}">
    Show Store <Icon name="emoji-smile-fill" />
</button>



<Alert color="danger" isOpen={visible}>
    <h4 class="alert-heading text-capitalize">Erro</h4>
    Erro ao criar usuário
  </Alert>
<style>
	
</style>