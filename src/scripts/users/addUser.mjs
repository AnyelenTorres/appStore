const addUser = async (firstName, lastName, username, password, image = "https://cdn-icons-png.freepik.com/256/149/149071.png?semt=ais_hybrid") => {
    const postUser =await fetch('https://dummyjson.com/user/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          username,
          password,
          image
        })
      })

    const users = JSON.parse(localStorage.getItem('DBTT'))
    const user = await postUser.json();
    users.push(user)
    localStorage.setItem('DBTT', JSON.stringify(users))
}

export{
    addUser
}