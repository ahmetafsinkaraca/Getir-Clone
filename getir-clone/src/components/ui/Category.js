export default function Category({ category: {id, title, image}}) {
    return (
        <a href='#' className='flex flex-col items-center gap-y-2 text-center p-4 transition-all hover:bg-purple-50'>
            <img src={image} alt={title} className="h-12 w-12 rounded border-2 border-gray-200"/>
            <span className="text-sm font-semibold hover:text-brand-color text-gray-700">{title}</span>
        </a>
    )
}
