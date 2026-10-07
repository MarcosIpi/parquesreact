const ParquesCard = ({ nombre, imagen, descripcion }) => {
    return (
        <div class="col-lg-4 col-md-6 my-2">
            <div class="card h-100">
                <img class="card-img-top" src={imagen} alt="Title" />
                <div class="card-body">
                    <h4 class="card-title text-center">{nombre}</h4>
                    <p class="card-text"><div dangerouslySetInnerHTML={{ __html: descripcion }} ></div></p>
                </div>
            </div>

        </div>
    );
};
export default ParquesCard;

