//Uso este archivo para dar de alta el servidor y llamar a app.js:

const app=require ('./app');

const puerto = process.env.PORT || 3000

app.listen(puerto,()=>
    console.log(`el puerto ${puerto} esta activo`)
)
