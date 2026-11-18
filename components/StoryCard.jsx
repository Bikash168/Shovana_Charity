import Image from 'next/image';
import { createElement } from 'react';
import * as Icons from 'lucide-react';

export default function StoryCard({ name, description, icon, image }) {
  const LucideIcon = Icons[icon] || Icons.UserRound; 

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col text-left group">
      {image && (
        <div className="relative w-full h-56 overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-3 text-blue-600 flex items-center gap-2">
          {createElement(LucideIcon, { size: 22 })}
          <span className="text-xs uppercase font-bold tracking-wider text-blue-600">
            Inspiring Story
          </span>
        </div>
        <h3 className="text-xl text-gray-800 font-bold mb-3">{name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed flex-1">{description}</p>
      </div>
    </div>
  );
}
