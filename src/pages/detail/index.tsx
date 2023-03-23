import { useEffect, useState } from 'react';
import { getPetDetails } from '../../requests';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { IAnimal } from '../../interfaces/IAnimal';

const PetDetailsPage = () => {
  const [data, setData] = useState<IAnimal>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams()
  const navigate = useNavigate()

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

  const goBack = () => {
    console.log('goback')
    navigate(-1)
  }

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
                  data.photos[1]?.medium || data.photos[0]?.medium || '/missing-animal.png'
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
          <div className="actions-container">
            <button className="button" onClick={goBack}>
              Go Back
            </button>
          </div>
        </main>

      )}
    </div>
  );
};

export default PetDetailsPage;
