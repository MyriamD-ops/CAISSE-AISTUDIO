
import React from 'react';
import { Product } from '../types';

interface PublicDetailProps {
  product: Product;
  onBack: () => void;
}

const PublicDetail: React.FC<PublicDetailProps> = ({ product, onBack }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
       <div className="relative aspect-square">
          <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
          <button 
            onClick={onBack}
            className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-luxury-dark shadow-sm active:scale-90 transition-transform"
          >
             <span className="material-symbols-outlined">arrow_back</span>
          </button>
          {product.badge && (
            <div className="absolute bottom-6 right-6 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              {product.badge}
            </div>
          )}
       </div>

       <div className="flex-1 px-8 pt-8 pb-12 bg-white rounded-t-[40px] -mt-10 relative">
          <div className="flex justify-between items-start mb-4">
             <div>
                <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-1">{product.category}</p>
                <h1 className="text-3xl font-bold text-luxury-dark leading-tight">{product.name}</h1>
             </div>
             <p className="text-2xl font-bold text-luxury-dark mt-4">{product.price}€</p>
          </div>

          <p className="text-luxury-dark/60 leading-relaxed mb-10">
            {product.description}
          </p>

          <div className="space-y-6">
             <div className="flex gap-4">
                <div className="flex-1 p-4 bg-blush rounded-2xl text-center">
                   <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-1">Disponibilité</p>
                   <p className="text-sm font-bold text-luxury-dark">{product.stock > 0 ? 'En stock' : 'Sur commande'}</p>
                </div>
                <div className="flex-1 p-4 bg-blush rounded-2xl text-center">
                   <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-1">Délai</p>
                   <p className="text-sm font-bold text-luxury-dark">2-5 Jours</p>
                </div>
             </div>

             <div className="p-6 border-2 border-blush rounded-3xl flex items-center justify-between bg-white">
                <div className="flex flex-col gap-1">
                   <p className="text-xs font-bold uppercase tracking-widest text-luxury-dark/40">Commander en boutique</p>
                   <p className="text-xs text-luxury-dark/60">Scannez pour réserver</p>
                </div>
                {/* Mock QR */}
                <div className="w-16 h-16 bg-luxury-dark rounded-xl flex items-center justify-center">
                   <span className="material-symbols-outlined text-white text-3xl">qr_code_2</span>
                </div>
             </div>
          </div>
       </div>

       <div className="px-8 pb-10">
          <button className="w-full bg-luxury-dark text-white p-5 rounded-[24px] font-bold text-lg shadow-xl shadow-luxury-dark/20 active:scale-[0.98] transition-all">
             Nous Contacter
          </button>
       </div>
    </div>
  );
};

export default PublicDetail;
