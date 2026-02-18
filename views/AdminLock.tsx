
import React, { useState } from 'react';

interface AdminLockProps {
  onSuccess: () => void;
  onCancel: () => void;
}

const AdminLock: React.FC<AdminLockProps> = ({ onSuccess, onCancel }) => {
  const [pin, setPin] = useState('');
  
  const handleKey = (key: string) => {
    if (pin.length < 4) {
      const newPin = pin + key;
      setPin(newPin);
      if (newPin === '1234') { // Mock PIN
        setTimeout(onSuccess, 300);
      }
    }
  };

  const handleBackspace = () => {
    setPin(pin.slice(0, -1));
  };

  return (
    <div className="h-screen bg-blush flex flex-col items-center justify-center p-8">
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-primary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-white text-3xl">lock</span>
        </div>
        <h1 className="text-2xl font-bold text-luxury-dark">Accès Admin</h1>
        <p className="text-luxury-dark/40 text-sm mt-1">Entrez votre code secret</p>
      </div>

      <div className="flex gap-4 mb-16">
        {[0, 1, 2, 3].map(i => (
          <div 
            key={i} 
            className={`w-4 h-4 rounded-full border-2 border-primary/20 ${pin.length > i ? 'bg-primary border-primary scale-110' : ''} transition-all duration-200`}
          />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 w-full max-w-[280px]">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(k => (
          <button 
            key={k} 
            onClick={() => handleKey(k)}
            className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-xl font-bold text-luxury-dark active:scale-90 transition-transform shadow-sm"
          >
            {k}
          </button>
        ))}
        <button className="w-16 h-16 rounded-full flex items-center justify-center text-primary/40">
           <span className="material-symbols-outlined text-3xl">fingerprint</span>
        </button>
        <button 
          onClick={() => handleKey('0')}
          className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-xl font-bold text-luxury-dark active:scale-90 transition-transform shadow-sm"
        >
          0
        </button>
        <button 
          onClick={handleBackspace}
          className="w-16 h-16 rounded-full flex items-center justify-center text-luxury-dark/40 active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined text-2xl">backspace</span>
        </button>
      </div>

      <button 
        onClick={onCancel}
        className="mt-12 text-sm font-bold text-primary/60 uppercase tracking-widest"
      >
        Annuler
      </button>
    </div>
  );
};

export default AdminLock;
