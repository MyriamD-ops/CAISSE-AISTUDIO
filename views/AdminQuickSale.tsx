
import React, { useState } from 'react';
import { Product, Category, ViewState } from '../types';

interface AdminQuickSaleProps {
  products: Product[];
  cartCount: number;
  cartTotal: number;
  onAddToCart: (p: Product) => void;
  onOpenCart: () => void;
  onNavigate: (v: ViewState) => void;
}

const AdminQuickSale: React.FC<AdminQuickSaleProps> = ({ 
  products, 
  cartCount, 
  cartTotal, 
  onAddToCart, 
  onOpenCart,
  onNavigate
}) => {
  const [filter, setFilter] = useState<Category>(Category.TOUT);

  const filtered = filter === Category.TOUT 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-blush flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-blush/80 backdrop-blur-md border-b border-primary/5 px-4 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onNavigate('admin-dash')}
              className="p-2 rounded-lg bg-primary/10 text-primary active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h1 className="text-xl font-bold tracking-tight">Vente Rapide</h1>
          </div>
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-semibold shadow-lg shadow-primary/20 active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-xl">qr_code_scanner</span>
            <span className="text-sm">Scanner</span>
          </button>
        </div>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary/40 text-sm">search</span>
          <input 
            className="w-full bg-white border-none rounded-xl py-2.5 pl-9 pr-4 text-xs focus:ring-1 focus:ring-primary/50 placeholder:text-primary/20" 
            placeholder="Rechercher..." 
            type="text"
          />
        </div>
      </header>

      {/* Filters */}
      <nav className="flex overflow-x-auto hide-scrollbar gap-2 px-4 py-3 shrink-0">
        {Object.values(Category).map(cat => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all border ${
              filter === cat 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white text-primary/60 border-primary/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Product Grid */}
      <main className="flex-1 px-4 pb-40 grid grid-cols-2 gap-3 overflow-y-auto">
        {filtered.map(p => (
          <div key={p.id} className="bg-white rounded-2xl overflow-hidden border border-primary/5 shadow-sm active:scale-95 transition-transform">
            <div className="aspect-square relative overflow-hidden bg-blush/30">
              <img src={p.image} className="w-full h-full object-cover" alt={p.name} />
              {p.badge && (
                <div className="absolute top-2 right-2 bg-white/90 px-1.5 py-0.5 rounded-lg">
                  <span className="text-[8px] font-bold text-primary uppercase">{p.badge}</span>
                </div>
              )}
            </div>
            <div className="p-3">
              <p className="text-[8px] text-primary/60 font-bold uppercase tracking-tighter mb-0.5">{p.category}</p>
              <h3 className="font-bold text-[13px] line-clamp-1 text-luxury-dark">{p.name}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="font-bold text-primary text-sm">{p.price}€</span>
                <button 
                  onClick={() => onAddToCart(p)}
                  className="size-7 rounded-full bg-primary text-white flex items-center justify-center active:bg-luxury-dark transition-colors"
                >
                  <span className="material-symbols-outlined text-base">add</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Floating Cart Button */}
      {cartCount > 0 && (
        <div className="fixed bottom-24 right-4 left-4 z-40">
          <button 
            onClick={onOpenCart}
            className="w-full bg-primary text-white p-4 rounded-[24px] flex items-center justify-between shadow-2xl shadow-primary/40 active:scale-[0.98] transition-all ring-4 ring-white"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <span className="material-symbols-outlined text-3xl">shopping_bag</span>
                <span className="absolute -top-1 -right-1 bg-white text-primary text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-primary">
                  {cartCount}
                </span>
              </div>
              <div className="text-left">
                <p className="text-[10px] opacity-70 font-medium leading-none mb-1 uppercase tracking-widest">Voir le panier</p>
                <p className="text-lg font-bold leading-none">{cartTotal.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €</p>
              </div>
            </div>
            <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
              <span>Payer</span>
              <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
            </div>
          </button>
        </div>
      )}

      {/* Bottom Nav */}
      <footer className="fixed bottom-0 w-full bg-white border-t border-primary/5 px-6 pb-6 pt-3 grid grid-cols-4 items-end z-50">
        <a className="flex flex-col items-center gap-1 text-primary" href="#">
          <span className="material-symbols-outlined fill-1">storefront</span>
          <span className="text-[9px] font-bold">Vente</span>
        </a>
        <button onClick={() => onNavigate('admin-dash')} className="flex flex-col items-center gap-1 text-primary/40">
          <span className="material-symbols-outlined">history</span>
          <span className="text-[9px] font-bold">Historique</span>
        </button>
        <button onClick={() => onNavigate('admin-products')} className="flex flex-col items-center gap-1 text-primary/40">
          <span className="material-symbols-outlined">inventory_2</span>
          <span className="text-[9px] font-bold">Stocks</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-primary/40">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[9px] font-bold">Profil</span>
        </button>
      </footer>
    </div>
  );
};

export default AdminQuickSale;
