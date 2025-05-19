
import * as React from "react";
import { cn } from "@/lib/utils";

interface CakeSizeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const CakeSizeSelector: React.FC<CakeSizeSelectorProps> = ({ value, onChange }) => {
  // Cake size options with visual representation
  const sizes = [
    { size: "6", label: "6\"", diameter: "15cm", serves: "8-10 people" },
    { size: "8", label: "8\"", diameter: "20cm", serves: "12-16 people" },
    { size: "10", label: "10\"", diameter: "25cm", serves: "20-30 people" },
    { size: "12", label: "12\"", diameter: "30cm", serves: "40-50 people" }
  ];

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {sizes.map((sizeOption) => (
        <button
          key={sizeOption.size}
          type="button"
          onClick={() => onChange(sizeOption.size)}
          className={cn(
            "flex flex-col items-center p-4 rounded-lg border-2 transition-all hover:shadow-md",
            value === sizeOption.size 
              ? "border-brown bg-cream/50" 
              : "border-gray-200 hover:border-brown-light"
          )}
        >
          <div 
            className={cn(
              "rounded-full border-4 flex items-center justify-center mb-2 transition-transform",
              value === sizeOption.size ? "border-brown scale-110" : "border-gray-300"
            )}
            style={{ 
              width: `${parseInt(sizeOption.size) * 8}px`, 
              height: `${parseInt(sizeOption.size) * 8}px` 
            }}
          >
            <span className="text-xs font-cursive">{sizeOption.label}</span>
          </div>
          <span className="font-cursive text-brown-dark font-bold">
            {sizeOption.label}
          </span>
          <span className="text-xs text-gray-500 font-cursive">
            {sizeOption.diameter}
          </span>
          <span className="text-xs text-gray-500 font-cursive">
            {sizeOption.serves}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CakeSizeSelector;
