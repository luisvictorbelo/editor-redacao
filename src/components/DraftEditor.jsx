import { useState, useCallback } from "react";
import Paragraph from './Paragraph';
import Button from "./Button";
import ParagraphRender from "./ParagraphRender";

export default function DraftEditor() {
    const [paragraphs, setParagraphs] = useState([]);
    const [inputText, setInputText] = useState("");

    const addParagraph = () => {
        if (inputText.trim() !== "") { 
            setParagraphs((previous) => [...previous, { id: Date.now(), text: inputText}]); // Adiciona um parágrafo com um ID baseado no timestamp
            setInputText("") 
        } 
    };

    const saveDraft = () => {
        window.alert("Seu rascunho foi salvo!")
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 max-w-5xl mx-auto">
            <div>
                <span className='text-2xl text-center text-white'>Editor de Redação</span>
                <textarea
                    className="w-full mt-1 p-2 border rounded-md bg-gray-100"
                    rows={5}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Digite seu parágrafo aqui...">
                </textarea>
                <div className="flex justify-center">
                    <Button onClick={addParagraph} text={"Adicionar parágrafo"} />
                    <Button save onClick={saveDraft} text={"Salvar Rascunho"} />
                </div>
            </div>
            <div>
                <ParagraphRender>
                    {/* Renderizar parágrafos dinamicamente */}
                    {paragraphs.map((paragraph) => (
                        <Paragraph key={paragraph.id} text={paragraph.text} />
                    ))} 
                </ParagraphRender>
            </div>
        </div>
    )
}