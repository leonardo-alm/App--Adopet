import { IPetProps } from '../../interfaces/IPetProps';

const Pet = (props: IPetProps) => {
  const { animal } = props
  return (
    <a
      key={animal.id}
      href={`/${animal.type.toLowerCase()}/${animal.id}`}
      className="pet"
    >
      <article>
        <div className="pet-image-container">
          {
            <img
              className="pet-image"
              src={
                animal.photos[0]?.medium || 'https://i.imgur.com/aEcJUFK.png'
              }
              alt=""
            />
          }
        </div>
        <div className="pet-text">
          <h3>{animal.name}</h3>
          <p>Breed: {animal.breeds.primary}</p>
          <p>Color: {animal.colors.primary}</p>
          <p>Gender: {animal.gender}</p>
        </div>

      </article>
    </a>
  );
};

export default Pet;
