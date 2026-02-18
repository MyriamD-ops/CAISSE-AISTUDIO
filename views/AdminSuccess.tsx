
import React from 'react';

interface AdminSuccessProps {
  onReset: () => void;
  onGoDash: () => void;
}

const AdminSuccess: React.FC<AdminSuccessProps> = ({ onReset, onGoDash }) => {
  return (
    <div className="h-screen bg-blush flex flex-col items-center justify-center p-8">
       <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white mb-8 shadow-xl shadow-green-500/20">
          <span className="material-symbols-outlined text-5xl">check_circle</span>
       </div>
       <h1 className="text-3xl font-bold text-luxury-dark mb-2">Vente Réussie !</h1>
       <p className="text-luxury-dark/40 text-center max-w-[240px] mb-12">
          Le paiement a été confirmé. Le reçu a été envoyé par email.
       </p>

       <div className="w-full space-y-4">
          <button 
            onClick={onReset}
            className="w-full bg-primary text-white p-4 rounded-2xl font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform"
          >
            Nouvelle Vente
          </button>
          <button className="w-full bg-white text-luxury-dark p-4 rounded-2xl font-bold shadow-sm active:scale-95 transition-transform">
             Imprimer Ticket
          </button>
          <button 
            onClick={onGoDash}
            className="w-full text-primary/60 text-sm font-bold uppercase tracking-widest pt-4"
          >
            Tableau de bord
          </button>
       </div>
    </div>
  );
};

export default AdminSuccess;
