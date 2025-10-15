import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
            Mi Blog con Sanity
          </Link>
          <nav>
            <a href="#" className="text-gray-600 hover:text-blue-600">Sobre mí</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
