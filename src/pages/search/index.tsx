import { useState, useEffect, useMemo } from 'react';
import Cover from '../../components/cover';
import { getPets } from '../../requests';
import Pet from '../../components/pet';
import { useLocation } from 'react-router-dom';
import { IPetDetail } from '../../interfaces/IPetDetail';

const SearchPage = () => {
  const { search } = useLocation()

  const queryParams = useMemo(() => {
    return new URLSearchParams(search);
  }, [search]);

  const [pets, setPets] = useState<IPetDetail[]>([]);

  useEffect(() => {
    async function getPetsData() {
      let petNameToFind = queryParams.get('name')
      if (petNameToFind != null) {
        const petsData = await getPets('', petNameToFind);
        setPets(petsData);
      }
    }

    getPetsData();
  }, [queryParams]);

  return (
    <div className="page search-page">
      <Cover image='' displayText={`Results for ${queryParams.get('name')}`} />

      <h3>Pets available for adoption near you</h3>

      <main>
        <div className="grid">
          {pets.map((pet) => (
            <Pet animal={pet} key={pet.id} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
