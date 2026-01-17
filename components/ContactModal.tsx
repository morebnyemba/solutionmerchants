'use client';

import { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger 
} from '@/components/ui/dialog';
import { MessageCircle, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactModalProps {
  trigger?: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function ContactModal({ trigger, isOpen, onOpenChange }: ContactModalProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Solutions Merchant Investments, I'm interested in learning more about your services."
    );
    const whatsappUrl = `https://wa.me/61466841679?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmail = () => {
    const subject = encodeURIComponent('Inquiry about Solutions Merchant Investments Services');
    const body = encodeURIComponent(
      'Hello Solutions Merchant Investments,\n\nI am interested in learning more about your services.\n\nBest regards'
    );
    const mailtoUrl = `mailto:info@solutionsmerchants.co.zw?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  const handleTawkTo = () => {
    // Tawk.to chat integration
    // If Tawk.to is loaded, maximize the chat widget
    if (typeof window !== 'undefined' && (window as any).Tawk_API) {
      (window as any).Tawk_API.maximize();
    } else {
      // Fallback to WhatsApp if Tawk.to is not available
      alert('Live chat is currently unavailable. Please try WhatsApp or Email.');
      handleWhatsApp();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Get in Touch
          </DialogTitle>
          <DialogDescription className="text-base text-gray-600">
            Choose how you&apos;d like to contact us. We&apos;re here to help!
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          {/* WhatsApp Option */}
          <button
            onClick={handleWhatsApp}
            onMouseEnter={() => setSelectedOption('whatsapp')}
            onMouseLeave={() => setSelectedOption(null)}
            className={`flex items-start gap-4 p-4 rounded-lg border-2 transition-all ${
              selectedOption === 'whatsapp'
                ? 'border-green-500 bg-green-50 shadow-md'
                : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
            }`}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
              <p className="text-sm text-gray-600">
                Chat with us instantly on WhatsApp. Get quick responses to your questions.
              </p>
              <p className="text-xs text-gray-500 mt-2">+61 466 841 679</p>
            </div>
          </button>

          {/* Email Option */}
          <button
            onClick={handleEmail}
            onMouseEnter={() => setSelectedOption('email')}
            onMouseLeave={() => setSelectedOption(null)}
            className={`flex items-start gap-4 p-4 rounded-lg border-2 transition-all ${
              selectedOption === 'email'
                ? 'border-blue-500 bg-blue-50 shadow-md'
                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
            }`}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <p className="text-sm text-gray-600">
                Send us an email for detailed inquiries. We&apos;ll respond within 24 hours.
              </p>
              <p className="text-xs text-gray-500 mt-2">info@solutionsmerchants.co.zw</p>
            </div>
          </button>

          {/* Tawk.to Chat Option */}
          <button
            onClick={handleTawkTo}
            onMouseEnter={() => setSelectedOption('chat')}
            onMouseLeave={() => setSelectedOption(null)}
            className={`flex items-start gap-4 p-4 rounded-lg border-2 transition-all ${
              selectedOption === 'chat'
                ? 'border-purple-500 bg-purple-50 shadow-md'
                : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
            }`}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-gray-900 mb-1">Live Chat</h3>
              <p className="text-sm text-gray-600">
                Start a live chat with our team. Available during business hours.
              </p>
              <p className="text-xs text-gray-500 mt-2">Instant support</p>
            </div>
          </button>
        </div>

        <div className="border-t pt-4">
          <div className="text-sm text-gray-500 text-center">
            <p className="mb-2">📍 Subdivision R Homefield, Mt Hampden, Zimbabwe</p>
            <p>Zimbabwe: <a href="tel:+263788699788" className="text-primary-600 hover:underline">+263 7 88699788</a></p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
