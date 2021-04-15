$(document).ready(function() {

// Start your code from here

//Instruccion 1
let temas = ["Game of Thrones", "Stranger Things", "Breaking Bad", "Friends", "Glee", "Modern Family", "Brooklyn Nine-Nine"];

//Instruccion 2
for (var i = 0; i < temas.length; i++){
    $("#tvshow-buttons").append(`<button id="${temas[i]}" class="currentButton">${temas[i]}</button>`);
}

//Instruccion 3
$("#tvshow-buttons").on('click', '.currentButton', function(ev){
    let link = "https://api.giphy.com/v1/gifs/search?api_key=4S8xzbyGKK5bmlDNnmXV7bgiyf8Qdqhf&limit=10&q="

    link = link + (this.id);

    $("#tvshows").html("");

    fetch(link)
    .then(response => response.json())
    .then(cont => {
        cont.data.forEach(function(gif){
            $("#tvshows").append(`<div class="tvshow-item">
                <img class="currentGif"src="${gif.images.downsized_still.url}" data-src="${gif.images.downsized.url}">
                <p style="text-align: center;"> Gif Rating: ${gif.rating} </p>
            </div>`);
        })
    })
})

//Instruccion 4
$("#tvshows").on('click', '.currentGif', function(ev){
    let sourceActual = this.src;
    let nuevoSource = $(this).attr('data-src');
    $(this).attr('data-src', sourceActual);
    $(this).attr('src', nuevoSource);
})

//Instruccion 5
$("#add-tvshow").click(function(ev){
    ev.preventDefault();

    var serieNueva = $("#tvshow-input").val();
    temas.push(serieNueva);
    
    $("#tvshow-input").val("");

    var botonNuevo = `<button id="${serieNueva}">${serieNueva}</button>`;

    $("#tvshow-buttons").append(botonNuevo);
});

});
