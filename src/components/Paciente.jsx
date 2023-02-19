

const Paciente = ({paciente,setPaciente, eliminarPaciente}) => {
  
  const {nombre,propietario,email,fecha,sintomas, id} = paciente
  const handleEliminar = () =>{
    const respusta = confirm("Deseas eliminar este paciente?")
    if(respusta){
      eliminarPaciente(id)
    }
  }
  return (
    <div className="bg-white py-10 px-5 rounded-md shadow-lg mt-5">
      <p className="font-bold uppercase text-gray py-3">Nombre:
        <span className="font-normal normal-case "> {nombre}</span>
      </p>
      <p className="font-bold uppercase text-gray py-3">Propietario:
        <span className="font-normal normal-case "> {propietario}</span>
      </p>
      <p className="font-bold uppercase text-gray py-3">Email:
        <span className="font-normal normal-case "> {email}</span>
      </p>
      <p className="font-bold uppercase text-gray py-3">Fecha Alta:
        <span className="font-normal normal-case "> {fecha}</span>
      </p>
      <p className="font-bold uppercase text-gray py-3">Sintomas:
        <span className="font-normal normal-case "> {sintomas}</span>
      </p>
      <div className="flex align-center w-full pt-4">
        <button 
          type="button"
          className="py-2 px-10 bg-indigo-600 text-white hover:bg-indigo-800 font-bold rounded-md hover:rounded-none transition-all mr-3"
          onClick={()=> setPaciente(paciente)}
        >
          Editar 
        </button>
        <button 
          type="button"
          className="py-2 px-10 bg-red-600 text-white hover:bg-red-800 font-bold rounded-md hover:rounded-none transition-all mr-3"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Paciente
