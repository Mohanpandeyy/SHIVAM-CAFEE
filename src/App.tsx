/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Clock, Phone, ChefHat, Info, Coffee, MapPin } from 'lucide-react';

const TEAS_COFFEE = [
  { name: 'Normal Tea', price: '10' },
  { name: 'Cutting Tea', price: '7' },
  { name: 'Lemon Tea', price: '20' },
  { name: 'Black Tea', price: '20' },
  { name: 'Kulhad Tea', price: '15' },
  { name: 'Coffee', price: '30' },
  { name: 'Black Coffee', price: '20' },
];

const SNACKS = [
  { name: 'Plain Maggi', price: '30' },
  { name: 'Veg Maggi', price: '50' },
  { name: 'Pasta', price: '50' },
  { name: 'Macaroni', price: '50' },
  { name: 'Aloo Patties', price: '15' },
  { name: 'Paneer Patties', price: '25' },
  { name: 'Samosa', price: '15' },
  { name: 'Sandwich', price: '30' },
  { name: 'Band Makkhan', price: '30' },
  { name: 'Band Samosa', price: '30' },
];

const BREAD = [
  { name: 'Aloo Pratha', price: '40' },
  { name: 'Paneer Pratha', price: '60' },
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const MenuSection = ({ title, items, image }: { title: string, items: {name: string, price: string}[], image: string }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 overflow-hidden transform transition duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
      <div className="md:w-[240px] shrink-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 md:h-full object-cover rounded-xl border border-stone-100"
          loading="lazy"
        />
      </div>
      <div className="md:w-full flex flex-col justify-center py-2">
        <h3 className="font-display text-2xl font-bold mb-6 text-stone-900 border-b border-stone-100 pb-4">{title}</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          {items.map((item, idx) => (
            <li key={idx} className="flex justify-between items-center group border-b border-stone-50 pb-2 sm:border-none sm:pb-0">
              <span className="font-medium text-stone-700 group-hover:text-stone-900 transition-colors">{item.name}</span>
              <span className="font-sans font-semibold text-amber-700">₹{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-900 selection:bg-amber-100 selection:text-amber-900">
      {/* Top Bar */}
      <div className="bg-stone-900 text-stone-200 py-2.5 px-4 shadow-sm border-b border-stone-800 tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm md:text-base">
          <div className="flex items-center space-x-3 font-serif italic text-amber-100/90">
            <span aria-hidden="true" className="text-lg">🕉️</span>
            <span className="font-medium tracking-wider">Jay Shri Bala Ji</span>
            <span aria-hidden="true" className="text-lg">🕉️</span>
          </div>
          <div className="font-serif italic mt-2 sm:mt-0 text-stone-400">
            Owner: <span className="text-stone-200 ml-1">Harilal Yadav</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="py-16 md:py-20 px-4 text-center flex flex-col items-center">
        <Coffee className="w-12 h-12 text-stone-800 mb-6" strokeWidth={1.5} />
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-stone-900 uppercase">
          Shivam Cafe
        </h1>
        <p className="mt-4 text-stone-500 font-serif italic text-lg max-w-lg mx-auto">
          Where quality meets comfort. Serving the finest tea and hearty snacks.
        </p>
        <div className="w-24 h-1 bg-amber-600 mx-auto mt-8 rounded-full" />
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 py-8 mb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Menu */}
          <div className="lg:col-span-8 flex flex-col space-y-8">
            <MenuSection 
              title="Teas & Coffee" 
              items={TEAS_COFFEE} 
              image="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800"
            />
            <MenuSection 
              title="Snacks & Fast Food" 
              items={SNACKS} 
              image="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800"
            />
            <MenuSection 
              title="North Indian Bread" 
              items={BREAD} 
              image="https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800"
            />

            {/* Notice Board */}
            <div className="mt-8 bg-amber-50/50 border border-amber-200/60 rounded-2xl p-8 md:p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <Coffee className="w-48 h-48" />
              </div>
              <div className="flex items-center gap-3 mb-6 text-amber-800">
                <Info className="w-6 h-6" />
                <h3 className="text-2xl font-display font-bold">Cafe Notices</h3>
              </div>
              <div className="space-y-6 font-serif text-lg md:text-xl text-amber-950 leading-relaxed">
                <p className="pl-5 border-l-4 border-amber-400 italic">
                  "उधार एक जादू है, मैं दूंगा आप गायब हो जाओगे. SORRY, मैं आपको खोना नहीं चाहता।"
                </p>
                <p className="pl-5 border-l-4 border-amber-400 italic">
                  "कृपया उधार न मांगें, हमने खुद लोन ले रखा है।"
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar Widgets */}
          <div className="lg:col-span-4 flex flex-col space-y-8">
            
            {/* CTA Booking Card */}
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-stone-100 p-8 text-center sticky top-8">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-green-600" strokeWidth={1.5}/>
              </div>
              <h3 className="font-display text-3xl font-bold mb-3 text-stone-900">Book a Table</h3>
              <p className="text-stone-500 mb-8 leading-relaxed">
                Skip the line and reserve your spot in advance or order food directly.
              </p>
              
              <a 
                href="https://wa.me/919795883875?text=Hello%20Shivam%20Cafe,%20I%20want%20to%20book%20a%20table/order%20food."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <WhatsAppIcon />
                <span className="relative text-lg">Book via WhatsApp</span>
              </a>
            </div>

            {/* Map Card */}
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-stone-100 p-2 overflow-hidden sticky top-[25rem]">
              <div className="px-6 py-4 border-b border-stone-100 mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-rose-600" />
                <h3 className="font-display text-lg font-bold">Find Us Here</h3>
              </div>
              <iframe 
                className="w-full h-[350px] rounded-2xl opacity-90 hover:opacity-100 transition-opacity"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.937981881257!2d80.9382787!3d26.841924799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd79707df4a5%3A0xfadff5f0fc86bc9d!2sShivam%20Cafe!5e0!3m2!1sen!2sin!4v1781522489496!5m2!1sen!2sin" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Shivam Cafe Location"
              ></iframe>
            </div>

          </div>
        </div>
      </main>

      {/* Footer / Tiffin Banner */}
      <footer className="bg-rose-950 text-white mt-auto border-t-8 border-rose-900">
        <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col items-center text-center">
          <div className="bg-rose-900/50 p-4 rounded-full mb-6">
            <ChefHat className="w-10 h-10 text-rose-200" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-wider mb-8 text-rose-50">
            Tiffin Service Available
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 md:gap-12 text-rose-200/90 text-lg md:text-xl font-medium">
            <span className="flex items-center justify-center gap-3 bg-rose-900/30 px-6 py-3 rounded-full">
              <Clock className="w-5 h-5" /> Timing: 9 AM to 9 PM
            </span>
            <span className="flex items-center justify-center gap-3 bg-rose-900/30 px-6 py-3 rounded-full">
              <Phone className="w-5 h-5" /> Mob: 9795883875
            </span>
          </div>
        </div>
        <div className="bg-rose-950 border-t border-rose-900 shadow-inner py-6 text-center text-rose-300/60 text-sm tracking-wide font-sans">
          <p>Website designed with love for Harilal Yadav.</p>
        </div>
      </footer>
    </div>
  );
}
