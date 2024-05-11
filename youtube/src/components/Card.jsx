import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPk } from '../store/pkSlice';

const Card = ({ description, title, thumbnail, pk }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setPk(pk)); // Dispatch action to set pk in Redux store
    };

    return (
        <Link to={`/videos/${pk}`} className="card" onClick={handleClick}>
            <div className="vid-img">
                <img src={`http://127.0.0.1:8000/${thumbnail}`} alt="Card Image" className="object-cover w-auto sm:w-1/3 md:w-1/3 lg:w-1/3 h-25" />
            </div>
            <div className="title">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </Link>
    );
};

export default Card;
