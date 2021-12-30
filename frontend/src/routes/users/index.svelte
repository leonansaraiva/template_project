<script context="module">
	import { get, update, deleteU } from './_api';

	export const load = async ({ fetch }) => {
		const users = await get();

        return {
            props: { users }
        };

	};
	
</script>


<script>
	export let users;
    import { userStore , INITIAL_STATE} from "../../store/store";

    async function getAllUsers() {
		users = await get(); 
	}


    async function updateUser(user) {

        let TOKEN = $userStore.token

		console.log('update')
        user.confirmPassword = '123456'
        user.password =  '123456'
        const userUpdate = await update(user,TOKEN);

		console.log(userUpdate)
        await getAllUsers()
	}

    async function deleteUser(user) {
		console.log('deleteUser')
        let TOKEN = $userStore.token
        const userDelete = await deleteU(user, TOKEN);

		console.log(userDelete)
        await getAllUsers()
	}

</script>


<svelte:head>
	<title>Users</title>
</svelte:head>



 

{#each users as user, i}
<div class="users">

    <div> {user.id}</div>
    <input aria-label="Edit name" type="text" name="name" bind:value={user.name} />
    <input aria-label="Edit email" type="text" name="email" bind:value={user.email} />
    <input type="checkbox" name="admin" bind:checked={user.admin}>

    <div class="options">
        <button class="save" aria-label="Save todo" on:click="{updateUser(user)}"/>
        <button class="delete" aria-label="Delete todo"  on:click="{deleteUser(user)}"/>
    </div>
</div>

{/each}


<style>
	.users {
		display: flex;
		align-items: center;
        justify-content: space-between;
		margin: 0 0 0.5rem 0;
		padding: 0.5rem;
		background-color: white;
		border-radius: 8px;
		filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));
		transform: translate(-1px, -1px);
		transition: filter 0.2s, transform 0.2s;
	}

	.delete {
		background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 5V22H19.5V5H4.5Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M10 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 5H22' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8 5L9.6445 2H14.3885L16 5H8Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
		opacity: 0.2;
        height: 2em;
        width: 2em;
        align-items: center;
        justify-content: center;
        background-repeat: no-repeat;

	}
    .delete:hover,
	.delete:focus {
		transition: opacity 0.2s;
		opacity: 1;
	}


	.save {
        background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 2H3.5C2.67158 2 2 2.67157 2 3.5V20.5C2 21.3284 2.67158 22 3.5 22H20.5C21.3284 22 22 21.3284 22 20.5V3.5C22 2.67157 21.3284 2 20.5 2Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M17 2V11H7.5V2H17Z' fill='white' stroke='white' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M13.5 5.5V7.5' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M5.99844 2H18.4992' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A");
        height: 2em;
        width: 2em;
		right: 0;
		opacity: 0.2;
        background-repeat: no-repeat;
	}

	
	.save:hover,
	.save:focus  {
		transition: opacity 0.2s;
		opacity: 1;
	}


    .options {
        width: 5em;
        display: flex;
        justify-content: space-between;
    }

</style>