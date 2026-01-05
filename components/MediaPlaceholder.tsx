interface MediaPlaceholderProps {
  ratio?: '16:9' | '4:3' | '1:1' | '3:2' | '3:4';
  className?: string;
  rounded?: boolean;
}

export default function MediaPlaceholder({
  ratio = '16:9',
  className = '',
  rounded = true,
}: MediaPlaceholderProps) {
  const ratioClasses = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
    '3:2': 'aspect-[3/2]',
    '3:4': 'aspect-[3/4]',
  };

  const roundedClass = rounded ? 'rounded-image' : '';

  return (
    <div
      className={`${ratioClasses[ratio]} ${roundedClass} bg-warm-beige flex items-center justify-center ${className}`}
    >
      <div className="text-text-secondary text-sm">Media Placeholder</div>
    </div>
  );
}

