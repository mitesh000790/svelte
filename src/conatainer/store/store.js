import { writable } from 'svelte/store';

const signUp = writable();
const userToken = writable();
// let signUpPayload
//
// userToken.subscribe(value => {
//     // signUpPayload = value
//     console.log("value---->", value);
// });



export {signUp, userToken}
