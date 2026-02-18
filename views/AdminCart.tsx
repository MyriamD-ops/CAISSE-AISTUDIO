
import React, { useState } from 'react';
import { CartItem } from '../types';

interface AdminCartProps {
  cart: CartItem[];
  total: number;
  onUpdateQty: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
  onBack: () => void;
}

const AdminCart: React.FC<AdminCartProps> = ({ 
  cart, total, onUpdateQty, onRemove, onCheckout, onBack 
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'card'>('card');

  return (
    <div className="min-h-screen bg-blush flex flex-col">
      <header className="p-6 flex items-center gap-4">
        <button onClick={onBack} className="p-2 rounded-xl bg-white shadow-sm">
          <span className="material-symbols-outlined">close</span>
        </button>
        <h1 className="text-xl font-bold">Panier Actuel</h1>
      </header>

      <main className="flex-1 p-6 space-y-4 overflow-y-auto">
        {cart.length === 0 ? (
          <div className="text-center py-20 text-luxury-dark/30">
             <span className="material-symbols-outlined text-6xl mb-4">shopping_cart</span>
             <p className="font-bold">Le panier est vide</p>
          </div>
        ) : (
          cart.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-3xl flex gap-4 shadow-sm">
              <img src={item.image} className="w-20 h-20 object-cover rounded-2xl" />
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm">{item.name}</h3>
                  <p className="text-primary font-bold text-sm">{item.price}€</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3 bg-blush rounded-full px-2 py-1">
                    <button onClick={() => onUpdateQty(item.id, -1)} className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                      <span className="material-symbols-outlined text-sm">remove</span>
                    </button>
                    <span className="text-sm font-bold min-w-[12px] text-center">{item.quantity}</span>
                    <button onClick={() => onUpdateQty(item.id, 1)} className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                  <button onClick={() => onRemove(item.id)} className="text-red-300">
                    <span className="material-symbols-outlined text-xl">delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </main>

      <footer className="p-6 bg-white rounded-t-[40px] shadow-2xl space-y-6">
        <div className="flex justify-between items-end">
           <p className="text-luxury-dark/40 font-bold uppercase tracking-widest text-[10px]">Total de la vente</p>
           <p className="text-3xl font-bold text-luxury-dark">{total.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => setPaymentMethod('card')}
            className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${paymentMethod === 'card' ? 'border-primary bg-primary/5 text-primary' : 'border-blush text-luxury-dark/40'}`}
          >
            <span className="material-symbols-outlined">credit_card</span>
            <span className="text-xs font-bold uppercase tracking-widest">Carte</span>
          </button>
          <button 
             onClick={() => setPaymentMethod('cash')}
             className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${paymentMethod === 'cash' ? 'border-primary bg-primary/5 text-primary' : 'border-blush text-luxury-dark/40'}`}
          >
            <span className="material-symbols-outlined">payments</span>
            <span className="text-xs font-bold uppercase tracking-widest">Espèces</span>
          </button>
        </div>

        <button 
          onClick={onCheckout}
          disabled={cart.length === 0}
          className="w-full bg-primary disabled:opacity-50 text-white p-5 rounded-[24px] font-bold text-lg shadow-xl shadow-primary/20 active:scale-95 transition-all"
        >
          Encaisser
        </button>
      </footer>
    </div>
  );
};

export default AdminCart;
