const anchorsLinks = document.querySelectorAll("ul li a")

anchorsLinks.forEach(anchor => {
    anchor.addEventListener("click", setAnchorStyleActive)
})

function setAnchorStyleActive(e) {
    removeClassActiveInAnchorsLink()
    e.target.classList.add("active")
}

function setInitialAnchorStyleActive() {
    const { pathname } = window.location
    anchorsLinks.forEach(anchor => {
        let anchorHref = "/" + anchor.href.split("/")[3]
        if (pathname == anchorHref) {
            anchor.classList.add("active")
        } else {
            anchor.classList.remove("active")
        }
    })
}

function removeClassActiveInAnchorsLink() {
    anchorsLinks.forEach(anchor => anchor.classList.remove("active"))
}

setInitialAnchorStyleActive()


