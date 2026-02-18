
import React, { useState, useEffect, useMemo } from 'react';
import { ViewState, Category, Product, CartItem } from './types';
import { MOCK_PRODUCTS } from './constants';
import PublicHome from './views/PublicHome';
import PublicCatalog from './views/PublicCatalog';
import PublicDetail from './views/PublicDetail';
import AdminLock from './views/AdminLock';
import AdminDashboard from './views/AdminDashboard';
import AdminQuickSale from './views/AdminQuickSale';
import AdminProducts from './views/AdminProducts';
import AdminCart from './views/AdminCart';
import AdminSuccess from './views/AdminSuccess';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('public-home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLogged, setIsLogged] = useState(false);

  // Cart logic
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartTotal = useMemo(() => cart.reduce((acc, item) => acc + (item.price * item.quantity), 0), [cart]);
  const cartCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

  // View switchers
  const goToPublicDetail = (p: Product) => {
    setSelectedProduct(p);
    setView('public-detail');
  };

  const logout = () => {
    setIsLogged(false);
    setView('public-home');
  };

  // Rendering logic
  const renderView = () => {
    switch (view) {
      case 'public-home':
        return <PublicHome 
          onNavigate={setView} 
          onProductDetail={goToPublicDetail}
        />;
      case 'public-catalog':
        return <PublicCatalog 
          onNavigate={setView} 
          onProductDetail={goToPublicDetail}
        />;
      case 'public-detail':
        return <PublicDetail 
          product={selectedProduct!} 
          onBack={() => setView('public-catalog')} 
        />;
      case 'admin-lock':
        return <AdminLock 
          onSuccess={() => { setIsLogged(true); setView('admin-dash'); }} 
          onCancel={() => setView('public-home')} 
        />;
      case 'admin-dash':
        return <AdminDashboard 
          onNavigate={setView} 
          onLogout={logout} 
        />;
      case 'admin-sale':
        return <AdminQuickSale 
          products={MOCK_PRODUCTS} 
          cartCount={cartCount} 
          cartTotal={cartTotal}
          onAddToCart={addToCart}
          onOpenCart={() => setView('admin-cart')}
          onNavigate={setView}
        />;
      case 'admin-products':
        return <AdminProducts 
          products={MOCK_PRODUCTS} 
          onNavigate={setView} 
        />;
      case 'admin-cart':
        return <AdminCart 
          cart={cart}
          total={cartTotal}
          onUpdateQty={updateQuantity}
          onRemove={removeFromCart}
          onCheckout={() => { setView('admin-success'); setCart([]); }}
          onBack={() => setView('admin-sale')}
        />;
      case 'admin-success':
        return <AdminSuccess 
          onReset={() => setView('admin-sale')}
          onGoDash={() => setView('admin-dash')}
        />;
      default:
        return <PublicHome onNavigate={setView} onProductDetail={goToPublicDetail} />;
    }
  };

  return (
    <div className="max-w-[430px] mx-auto bg-white min-h-screen relative shadow-2xl overflow-hidden tap-highlight-transparent">
      {renderView()}
    </div>
  );
};

export default App;
