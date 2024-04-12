import db from "../config/db.js"

//fx para conectar a la bbdd

//1__ mostrar data
const verCanciones = async () => {
  try {
    const consultaCanciones = {
      text: "select * from canciones",
    };
    const result = await db.query(consultaCanciones);
    console.log(result.rows);
    return result.rows;
  } catch (err) {
    console.log(err.message);
  }
};


//2__ Post Cancion
const agregarCancion = async (datos) => {
  try {
    const consultaCanciones = {
      text: "insert into canciones (titulo, artista, tono) values ($1, $2, $3)returning *",
      values: datos,
    };

    const result = await db.query(consultaCanciones);
    console.log(result.rows);
    return result.rows;
  } catch (err) {
    console.log(err.message);
  }
};


//3__ delete Cancion
const eliminarCancion = async (id) => {
      try {
        const consultaCanciones = {
          text: "delete from canciones where id = $1 returning *",
          values: [id]
        };
        const result = await db.query(consultaCanciones);
        //necesimtamos validar
        if (result.rowCount == 0){
            throw new Error('Cancion no encontrada!')
        }
        return result.rows;
      } catch (err) {
        console.log(err.message);
      }
}


//3__ editar cancion 
const editarCancion = async (cancion) => {
          try {
            const consultaCanciones = {
              text: "update canciones set titulo=$1, artista=$2, tono=$3 where id=$4 returning *",
              values: cancion,
            };
            const result = await db.query(consultaCanciones);
            //necesimtamos validar
            if (result.rowCount == 0) {
              throw new Error("Cancion no encontrada!");
            }
            return result.rows;
          } catch (err) {
            console.log(err.message);
          }
}



export {    
    verCanciones,
    agregarCancion,
    eliminarCancion,
    editarCancion
}