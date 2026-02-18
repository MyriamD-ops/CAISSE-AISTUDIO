
import React from 'react';
import { ViewState } from '../types';

interface AdminDashboardProps {
  onNavigate: (v: ViewState) => void;
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNavigate, onLogout }) => {
  return (
    <div className="min-h-screen bg-blush flex flex-col p-6">
      <header className="flex justify-between items-center mb-8">
        <div>
          <p className="text-luxury-dark/40 text-xs font-bold uppercase tracking-widest">Tableau de bord</p>
          <h1 className="text-2xl font-bold text-luxury-dark">Bonjour, Marie</h1>
        </div>
        <button 
          onClick={onLogout}
          className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary/60"
        >
          <span className="material-symbols-outlined text-lg">logout</span>
        </button>
      </header>

      {/* Main Action */}
      <button 
        onClick={() => onNavigate('admin-sale')}
        className="w-full bg-primary p-8 rounded-[40px] text-white flex flex-col items-center gap-4 shadow-xl shadow-primary/20 active:scale-[0.98] transition-all mb-8"
      >
        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
          <span className="material-symbols-outlined text-4xl">shopping_cart_checkout</span>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">Vente Rapide</h2>
          <p className="text-white/60 text-sm mt-1">Nouveau client en boutique</p>
        </div>
      </button>

      {/* Grid Menu */}
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => onNavigate('admin-products')}
          className="bg-white p-6 rounded-3xl flex flex-col gap-3 shadow-sm active:bg-blush transition-colors text-left"
        >
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">inventory_2</span>
          </div>
          <h3 className="font-bold text-luxury-dark">Stock & Produits</h3>
          <p className="text-[10px] text-luxury-dark/40 font-bold uppercase tracking-widest">34 Articles</p>
        </button>

        <button 
          className="bg-white p-6 rounded-3xl flex flex-col gap-3 shadow-sm active:bg-blush transition-colors text-left"
        >
          <div className="w-10 h-10 bg-luxury-dark/10 rounded-xl flex items-center justify-center text-luxury-dark">
            <span className="material-symbols-outlined">monitoring</span>
          </div>
          <h3 className="font-bold text-luxury-dark">Historique</h3>
          <p className="text-[10px] text-luxury-dark/40 font-bold uppercase tracking-widest">2 Ventes aujourd'hui</p>
        </button>

        <button 
          className="bg-white p-6 rounded-3xl flex flex-col gap-3 shadow-sm active:bg-blush transition-colors text-left col-span-2"
        >
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-500">
              <span className="material-symbols-outlined">warning</span>
            </div>
            <div className="bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">3 ALERTS</div>
          </div>
          <h3 className="font-bold text-luxury-dark">Alertes Stock Bas</h3>
          <p className="text-xs text-luxury-dark/60">Bague Éclat Rose et 2 autres articles...</p>
        </button>
      </div>

      <footer className="mt-auto pt-10 text-center">
        <p className="text-[10px] font-bold text-luxury-dark/20 uppercase tracking-[0.2em]">CaisseMobile v2.4</p>
      </footer>
    </div>
  );
};

export default AdminDashboard;
