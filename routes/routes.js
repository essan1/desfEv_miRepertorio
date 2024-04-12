import express from 'express';
import path from 'path';
//importamos las queries
import { verCanciones, agregarCancion, eliminarCancion, editarCancion } from "../queries/consultas.js"
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
    const cancion = [titulo, artista, tono];
    const result = await agregarCancion(cancion);
    res.json(result);
})


//3__ ruta delete
router.delete('/cancion', async (req, res) => {
    const {id} = req.query; //captura x url
    const result = await eliminarCancion(id);
    console.log("id", id);
    res.send('Eliminado')

})


//4__ ruta edit
router.put('/cancion/:id', async (req, res) => {
    const { id } = req.params;
    const { titulo, artista, tono } = req.body;
    const cancion = [titulo, artista, tono, id];
    const result = await editarCancion(cancion);
    res.send('cambio ok')
    
} )

//creamos nuestra ruta generica, simeprea al final
router.get('*', (req, res) => {
    res.status(400);
    res.send("<h1><center>404 ERROR -- Pagina No Encontrada</center></h1>");
})


export default router;