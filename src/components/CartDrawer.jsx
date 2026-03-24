import { useCart } from '../context/CartContext';
import { X, Minus, Plus } from 'lucide-react';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, cartTotal, updateQuantity, removeFromCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-surface-container border-l border-outline-variant z-50 flex flex-col shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-surface-container-highest">
          <h2 className="font-serif text-xl tracking-wider">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:text-secondary transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {cartItems.length === 0 ? (
            <p className="text-on-surface-variant text-center mt-10">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex gap-4">
                <img src={item.image} alt={item.name} className="w-24 h-32 object-cover" />
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-on-surface-variant mt-1">Size: {item.size}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="text-on-surface-variant hover:text-error transition-colors h-fit"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center border border-outline-variant w-fit">
                      <button 
                        onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                        className="px-3 py-1 hover:text-secondary"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-2 text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                        className="px-3 py-1 hover:text-secondary"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <p className="font-medium">${item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-surface-container-highest bg-surface-container-high">
            <div className="flex justify-between mb-6 text-lg font-medium">
              <span>Subtotal</span>
              <span>${cartTotal}</span>
            </div>
            <button className="w-full btn-primary justify-center py-4">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
