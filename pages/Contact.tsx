import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '../components/MobileMenu';

const Contact: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="font-display bg-[#f8f7f6] dark:bg-contact-bg text-slate-900 dark:text-white min-h-screen flex flex-col overflow-x-hidden">
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-home-border bg-contact-surface/95 backdrop-blur-sm">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-3">
          <div className="flex items-center justify-between whitespace-nowrap">
            <Link to="/" className="flex items-center gap-3 text-white">
              <div className="size-6 text-primary">
                <span className="material-symbols-outlined !text-2xl">local_fire_department</span>
              </div>
              <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Ember &amp; Bun</h2>
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
              <div className="flex items-center gap-9">
                <Link className="text-text-secondary hover:text-white transition-colors text-sm font-medium leading-normal" to="/">Home</Link>
                <Link className="text-text-secondary hover:text-white transition-colors text-sm font-medium leading-normal" to="/menu">Menu</Link>
                <Link className="text-text-secondary hover:text-white transition-colors text-sm font-medium leading-normal" to="/about">Story</Link>
                <Link className="text-primary font-medium text-sm leading-normal" to="/contact">Contact</Link>
              </div>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-primary-hover transition-colors text-contact-surface text-sm font-bold leading-normal tracking-[0.015em] shadow-[0_0_15px_rgba(224,182,41,0.3)]">
                <span className="truncate">Reserve</span>
              </button>
            </div>
            {/* Mobile Menu Icon */}
            <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>
      
      {/* Main Layout */}
      <main className="flex-1 flex flex-col md:flex-row h-full">
        {/* Left Content Area */}
        <div className="flex-1 bg-contact-surface p-6 md:p-12 lg:p-20 flex flex-col justify-center relative z-10 border-r border-home-border/50">
          <div className="max-w-xl mx-auto w-full">
            {/* Page Heading */}
            <div className="mb-10">
              <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">Location &amp; Contact</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] text-white mb-4">The Hearth</h1>
              <p className="text-text-secondary text-lg leading-relaxed max-w-md">Experience the warmth of Ember &amp; Bun. Nestled in the heart of the city, we invite you to join us for an unforgettable evening.</p>
            </div>
            {/* Contact Details Grid */}
            <div className="grid gap-6 mb-10">
              {/* Address Item */}
              <div className="group flex items-start gap-4 p-4 rounded-xl bg-[#211d11] border border-home-border hover:border-primary/30 transition-all duration-300">
                <div className="text-white flex items-center justify-center rounded-lg bg-[#383429] shrink-0 size-12 group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div className="flex flex-col justify-center pt-1">
                  <p className="text-white text-base font-medium leading-normal mb-1">123 Culinary Ave</p>
                  <p className="text-text-secondary text-sm font-normal leading-normal">Gastronomy District, London, SW1A 1AA</p>
                </div>
              </div>
              {/* Phone Item */}
              <div className="group flex items-start gap-4 p-4 rounded-xl bg-[#211d11] border border-home-border hover:border-primary/30 transition-all duration-300">
                <div className="text-white flex items-center justify-center rounded-lg bg-[#383429] shrink-0 size-12 group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div className="flex flex-col justify-center pt-1">
                  <p className="text-white text-base font-medium leading-normal mb-1">Reservations &amp; Enquiries</p>
                  <p className="text-text-secondary text-sm font-normal leading-normal">+44 20 7123 4567</p>
                </div>
              </div>
              {/* Hours Item */}
              <div className="group flex items-start gap-4 p-4 rounded-xl bg-[#211d11] border border-home-border hover:border-primary/30 transition-all duration-300">
                <div className="text-white flex items-center justify-center rounded-lg bg-[#383429] shrink-0 size-12 group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div className="flex flex-col justify-center w-full pt-1">
                  <div className="flex justify-between w-full mb-1">
                    <p className="text-white text-base font-medium leading-normal">Mon - Thu</p>
                    <p className="text-primary text-sm font-bold">17:00 - 23:00</p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="text-white text-base font-medium leading-normal">Fri - Sun</p>
                    <p className="text-primary text-sm font-bold">12:00 - 01:00</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 cursor-pointer flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary hover:bg-primary-hover text-contact-surface text-base font-bold transition-all shadow-[0_0_20px_rgba(224,182,41,0.2)] hover:shadow-[0_0_25px_rgba(224,182,41,0.4)]">
                <span className="material-symbols-outlined">chat</span>
                <span>WhatsApp Reservation</span>
              </button>
              <button className="flex-1 cursor-pointer flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-transparent border border-primary text-primary hover:bg-primary/10 text-base font-bold transition-all">
                <span className="material-symbols-outlined">mail</span>
                <span>Email Us</span>
              </button>
            </div>
          </div>
        </div>
        {/* Right Map Area */}
        <div className="flex-1 relative min-h-[400px] md:min-h-full bg-contact-bg">
          {/* Simulated Dark Mode Map using an image with overlay */}
          <div className="absolute inset-0 w-full h-full bg-cover bg-center grayscale contrast-125 opacity-80" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIb9bXiLiebG7Cw9WBi1b3iKtGMYRmesQX0IqrMHnKQZ0Yhn25V1qb3P1OcOFAbWcUOwsanY6vChfBBMxNQvR8AY-mxsrlBM54bVXXnmUnYIk8dT2xkuCFTOLbGTrkoNqEC9kzr9jd9i-ccpEkgnxjLY4Gu8zKJ8757DZq_XoWKeTGFxn_yw6umrCYCz5TyRCkkVo7zH-S4SUO4oa80RbTA_KKR1FBjq4B0TlJDW5lVTFl6PgfX54R2KJkXALqDBK7piyfb2RL-pQ7")'}}>
          </div>
          <div className="absolute inset-0 bg-contact-bg/30 mix-blend-multiply"></div>
          {/* Map Pin Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/30 rounded-full blur-xl animate-pulse"></div>
              <span className="material-symbols-outlined text-5xl text-primary drop-shadow-lg relative z-10">location_on</span>
            </div>
            <div className="mt-2 bg-contact-surface/90 backdrop-blur border border-home-border px-4 py-2 rounded-lg shadow-xl">
              <p className="text-white font-bold text-sm">Ember &amp; Bun</p>
            </div>
          </div>
          {/* Mobile Only Floating Action Button */}
          <div className="md:hidden absolute bottom-6 right-6 z-20">
            <button className="flex size-14 items-center justify-center rounded-full bg-primary text-contact-surface shadow-2xl">
              <span className="material-symbols-outlined">directions</span>
            </button>
          </div>
        </div>
      </main>
      
      {/* Footer Simple */}
      <footer className="bg-contact-surface border-t border-home-border py-8 px-10">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-text-secondary">
            <span className="material-symbols-outlined text-lg">local_fire_department</span>
            <span className="text-sm font-medium">© 2023 Ember &amp; Bun. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a className="text-text-secondary hover:text-primary transition-colors" href="#">
              <span className="sr-only">Instagram</span>
              <svg aria-hidden="true" className="size-5" fill="currentColor" viewBox="0 0 24 24">
                <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.373c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fillRule="evenodd"></path>
              </svg>
            </a>
            <a className="text-text-secondary hover:text-primary transition-colors" href="#">
              <span className="sr-only">Facebook</span>
              <svg aria-hidden="true" className="size-5" fill="currentColor" viewBox="0 0 24 24">
                <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;