// Resolucion de llamadas asincronas con PROMESAS

function pedirUnLibro(bookId) {

  return new Promise((resolve, reject) => {

    if (typeof bookId !== "number") {
      reject("Tipo de data de id libro incorrecto")
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
        reject("El libro no existe por ese ID")
      } else {
        resolve(foundBook)
      }
  
    }, 1000 + Math.random() * 2000) // 1seg y 3seg

  })

}


// const loPrometido = pedirUnLibro(10)
// console.log(loPrometido)

// los objetos de promesas tiene 3 metodos para poder resolverlas

// .then() => que va a ocurrir cuando la promesa sea resuelta correctamente
// .catch() => que va a ocurrir cuando la promesa haya fallado
pedirUnLibro(1)
.then((data) => {
  console.log(data) // libro 1

  // AQUI PODEMOS RETORNAR LA PROXIMA LLAMADA A RESOLVER 
  return pedirUnLibro(10)

})
.then((data) => {
  console.log(data) // libro 2

  return pedirUnLibro(3)
})
.then((data) => {
  console.log(data) // libro 3
})
.catch((error) => {
  console.log(error)
})

// pedirUnLibro(2)
// .then((data) => {
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// pedirUnLibro(3)
// .then((data) => {
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })