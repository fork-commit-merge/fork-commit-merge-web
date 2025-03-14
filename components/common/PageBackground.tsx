import { useState, useEffect } from 'react';

interface PageBackgroundProps {
  imagePath: string;
  children: React.ReactNode;
}

const PageBackground: React.FC<PageBackgroundProps> = ({ imagePath, children }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imagePath;
    img.onload = () => setImageLoaded(true);
  }, [imagePath]);

  return (
    <div
      className={`w-full bg-cover bg-center transition-opacity duration-300 ${
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
