// Diego Manjarrez Viveros
// A01753486
import { useState } from "react";
import "../styles/CapturaTarea.css";
import { v4 as uuidv4 } from "uuid";

const CapturaTarea = (props) => {
  const [descripcion, setDescripcion] = useState("");

  // Función para agregar una nueva tarea
  const agregarTarea = (evento) => {
    evento.preventDefault();
    if (descripcion.trim() === "") {
      return;
    }
    const nuevaTarea = {
      descripcion: descripcion,
      id: uuidv4(),
      completada: false
    };
    props.onSubmit(nuevaTarea);
    props.onCancel();
  };

  const cambiaDescripcion = (evento) => {
    setDescripcion(evento.target.value);
    console.log(descripcion);
  };

  const cancelarTarea = () => {
    props.onCancel();
  };

  return (
        <form className="tarea-forma" onSubmit={agregarTarea}>
          <label htmlFor="descripcion">Nueva Tarea:</label>
          <input
            className="tarea-input"
            type="text"
            placeholder="Escribe la tarea"
            name="descripcion"
            id="descripcion"
            onChange={cambiaDescripcion}
          />
          <button className="tarea-boton" type="submit">
            Agregar tarea
          </button>
          <button className="tarea-boton" type="button" onClick={cancelarTarea}>
            Cancelar
          </button>
        </form>
  );
};

export default CapturaTarea;