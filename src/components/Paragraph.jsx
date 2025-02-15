export default function Paragraph({ text }) {
    return text === "Seu texto aparecerá aqui..." ?
        <p className="p-2 text-black/45 text-justify my-2">{text}</p>
        :
        <p className="p-2 text-black text-justify break-words hyphens-auto my-2">{text}</p>
}