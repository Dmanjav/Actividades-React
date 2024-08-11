import "../styles/ListaTareas.css";
import CapturaTarea from "./CapturaTarea";
import Tarea from "./Tarea";
import { useContext, useEffect, useState, useCallback } from "react";
import { ContextoTareas } from "./ProveedorTarea";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { v4 as uuidv4 } from 'uuid';


const ListaTareas = (props) => {

  const [arrTareas, agregarNuevaTarea, completarTarea, eliminarTarea, cancelarTarea, mostrarFormularioHandler, mostrarFormulario, setArrTareas] = useContext(ContextoTareas);

  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/todos");

  const descargar = useCallback(
    () => {
      console.log("Descargando datos");
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const arrNuevo = data.map((usuario) => {
            const tareaNueva = {
              id: uuidv4(),
              descripcion: usuario.title,
              completada: usuario.completed,
            };
            return tareaNueva;
          });
          setArrTareas(arrNuevo);
        })
        .catch((error) => console.log(error));
    }, [url]
  );

  useEffect(() => {
    descargar();
  }, [descargar]);

  return (
    <div className="lista-tareas">
      {!mostrarFormulario ? null : <CapturaTarea onSubmit={agregarNuevaTarea} onCancel={cancelarTarea} />}
      {mostrarFormulario ? null : (
        <div>
            <button className="tarea-boton-icon" onClick={() => setUrl("https://jsonplaceholder.typicode.com/todos")} >Todos los usuarios</button>
            <button className="tarea-boton-icon" onClick={() => setUrl("https://jsonplaceholder.typicode.com/todos?completed=true")} >Completadas</button>
            <button className="tarea-boton-icon" onClick={() => setUrl("https://jsonplaceholder.typicode.com/todos?completed=false")} >Pendientes</button>
            <button onClick={mostrarFormularioHandler} className="tarea-boton-icon">
              <AddCircleOutlineIcon />
          </button>
        </div>

      )}

      {arrTareas.length !== 0 ? (
        arrTareas.map((tarea) => {
          return (
            <Tarea
              tarea={tarea}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
              key={tarea.id}
            />
          );
        })
      ) : (
        <div className="tarea-contenedor">
          <h2> No hay tareas </h2>
        </div>
      )}
    </div>
  );
};




export default ListaTareas;
