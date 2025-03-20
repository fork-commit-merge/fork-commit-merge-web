import { useState, useEffect } from 'react';

interface PageBackgroundProps {
  imagePath: string;
  children: React.ReactNode;
}

const PageBackground: React.FC<PageBackgroundProps> = ({
  imagePath = '/fcm-background-image.png',
  children
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imagePath;
    img.onload = () => setImageLoaded(true);
  }, [imagePath]);

  return (
    <div
      className={`page-header-background transition-opacity duration-300 ${
        imageLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundImage: `url('${imagePath}')`,
        backgroundColor: 'var(--bg-primary)' //* Fallback color while loading
      }}
    >
      {children}
    </div>
  );
};

export default PageBackground;


