"use client";

import React, { useState, useRef, useEffect, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react";
import { Trash2, RotateCw } from "lucide-react";

export interface CanvasElement {
  id: string;
  type: "text" | "image";
  x: number;
  y: number;
  width?: number;
  height?: number;
  rotation: number;
  content: string; // text string or image url
  fontFamily?: string;
  color?: string;
  fontSize?: number;
}

interface DraggableItemProps {
  element: CanvasElement;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (updates: Partial<CanvasElement>) => void;
  onRemove: () => void;
}

export default function DraggableItem({ element, isSelected, onSelect, onChange, onRemove }: DraggableItemProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);

  // References for pure dragging math to avoid closure staleness
  const dragStartRef = useRef({ x: 0, y: 0, elX: element.x, elY: element.y });
  const resizeStartRef = useRef({ x: 0, y: 0, width: element.width || 100, height: element.height || 100 });
  const rotateStartRef = useRef({ cx: 0, cy: 0, startAngle: 0, elRotation: element.rotation });

  // Handle Drag
  const handlePointerDown = (e: React.PointerEvent) => {
    e.stopPropagation();
    onSelect();
    
    // Only drag if left click and not interacting with handles
    if (e.button !== 0 || (e.target as HTMLElement).closest(".handle")) return;
    
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      elX: element.x,
      elY: element.y,
    };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) {
      const dx = e.clientX - dragStartRef.current.x;
      const dy = e.clientY - dragStartRef.current.y;
      onChange({
        x: dragStartRef.current.elX + dx,
        y: dragStartRef.current.elY + dy,
      });
    } else if (isResizing) {
      const dx = e.clientX - resizeStartRef.current.x;
      const dy = e.clientY - resizeStartRef.current.y;
      onChange({
        width: Math.max(20, resizeStartRef.current.width + dx),
        height: Math.max(20, resizeStartRef.current.height + dy),
      });
    } else if (isRotating && containerRef.current) {
      const { cx, cy, startAngle, elRotation } = rotateStartRef.current;
      const angle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI);
      let diff = angle - startAngle;
      onChange({ rotation: elRotation + diff });
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    setIsResizing(false);
    setIsRotating(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  // Resize Handle
  const handleResizeStart = (e: React.PointerEvent) => {
    e.stopPropagation();
    setIsResizing(true);
    resizeStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      width: element.width || 100,
      height: element.height || 100,
    };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  // Rotate Handle
  const handleRotateStart = (e: React.PointerEvent) => {
    e.stopPropagation();
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    
    setIsRotating(true);
    rotateStartRef.current = {
      cx,
      cy,
      startAngle: Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI),
      elRotation: element.rotation,
    };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{
        position: "absolute",
        left: element.x,
        top: element.y,
        width: element.type === "image" ? element.width : "auto",
        height: element.type === "image" ? element.height : "auto",
        transform: `rotate(${element.rotation}deg)`,
        transformOrigin: "center center",
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
        touchAction: "none",
        border: isSelected ? "2px dashed #dfcfbd" : "none",
      }}
      className={`group ${isSelected ? "z-10" : "z-0"}`}
    >
      {isSelected && (
        <div className="absolute -top-10 left-0 flex gap-2 handle bg-[#342848] p-1 rounded backdrop-blur-md border border-[#3e2a4e]">
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={onRemove}
            className="p-1 text-red-400 hover:text-red-300 transition-colors"
            title="Remove"
          >
            <Trash2 size={16} />
          </button>
        </div>
      )}

      {element.type === "text" ? (
        <div
          contentEditable={isSelected}
          suppressContentEditableWarning
          onPointerDown={(e) => {
            if (isSelected) e.stopPropagation(); // allow cursor placement when selected
          }}
          onBlur={(e) => onChange({ content: e.currentTarget.innerText })}
          style={{
            fontFamily: element.fontFamily,
            color: element.color,
            fontSize: `${element.fontSize}px`,
            whiteSpace: "pre-wrap",
            minWidth: "50px",
            minHeight: "1em",
            outline: "none",
            lineHeight: 1.2,
          }}
        >
          {element.content}
        </div>
      ) : (
        <img
          src={element.content}
          alt="Uploaded Element"
          style={{ width: "100%", height: "100%", objectFit: "cover", pointerEvents: 'none' }}
          draggable={false}
        />
      )}

      {/* Controls visible only when selected */}
      {isSelected && (
        <>
          {element.type === "image" && (
            <div
              className="handle absolute -bottom-2 -right-2 w-4 h-4 bg-[#dfcfbd] rounded-full cursor-se-resize border-2 border-[#1a001f]"
              onPointerDown={handleResizeStart}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            />
          )}
          <div
            className="handle absolute -top-8 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#dfcfbd] text-[#1a001f] rounded-full cursor-grab active:cursor-grabbing flex items-center justify-center border-2 border-[#1a001f]"
            onPointerDown={handleRotateStart}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            title="Rotate"
          >
            <RotateCw size={12} />
          </div>
          <div className="absolute top-0 left-[50%] -translate-x-[50%] -translate-y-full w-px h-6 bg-[#dfcfbd]" />
        </>
      )}
    </div>
  );
}
