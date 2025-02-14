import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import DraftEditor from './components/DraftEditor'

function App() {

    const [showEditor, setShowEditor] = useState(false); // Estado para iniciar a aplicação

    return (
        // Somente renderizará o DraftEditor após o botão iniciar for clicado
        <div className='flex flex-col items-center justify-center min-h-screen p-4'>
            {!showEditor
                ?
                (
                    <>
                        <h1 className='text-white'>Clique no botão abaixo para editar sua redação!</h1>
                        <Button onClick={() => setShowEditor(true)} text={'Iniciar'}/>
                    </>
                )
                :
                (
                    <DraftEditor/>
                )
            }
        </div>
    );
}


export default App
