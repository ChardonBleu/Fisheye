export function manageLikes(artist, artistMedias) {
    const allLikesBtn = document.querySelectorAll(".heart")
    let totalLikes = 0
    allLikesBtn.forEach(likeBtn => {

      totalLikes += Number(likeBtn.parentElement.querySelector(".likes").innerHTML)
      artist.displayAsideInfo(totalLikes);

      ["keydown", "click"].forEach(evenment  => {
        likeBtn.addEventListener(evenment, () => {
          const photoTitle = likeBtn.parentElement.querySelector("h2").textContent
          const currentMedia = artistMedias.filter((media) => media.title == photoTitle)[0]
          currentMedia.addLike()
          likeBtn.parentElement.querySelector(".likes").innerHTML = currentMedia.likes
          totalLikes += 1          
          artist.displayAsideInfo(totalLikes);
          return totalLikes
        })       
      })
    }) 
}