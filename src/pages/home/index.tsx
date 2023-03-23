import { useEffect, useState } from 'react';
import { getPets } from '../../requests';
import Cover from '../../components/cover';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { IAnimal } from '../../interfaces/IAnimal';

const HomePage = () => {
  const [data, setData] = useState<IAnimal[]>([]);
  const { type } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function getPetsData() {
      try {
        const petsData = await getPets(type);
        setData(petsData);
      } catch (error) {
        console.error(error);
      }
    }
    getPetsData();
  }, [type]);

  const goBack = () => {
    console.log('goback')
    navigate(-1)
  }

  if (!data) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="page">
      <Cover image='' displayText='' />
      <h4>
        <span className="pet-type-label">{type ? `${type}s` : 'Pets'}</span>{' '}
        available for adoption near you
      </h4>

      {data.length ? (
        <div className="grid">
          {data.map((animal) => (
            <Link
              key={animal.id}
              to={`/${animal.type.toLowerCase()}/${animal.id}`}
              className="pet"
            >
              <article>
                <div className="pet-image-container">
                  {
                    <img
                      className="pet-image"
                      src={
                        animal.photos[0]?.medium ||
                        '/missing-animal.png'
                      }
                      alt=""
                    />
                  }
                </div>
                <h3>{animal.name}</h3>
                <p>Breed: {animal.breeds.primary}</p>
                <p>Color: {animal.colors.primary}</p>
                <p>Gender: {animal.gender}</p>
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <>
          <p className="prompt">No {type}s available for adoption now.</p>
          <div className="actions-container">
            <button className="button" onClick={goBack}>
              Go Back
            </button>
          </div>
        </>


      )}
    </div>
  );
};

export default HomePage;
