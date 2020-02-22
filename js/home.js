console.log("Hola mundo")
let cambia = "Leo"

function cambiarNombre(nombre){
    cambia = nombre
}

const getUser1 = new Promise(function(todoBien, todoMal){
    // llamar a un API
    // setInterval
    setTimeout(function(){
        todoBien(`Se acabo el tiempo 5`)  
    }, 3000)
})

const getUser = new Promise(function(todoBien, todoMal){
    // llamar a un API
    // setInterval
    setTimeout(function(){
        todoBien(`Se acabo el tiempo 3`)  
    }, 3000)
})

// getUser
//     .then(function(){
//         console.log("Todo esta bien en la vida")
//     })
//     .catch(function(message){
//         console.log(message)
//     })

// Promise.race([
//     getUser1, 
//     getUser
// ])
// .then(function(message){
//     console.log(message)
// })
// .catch(function(message){
//     console.log(message)
// })

$.ajax('https://randomuser.me/api/', {
    method: 'GET',
    success: function(data){
        console.log(data)
    },
    error: function(error){
        console.log(error)
    }
})

fetch('https://randomuser.me/api/ssw')
    .then(function(response){
        // console.log(response)
        return response.json()
    })
    .then(function(user){
        console.log('user ', user.results[0].name.first)
    })
    .catch(function(){
        console.log('Algo fallo')
    });

(async function load() {
    // await
    // action
    // terror
    // animation
    async function getData(url) {
        const response = await fetch(url);
        const data = await response.json()
        return data;
    }
    
    const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action')
    const dramaList = await getData('https://yts.mx/api/v2/list_movies.json?genre=drama')
    const animationList = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation')
    console.log(actionList, dramaList, animationList)


    const $actionContainer = document.querySelector('#action')
    const $dramaContainer = document.getElementById('#drama')
    const $animationContainer = document.getElementById('#animation')
    // const $home = $('.hero .list #item')
    const $home = document.getElementById('hero')
})()