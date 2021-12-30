import { writable } from 'svelte/store';


export const INITIAL_STATE = {
    id: null,
    name:"",
    email: "",
    admin: "",
    token:"",
  };

export const userStore =  writable({...INITIAL_STATE })
  