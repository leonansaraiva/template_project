<script context="module">
	import { get, update } from './_api';


	
</script>


<script>
	// export let users;
    import { Button, Icon, Styles } from 'sveltestrap';

    import { Toast, ToastBody, ToastHeader } from 'sveltestrap';
    import { Alert } from 'sveltestrap';

    import { create} from './_api';
import { goto } from '$app/navigation';

    let user = {}

    async function createUser() {
		console.log('create')
       
        const userUpdate = await create(user);
        if(userUpdate !== 'Unauthorized') {
            console.log(userUpdate)
             goto('/users')
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

<form on:submit|preventDefault={createUser}>
    <div class="mb-3">
      <label for="exampleInputName" class="form-label">Nome</label>
      <input type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp" bind:value="{user.name}">
      <div id="nameHelp" class="form-text">Digite seu nome.</div>
    </div>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  bind:value="{user.email}">
        <div id="emailHelp" class="form-text">Entre com seu E-mail</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword" class="form-label">Senha</label>
      <input type="password" class="form-control" id="exampleInputPassword"  bind:value="{user.password}">
    </div>
    <div class="mb-3">
        <label for="exampleInputconfirmPassword" class="form-label">Confirme sua Senha</label>
        <input type="password" class="form-control" id="exampleInputconfirmPassword" bind:value="{user.confirmPassword}">
      </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="adminCheck" bind:checked={user.admin}>
      <label class="form-check-label" for="exampleCheck1">Administrador</label>
    </div>
    <button type="submit" class="btn btn-primary">
        Criar novo usuário! <Icon name="emoji-smile-fill" />
    </button>

   
</form>
<hr>

<Alert color="danger" isOpen={visible}>
    <h4 class="alert-heading text-capitalize">Erro</h4>
    Erro ao criar usuário
  </Alert>
<style>
	
</style>