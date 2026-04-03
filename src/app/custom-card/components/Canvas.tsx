"use client";

import React from "react";
import DraggableItem, { CanvasElement } from "./DraggableItem";

interface CanvasProps {
  elements: CanvasElement[];
  bgColor: string;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  onUpdateElement: (id: string, updates: Partial<CanvasElement>) => void;
  onRemoveElement: (id: string) => void;
  canvasRef: React.RefObject<HTMLDivElement>;
}

export default function Canvas({
  elements,
  bgColor,
  selectedId,
  onSelect,
  onUpdateElement,
  onRemoveElement,
  canvasRef
}: CanvasProps) {
  return (
    <div className="flex justify-center items-center h-full w-full bg-[#1a001f] p-4 sm:p-8 overflow-hidden">
      <div 
        className="relative shadow-2xl overflow-hidden touch-none"
        style={{
          width: 500,
          backgroundColor: bgColor,
          transformOrigin: 'center center',
          // Use CSS max-width and aspect ratio to ensure it scales down on mobile
          maxWidth: '100%',
          aspectRatio: '5/7',
          height: 'auto'
        }}
        onClick={(e) => {
          // Deselect if clicking directly on the canvas background
          if (e.target === e.currentTarget) {
            onSelect(null);
          }
        }}
        ref={canvasRef}
      >
        {/* Render elements */}
        {elements.map((el) => (
          <DraggableItem
            key={el.id}
            element={el}
            isSelected={selectedId === el.id}
            onSelect={() => onSelect(el.id)}
            onChange={(updates) => onUpdateElement(el.id, updates)}
            onRemove={() => onRemoveElement(el.id)}
          />
        ))}
      </div>
    </div>
  );
}
