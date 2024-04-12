import express from 'express';
import path from 'path';
//importamos las queries
import { verCanciones, agregarCancion } from "../queries/consultas.js"
const router = express.Router();
const __dirname = import.meta.dirname


//ruta principal
router.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../views/index.html'))
});


//1__ ruta para ver canciones
router.get('/canciones', async (req, res) => {
    const mostrarCanciones = await verCanciones();
    res.json(mostrarCanciones)
})

//2__ ruta para agregar cancion
router.post('/cancion', async (req, res) => {
    const { titulo, artista, tono } = req.body;
    const cancion = [titulo, artista, tono]
    const result = await agregarCancion(datos);
    console.log(result);
    res.jason(result);


    res.redirect('/');
})


//creamos nuestra ruta generica, simeprea al final
router.get('*', (req, res) => {
    res.status(400);
    res.send("<center>404 ERROR -- Pagina No Encontrada</center>");
})


export default router;