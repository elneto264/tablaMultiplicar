const fs = require('fs');
const colors = require('colors');


const crearArchivo = async ( base = 5, listar = false, hasta = 10) =>{
    try{


        let salida, consola = ''; //son variables diferentes iniciadas con el mismo valor

    
        for(let i= 1; i<= hasta; i++){
            salida +=`${base} * ${ i} = ${base * i}\n`;
            consola +=`${base} ${'*'.green} ${ i} ${'='.green} ${base * i}\n`;
        }
        if (listar){
            console.log('================='.blue);
            console.log(' Tabla del '.blue,colors.green( base ));
            console.log('================='.blue);   
            console.log(consola)
        }

        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt creada`;

    } catch(err) {
        
        throw err

    }




}

module.exports = {
    crearArchivo
}