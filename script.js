import { songData } from "./songData.js";

console.log('Imported songData:', songData);

let currentvisiblealbum = null;

document.addEventListener("DOMContentLoaded", function () {
    const albums = document.querySelectorAll(".albumData");

    albums.forEach(album => {
        album.addEventListener("click", function () {
            // Closing other albums
            albums.forEach(a => {
                if (a !== album) {
                    a.classList.remove("expanded");
                }
            });

            // Clicked album toggle
            this.classList.toggle("expanded")
        })
    })
})

function toggleSongList(albumClass) {
    console.log('Button clicked for:', albumClass);
    const allContainers = document.querySelectorAll('.songListContainer')
    const targetContainer = document.querySelector(`.albumData.${albumClass} .songListContainer`)

    if (currentvisiblealbum === albumClass) {
        targetContainer.innerHTML = '';
        currentvisiblealbum = null;
        return;
    } 

    allContainers.forEach(container => container.innerHTML = '');

    const ul = document.createElement('ul');
    ul.className = 'songList';

    songData[albumClass]?.forEach(song => {
        const li = document.createElement('li');
        li.textContent = song;
        ul.appendChild(li);
    });

    targetContainer.appendChild(ul);

    currentvisiblealbum = albumClass;
}

window.toggleSongList = toggleSongList;
