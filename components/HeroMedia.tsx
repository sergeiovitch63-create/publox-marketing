import Image from 'next/image';

interface HeroMediaProps {
  src: string;
  type?: 'video' | 'image';
  ratio?: '16:9' | '3:4' | '1:1';
  className?: string;
  poster?: string;
}

export default function HeroMedia({
  src,
  type = 'video',
  ratio = '16:9',
  className = '',
  poster,
}: HeroMediaProps) {
  const ratioClasses = {
    '16:9': 'aspect-video',
    '3:4': 'aspect-[3/4]',
    '1:1': 'aspect-square',
  };

  return (
    <div className={`relative ${ratioClasses[ratio]} rounded-image overflow-hidden ${className}`}>
      {type === 'video' ? (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          className="h-full w-full object-cover"
        >
          Votre navigateur ne supporte pas la vidéo.
        </video>
      ) : (
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      )}
    </div>
  );
}

