import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children: ReactNode;
  className?: string;
  imageUrl?: string;
  title?: string;
  description?: string;
}

export const Card = ({
  children,
  className = "",
  imageUrl,
  title,
  description,
}: CardProps) => {
  return (
    <div
      className={twMerge(
        "bg-white rounded-lg shadow-md overflow-hidden",
        className
      )}
    >
      {imageUrl && (
        <div className="relative h-48 w-full">
          <img
            src={imageUrl}
            alt={title || "Card image"}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        {children}
      </div>
    </div>
  );
};
