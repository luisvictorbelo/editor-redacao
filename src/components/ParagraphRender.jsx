export default function ParagraphRender({ children }) {
    return (
        <>
            <div className="flex justify-start">
                <h2 className="text-2xl text-start text-black">Texto formatado:</h2>
            </div>
            <div className="flex flex-col rounded-md mt-1 border border-gray-200">
                {children}
            </div>
        </>
    )
}