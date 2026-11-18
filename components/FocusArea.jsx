import Image from 'next/image';
import { BookOpen, Stethoscope, Briefcase, Venus } from 'lucide-react';

const icons = {
  Education: BookOpen,
  Health: Stethoscope,
  Livelihood: Briefcase,
  'Women Empowerment': Venus,
};

export default function FocusArea({ title, description, image }) {
  const Icon = icons[title] || BookOpen;

  return (
    <div className="bg-white border border-blue-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col text-left group">
      {image && (
        <div className="relative w-full h-44 overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold text-blue-900">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
