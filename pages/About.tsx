import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '../components/MobileMenu';

const About: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#f8f7f6] dark:bg-contact-bg text-[#171611] dark:text-white font-display overflow-x-hidden antialiased selection:bg-primary selection:text-contact-bg">
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <div className="relative flex flex-col min-h-screen w-full">
        {/* Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-contact-bg/90 backdrop-blur-md border-b border-[#383429]">
          <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
            <Link to="/" className="flex items-center gap-2 text-white hover:text-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-3xl text-primary">local_fire_department</span>
              <h2 className="text-xl font-bold tracking-tight">Ember &amp; Bun</h2>
            </Link>
            <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
              <nav className="flex gap-8">
                <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
                <Link to="/menu" className="text-sm font-medium hover:text-primary transition-colors">Menu</Link>
                <Link to="/about" className="text-sm font-medium text-primary">About</Link>
                <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
              </nav>
              <Link to="/contact" className="bg-primary hover:bg-yellow-500 text-contact-bg text-sm font-bold py-2.5 px-6 rounded-lg transition-all transform hover:scale-105">
                Book a Table
              </Link>
            </div>
            <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center pt-20">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{backgroundImage: 'linear-gradient(rgba(33, 29, 17, 0.4), rgba(33, 29, 17, 0.9)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6GMeJOAVHnHzwCm5QBBNydDPEZ3XGNtfGIA0MJtICxQrY_83AhZ_84CS1rsqwlK8BlvjmJPEDDuq8diklVk-HT2tpUSc_pwGIGoWOwB6PbccfAJzlUxSvPgynlc8RQsNtdMl1x1YtJ0kU5hk1gb1QCEQjptn1xM6EIHWinFUBbbzXGPhCRJLj5fawZSFGtmghhr4p-oHTAiQNUU2USdaXLfDKv9GaqCfVnNI3TBd9mZiH4T5GHjHa6Tr5N52kpeWXGLa3ZjHjDms9")'}}>
          </div>
          <div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
            <div className="w-16 h-1 bg-primary rounded-full mb-4"></div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-white drop-shadow-lg">
              Forged in Fire,<br /><span className="text-primary">Served with Passion.</span>
            </h1>
            <p className="text-lg md:text-xl font-light text-gray-200 max-w-2xl leading-relaxed drop-shadow-md">
              Experience the alchemy of open-flame cooking where every dish tells a story of heat, smoke, and time.
            </p>
            <div className="pt-8">
              <Link to="/contact" className="flex items-center justify-center gap-2 bg-primary text-contact-bg font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-all">
                <span>Reserve a Table</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
            <span className="material-symbols-outlined text-4xl">keyboard_arrow_down</span>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 px-6 md:px-12 bg-contact-bg">
          <div className="max-w-7xl mx-auto w-full">
            <div className="@container">
              <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">
                {/* Text Content */}
                <div className="flex flex-col gap-6 lg:w-1/2">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined">restaurant</span>
                    <span className="text-sm font-bold uppercase tracking-widest">Our Philosophy</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    Fire is an ingredient, not just a method.
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Our kitchen is an homage to the primal art of cooking over open flames. We don't hide behind heavy sauces or complex garnishes. Instead, we let the natural flavors of exceptional ingredients speak for themselves, enhanced only by the smoky depth of charcoal and the intense heat of the grill.
                  </p>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Every sear marks a commitment to quality, and every ember burns with our dedication to the craft.
                  </p>
                  <div className="pt-4">
                    <button className="text-white border-b-2 border-primary pb-1 hover:text-primary transition-colors font-bold inline-flex items-center gap-2">
                      Read Our Story <span className="material-symbols-outlined text-sm">arrow_outward</span>
                    </button>
                  </div>
                </div>
                {/* Image */}
                <div className="w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <div className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDgEnao231jPPQaA8epSCrhFxB701Y0LfAW9V1SnMaCjxpTQ96JLUS1YX8uKCuhm-cSVJcntJHwWL4FtoJ9of5wRahGcosO5N6YBdrnLrjaLBFfLBspWXojQzIBIZl284D0WebeF1QZg-ND4vogE76UvCblH5ADNBmlDCM9rX8uKCHa2GyLdo7zLR1SUzywmZBFNxLEa04BFYdsidML3t40pjqxO34ke4l0WiRvk5yEma_84b6BWMoWddDynkcpc07H55Wf4rRgPxOI")'}}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chef's Profile Section */}
        <section className="py-24 px-6 md:px-12 bg-menu-card border-y border-[#383429]">
          <div className="max-w-5xl mx-auto w-full">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-contact-bg">
                  <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCecajb4aZNDUTnGlpa3e3olteh8N560FtGROLjvuR-HgStYM1C9tsGq1GCxU1tu2lNSTucAJ18RC9pKpso2WhzBRw4OEyn1scBFgU0tUKLY5DsdA9vsVXwHer9Brarsi0n93Hobb4x6AbxKU9QhRENv-t0OkPC0wsm4d6kv_AnuPekDy32X8CaicRhe6Xxsi4q4ZwiVM8ADQRQsALvCsl1aEpu1MCP0DbwcMo9upLMGb3-p0Fuw1MZtygIh_iZTqLX67Bbgtcy3JAa")'}}>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3 flex flex-col gap-6 text-center md:text-left">
                <div className="inline-flex items-center justify-center md:justify-start gap-2 px-3 py-1 bg-primary/10 text-primary w-fit rounded-full mx-auto md:mx-0">
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="text-xs font-bold uppercase">Executive Chef</span>
                </div>
                <h2 className="text-4xl font-bold">Chef Marco's Journey</h2>
                <h3 className="text-xl text-primary italic font-light">"Cooking is the honest dialogue between the earth and the plate."</h3>
                <p className="text-gray-400 leading-relaxed">
                  From Michelin-star kitchens in Paris to the raw intensity of Ember &amp; Bun, Chef Marco brings 20 years of culinary excellence to your table. Driven by an obsession for quality ingredients, his approach strips away the unnecessary, focusing purely on flavor, texture, and the transformative power of fire.
                </p>
                <div className="pt-4 flex items-center justify-center md:justify-start gap-4">
                  <img alt="Chef Signature" className="h-12 opacity-60 invert filter" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg-fFvbWOzLFWOoZuDZhwGSK0AN7yEm3DwHwvTuIQCUTRR8_GFMXfvGEhKRakZAoFJfQv61_zv9KPQF_wDoHwfrv4sJc84XZ6Vq9bq2Pkyz0Qk5JVchDvxb7VL2raY4yVAKR6lE9Flebxa9QBFMKYs4GY_UECA4_6Qm5pO1WbJgcNCsJ5vCYvyRlaQgsDZbdUJ5J6xQxCRJkqixiyUa_r88mmcpc5IILRBK2RpHDbWCOLQIzEo7QjaQSHMSGVIVzMlLIBt_NrNrXc8" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Source: Ingredients */}
        <section className="py-24 px-6 md:px-12 bg-contact-bg">
          <div className="max-w-7xl mx-auto w-full flex flex-col gap-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-[#383429] pb-8">
              <div className="flex flex-col gap-2">
                <span className="text-primary font-bold tracking-widest uppercase text-sm">The Source</span>
                <h2 className="text-3xl md:text-4xl font-bold">Farm to Flame</h2>
              </div>
              <p className="text-gray-400 max-w-md text-right md:text-left">
                We partner with local artisans and farmers who share our obsession with quality.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Item 1 */}
              <div className="group flex flex-col gap-4">
                <div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-[#2c281b]">
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnblpkKcvkMmQM3FaIWVimMp6ubRqEDG8J7ndLx37AL7ikt3P8pHMYiGYpNfZybmSQkZ4h4HcqiZg74V-grBR9nGvYDnAVkOmaTD1ONZZzyHgV5GotaseLCTWjuBdvISQdmN9GbRoXPQj_nHgvy4TNR7V8X3SPW3XFNNk2v9h_-k9RAQrZ5Ua4vvTmrCuDytQhoZ4Ou6Q9aSiv89SKpRh3_alp5KznBXWHRqmiHdEGqZUERVDd946J6otnf8IiYXdALyD58BLSajjl")'}}>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-white text-xl font-bold group-hover:text-primary transition-colors">Premium Wagyu</h3>
                  <p className="text-gray-500 text-sm">Sourced from sustainable local ranches.</p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="group flex flex-col gap-4">
                <div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-[#2c281b]">
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_NTRXRQOpkSwdwRDfu5TO2OEQrPRZBDyxMld_VP2NGZbSJnI5adTwdDMomeKFgLV-7OF2KtxGbuYuzv45C5KtKQnp4ZvABWIGS6wsZav2DzmP4RjA9XkTHKoNljnhLXuanyGiMgWyFqsJ2b6vlQd_6Nhog6EEPE4vn8vsQC0Zku5ZQHuLYJXOXc_raX-6T3Go75ZSqS7wSz22pVnjCQ7z8YMuLkLpB8Cd4uWaAGV5A4Ar1tlslddoTuNiih3G60aitJY7GbGNaTIX")'}}>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-white text-xl font-bold group-hover:text-primary transition-colors">Organic Harvest</h3>
                  <p className="text-gray-500 text-sm">Fresh, seasonal produce picked daily.</p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="group flex flex-col gap-4">
                <div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-[#2c281b]">
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_unL-YR1ZqmoD0IUBsflWU4HJrltiJs7rqs1mi0fJ0H7Y2GMzGKUP2guMjnShllQLhB7M7oj29eqEn6byNGQBb-rOnjdaA2WaOFJfdvBfEKJpqNPH5FA_kGMEYozKGJAdOL7q4h3U_n9ipFa52pk-MMZL8keppYCF4XP2aJd8Xwce7LzxIvTts_2SZlufJgu5NGkUS_6z8SMi-haO9G9QLsp9hQFmcy5QAlGNGsthU5rbhbWhha2PDEET6exT-LbhZNkgFZmGtODt")'}}>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-white text-xl font-bold group-hover:text-primary transition-colors">Artisanal Buns</h3>
                  <p className="text-gray-500 text-sm">Baked in-house every morning.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Immersive Footer */}
        <footer className="bg-[#121009] pt-20 pb-10 px-6 md:px-12 border-t border-[#383429]">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              {/* Brand & Newsletter */}
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-3 text-white">
                  <span className="material-symbols-outlined text-4xl text-primary">local_fire_department</span>
                  <h2 className="text-3xl font-bold">Ember &amp; Bun</h2>
                </div>
                <p className="text-gray-400 max-w-md">
                  Join our inner circle. Receive exclusive updates on seasonal menus and chef's tasting events.
                </p>
                <div className="flex w-full max-w-md gap-2">
                  <input className="bg-[#211d11] border border-[#383429] text-white rounded-lg px-4 py-3 w-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-600" placeholder="Your email address" type="email" />
                  <button className="bg-primary hover:bg-yellow-500 text-contact-bg font-bold px-6 py-3 rounded-lg transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
              {/* Links & Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pl-12">
                <div className="flex flex-col gap-4">
                  <h4 className="text-white font-bold text-lg">Visit Us</h4>
                  <p className="text-gray-400 leading-relaxed">
                    142 Charcoal Lane<br />
                    Culinary District, NY 10012
                  </p>
                  <a className="text-primary hover:underline inline-flex items-center gap-1" href="#">
                    Get Directions <span className="material-symbols-outlined text-sm">near_me</span>
                  </a>
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="text-white font-bold text-lg">Hours</h4>
                  <div className="text-gray-400 flex flex-col gap-1">
                    <div className="flex justify-between max-w-[200px]">
                      <span>Mon - Thu</span>
                      <span>5pm - 10pm</span>
                    </div>
                    <div className="flex justify-between max-w-[200px]">
                      <span>Fri - Sat</span>
                      <span>5pm - 11pm</span>
                    </div>
                    <div className="flex justify-between max-w-[200px]">
                      <span>Sunday</span>
                      <span>4pm - 9pm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-[#2c281b] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm">© 2024 Ember &amp; Bun. All rights reserved.</p>
              <div className="flex gap-6">
                <a className="text-gray-500 hover:text-primary transition-colors" href="#">
                  Instagram
                </a>
                <a className="text-gray-500 hover:text-primary transition-colors" href="#">Facebook</a>
                <a className="text-gray-500 hover:text-primary transition-colors" href="#">Twitter</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;