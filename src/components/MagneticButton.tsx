import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface MagneticButtonProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function MagneticButton({ to, href, children, className = '', onClick }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const node = buttonRef.current;
      if (!node || !isHovering) return;

      const rect = node.getBoundingClientRect();
      const h = rect.width / 2;
      const w = rect.height / 2;
      const x = e.clientX - rect.left - h;
      const y = e.clientY - rect.top - w;

      // Magnetic pull limit (0.3 = gentle pull)
      setPosition({ x: x * 0.4, y: y * 0.4 });
    };

    if (isHovering) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      setPosition({ x: 0, y: 0 });
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovering]);

  const style = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: isHovering ? 'transform 0.1s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'transform 0.5s cubic-bezier(0.5, 0, 0, 1)',
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const innerContent = (
    <span 
      className="inline-flex items-center justify-center gap-2 transition-transform duration-300"
      style={{ transform: isHovering ? `translate3d(${position.x * 0.2}px, ${position.y * 0.2}px, 0) scale(1.05)` : 'scale(1)' }}
    >
      {children}
    </span>
  );

  const baseClasses = `relative inline-block overflow-hidden ${className}`;

  if (to) {
    return (
      <Link
        to={to}
        ref={buttonRef as any}
        className={baseClasses}
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        {innerContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        ref={buttonRef as any}
        className={baseClasses}
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as any}
      className={baseClasses}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {innerContent}
    </button>
  );
}
