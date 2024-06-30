import { handleLogInState } from "../main.mjs"
export const logInUser = (currentUser, currentPassword) => {

    const users = JSON.parse(localStorage.getItem('DBTT') )  
    const usuario = users.find( user => user.username === currentUser)

    const {firstName, lastName, username, email, image} = usuario

    if(!usuario) return alert('No se encontró el usuario pasado')

    if(usuario.password === currentPassword){
        handleLogInState(firstName,lastName,username,email,image, true)
        return true
    }

    return false
}