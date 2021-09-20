export default function MensagemWhats(props) {
    return( 
        <>
        <a href={`https://api.whatsapp.com/send?phone=5571992986245&text=Ol%C3%A1%2C%20tenho%20interesse%20no%20produto%3A ${props.title}`} className="btn btn-success" target="_blank">Comprar</a>
        </>
     )
}