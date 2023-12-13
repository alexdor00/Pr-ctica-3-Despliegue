import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { Name } from './schemas/nameObject.js';


const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Para parsear JSON en el cuerpo de las peticiones

// Conexión a MongoDB
const uri = 'mongodb+srv://alex:despliegue@clusteralex.3m1r06x.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar con MongoDB', err));

// Rutas
app.get('/names', async (req, res) => {
    try {
        const names = await Name.find();
        res.json(names);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/names', async (req, res) => {
    const newName = new Name({ name: req.body.name });
    try {
        await newName.save();
        res.status(201).json(newName);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
