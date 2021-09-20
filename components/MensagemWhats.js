export default function MensagemWhats(props) {
    return (
        <>
            <a class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-green-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 cursor-pointer no-underline" href={`https://api.whatsapp.com/send?phone=5571992986245&text=Ol%C3%A1%2C%20tenho%20interesse%20no%20produto%3A ${props.title}`} target="_blank" rel="noreferrer">
                <span>Eu quero!</span>
            </a>
        </>
    )
}