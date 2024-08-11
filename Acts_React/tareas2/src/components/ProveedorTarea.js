// Diego Manjarrez Viveros
// Proveedor arrTareas y sus operaciones, usa un Contexto para compartirlo con otros componentes

import { createContext, useState } from 'react';

export const ContextoTareas = createContext(); // Espacio global

const ProveedorTareas = ({ children }) => {
    // Datos
    const [arrTareas, setArrTareas] = useState([]);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    // Operaciones
    const agregarNuevaTarea = (tareaNueva) => {
        setArrTareas([tareaNueva, ...arrTareas]);
    };

    const mostrarFormularioHandler = () => {
      setMostrarFormulario(true);
    };
  
    const cancelarTarea = () => {
      setMostrarFormulario(false);
    };

    // Función que completa una tarea
    const completarTarea = (id) => {
        const arrTareasNuevo = arrTareas.map((tarea) => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setArrTareas(arrTareasNuevo);
    };

    // Función para eliminar tareas
    const eliminarTarea = (id) => {
        const arrTareasNuevo = arrTareas.filter((tarea) => tarea.id !== id);
        setArrTareas(arrTareasNuevo);
    }

    return (
        <ContextoTareas.Provider value={[arrTareas, agregarNuevaTarea, completarTarea, eliminarTarea, cancelarTarea, mostrarFormularioHandler, mostrarFormulario ]}>
            {children}
        </ContextoTareas.Provider>
    );
};

export default ProveedorTareas;