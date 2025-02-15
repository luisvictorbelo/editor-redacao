import Button from "./Button";

export default function Header({ addParagraph, saveDraft }) {
    return (
        <div className="flex justify-between shadow-md mb-4">
            <div className="flex flex-col justify-center px-3">
                <h1 className="text-black">Editor de Parágrafos</h1>
            </div>
            <div className="px-1 py-1 md:px-3 md:py-3">
                <Button  onClick={addParagraph} text={"Adicionar Parágrafo"} />
                <Button save  onClick={saveDraft} text={"Salvar Rascunho"} />
            </div>
        </div>
    )
}