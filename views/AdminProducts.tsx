
import React from 'react';
import { ViewState, Product } from '../types';

interface AdminProductsProps {
  products: Product[];
  onNavigate: (v: ViewState) => void;
}

const AdminProducts: React.FC<AdminProductsProps> = ({ products, onNavigate }) => {
  return (
    <div className="min-h-screen bg-blush flex flex-col">
       <header className="p-6 bg-white shadow-sm">
          <div className="flex justify-between items-center mb-6">
             <div className="flex items-center gap-3">
                <button onClick={() => onNavigate('admin-dash')} className="p-2 rounded-xl bg-blush text-luxury-dark">
                   <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <h1 className="text-xl font-bold">Produits & Stock</h1>
             </div>
             <button className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined">add</span>
             </button>
          </div>
          <div className="relative">
             <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-luxury-dark/40 text-sm">search</span>
             <input className="w-full bg-blush border-none rounded-xl py-2.5 pl-10 pr-4 text-xs placeholder:text-luxury-dark/20" placeholder="Rechercher une référence..." />
          </div>
       </header>

       <main className="flex-1 p-6 space-y-4">
          {products.map(p => (
            <div key={p.id} className="bg-white p-4 rounded-3xl flex items-center gap-4 shadow-sm active:bg-blush transition-colors">
               <img src={p.image} className="w-14 h-14 object-cover rounded-xl" />
               <div className="flex-1">
                  <h3 className="font-bold text-sm text-luxury-dark">{p.name}</h3>
                  <p className="text-luxury-dark/40 text-[10px] font-bold uppercase tracking-widest">{p.category}</p>
               </div>
               <div className="text-right">
                  <p className={`text-xs font-bold mb-0.5 ${p.stock < 3 ? 'text-red-500' : 'text-green-500'}`}>
                     {p.stock} en stock
                  </p>
                  <p className="text-sm font-bold text-luxury-dark">{p.price}€</p>
               </div>
               <span className="material-symbols-outlined text-luxury-dark/20 text-sm ml-2">chevron_right</span>
            </div>
          ))}
       </main>
    </div>
  );
};

export default AdminProducts;
