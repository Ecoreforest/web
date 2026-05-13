import Image from 'next/image';

type LogoProps = {
  className?: string;
  variant?: 'mark' | 'full';
  color?: 'forest' | 'white';
};

export default function Logo({
  className = '',
  variant = 'full',
  color = 'forest',
}: LogoProps) {
  const markSrc =
    color === 'white' ? '/logos/mark-white.png' : '/logos/mark-green.png';
  const textSrc =
    color === 'white' ? '/logos/full-white.png' : '/logos/full-color.png';

  if (variant === 'mark') {
    return (
      <Image
        src={markSrc}
        alt="EcoReforest"
        width={564}
        height={504}
        className={className}
        priority
      />
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src={markSrc}
        alt=""
        width={564}
        height={504}
        className="h-7 w-auto"
        priority
      />
      <Image
        src={textSrc}
        alt="EcoReforest"
        width={1600}
        height={300}
        className="h-[18px] w-auto"
        priority
      />
    </div>
  );
}
