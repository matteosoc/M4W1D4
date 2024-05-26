function search() {
    let artist = document.getElementById("searchField").value
    fetch ("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist)
        .then(response => {
            return response.json()
        })
        .then(pippo => {
            pippo["data"].forEach(element => {

                document.getElementById("searchResults").style.display = "block"

                //document.querySelector("`#` + $(artist)").style.display = "block"
                document.getElementById(artist).setAttribute("class","block")


                let title = document.querySelector("#"+artist+"Section")

                title.style.color = "white"

                let child = document.createElement('div')
                child.setAttribute("class","card")
                child.style = "width: 100%"

                title.appendChild(child)

                let img = document.createElement('img')
                img.setAttribute("class","card-img-top img-fluid")
                img.src = element.album.cover

                child.appendChild(img)

                let cardBody = document.createElement('div')
                cardBody.setAttribute("class","card-body")
                child.appendChild(cardBody)

                let titleTrack = document.createElement('h5')
                titleTrack.style.color = "black"
                titleTrack.setAttribute("class","card-title")
                titleTrack.innerHTML = element.title
                cardBody.appendChild(titleTrack)

                let titleAlbum = document.createElement('p')
                titleAlbum.style.color = "black"
                titleAlbum.setAttribute("class","card-text")
                titleAlbum.innerHTML = element.album.title
                cardBody.appendChild(titleAlbum)

                let favoriteButton = document.createElement('a')
                favoriteButton.setAttribute("class","btn btn-primarycard-text")
                favoriteButton.innerHTML = "Preferiti"
                favoriteButton.style.color = "white"
                favoriteButton.style.backgroundColor = "blue"
                favoriteButton.href = "#"
                cardBody.appendChild(favoriteButton)


            });
        })
}
  
