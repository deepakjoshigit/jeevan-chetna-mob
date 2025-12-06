import React, { useState } from 'react';
import { X, Heart } from 'lucide-react';
import { DONATION_TIERS, RAZORPAY_KEY_ID, NGO_NAME } from '../constants';
import Button from './Button';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonateModal: React.FC<DonateModalProps> = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState<number | ''>(1000);
  const [customAmount, setCustomAmount] = useState<boolean>(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleRazorpay = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    setLoading(true);

    const options = {
      key: RAZORPAY_KEY_ID,
      amount: Number(amount) * 100, // Amount in paise
      currency: "INR",
      name: NGO_NAME,
      description: "Donation to Jeevan Chetna",
      image: "https://picsum.photos/200/200?random=99", // Logo placeholder
      handler: function (response: any) {
        setLoading(false);
        alert(`Thank you ${name}! Payment Successful. ID: ${response.razorpay_payment_id}`);
        onClose();
      },
      prefill: {
        name: name,
        email: email,
        contact: phone,
      },
      theme: {
        color: "#ea580c", // Orange-600
      },
      modal: {
        ondismiss: function() {
          setLoading(false);
        }
      }
    };

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Razorpay SDK not loaded", error);
      alert("Something went wrong with the payment gateway. Please check your internet connection.");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Background backdrop */}
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" onClick={onClose} aria-hidden="true"></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
          
          {/* Header */}
          <div className="bg-orange-600 px-4 py-4 sm:px-6 flex justify-between items-center">
            <h3 className="text-lg leading-6 font-bold text-white flex items-center gap-2" id="modal-title">
              <Heart className="h-5 w-5 fill-current" />
              Make a Donation
            </h3>
            <button
              onClick={onClose}
              type="button"
              className="bg-orange-600 rounded-md text-orange-200 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Close</span>
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Body */}
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <form onSubmit={handleRazorpay} className="space-y-6">
              
              {/* Amounts Grid */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Select Amount</label>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {DONATION_TIERS.map((tier) => (
                    <div
                      key={tier.value}
                      onClick={() => {
                        setAmount(tier.value);
                        setCustomAmount(false);
                      }}
                      className={`cursor-pointer rounded-lg border p-3 text-center transition-all ${
                        amount === tier.value && !customAmount
                          ? 'border-orange-600 bg-orange-50 ring-2 ring-orange-600 ring-offset-1'
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      <div className="font-bold text-gray-900">{tier.label}</div>
                      <div className="text-xs text-gray-500 mt-1 line-clamp-1">{tier.desc}</div>
                    </div>
                  ))}
                </div>
                
                {/* Custom Amount Toggle */}
                <div className="mt-4">
                  <div className="flex items-center">
                    <input
                      id="custom-amount"
                      name="amount-type"
                      type="checkbox"
                      className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                      checked={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.checked);
                        if(e.target.checked) setAmount('');
                      }}
                    />
                    <label htmlFor="custom-amount" className="ml-2 block text-sm text-gray-900">
                      Enter custom amount
                    </label>
                  </div>
                  
                  {customAmount && (
                    <div className="mt-2 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">₹</span>
                      </div>
                      <input
                        type="number"
                        name="amount"
                        id="amount"
                        className="focus:ring-orange-500 focus:border-orange-500 block w-full pl-7 py-2 sm:text-sm border-gray-300 rounded-md border"
                        placeholder="0.00"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        min="1"
                        required
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Donor Details */}
              <div className="space-y-4 border-t border-gray-100 pt-4">
                <h4 className="text-sm font-medium text-gray-900">Your Details</h4>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full"
                  isLoading={loading}
                >
                  Proceed to Pay {amount ? `₹${amount}` : ''}
                </Button>
                <p className="mt-3 text-center text-xs text-gray-500">
                  Secured by Razorpay. All donations are tax exempted under 80G.
                </p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateModal;