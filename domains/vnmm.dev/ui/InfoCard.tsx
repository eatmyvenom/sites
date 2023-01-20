import Image from 'next/image';
import '#/styles/ui/InfoCard.css';

export interface InfoCardProps {
  destination: string;
  image: string;
  text: string;
}

export default function InfoCard({ destination, image, text }: InfoCardProps) {
  return (
    <a
      style={{ whiteSpace: 'pre-line' }}
      className="infoCard"
      href={destination}
    >
      <div style={{ position: 'relative' }}>
        <Image
          fill={true}
          style={{ objectFit: 'contain' }}
          src={image}
          alt=""
        />
      </div>
      {text.replace(/\\n/g, '\n')}
    </a>
  );
}
