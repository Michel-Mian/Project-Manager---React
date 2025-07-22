export default function Tags({ name, color }) {
    return (
        <span className={`bg-${color} text-slate-600 text-sm font-medium px-4 py-2 rounded-full shadow-md`}>
            {name}
        </span>
    )
}