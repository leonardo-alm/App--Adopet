import { useEffect, useState } from 'react';
import { getPetDetails } from '../../requests';
import Cover from '../../components/cover';
import { useParams, Navigate } from 'react-router-dom';
import { IAnimal } from '../../interfaces/IAnimal';

const PetDetailsPage = () => {
  const [data, setData] = useState<IAnimal>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams()

  useEffect(() => {
    async function getPetsData() {
      try {
        if (id) {
          const petsData = await getPetDetails(id);
          if (petsData) {
            setData(petsData);
            setError(false);
          }
          else {
            setError(true);
          }
        }
        else {
          setError(true);
        }
      } catch (e) {
        setError(true);
      }
      setLoading(false);
    }

    getPetsData();
  }, [id]);

  return (
    <div className='page'>
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <div>
          <Navigate to='/pet-details-not-found' />
        </div>
      ) : data && (
        <main>
          <div className="pet-detail">
            <div className="pet-image-container">
              <img
                className="pet-image"
                src={
                  data.photos[1]?.medium || 'https://i.imgur.com/aEcJUFK.png'
                }
                alt=""
              />
            </div>
            <div>
              <h1>{data.name}</h1>
              <h3>Breed: {data.breeds.primary}</h3>
              <p>Color: {data.colors.primary || 'Unknown'}</p>
              <p>Gender: {data.gender}</p>
              <h3>Description</h3>
              <p>{data.description}</p>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default PetDetailsPage;
