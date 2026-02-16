"use client";

import { useEffect, useRef } from "react";

type GridCell = {
  x: number;
  y: number;
  alpha: number;
};

export default function NeonGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const size = 90;
    let grid: GridCell[] = [];

    const createGrid = () => {
      grid = [];
      for (let x = 0; x < width; x += size) {
        for (let y = 0; y < height; y += size) {
          grid.push({ x, y, alpha: 0 });
        }
      }
    };

    createGrid();

const draw = () => {
  ctx.clearRect(0, 0, width, height);

  grid.forEach((cell) => {
    if (cell.alpha <= 0) return;

    // Fondo del cuadrado
    ctx.fillStyle = `rgba(168,85,247,${cell.alpha * 0.02})`;
    ctx.fillRect(cell.x, cell.y, size, size);

    // Borde sutil
    ctx.strokeStyle = `rgba(168,85,247,${cell.alpha * 0.15})`;
    ctx.lineWidth = 1;
    ctx.strokeRect(cell.x + 0.5, cell.y + 0.5, size - 1, size - 1);

    cell.alpha -= 0.06;
  });

  requestAnimationFrame(draw);
};

    draw();

    const handleMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      grid.forEach((cell) => {
        if (
          mx >= cell.x &&
          mx <= cell.x + size &&
          my >= cell.y &&
          my <= cell.y + size
        ) {
          cell.alpha = 1;
        }
      });
    };

    window.addEventListener("mousemove", handleMove);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      createGrid();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}