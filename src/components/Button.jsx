export default function Button({ onClick, save, text }) {
    const className = 'text-white px-4 py-2 m-2'
    return save 
        ? <button onClick={onClick} className={`bg-green-700 ` + `${className}`}>{text}</button>
        : <button onClick={onClick} className={`bg-blue-700 ` + `${className}`}>{text}</button>
}