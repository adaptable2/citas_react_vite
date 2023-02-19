
import Paciente from "./Paciente"

function ListadoPacientes({pacientes,setPaciente,eliminarPaciente}) {
  return (
    <div className=" md:w-1/2 lg:w-3/5 md:pl-10 pb-10">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="text-center font-black text-3xl">Listado pacientes</h2>
          <p className="text-center pt-3 text-lg">Administra tus 
            <span className="text-indigo-600 font-bold"> pacientes y citas</span>
          </p>
          {pacientes.map( paciente =>{
            //TODO: si no se le agrega un return no va a imprimir nada 
            return(
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            )
          })}
        </>
      ) : (
        <>
          <h2 className="text-center font-black text-3xl">No hay pacientes</h2>
          <p className="text-center pt-3 text-lg">Puedes empezar agregando un 
            <span className="text-indigo-600 font-bold"> nuevo pacientes </span>
          </p>
        </>
      )}
      
    </div>
  )
}

export default ListadoPacientes