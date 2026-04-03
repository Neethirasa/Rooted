"use client";

import React, { useState, useRef, useEffect } from "react";
import Canvas from "./components/Canvas";
import { CanvasElement } from "./components/DraggableItem";
import { Inter, Playfair_Display, Dancing_Script, Bebas_Neue, Caveat } from "next/font/google";
import { Type, Image as ImageIcon, Send, Palette, Trash2, Download, ArrowLeft } from "lucide-react";
import html2canvas from "html2canvas";
import Link from "next/link";

// Initialize fonts
const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
const dancing = Dancing_Script({ subsets: ["latin"] });
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"] });

const FONT_OPTIONS = [
  { name: "Inter (Sans)", value: inter.style.fontFamily },
  { name: "Playfair (Serif)", value: playfair.style.fontFamily },
  { name: "Dancing Script", value: dancing.style.fontFamily },
  { name: "Bebas Neue", value: bebas.style.fontFamily },
  { name: "Caveat (Handwriting)", value: caveat.style.fontFamily },
];

export default function CustomCardPage() {
  const [elements, setElements] = useState<CanvasElement[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [bgColor, setBgColor] = useState<string>("#ffffff");
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [notes, setNotes] = useState("");
  
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const canvasRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addText = () => {
    const newId = `text-${Date.now()}`;
    setElements([
      ...elements,
      {
        id: newId,
        type: "text",
        x: 150,
        y: 300,
        rotation: 0,
        content: "Double click to edit",
        fontFamily: inter.style.fontFamily,
        color: "#1a001f",
        fontSize: 32,
      },
    ]);
    setSelectedId(newId);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      const newId = `image-${Date.now()}`;
      setElements([
        ...elements,
        {
          id: newId,
          type: "image",
          x: 100,
          y: 200,
          width: 300,
          height: 300,
          rotation: 0,
          content: url,
        },
      ]);
      setSelectedId(newId);
    }
  };

  const updateElement = (id: string, updates: Partial<CanvasElement>) => {
    setElements((prev) => prev.map((el) => (el.id === id ? { ...el, ...updates } : el)));
  };

  const removeElement = (id: string) => {
    setElements((prev) => prev.filter((el) => el.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  const handleSendDesign = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canvasRef.current) return;
    
    // Deselect to hide resize/rotation grips
    setSelectedId(null);
    
    // Add small delay to ensure React state updates and hides the handles
    setTimeout(async () => {
      try {
        setSending(true);
        // Capture canvas
        const canvas = await html2canvas(canvasRef.current!, {
          scale: 3, // 3x scale of 500x700 -> 1500x2100 (300DPI equivalent for 5x7)
          useCORS: true,
          backgroundColor: bgColor,
        });

        const imageBase64 = canvas.toDataURL("image/png");

        // Send to backend
        const response = await fetch("/api/send-card", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, orderNumber, notes, imageBase64 }),
        });

        if (response.ok) {
          setSuccess(true);
        } else {
          alert("Failed to send design. Please try again or contact support.");
        }
      } catch (err) {
        console.error(err);
        alert("An error occurred during export.");
      } finally {
        setSending(false);
      }
    }, 100);
  };

  const selectedElement = elements.find((el) => el.id === selectedId);

  return (
    <div className="min-h-screen bg-[#1a001f] text-[#dfcfbd] flex flex-col md:flex-row">
      <div className="flex-1 overflow-hidden relative border-r border-[#342848]">
        <Canvas
          elements={elements}
          bgColor={bgColor}
          selectedId={selectedId}
          onSelect={setSelectedId}
          onUpdateElement={updateElement}
          onRemoveElement={removeElement}
          canvasRef={canvasRef}
        />
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
          <button
            onClick={addText}
            className="flex items-center gap-2 px-6 py-3 bg-[#342848] rounded-full hover:bg-[#3e2a4e] transition-colors shadow-lg font-semibold outline-none focus-visible:ring-2 focus-visible:ring-[#dfcfbd]"
          >
            <Type size={18} /> Add Text
          </button>
          
          <button 
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 px-6 py-3 bg-[#342848] rounded-full hover:bg-[#3e2a4e] transition-colors shadow-lg font-semibold outline-none focus-visible:ring-2 focus-visible:ring-[#dfcfbd]"
          >
            <ImageIcon size={18} /> Add Image
          </button>
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleImageUpload}
            ref={fileInputRef}
            className="hidden"
            tabIndex={-1}
          />
        </div>
      </div>

      <div className="w-full md:w-96 bg-[#1a001f] lg:overflow-y-auto">
        <div className="p-6 md:p-8 space-y-8">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#dfcfbd]/70 hover:text-[#dfcfbd] mb-6 transition-colors">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <h1 className="text-3xl font-bold mb-2">Custom Card Creator</h1>
            <p className="text-sm text-[#dfcfbd]/70">Design your 5x7 card and send it to our team.</p>
          </div>

          {/* Tools */}
          <div className="space-y-6 bg-[#342848]/30 p-6 rounded-xl border border-[#342848]">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Palette size={20} /> Design Tools
            </h2>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Background Color</label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-10 h-10 rounded cursor-pointer bg-transparent border-0 p-0"
                />
                <input
                  type="text"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="bg-[#1a001f] border border-[#342848] rounded px-3 flex-1 text-sm outline-none focus:border-[#dfcfbd]"
                />
              </div>
            </div>

            {selectedElement?.type === "text" && (
              <div className="space-y-4 pt-4 border-t border-[#342848]">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Font Family</label>
                  <select
                    value={selectedElement.fontFamily}
                    onChange={(e) => updateElement(selectedId!, { fontFamily: e.target.value })}
                    className="w-full bg-[#1a001f] border border-[#342848] rounded px-3 py-2 text-sm outline-none focus:border-[#dfcfbd]"
                  >
                    {FONT_OPTIONS.map((f) => (
                      <option key={f.name} value={f.value} style={{ fontFamily: f.value }}>
                        {f.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Text Color</label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={selectedElement.color}
                      onChange={(e) => updateElement(selectedId!, { color: e.target.value })}
                      className="w-10 h-10 rounded cursor-pointer bg-transparent border-0 p-0"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Font Size: {selectedElement.fontSize}px</label>
                  <input
                    type="range"
                    min="12"
                    max="120"
                    value={selectedElement.fontSize}
                    onChange={(e) => updateElement(selectedId!, { fontSize: Number(e.target.value) })}
                    className="w-full accent-[#dfcfbd]"
                  />
                </div>
              </div>
            )}
            
            {!selectedElement && (
              <p className="text-sm text-[#dfcfbd]/50 pt-4 border-t border-[#342848]">
                Select an element on the canvas to configure it.
              </p>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSendDesign} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Your Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#342848] border border-transparent rounded px-4 py-3 text-sm outline-none focus:border-[#dfcfbd] transition-colors"
                placeholder="Jane Doe"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Your Email *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#342848] border border-transparent rounded px-4 py-3 text-sm outline-none focus:border-[#dfcfbd] transition-colors"
                placeholder="jane@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Order Number (Optional)</label>
              <input
                type="text"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                className="w-full bg-[#342848] border border-transparent rounded px-4 py-3 text-sm outline-none focus:border-[#dfcfbd] transition-colors"
                placeholder="#12345"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Design Notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#342848] border border-transparent rounded px-4 py-3 text-sm outline-none focus:border-[#dfcfbd] transition-colors min-h-[100px] resize-y"
                placeholder="Any special instructions for the print team?"
              />
            </div>

            {success ? (
              <div className="p-4 bg-green-900/40 text-green-200 border border-green-800 rounded-lg text-center font-medium">
                Design sent successfully! We'll be in touch soon.
              </div>
            ) : (
              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#dfcfbd] text-[#1a001f] rounded-lg hover:bg-[#f5e5cd] transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-bold text-lg"
              >
                {sending ? (
                  "Preparing Design..."
                ) : (
                  <>
                    <Send size={20} /> Send Design
                  </>
                )}
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
