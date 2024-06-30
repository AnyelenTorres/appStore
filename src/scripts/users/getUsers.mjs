export const getAllUsers =async () => {
    try{
        if(!localStorage.getItem('DBTT')){
            const res = await fetch('https://dummyjson.com/users?limit=0')
            const data = await res.json()
            localStorage.setItem('DBTT', JSON.stringify(data.users))
        }else{
            console.log("La bd ya está creada");
        }
        console.log('Todos los datos cargados!');
    }catch(error){
        console.error(error)
    }
}