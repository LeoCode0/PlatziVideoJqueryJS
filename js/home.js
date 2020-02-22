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

(async function load(){
    // await 
    // Action
    // Terror
    // Animation
    async function getData(url){
        const response = await fetch(`https://pokeapi.co${url}`)
        const data = await response.json()
        return data
    }
    const malePokemon = await getData('/api/v2/gender/male')
    const femalePokemon = await getData('/api/v2/gender/female')
    const undefinedPokemon = await getData('/api/v2/gender/3') 
    // await getData('https://yts.mx/api/v2/list_movies.json?genre=terror')
    //     .then(function (data){
    //         console.log('terrorList', data)
    //         terrorList = data
    //     })
    console.log('malePokemon', malePokemon)
    console.log('femalePokemon' ,femalePokemon)
    console.log('undefinedPokemon' ,undefinedPokemon)
})()
