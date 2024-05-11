import { useEffect, useState } from 'react';
import Card from '../Card';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/videos/');
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            {data ? data.map((item) => <Card key={item.pk} {...item} />) : <h1>Loading...</h1>}
        </div>
    );
};

export default Home;
