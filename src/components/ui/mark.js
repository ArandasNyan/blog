/**
 * Componente para marcar um palavra, ou um texto com estilos específicos
 */
export function Mark({children}) {
    return <span className="font-bold text-indigo-400">{children}</span>
}