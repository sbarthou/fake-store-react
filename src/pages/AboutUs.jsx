import benja from "../assets/benjaContreras.jpg";
import nico from "../assets/nicoDuran.jpg";
import seba from "../assets/sebaBarthou.jpg";

function AboutUs() {
  return (
    <div
      className='h-screen bg-cover bg-center'
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <div className='min-h-screen bg-black/40'>
        <p className='px-20 pt-10 pb-20 text-white text-justify'>
          Bienvenidos a nuestro proyecto de Diseño de Software en la Universidad
          Adolfo Ibáñez. Somos un equipo apasionado de tres estudiantes de
          ingeniería comprometidos con la creación de soluciones innovadoras y
          eficientes. En este proyecto, exploramos las complejidades del diseño
          de software, aplicando nuestros conocimientos teóricos a situaciones
          del mundo real. Nuestra misión es desarrollar una aplicación que no
          solo cumpla con los requisitos técnicos, sino que también brinde una
          experiencia excepcional para el usuario. A través de la colaboración y
          el esfuerzo conjunto, aspiramos a crear un producto que marque la
          diferencia en el ámbito del diseño de software. Estamos emocionados de
          compartir que nuestra página se ha construido con tecnologías
          modernas. Utilizamos React para la creación de componentesinteractivos
          y una interfaz de usuario dinámica. Además, hemos empleado Tailwind
          CSS para el diseño y la estilización, aprovechando su potente enfoque
          de clases utilitarias. Agradecemos la oportunidad de aplicar lo que
          hemos aprendido en nuestras clases y estamos emocionados de compartir
          nuestro enfoque creativo y nuestras habilidades técnicas con ustedes.
          ¡Gracias por visitar nuestra página y ser parte de nuestro viaje!
        </p>

        <div className='flex justify-around px-20'>
          <div className='w-1/4 p-2 bg-gray-900 rounded-xl flex flex-col items-center justify-center shadow-md shadow-gray-950'>
            <p className='text-xl text-white text-center mb-2'>
              Benjamín Contreras
            </p>
            <img
              src={benja}
              alt=''
              className='m-1 h-72 rounded shadow-md shadow-gray-950'
            />
            <p className='mt-2 text-sm text-gray-400'>
              Estudiante de Ingeniería Civil Informática
            </p>
            <a
              href='mailto:becontreras@alumnos.uai.cl'
              className='text-sm text-neutral-500 hover:underline'
            >
              becontreras@alumnos.uai.cl
            </a>
          </div>

          <div className='w-1/4 p-2 bg-gray-900 rounded-xl flex flex-col items-center justify-center shadow-md shadow-gray-950'>
            <p className='text-xl text-white text-center mb-2'>Nicolás Durán</p>
            <img
              src={nico}
              alt=''
              className='m-1 h-72 rounded shadow-md shadow-gray-950'
            />
            <p className='mt-2 text-sm text-gray-400'>
              Estudiante de Ingeniería Civil Informática
            </p>
            <a
              href='mailto:niduran@alumnos.uai.cl'
              className='text-sm text-neutral-500 hover:underline'
            >
              niduran@alumnos.uai.cl
            </a>
          </div>

          <div className='w-1/4 p-2 bg-gray-900 rounded-xl flex flex-col items-center justify-center shadow-md shadow-gray-950'>
            <p className='text-xl text-white text-center mb-2'>
              Sebastián Barthou
            </p>
            <img
              src={seba}
              alt=''
              className='m-1 h-72 rounded shadow-md shadow-gray-950'
            />
            <p className='mt-2 text-sm text-gray-400'>
              Estudiante de Ingeniería Civil Informática
            </p>
            <a
              href='mailto:sbarthou@alumnos.uai.cl'
              className='text-sm text-neutral-500 hover:underline'
            >
              sbarthou@alumnos.uai.cl
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
