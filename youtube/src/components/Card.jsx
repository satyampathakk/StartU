import { setPk } from "../store/pkSlice";
const Card = ({description,title,image,pk}) => {
    return (
        <div key={pk} className="card" onClick={(pk)=>{setPk(pk)}}>
            <div className="vid-img">
                <img src={image} alt="Card Image" className="image" />
            </div>
            <div className="title">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}
export default Card;
