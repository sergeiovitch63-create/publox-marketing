interface VideoPlaceholderProps {
  src: string;
  ratio?: '16:9' | '4:3' | '1:1' | '3:2' | '3:4';
  className?: string;
  rounded?: boolean;
}

export default function VideoPlaceholder({
  src,
  ratio = '16:9',
  className = '',
  rounded = true,
}: VideoPlaceholderProps) {
  const ratioClasses = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
    '3:2': 'aspect-[3/2]',
    '3:4': 'aspect-[3/4]',
  };

  const roundedClass = rounded ? 'rounded-image' : '';

  // Encode spaces and special characters in URL for compatibility
  const encodedSrc = src.replace(/ /g, '%20');

  return (
    <div className={`${ratioClasses[ratio]} ${roundedClass} overflow-hidden ${className}`}>
      <video
        src={encodedSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

