import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getPetTypes } from '../../requests';
import { IType } from '../../interfaces/IType';
import Search from '../search';

const Navigation = () => {
  const [petTypes, setPetTypes] = useState<IType[]>([]);

  useEffect(() => {
    async function getPetTypesData() {
      const { types } = await getPetTypes();
      setPetTypes(types);
    }
    getPetTypesData();
  }, []);

  return (
    <nav>
      <div className="nav-logo">
        <div className='logo'>
          <img src={'https://cdn-icons-png.flaticon.com/512/7608/7608786.png'} style={{ height: 70 }} alt="Petlover" />
          <span>Adopet</span>
        </div>
        <Search />
      </div>
      <ul className="nav-links">
        <li key="all">
          <NavLink
            to="/"
            className={({ isActive }) => "nav-link" + (isActive ? " nav-link-active" : "")}
            end
          >
            All Pets
          </NavLink>
        </li>
        {petTypes
          ? petTypes.map((type) => (
            <li key={type.name}>
              <NavLink
                to={`/${type._links.self.href.split('/').pop()}`}
                key={type.name}
                className={({ isActive }) => "nav-link" + (isActive ? " nav-link-active" : "")}
              >
                {type.name}s
              </NavLink>{' '}
            </li>
          ))
          : 'Loading...'}
      </ul>
    </nav>
  );
};

export default Navigation;
