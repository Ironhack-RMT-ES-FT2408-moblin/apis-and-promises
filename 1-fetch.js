

const btnNode = document.querySelector("button")

btnNode.addEventListener("click", () => {
  console.log("buscando data")

  fetch( "https://api.spacexdata.com/v5/launches/latest" )
  .then((response) => {
    // console.log(response)
    return response.json() // traduciendo la data a JSON para que JS lo pueda leer
  })
  .then((respuestaEnJSON) => {
    console.log(respuestaEnJSON)

    const imageSRC = respuestaEnJSON.links.patch.small
    const imagesNode = document.querySelector("#images")

    const imgNode = document.createElement("img")
    imgNode.src = imageSRC

    imagesNode.append(imgNode)

    return fetch(`https://api.spacexdata.com/v4/crew/${respuestaEnJSON.crew[1].crew}`)

  })
  .then((response) => {
    return response.json()
  })
  .then((dataDelCrew) => {
    console.log(dataDelCrew)

    // const imageSRC = dataDelCrew.image
    const imagesNode = document.querySelector("#images")

    const pNode = document.createElement("p")
    pNode.innerText = dataDelCrew.name

    const aNode = document.createElement("a")
    aNode.innerText = dataDelCrew.name
    aNode.href = dataDelCrew.wikipedia

    imagesNode.append(pNode)
    imagesNode.append(aNode)
  })
  .catch((error) => {
    console.log(error)
  })

})