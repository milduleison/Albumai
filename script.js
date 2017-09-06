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

//issaugoti duomenis i localeStorage
// i viena rakta saugom visa albumu sarasa
let albumsJson = JSON.stringify(albumlist);
localStorage.setItem("albums", albumsJson);

    console.log("atlikejas...", artist, album, release, image);
}


// Duomenu atvaizdavimas
let albumListElement = document.querySelector(".album-list");
let result = `
   <div class="album">
       <img src="img/R-365109-1390519203-2623.jpeg.jpg" alt="Chemical Brothers - Push the button">
       <h2>Chemical Brothers <span>Push the button</span></h2>
       <date>2004</date>
   </div>
`;

function renderAlbums() {
// gauname albumus is localStorage ir sukuriam objekta
let albumsJSON = localStorage.getItem("albums");
let albums = JSON.parse(albumsJSON);

console.log("albumsJSON:",  albumsJSON);
//patikrinta ar yra issaugotu albumu
//jei nera nutraukiam funkcijos vykdyma
if (!albums)return;
//jei yra kuriame cikla ir i rezultata susidedam visu albumu HTML
let result = "";
for (let albums of albums){
    result += `
   <div class="album">
       <img src="img/${album.image}" alt="Chemical Brothers - Push the button">
       <h2>Chemical Brothers <span>Push the button</span></h2>
       <date>2004</date>
   </div>
`;


}
let result = `
   <div class="album">
       <img src="img/R-365109-1390519203-2623.jpeg.jpg" alt="Chemical Brothers - Push the button">
       <h2>Chemical Brothers <span>Push the button</span></h2>
       <date>2004</date>
   </div>
`;
//spausdinam rezultata i "album-list"
}
renderAlbums();


albumListElement.innerHTML = result



