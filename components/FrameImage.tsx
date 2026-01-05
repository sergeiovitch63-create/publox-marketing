import { ReactNode } from 'react';
import MediaPlaceholder from './MediaPlaceholder';

interface FrameImageProps {
  children?: ReactNode;
  ratio?: '16:9' | '4:3' | '1:1' | '3:2';
  className?: string;
}

export default function FrameImage({
  children,
  ratio = '16:9',
  className = '',
}: FrameImageProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Outer blue frame */}
      <div className="absolute inset-0 bg-pastel-blue rounded-image -z-10" />
      {/* Inner beige border */}
      <div className="absolute inset-[2px] bg-warm-beige rounded-image -z-10" />
      {/* Content */}
      <div className="relative rounded-image overflow-hidden">
        {children || <MediaPlaceholder ratio={ratio} rounded={false} />}
      </div>
    </div>
  );
}

