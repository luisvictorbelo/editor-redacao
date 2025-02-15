import { useState, useCallback } from "react";
import Paragraph from './Paragraph';
import ParagraphRender from "./ParagraphRender";
import TextArea from "./TextArea";
import Header from "./Header";

export default function DraftEditor() {
    const [paragraphs, setParagraphs] = useState([]);
    const [inputText, setInputText] = useState("");

    const addParagraph = () => {
        if (inputText.trim() !== "") {
            setParagraphs((previous) => [...previous, { id: Date.now(), text: inputText }]); // Adiciona um parágrafo com um ID baseado no timestamp
            setInputText("")
        }
    };

    const saveDraft = () => {
        window.alert("Seu rascunho foi salvo!")
    };

    return (
        <>
            <Header addParagraph={addParagraph} saveDraft={saveDraft} />
            <div className="grid grid-cols-1 mx-5 gap-5 p-4 bg-white">
                <TextArea inputText={inputText} setInputText={setInputText} />
                <ParagraphRender>
                    {paragraphs.length > 0 ? (
                        paragraphs.map((paragraph) => (
                            <Paragraph key={paragraph.id} text={paragraph.text} />
                        ))
                    ) : (
                        <Paragraph text={"Seu texto aparecerá aqui..."} />
                    )}
                </ParagraphRender>
            </div>
        </>
    )
}