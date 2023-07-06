function Profilecard({title, handle, image, alt, description}) {

    return <div>
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt={alt} />
                </figure>
            </div>

            <div className="card-content">
                <div className="card-media">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">My Handle is {handle}</p>
                </div>
                <div className="contetn">
                    {description}
                </div>
            </div>
        </div>
    </div>
}

export default Profilecard;