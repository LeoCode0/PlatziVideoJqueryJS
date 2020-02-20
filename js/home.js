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

Promise.race([
    getUser1, 
    getUser
])
.then(function(message){
    console.log(message)
})
.catch(function(message){
    console.log(message)
})