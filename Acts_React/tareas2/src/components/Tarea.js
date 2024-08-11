// Diego Manjarrez Viveros
import "../styles/Tarea.css";
import DeleteIcon from '@mui/icons-material/Delete';

const Tarea = ({ tarea, completarTarea, eliminarTarea }) => {
    // Calcular estilo de la tarea, depende de completada
    const estilo = "tarea-contenedor " + (tarea.completada ? "completada" : "");
  
    return (
      <div className={estilo}>
        <div
          className="tarea-descripcion"
          onClick={() => completarTarea(tarea.id)}
        >
          {tarea.descripcion}
        </div>
        <div
          className="tarea-icono-borrar"
          onClick={() => eliminarTarea(tarea.id)}
        >
          <DeleteIcon className="DeletIcon" />
        </div>
      </div>
    );
  };
  
  export default Tarea;