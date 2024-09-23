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
// .finally() => que va a ocurren independientemente de si se resuelve o falla. Es algo que siempre va a ocurrir.

pedirUnLibro(1)
.then((data) => {
  console.log(data) // libro 1

  // AQUI PODEMOS RETORNAR LA PROXIMA LLAMADA A RESOLVER 
  return pedirUnLibro(2)

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
.finally(() => {
  console.log("Esto siempre se va a ejecutar luego que termine la operación")
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


// Promise.all y Promise.allSettled => reciben un array de multiples promesas

// Esto es una forma de hacer multiples llamadas a la vez cuando no nos interesa el orden cuando las respuesta anteriores no dependen de la proxima llamada.



Promise.all([
  pedirUnLibro(1),
  pedirUnLibro(2),
  pedirUnLibro(3)
])
.then((response) => {
  console.log(response)
})
.catch((error) => {
  console.log(error)
})

// Promise.all indica que si una de ellas falla, todo falla y entra en el catch


Promise.allSettled([
  pedirUnLibro(1),
  pedirUnLibro(10),
  pedirUnLibro(3)
])
.then((response) => {
  console.log(response)
})

// Promise.allSettled si cualquier falla, igual tenemos la data de las que se resolvieron correctamente. No usa catch.