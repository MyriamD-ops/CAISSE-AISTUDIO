
import React from 'react';
import { ViewState, Product } from '../types';
import { MOCK_PRODUCTS } from '../constants';

interface PublicHomeProps {
  onNavigate: (v: ViewState) => void;
  onProductDetail: (p: Product) => void;
}

const PublicHome: React.FC<PublicHomeProps> = ({ onNavigate, onProductDetail }) => {
  const featured = MOCK_PRODUCTS.slice(0, 3);

  return (
    <div className="pb-20">
      {/* Header */}
      <header className="px-6 pt-12 pb-8 bg-blush/50">
        <div className="flex justify-between items-center mb-10">
          <div className="font-bold text-2xl tracking-tight text-luxury-dark">CaisseMobile</div>
          <button 
            onClick={() => onNavigate('admin-lock')}
            className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all text-luxury-dark/40"
          >
            <span className="material-symbols-outlined block">lock</span>
          </button>
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-luxury-dark leading-tight">
            L'Élégance de <br/> l'Artisanat.
          </h1>
          <p className="text-luxury-dark/60 font-medium">
            Bijoux raffinés et sculptures futuristes imprimées en 3D par notre atelier local.
          </p>
        </div>
        <button 
          onClick={() => onNavigate('public-catalog')}
          className="mt-8 bg-luxury-dark text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 active:scale-95 transition-transform"
        >
          Voir le Catalogue
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </header>

      {/* Featured Section */}
      <section className="px-6 py-10">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-xl font-bold">Sélection du mois</h2>
          <button onClick={() => onNavigate('public-catalog')} className="text-primary text-sm font-bold">Tout voir</button>
        </div>
        <div className="flex overflow-x-auto gap-4 hide-scrollbar">
          {featured.map(p => (
            <div 
              key={p.id} 
              onClick={() => onProductDetail(p)}
              className="min-w-[200px] group cursor-pointer"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-blush relative mb-3">
                <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={p.name} />
                {p.badge && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-[10px] font-bold text-primary">
                    {p.badge}
                  </div>
                )}
              </div>
              <h3 className="font-bold text-luxury-dark">{p.name}</h3>
              <p className="text-primary font-bold">{p.price}€</p>
            </div>
          ))}
        </div>
      </section>

      {/* Artisan Bio */}
      <section className="px-6 py-10 bg-luxury-dark text-white rounded-t-[40px] mt-10">
        <h2 className="text-2xl font-bold mb-4">L'Artisan</h2>
        <p className="text-white/70 leading-relaxed mb-6">
          Passionnée par le mariage entre joaillerie traditionnelle et technologies de pointe, 
          chaque pièce est conçue et produite dans notre atelier avec un souci du détail sans compromis.
        </p>
        <div className="flex gap-4">
           <div className="flex-1 bg-white/5 p-4 rounded-2xl border border-white/10">
              <span className="material-symbols-outlined text-primary mb-2">location_on</span>
              <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Atelier</p>
              <p className="text-sm font-medium">Paris, 11ème</p>
           </div>
           <div className="flex-1 bg-white/5 p-4 rounded-2xl border border-white/10">
              <span className="material-symbols-outlined text-primary mb-2">verified</span>
              <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Qualité</p>
              <p className="text-sm font-medium">Eco-responsable</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default PublicHome;
