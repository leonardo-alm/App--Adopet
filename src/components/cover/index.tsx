import { IHeroProps } from '../../interfaces/IHeroProps';

const Cover = ({ image, displayText }: IHeroProps) => {
  
  return (
    <div
      className="cover-container"
      style={{
        backgroundImage: `linear-gradient(black, black), url("${image || 'cover-dogs.jpg'
          }")
          `,
        backgroundBlendMode: 'saturation',
        backgroundSize: 'cover',
        backgroundColor: '#0000004f'
      }}
    >
      <h2>{displayText || 'Adopt a friend 🤍'}</h2>
    </div>
  );
};

export default Cover;

