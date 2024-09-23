// Resolucion de llamadas asincronas con Callbacks

function pedirUnLibro(bookId, callback, callbackError) {

  if (typeof bookId !== "number") {
    callbackError("Tipo de data de id libro incorrecto")
    return 
  }
  // replicar un comportamiento asincrono.
  // simulamos que esta data existe en un lugar externo y tarde cierto tiempo real en ser retornada
  setTimeout(() => {
    const books = [
      {
        id: 1,
        title: "La comunidad del anillo",
        texto: "..."
      },
      {
        id: 2,
        title: "Las dos torres",
        texto: "..."
      },
      {
        id: 3,
        title: "El retorno del rey",
        texto: "..."
      },
      // ... aqui podrian haber otros mil libros
    ]
    const foundBook = books.find((eachBook) => {
      return bookId === eachBook.id
    })

    if (foundBook === undefined) {
      callbackError("El libro no existe por ese ID")
    } else {
      callback(foundBook)
    }

  }, 1000 + Math.random() * 2000) // 1seg y 3seg
}

// const respuesta = pedirUnLibro(3)
// console.log(respuesta)

// function recibirData(data) {
//   console.log(data)
// }

pedirUnLibro(1, (data) => {
  console.log(data)

  pedirUnLibro(2, (data) => {
    console.log(data)

    pedirUnLibro(3, (data) => {
      console.log(data)

      pedirUnLibro(4, (data) => {
        console.log(data)
      }, (error) => {
        console.log(error)
      })

    }, (error) => {
      console.log(error)
    })

  }, (error) => {
    console.log(error)
  })

}, (error) => {
  console.log(error)
})



