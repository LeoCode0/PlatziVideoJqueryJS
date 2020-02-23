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

    function createTemplete(HTMLString){
        const $html = document.implementation.createHTMLDocument()
        $html.body.innerHTML = HTMLString
        return $html.body.children[0]
    }


    function videoItemTemplate(movie){
        return (
            `
            <div class="primaryPlaylistItem">
                <div class="containerPeliculas">
                    <div class="primaryPlayListItem--image">
                        <img src="${movie.medium_cover_image}" alt="">
                    </div>
                </div>
                <div class="primaryPlayListItem--title">
                    <h4>
                        ${movie.title}
                    </h4>
                </div>
            </div>
            `
        )
    }
    
    
    function renderMovieList(list, container){
        container.querySelector('img').remove()
        list.data.movies.forEach((movie) => {
            const HTMLString = videoItemTemplate(movie)
            const movieElement = createTemplete(HTMLString)    
            container.append(movieElement)
        })
        
    } 
    
    
    const $dramaContainer = document.getElementById('drama')
    renderMovieList(dramaList, $dramaContainer)
    const $actionContainer = document.querySelector('#action')
    renderMovieList(actionList, $actionContainer)
    const $animationContainer = document.getElementById('animation')
    renderMovieList(animationList, $animationContainer)

    const $form = document.getElementById('form')
    const $reproductorContainer = document.getElementById('reproductor')
    const $home = document.getElementById('home')

    // const $home = $('.hero .list #item')
    const $modal = document.getElementById('modal')
    const $overlay = document.getElementById('overlay')
    const $hideModal = document.getElementById('hide-modal')

    const $modalImage = $modal.querySelector('img')
    const $modalTitle = $modal.querySelector('h1')
    const $modalDescription = $modal.querySelector('p')

    // Forma con Jquery
    // '<div class="primaryPlaylist-list" id="drama">' +
    //     '<div class="primaryPlaylistItem">' +
    //         '<div class="containerPeliculas">'+
    //             '<img src='+imageSrc+' alt="">'+
    //         '</div>'+
    //     '</div>'+
    // '</div>'


    // Forma Vanilla


    // console.log(videoItemTemplate('../assets/platzi-video.png', 'Platzi Video'))

})()