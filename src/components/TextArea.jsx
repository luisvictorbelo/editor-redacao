export default function TextArea({ inputText, setInputText }) {
    return (
        <>
            <div className="flex justify-start">
                <h2 className='text-2xl text-start text-black'>Edite seu parágrafo:</h2>
            </div>
            <div>
                <textarea
                    className="w-full mt-1 p-3 border rounded-2xl"
                    rows={10}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Digite seu parágrafo aqui...">
                </textarea>
            </div>
        </>
    )
}