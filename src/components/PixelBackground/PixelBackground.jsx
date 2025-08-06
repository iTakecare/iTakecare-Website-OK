import React, { useEffect, useRef } from 'react';
import './PixelBackground.css';

export const PixelBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    // Ajuster la taille du canvas à celle de son conteneur
    const resizeCanvas = () => {
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      initGrid();
    };
    
    // Paramètres de la grille pour correspondre à la texture de fond
    const squareSize = 12; // Taille des carrés
    const gap = 8; // Espacement entre les carrés
    const totalSize = squareSize + gap;
    
    // Tableau pour stocker l'état des carrés
    let squares = [];
    
    // Initialiser la grille
    const initGrid = () => {
      if (!canvas) return;
      
      squares = [];
      const cols = Math.ceil(canvas.width / totalSize);
      const rows = Math.ceil(canvas.height / totalSize);
      
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          squares.push({
            x: x * totalSize + 2, // Petit décalage pour aligner avec la texture
            y: y * totalSize + 2,
            glowing: false,
            glowIntensity: 0, // Intensité du glow (0 à 1)
            glowDirection: 1, // 1 pour augmenter, -1 pour diminuer
            nextGlowTime: Math.random() * 5000 + Date.now() // Temps aléatoire pour le prochain glow
          });
        }
      }
      
      drawGrid();
    };
    
    // Dessiner la grille
    const drawGrid = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      squares.forEach(square => {
        if (square.glowing && square.glowIntensity > 0) {
          // Créer un effet de glow blanc avec opacité variable
          const alpha = square.glowIntensity * 0.6; // Opacité maximale de 60%
          
          // Dessiner le carré avec un effet de glow
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.fillRect(square.x, square.y, squareSize, squareSize);
          
          // Ajouter un effet de halo autour du carré
          const gradient = ctx.createRadialGradient(
            square.x + squareSize/2, square.y + squareSize/2, 0,
            square.x + squareSize/2, square.y + squareSize/2, squareSize
          );
          gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.8})`);
          gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
          
          ctx.fillStyle = gradient;
          ctx.fillRect(square.x - 2, square.y - 2, squareSize + 4, squareSize + 4);
        }
      });
    };
    
    // Mettre à jour l'animation des carrés
    const updateSquares = () => {
      const currentTime = Date.now();
      
      squares.forEach(square => {
        // Vérifier s'il est temps de commencer un nouveau glow
        if (!square.glowing && currentTime >= square.nextGlowTime) {
          square.glowing = true;
          square.glowDirection = 1;
        }
        
        // Animer le glow
        if (square.glowing) {
          square.glowIntensity += square.glowDirection * 0.03; // Vitesse d'animation
          
          // Inverser la direction quand on atteint les limites
          if (square.glowIntensity >= 1) {
            square.glowDirection = -1;
          } else if (square.glowIntensity <= 0) {
            square.glowing = false;
            square.glowIntensity = 0;
            square.glowDirection = 1;
            // Programmer le prochain glow dans 2 à 8 secondes
            square.nextGlowTime = currentTime + Math.random() * 6000 + 2000;
          }
        }
      });
      
      drawGrid();
    };
    
    // Effet de survol - activer les carrés proches de la souris
    const handleMouseMove = (e) => {
      if (!canvas) return;
      
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      squares.forEach(square => {
        const dx = mouseX - (square.x + squareSize / 2);
        const dy = mouseY - (square.y + squareSize / 2);
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Activer les carrés proches de la souris
        if (distance < 60 && !square.glowing) {
          square.glowing = true;
          square.glowDirection = 1;
          square.glowIntensity = 0;
        }
      });
    };
    
    // Initialisation et démarrage de l'animation
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    
    initGrid();
    const interval = setInterval(updateSquares, 16); // 60 FPS pour une animation fluide
    
    // Nettoyage
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="pixel-background"
    />
  );
};
