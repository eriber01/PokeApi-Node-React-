import React from 'react'

import NavBar from './components/NavBar/NavBar'

function App(){

  //aqui estaba el handleChange


  //maneja la descarga del texto
    /* handleText(e){
      const datos = this.state.pokemon
      const type = this.state.type
      const attack = this.state.attack
      const defe = this.state.defe
      const hp = this.state.hp
  
        //crear el archivo de texto

        function descargarArchivo(contenidoEnBlob) {
          var reader = new FileReader();
          reader.onload = function (event) {
              var save = document.createElement('a');
              save.href = event.target.result;
              save.target = '_blank';
              save.download = datos.name || 'o.txt';
              var clicEvent = new MouseEvent('click', {
                  'view': window,
                      'bubbles': true,
                      'cancelable': true
              });

              console.log(datos.name);
              save.dispatchEvent(clicEvent);
              (window.URL || window.webkitURL).revokeObjectURL(save.href);
          };
          reader.readAsDataURL(contenidoEnBlob);
      };
      
        //llena el array con los datos que iran dentro del objeto
        function generarTexto(datos) {
            var texto = [];
      
          texto.push(`Datos de ${datos.name}\n`);
          texto.push('Nombre: ');
          texto.push(datos.name);
          texto.push('\n');
          texto.push('Orden en la Pokedex: ');
          texto.push(datos.order);
          texto.push('\n');
          texto.push('Experiencia:');
          texto.push(datos.base_experience);
          texto.push('\n');
          texto.push('Typo:');
          texto.push(type);
          texto.push('\n');
          texto.push('Altura:');
          texto.push(datos.height);
          texto.push('\n');
          texto.push('Ataque:');
          texto.push(attack);
          texto.push('\n');
          texto.push('Hp:');
          texto.push(hp);
          texto.push('\n');
          texto.push('Defensa:');
          texto.push(defe);
          return new Blob(texto, {
              type: 'text/plain'
          });
        }

      //funcion para ejecutar la descargar al hacer click
          descargarArchivo(generarTexto(datos, datos.name))
      
    } */


    return(
      //codigo Html que llama a las funciones
      <div>

        {/* aqui estaba el NavBar */}
        <NavBar/>

        {/* aqui va el card */}

      </div>
    )
}


export default App;
