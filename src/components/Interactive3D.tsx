import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Interactive3D() {
  const { pathname } = useLocation();

  useEffect(() => {
    const cards = document.querySelectorAll('.card, .card-hover, .glow-card');

    const handleMouseMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -15; // Max rotation 15deg (increased from 10)
      const rotateY = ((x - centerX) / centerX) * 15;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
      
      // Dynamic shine effect
      card.style.setProperty('--mouseX', `${x}px`);
      card.style.setProperty('--mouseY', `${y}px`);

      // EXTREME HOLOGRAPHIC EFFECT: push all direct children out in 3D space
      Array.from(card.children).forEach((child) => {
        (child as HTMLElement).style.transform = 'translateZ(60px)';
        (child as HTMLElement).style.transition = 'transform 0.2s ease-out';
      });
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      
      Array.from(card.children).forEach((child) => {
        (child as HTMLElement).style.transform = 'translateZ(0px)';
      });
    };

    cards.forEach(card => {
      // Add a CSS class that enables the transition and dynamic shine
      card.classList.add('dynamic-3d-card');
      
      (card as HTMLElement).addEventListener('mousemove', handleMouseMove);
      (card as HTMLElement).addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      cards.forEach(card => {
        (card as HTMLElement).removeEventListener('mousemove', handleMouseMove);
        (card as HTMLElement).removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [pathname]); // Re-run when page changes to catch new cards

  return null;
}
