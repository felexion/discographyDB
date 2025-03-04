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