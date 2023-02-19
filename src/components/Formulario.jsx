import {useState , useEffect} from 'react'
import Error from './Error'
// TODO: los hook no van por fuera siempre dentro de la funcion del componente
const Formulario = ({pacientes,setPacientes,paciente, setPaciente}) => {
  
  const [nombre,setNombre] = useState("")
  const [propietario,setPropietario] = useState("")
  const [email,setEmail] = useState("")
  const [fecha,setFecha] = useState("")
  const [sintomas,setSintomas] = useState("")
  const [error, setError] = useState("")

  useEffect(()=>{
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setEmail(paciente.email)
      setPropietario(paciente.propietario)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  },[paciente])

  const generarId = () => {
    
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha 
  }

  // TODO: la funcion derecha(setnombre) es la funcion modificadora la funcion a la que se le manda el cambio del usuario

  const handleSubmit = e =>{
    e.preventDefault()
    if([nombre, propietario,email,fecha,sintomas].includes("")){
      setError(true)
      return;
    }
    setError(false)
    const objPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }
    if(paciente.id){
      // editando el registro
      objPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState)
      setPacientes(pacientesActualizados)
      setPaciente({})
    }else{
      // nuevo registro
      objPaciente.id =  generarId()
      setPacientes([...pacientes,objPaciente])
    }
    // console.log(objPaciente)
    // reiniciar
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')


  }
  return (
    <div className="w-full md:w-1/2 lg:w-2/5">
      <h1 className="font-black text-3xl text-center pb-2 ">Seguimiento pacientes</h1>
      <p className="text-center text-lg ">Añadir pacientes y <span className="font-bold text-indigo-600">Adminitrarlos </span></p>
      <form action="" className="sticky top-5 bg-white py-10 px-5 rounded-lg shadow-lg my-5"
        onSubmit={handleSubmit}
        >
        { error && <Error>Todos los campos son requeridos</Error>}
        <div className="pb-4">
          <label htmlFor="mascota" className="block text-gray-700 uppercase text-xs font-bold py-3">
            Nombre Mascota
          </label>
          <input id="mascota" type="text" className="border-2 p-2 block w-full rounded-lg" placeholder="Nombre de la mascota" 
            value={nombre} 
            onChange={ (e) => setNombre(e.target.value)}
          />
          <label htmlFor="mascota" className="block text-gray-700 uppercase text-xs font-bold py-3">
            Nombre propietario
          </label>
          <input id="propietario" type="text" className="border-2 p-2 block w-full rounded-lg" placeholder="Nombre de la propietario"
            value={propietario} 
            onChange={ (e) => setPropietario(e.target.value)}
          />
          <label htmlFor="email" className="block text-gray-700 uppercase text-xs font-bold py-3">
            Email
          </label>
          <input id="email" type="email" className="border-2 p-2 block w-full rounded-lg" placeholder="Nombre de la propietario"
            value={email} 
            onChange={ (e) => setEmail(e.target.value)}
          />
          <label htmlFor="alta" className="block text-gray-700 uppercase text-xs font-bold py-3">
            Alta
          </label>
          <input id="alta" type="date" className="border-2 p-2 block w-full rounded-lg"
            value={fecha} 
            onChange={ (e) => setFecha(e.target.value)}
          />
          <label htmlFor="sintomas" className="block text-gray-700 uppercase text-xs font-bold py-3">
            sintomas
          </label>
          <textarea id="sintomas" className="border-2 p-2 block w-full rounded-lg " placeholder="Sintomas de la mascota"
            value={sintomas} 
            onChange={ (e) => setSintomas(e.target.value)}
          />
        </div>
        <input type="submit" className="bg-indigo-600 text-white w-full p-3 cursor-pointer hover:bg-indigo-800 hover:rounded-none transition-all rounded-lg"
          value={paciente.id ? "Editar paciente": "Enviar"}
        />
      </form>
    </div>
  )
} 

export default Formulario
