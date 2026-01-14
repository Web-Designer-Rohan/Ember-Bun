import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '../components/MobileMenu';

const Menu: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#f8f7f6] dark:bg-menu-bg font-display text-[#171611] dark:text-white transition-colors duration-200">
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        {/* Navigation */}
        <header className="sticky top-0 z-50 w-full bg-menu-bg/95 backdrop-blur-sm border-b border-menu-divider">
          <div className="max-w-[960px] mx-auto px-4 md:px-10 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-primary">local_fire_department</span>
              <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Ember &amp; Bun</h2>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-6">
                <Link className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" to="/">Home</Link>
                <Link className="text-primary text-sm font-medium leading-normal" to="/menu">Menu</Link>
                <Link className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" to="/about">Our Story</Link>
                <Link className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" to="/contact">Reservations</Link>
              </nav>
              <Link to="/contact" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary hover:bg-yellow-500 text-[#171611] text-sm font-bold leading-normal tracking-[0.015em] transition-colors">
                <span className="truncate">Book a Table</span>
              </Link>
            </div>
            <div className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
              <span className="material-symbols-outlined">menu</span>
            </div>
          </div>
        </header>

        {/* Main Content Wrapper */}
        <main className="flex-1 flex flex-col items-center w-full">
          {/* Hero Section */}
          <div className="w-full max-w-[960px] px-4 md:px-0 py-6 md:py-10">
            <div className="@container">
              <div className="relative overflow-hidden rounded-xl bg-cover bg-center min-h-[480px] flex flex-col items-center justify-center text-center p-8 gap-6 shadow-2xl" 
                style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-TfFmgL3dTkcL32l_nM03etwMeCN-iaWMn1GT_kYY0chqLjK0At_Y1sP5uGuNpxtqtorfhWIgdg3VlOLLYtxjJIv5Na_0CfqnrBF1826Imkie9khVX1Az4nN1ZZY3U2osCAWO0U7H5kkAP30R1iMzDHeU1e3KwEqJjBWBfF6P7BzMlfhotnoLdrPJSv64R8-lGaRE56QK600pCxAtv8Tuukn1EtgNWHSgZE2FApj7BkQNQk4F9LwC0RV3qxMqvq_Q209iB7GyYlby")'}}>
                <div className="flex flex-col gap-3 max-w-2xl z-10">
                  <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-lg">
                    Fire, Flavor &amp; Finesse
                  </h1>
                  <h2 className="text-gray-200 text-base md:text-lg font-normal leading-relaxed max-w-lg mx-auto drop-shadow-md">
                    Experience the art of charcoal grilling. Where premium ingredients meet primal techniques.
                  </h2>
                </div>
                <div className="flex gap-4 z-10 pt-4">
                  <Link to="/full-menu" className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-yellow-500 text-menu-bg text-base font-bold transition-transform hover:scale-105">
                    View Full Menu
                  </Link>
                  <Link to="/about" className="flex items-center justify-center rounded-lg h-12 px-6 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-base font-medium border border-white/20 transition-colors">
                    Our Story
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Category Nav */}
          <div className="sticky top-16 z-40 w-full bg-menu-bg/95 backdrop-blur border-b border-menu-divider py-4">
            <div className="max-w-[960px] mx-auto px-4 md:px-10">
              <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
                <a href="#burgers" className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary px-5 shadow-lg shadow-primary/20 transition-all">
                  <span className="material-symbols-outlined text-[18px]">lunch_dining</span>
                  <p className="text-menu-bg text-sm font-bold">Burgers</p>
                </a>
                <a href="#sides" className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-menu-card border border-menu-divider hover:border-primary/50 px-5 transition-all group">
                  <span className="material-symbols-outlined text-[18px] text-gray-400 group-hover:text-primary">tapas</span>
                  <p className="text-white/80 group-hover:text-white text-sm font-medium">Sides</p>
                </a>
                <a href="#elixirs" className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-menu-card border border-menu-divider hover:border-primary/50 px-5 transition-all group">
                  <span className="material-symbols-outlined text-[18px] text-gray-400 group-hover:text-primary">local_bar</span>
                  <p className="text-white/80 group-hover:text-white text-sm font-medium">Elixirs</p>
                </a>
                <a href="#elixirs" className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-menu-card border border-menu-divider hover:border-primary/50 px-5 transition-all group">
                  <span className="material-symbols-outlined text-[18px] text-gray-400 group-hover:text-primary">icecream</span>
                  <p className="text-white/80 group-hover:text-white text-sm font-medium">Desserts</p>
                </a>
              </div>
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full max-w-[960px] px-4 md:px-10 flex flex-col gap-16 pb-20 pt-10">
            {/* Section: Burgers */}
            <section id="burgers">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-white text-3xl font-bold tracking-tight">The Main Event</h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-menu-divider to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {/* Featured Item (Chef's Choice) */}
                <div className="@container group">
                  <div className="flex flex-col md:flex-row items-stretch rounded-xl bg-[#2a2518] border border-primary/20 shadow-xl overflow-hidden hover:shadow-primary/10 transition-shadow duration-300">
                    <div className="w-full md:w-2/5 min-h-[280px] bg-center bg-no-repeat bg-cover relative group-hover:scale-105 transition-transform duration-700 ease-out" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB2v4vWHYKYE0NmA3amSIlClGIhr80baJkL2V2ewX9OaKrmdhZQXzvPNtW0HC2irsZj6qGR9fJ1www5ovt2MHt8eI90g4xNwLLtq2lCGR9uAVw61eR0hCuQdt8cUaFMHechaDYqmxMrzQxGeDorpXd2PnUW-3AYK94tHt_Wrcqjw1ZQGBnf-Mwv990hWTBJDxrzyd_26Slb2qDn4rLzQVwXqd_0NoauzoTxDMOyfud1YpDVtzSYVqM36U1p5iNfYJlugE-DYDjJIpgj")'}}>
                      <div className="absolute top-4 left-4 bg-primary text-menu-bg text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">Chef's Choice</div>
                    </div>
                    <div className="flex flex-col justify-center w-full md:w-3/5 p-6 md:p-8 relative bg-[#2a2518] z-10">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-white text-2xl font-bold leading-tight">Truffle &amp; Gold</h3>
                        <span className="text-primary text-xl font-bold">$24</span>
                      </div>
                      <p className="text-[#b7b29e] text-base font-normal leading-relaxed mb-6">
                        Our signature masterpiece. Double Wagyu beef patty, black truffle aioli, 24k gold leaf, aged cheddar, and caramelized onions on a brioche bun.
                      </p>
                      <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                        <div className="flex gap-2 text-xs text-[#b7b29e] font-medium uppercase tracking-wide">
                          <span>Wagyu</span> • <span>Truffle</span> • <span>Gold</span>
                        </div>
                        <button className="flex items-center gap-2 text-primary hover:text-white font-bold text-sm transition-colors group/btn">
                          Add to Order <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Standard Item 1 */}
                <div className="@container">
                  <div className="flex flex-col md:flex-row items-stretch rounded-lg bg-menu-card hover:bg-[#332f25] transition-colors border border-transparent hover:border-white/5 overflow-hidden h-full">
                    <div className="w-full md:w-48 shrink-0 h-48 md:h-auto bg-center bg-no-repeat bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC6c4BgZItnxQRzq0F8girEwn8vqwKdradzHZalsfJmh5bb54A0w9XqydVXo_jX6sNuATD-q8kQO2c_difFVLPfLxcwuzcYRPdKWYLwsrtWxKX961WcR4sUF9JBhLV_OijPmhgYkIrdMSM4uKcPMmN1hfc6c5NoGdYOw9laFJDjO605-0JJLUi_w_ZFeFG8a-uTPuXxKvcJFVzFL3qCC0FvKs3NLaCjmFzUhbD0FQaIRoHCGfflW0Jir7kGSsA5VyIw3epJsVvlG4fE")'}}></div>
                    <div className="flex flex-col justify-center flex-1 p-5">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="text-white text-lg font-bold">The Ember Classic</h3>
                        <span className="text-primary text-lg font-bold">$18</span>
                      </div>
                      <p className="text-[#9ca3af] text-sm leading-normal mb-4">
                        Angus beef patty, oak-smoked bacon, american cheese, lettuce, tomato, house sauce.
                      </p>
                      <button className="self-start text-xs font-bold text-white bg-white/10 hover:bg-primary hover:text-menu-bg px-3 py-1.5 rounded transition-colors uppercase tracking-wide">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
                {/* Standard Item 2 */}
                <div className="@container">
                  <div className="flex flex-col md:flex-row items-stretch rounded-lg bg-menu-card hover:bg-[#332f25] transition-colors border border-transparent hover:border-white/5 overflow-hidden h-full">
                    <div className="w-full md:w-48 shrink-0 h-48 md:h-auto bg-center bg-no-repeat bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBtHlspt9_AZLPFp6Z2iBMHFbNmfO2psy8Di8hDi41-PkMfGic4PbbLXZ-lronZvwGAZ_Nr0sbah28_LX3Lc7HM1_5oiOK8NqfxjoP0vSekQp-4Eno6FE2rhmND7IeyYBRTS-60rKAIOzzgG3f4vxSexb7PezPvA-Eyo9_8U6AQmeQZV6gOg_3TFoTzOEazzn9OKe9y1Xl0McBv4jsX2ecwnzQvIxblHEZuOhCzIGsdAO3Vs4VqcA3G51ZXScjP57OAiUO5rUiI-t1b")'}}></div>
                    <div className="flex flex-col justify-center flex-1 p-5">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="text-white text-lg font-bold">Spicy Inferno</h3>
                        <span className="text-primary text-lg font-bold">$20</span>
                      </div>
                      <p className="text-[#9ca3af] text-sm leading-normal mb-4">
                        Pepper jack cheese, roasted jalapeños, spicy chipotle mayo, crispy onions.
                      </p>
                      <button className="self-start text-xs font-bold text-white bg-white/10 hover:bg-primary hover:text-menu-bg px-3 py-1.5 rounded transition-colors uppercase tracking-wide">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section: Sides */}
            <section id="sides">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-white text-3xl font-bold tracking-tight">From the Soil</h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-menu-divider to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Side 1 */}
                <div className="flex flex-col rounded-lg bg-menu-card p-4 hover:bg-[#332f25] transition-colors">
                  <div className="aspect-video w-full rounded-md bg-cover bg-center mb-4" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqXNDQauMwDTuC_FpiOMGpLcA1VRViCOa3SfYnFu_pbCkGGAz4gPuJU4RUPoaQG9cu0nmRruiFHHzOLNAEf6AavssXU08q0rMpxq76Gwp2rCaHgy7MexKrPD0AcWKXYpwxyLJG0kTUzwjDRALkQdKPgThqO1hF85ksAqjfB59XSRC5XJ045FlqajUU5KSL-llXgjglZ29MGqTDr4ilwQw2xS73XRdsDWDR-sMPJHGv2BZHEk6gPERgsjsBdy3GmTzfSX3wiSm5F0zd")'}}></div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-white font-bold">Rosemary Fries</h3>
                    <span className="text-primary font-bold">$8</span>
                  </div>
                  <p className="text-sm text-[#9ca3af] mb-3">Hand-cut double fried potatoes tossed in rosemary salt.</p>
                  <button className="w-full py-2 rounded border border-white/10 text-white text-xs font-bold hover:bg-white hover:text-menu-bg transition-colors">ADD TO ORDER</button>
                </div>
                {/* Side 2 */}
                <div className="flex flex-col rounded-lg bg-menu-card p-4 hover:bg-[#332f25] transition-colors">
                  <div className="aspect-video w-full rounded-md bg-cover bg-center mb-4" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBRz4fbExHRCYHoOMlDfc-aVOg2kwpQiwT4m7Xb8WGXBxVRAZEVbs_IxIIf0Le0lK7E0q4Va8mbFWfwYL1uukhuO86Urle3X5RcRjcKuezdGop5y-xDVvN6llQZn3EF-40T0Zrd7ZJNM9E_XDCGVyZxbUFo4efaFmW06C57NipfmqmfM1MpC_G5Yyt1oZvHHaQcgU_iGSRp9Fg3upsE9BVlqNj-cYRR5P-ZTEB9C-Gt8VHlcOdeOfU-0urksbsAbD-Sq3EqNnwlp-w5")'}}></div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-white font-bold">Charred Corn</h3>
                    <span className="text-primary font-bold">$9</span>
                  </div>
                  <p className="text-sm text-[#9ca3af] mb-3">Fire-roasted corn, lime crema, cotija cheese, chili dust.</p>
                  <button className="w-full py-2 rounded border border-white/10 text-white text-xs font-bold hover:bg-white hover:text-menu-bg transition-colors">ADD TO ORDER</button>
                </div>
              </div>
            </section>

            {/* Section: Drinks */}
            <section id="elixirs">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-white text-3xl font-bold tracking-tight">Elixirs</h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-menu-divider to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Drink 1 */}
                <div className="flex items-center p-4 rounded-lg bg-menu-card border border-transparent hover:border-primary/20 transition-all">
                  <div className="size-20 shrink-0 rounded bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDaUW1PS0X5Amw9dfVOS8sWQt10J-YLUQtVRs2NdwZ4sW5DSttcaY5lUF4HxX7UUaIzOxGYE_mdVcWRG7cK3P6SzP5yO9z5wCxlk7WHd0-NHJHf6BREBbCAtxMznCqaCIT_mt_ICsGpbfPQYLFemqNsIIDxmQLr9Ux0qSR06iT86UDPkUtS6JI6StYsCvp-UyCVJotWWS0uz3Asa6GyLoOIVa4PmTcsSMCwqSPX-8S695MXbZE1zQ_Tlz9Sh7H9IvQK2aWoD20zA_5s")'}}></div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-white font-bold text-lg">Smoked Old Fashioned</h3>
                      <span className="text-primary font-bold">$16</span>
                    </div>
                    <p className="text-xs text-[#9ca3af] mt-1">Bourbon, maple syrup, angostura, hickory smoke.</p>
                  </div>
                  <button className="ml-4 flex size-8 items-center justify-center rounded-full bg-white/5 hover:bg-primary hover:text-menu-bg text-white transition-colors">
                    <span className="material-symbols-outlined text-[18px]">add</span>
                  </button>
                </div>
                {/* Drink 2 */}
                <div className="flex items-center p-4 rounded-lg bg-menu-card border border-transparent hover:border-primary/20 transition-all">
                  <div className="size-20 shrink-0 rounded bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZXMq7BVCrs5Uzl86Nu1bDc4g5l9S5373GCtc_6RRwh1Q1_uUKpRmpIPgayemplqyuBf2MUYfd-8Y39lTjjRiEK3xuiX82wAVAOWu1_q3r9hovRfpGct4R6DnRroERXBZZwA55__bANbJJ48t3lmUVrIJO3bsKQQzl4Q2AzoAlvcaYxtR3DSD8YatduV1OPmvcCDweFacICMBM1BO92BBfxZowM_LdZO9emapeD3jvBl0G7qslkJ5K0DMvLXKBhqS8GOwsp5Lwd994")'}}></div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-white font-bold text-lg">Craft Pilsner</h3>
                      <span className="text-primary font-bold">$9</span>
                    </div>
                    <p className="text-xs text-[#9ca3af] mt-1">Local brewery draft, crisp and refreshing.</p>
                  </div>
                  <button className="ml-4 flex size-8 items-center justify-center rounded-full bg-white/5 hover:bg-primary hover:text-menu-bg text-white transition-colors">
                    <span className="material-symbols-outlined text-[18px]">add</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
        
        {/* Minimalist Footer */}
        <footer className="w-full bg-[#171611] border-t border-menu-divider py-12">
          <div className="max-w-[960px] mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-2 text-white mb-2">
                <span className="material-symbols-outlined text-primary">local_fire_department</span>
                <h2 className="text-xl font-bold">Ember &amp; Bun</h2>
              </div>
              <p className="text-[#9ca3af] text-sm text-center md:text-left">
                123 Culinary Ave, Flavor District<br />
                Open Daily: 11am - 11pm
              </p>
            </div>
            <div className="flex gap-8">
              <a className="text-[#9ca3af] hover:text-primary transition-colors text-sm" href="#">Instagram</a>
              <a className="text-[#9ca3af] hover:text-primary transition-colors text-sm" href="#">Facebook</a>
              <a className="text-[#9ca3af] hover:text-primary transition-colors text-sm" href="#">Twitter</a>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
              <Link to="/contact" className="text-sm font-bold text-white border-b border-primary pb-0.5 hover:text-primary transition-colors">
                Reserve a Table
              </Link>
              <p className="text-xs text-[#525252]">© 2024 Ember &amp; Bun. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Menu;