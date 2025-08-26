
export const CardCharacter = ({id,name,image,status,listFavorites,changeFavorites}) => {

  /* Parte logica para poder utilizar la lista de favoritos */
  const handleAddToFavorites = () => {
    //Logica para guardar en favoritos
    console.log({id,name,image,status});
  //Propagacion de datos
  changeFavorites({id,name,image,status})
  console.log(listFavorites);
  
  }
  return (
    <div>
        <div className="card" style={{height: '38vh'}}>
  <img src={image} className="card-img-top" alt="image-character" />
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{status}</p>
    <button className="btn btn-primary" onClick={handleAddToFavorites} >Add to Favorites</button>
  </div>
</div>

    </div>
  )
}
