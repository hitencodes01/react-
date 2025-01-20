const mainContainer = document.getElementById("root")
function createElement(reactElement,mainContainer){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    mainContainer.appendChild(domElement)
}
const reactElement = {
    type : "a",
    props : {
        href : "https://www.google.com",
        target : "_blank"
    },
    children : "chai aur react"
}
createElement(reactElement,mainContainer)