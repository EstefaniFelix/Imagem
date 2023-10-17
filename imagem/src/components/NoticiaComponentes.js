const NoticiaComponente = ({ titulo, imagem, alt, descricao, categoria }) => {
    return (
        <div className="noticia">
            <h2 className="titulo"> {titulo} </h2>
            <img src={imagem} alt={alt} className="noticia-imagem" />
            <p className="descricao">{descricao}</p>
            <p className="categoria"> {categoria} </p>
        </div>
    )
}

export default NoticiaComponente;