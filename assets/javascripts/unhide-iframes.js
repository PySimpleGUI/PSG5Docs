window.onload = function () {
    let iframe_elements = document.getElementsByTagName("iframe")

    if (iframe_elements.length != 0) {
        for (let i = 0; i < iframe_elements.length; i++) {
            let iframe = iframe_elements[i]
            iframe.setAttribute('style', 'display: inline')
        }
    }
}