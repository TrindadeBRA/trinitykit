import React from 'react';

export default function Footer(headerData:any) {

  return (
    <footer className="bg-gray-950">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-1 text-center sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {Object.values(headerData).map((item:any) => (
            <div key={item.title} className="pb-6">
              <a href={item.slug} className="text-sm leading-6 text-gray-300 hover:text-gray-200">{item.title}</a>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-300">&copy; 2023 TrinityKit, Todos direitos reservados.</p>
      </div>
    </footer>
  );
};