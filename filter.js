function validUserNames(usernames){
    const userList = usernames.filter(username=> username.length<10)
    return userList;
        

    
    }



console.log(validUserNames(['Mina','Mehmet','MilenaMianBeren']))
