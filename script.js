//Suraskime H1 elementa, pagal klase ir priskiriam jam kintamaji
let titleElement = document.getElementsByClassName("main-title")[0]


//document.getElementsByClassName("main-title")[0].innerHTML = "Muzikos albumai"; //pakeitem pavadinima su innerHTML
 titleElement.innerHTML = "Muzikos albumai"; 


//Pridekime papildoma klas H1
titleElement.classList.add("header-title");
//Pakeciame stiliu i italic
titleElement.style.fontStyle = "italic";

//kai paspaudziamas mygtukas, vykdyk sia funkcija

//<button type="button" class="btn btn-primary" onclick="addAlbum()">Pridėti</button> PRIDEDAM PRIE ONCLICK "addAlbum"
function addAlbum(){
    console.log("Pridedam albuma");
}
//surandame formos mygtuka "ClicON"
let addAlbumButton = document.querySelector(".btn-save-album");

addAlbumButton.addEventListener("click", addAlbum);

let albumlist = [];

let artistElement = document.querySelector("#artist");
let albumElement = document.querySelector("#album");
let releaseDateElement = document.querySelector("#releaseDate");
let imageElement = document.querySelector("#image");

//nuskaitome laukeliu reiksmes ir sukelieme failus
function addAlbum() {
    let artist = artistElement.value;
    let album = albumElement.value;
    let release = releaseDateElement.value;
    let image = imageElement.files[0].name;

    if(!artist || !album || !release || !image) {
        console.log("Miauuuuu - neivestas Atlikejas");//jei neivedei atlikejo
        return;
    }

    albumlist.push({
        "artist": artist,
        "album":  album,
        "release": release,
        "image": image.name
    });

    console.log("atlikejas...", artist, album, release, image);
}



