export default function (pic) {
    return (
        <div>
        {
          pic.images.map(image=>(
            // return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            // )
          )
          )
        }
      </div>
    )
}
