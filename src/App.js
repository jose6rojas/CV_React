import React, { Component } from 'react';
import './App.css';
import Category from './Category.js';
import jose from './jose.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <br/>
        <h1>Curriculum Vitae</h1>
        <img src={jose} alt="José Rojas"/>
        <br/>
        <ul>
          <Category name="Datos Personales"
            items={[
              'Nombre: José Carlos',
              'Apellido: Rojas Herrera',
              'Fecha de Nacimiento: 28 de noviembre',
              'Número de Identidad: 0801-1996-20829',
              'Estado Civil: Soltero',
              'Dirección: Lomas del Guijarro Sur, Avenida Berlín, Casa # 1215',
              'Celular: 8881-4431',
              'Correo Electrónico: jose99rojas@hotmail.com'
            ]}
            icon="file-text-o"
          />
          <Category
            name="Formación Académica"
            items={[
              'Actualmente estudio Ingeniería en Sistemas Computacionales en la Universidad Tecnológica Centroamericana',
              '2014 - 2015 Bachiller en Ciencias y Letras en la Macris School',
              '2014 - 2015 High School en la Macris School',
              '2003 - 2014 Primaria y Secundaria en la Macris School',
              '2001 - 2002 Pre-escolar en la Academia Los Pinares'
            ]}
            icon="cube"
          />
          <Category
            name="Cursos y Seminarios"
            items={[
              '14 de agosto de 2015 "Taller de Inducción de la Vida Universitaria" por la Universidad Tecnológica Centroamericana (4 h.)',
              '10 de noviembre de 2014 "Seminario Trabajo en Equipo y Cultura de Excelencia" por Valor Humano (6 h.)'
            ]}
            icon="anchor"
          />
          <Category name="Idiomas" items={['Español', 'Inglés', 'Portugués']} icon="comment-o"/>
          <Category name="Experiencia Laboral" items={['Intérprete Médico en la empresa Grupo Levanter (11 meses)']} icon="circle"/>
          <Category name="Otros Datos de Interés" items={['Disponibilidad de 11 a.m. a 2:30 p.m. por motivos académicos']} icon="spinner"/>
        </ul>
      </div>
    );
  }
}

export default App;
