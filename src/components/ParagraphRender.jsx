export default function ParagraphRender( {children} ) {
    return (
        <>
            <span className="text-2xl text-center text-white">Visualização de Texto</span>
            <div className="flex flex-col rounded-md mt-1 bg-gray-100">
                {children}
            </div>
        </>
    )
}