export default function Button({ onClick, save, text }) {
    const className = 'rounded-4xl text-white px-4 py-2 m-2'
    return save 
        ? <button onClick={onClick} className={`bg-green-700 hover:bg-green-800 ` + `${className}`}>{text}</button>
        : <button onClick={onClick} className={`bg-purple-700 hover:bg-purple-800 ` + `${className}`}>{text}</button>
}