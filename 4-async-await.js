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


async function getData() {
  // el async convierte la funcion en asincrona y permite el uso de await para gestionar esperar en operaciones asincronas

  try {

    // dentro del try agregamos todo el código que el sistema debe intentar hacer y si en algun momento algo de esto falla, entra en el catch.

    // await => espera que la asincronia termine antes de continuar
    const response1 = await pedirUnLibro(1) // 2.2seg
    console.log(response1)

    const response2 = await pedirUnLibro(10)
    console.log(response2)

    const response3 = await pedirUnLibro(3)
    console.log(response3)

    // const allResponses = await Promise.all([
    //   pedirUnLibro(1), 
    //   pedirUnLibro(2), 
    //   pedirUnLibro(3)
    // ])
    // console.log(allResponses)

  } catch(error) {
    console.log(error)
  }

}

getData() // NO OLVIDEN INVOCAR LA FUNCION

console.log("esto cuando se ejecuta?")