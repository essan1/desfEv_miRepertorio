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




export {    
    verCanciones,
    agregarCancion
}