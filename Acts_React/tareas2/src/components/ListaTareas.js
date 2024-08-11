import "../styles/ListaTareas.css";
import CapturaTarea from "./CapturaTarea";
import Tarea from "./Tarea";
import { useContext } from "react";
import { ContextoTareas } from "./ProveedorTarea";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const ListaTareas = (props) => {

  const [ arrTareas, agregarNuevaTarea, completarTarea, eliminarTarea, cancelarTarea, mostrarFormularioHandler, mostrarFormulario ] = useContext(ContextoTareas);

  return (
    <div className="lista-tareas">
      {!mostrarFormulario ? null : <CapturaTarea onSubmit={agregarNuevaTarea} onCancel={cancelarTarea} />}
        {mostrarFormulario ? null : (
          <button onClick={mostrarFormularioHandler} className="tarea-boton-icon">
            <AddCircleOutlineIcon />
          </button>
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
