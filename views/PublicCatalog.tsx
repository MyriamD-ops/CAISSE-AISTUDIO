
import React, { useState } from 'react';
import { ViewState, Category, Product } from '../types';
import { MOCK_PRODUCTS } from '../constants';

interface PublicCatalogProps {
  onNavigate: (v: ViewState) => void;
  onProductDetail: (p: Product) => void;
}

const PublicCatalog: React.FC<PublicCatalogProps> = ({ onNavigate, onProductDetail }) => {
  const [filter, setFilter] = useState<Category>(Category.TOUT);

  const filtered = filter === Category.TOUT 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-blush">
      <header className="px-6 pt-10 pb-6 bg-white rounded-b-[40px] shadow-sm">
        <div className="flex items-center gap-4 mb-6">
           <button onClick={() => onNavigate('public-home')} className="text-luxury-dark/40">
              <span className="material-symbols-outlined">arrow_back</span>
           </button>
           <h1 className="text-2xl font-bold">Le Catalogue</h1>
        </div>
        
        <nav className="flex overflow-x-auto gap-3 hide-scrollbar py-2">
          {Object.values(Category).map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
                filter === cat 
                  ? 'bg-primary text-white' 
                  : 'bg-blush text-primary/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </header>

      <main className="p-6 grid grid-cols-2 gap-x-4 gap-y-8">
        {filtered.map(p => (
          <div 
            key={p.id} 
            onClick={() => onProductDetail(p)}
            className="group cursor-pointer"
          >
            <div className="aspect-square rounded-[32px] overflow-hidden bg-white shadow-sm relative mb-4">
              <img src={p.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              {p.badge && (
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-[8px] font-bold text-primary uppercase">
                  {p.badge}
                </div>
              )}
            </div>
            <h3 className="font-bold text-luxury-dark text-sm">{p.name}</h3>
            <div className="flex justify-between items-center mt-1">
               <p className="text-primary font-bold">{p.price}€</p>
               <div className={`text-[10px] font-bold uppercase tracking-widest ${p.stock > 0 ? 'text-green-500' : 'text-red-400'}`}>
                  {p.stock > 0 ? 'Disponible' : 'Épuisé'}
               </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default PublicCatalog;
