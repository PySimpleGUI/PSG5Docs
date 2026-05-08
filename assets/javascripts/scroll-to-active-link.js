scrollToActive = () => {
    console.log("SCROLL")
    let active_elements = document.getElementsByClassName("md-nav__link md-nav__link--active")
    let target

    for (let i = 0; i < active_elements.length; i++) {
        if (active_elements[i].tagName == "A") {
            target = active_elements[i]
            break
        }
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    console.log(target)
}