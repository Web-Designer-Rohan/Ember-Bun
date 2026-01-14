import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '../components/MobileMenu';

const Home: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#f8f7f6] dark:bg-home-bg font-display text-white overflow-x-hidden w-full">
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-home-border bg-home-bg/95 backdrop-blur-md">
        <div className="px-4 md:px-10 py-3 flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2 text-white">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '28px' }}>local_fire_department</span>
            <h2 className="text-white text-xl font-bold tracking-tight">Ember &amp; Bun</h2>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-white/80 hover:text-primary transition-colors text-sm font-medium">Home</Link>
            <Link to="/menu" className="text-white/80 hover:text-primary transition-colors text-sm font-medium">Menu</Link>
            <Link to="/about" className="text-white/80 hover:text-primary transition-colors text-sm font-medium">Our Story</Link>
            <a href="#reviews" className="text-white/80 hover:text-primary transition-colors text-sm font-medium">Reviews</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="md:hidden text-white/80" onClick={() => setIsMobileMenuOpen(true)}>
              <span className="material-symbols-outlined">menu</span>
            </button>
            <Link to="/contact" className="hidden md:flex cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary hover:bg-primary/90 transition-colors text-home-bg text-sm font-bold">
              Book a Table
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-home-bg via-home-bg/60 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA5i4taTB0LeMQcMzPQQ9r5-iYYQ9kJaMRXJc0ZkscLYZf_kETJOSxgzjzduzp8Hwd2Gam9vAR1_-pWGgb55aO_gD3CmzVj94FXhUJRnRVpvO-zMvgpDDUtatjBTheX8DSwFiAszS8MTc-cIujN2LPYyTJ9OWQiAzgSMwRR895S1qCMhSmsgTq7X67mRI17dwhOTQExp6vNgB9t3jZlp6ErUbjEqp-jPH-aGCsZul1Cl62mh7b12HTmM5btyaPx9_n14mC3e2Ihfxpy')" }}></div>
        </div>
        <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <div className="flex flex-col gap-4">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Est. 2024 • Premium Dining</span>
            <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight drop-shadow-lg">
              Savor the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-600">Flame.</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
              Experience the fusion of premium Wagyu beef and artisanal baking. The city’s finest open-fire dining experience awaits.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 w-full">
            <Link to="/full-menu" className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-amber-500 transition-all text-home-bg text-base font-bold shadow-lg shadow-primary/20">
              Order Now
            </Link>
            <Link to="/contact" className="flex items-center justify-center rounded-lg h-12 px-8 bg-home-surface border border-white/10 hover:bg-white/10 transition-all text-white text-base font-bold backdrop-blur-sm">
              Reserve Table
            </Link>
          </div>
        </div>
      </header>

      {/* Signature Collection (Carousel) */}
      <section className="py-20 px-4 md:px-10 max-w-7xl mx-auto" id="menu">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">The Menu</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">The Ember Collection</h3>
          </div>
          <div className="flex gap-2">
            <button onClick={scrollLeft} className="size-10 rounded-full border border-home-border flex items-center justify-center text-white hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button onClick={scrollRight} className="size-10 rounded-full bg-primary flex items-center justify-center text-home-bg hover:bg-primary/90 transition-colors">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-8 gap-6 snap-x no-scrollbar"
        >
          {/* Item 1 */}
          <div className="min-w-[280px] md:min-w-[340px] snap-center group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-4">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
              <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUSTeFgLJOogvLTgSYL0cB6M0OqJSgFDZR832U4iIgFLQeaWtOG_9cmWhWfIQlvYYWbeEjK50PQU7gWssA74Toon0MUWnnAfhY0O3X1M4hNBThqYRmPd9R9beSLuYzAQeNfyvdcyn7s7szctnPPHLrevfefs7gWsINei-EyEnsKW_u7TPz0l56ocvJmTY-cl2KA9ABM4i7DPsGoRK91aR7JCJnMlsMtnZ5ifwgwtOnhCdeHzKe17Ppzr8lfXIeDWVqG88N-T8R-q7m')" }}></div>
              <div className="absolute top-4 right-4 z-20 bg-home-bg/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <span className="text-primary font-bold text-sm">$24</span>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">The Golden Ember</h4>
              <p className="text-gray-400 text-sm">Wagyu beef, truffle aioli, caramelized onions, brioche bun.</p>
            </div>
          </div>
          {/* Item 2 */}
          <div className="min-w-[280px] md:min-w-[340px] snap-center group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-4">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
              <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_RQhRXTEQecBM8pjb5-xFFNIeZRRbRgxJebB2mOnw4oBXPSOdblv4ovUgO7QWLUh_mv63qdn2LdLS_W5x0Cn8KjZVYVPPx85GYEsR9BP4ZHB3JSXBg1FjNWFZn1pzDcXa12xygiwW062wS3584lhWee4ssG6kmogEcR1cuzcFbi9bgJAjYZnwCHIpsTuYzU8sSR6w3DBTmEYT8fPBsG4KHRzIVutrHGrlWyqqUD4MECTcEj5hwA7kBoGnAtsOac3uadbIILCeIEbZ')" }}></div>
              <div className="absolute top-4 right-4 z-20 bg-home-bg/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <span className="text-primary font-bold text-sm">$21</span>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">Smoky Bun</h4>
              <p className="text-gray-400 text-sm">Brisket blend, smoked gouda, house BBQ, charcoal bun.</p>
            </div>
          </div>
          {/* Item 3 */}
          <div className="min-w-[280px] md:min-w-[340px] snap-center group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-4">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
              <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8byCFyNbc97jEE0Sk-cSMa5B5As9z0Hz0oi27_T7Y62LelSOb7yQsiWMTFwM5afEADafsApULhkgoHpEBrttMNuFL7RFrdzwVYmGFS0TpuvhCeRUbCRSyQbQByf0EOuU_ZUNH0VM1k_26rViLbh2cSIEGETijPu7WQndkrcnP2KQQ0H1NrMmY4CCa0X9SLOP6KILbncUSfkepCf0picaFlzNwAzDRhR1dDUL8Ts_WDW4_V-E4LMtwdjP2Y_skEyy8VxFDENlb6TWX')" }}></div>
              <div className="absolute top-4 right-4 z-20 bg-home-bg/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <span className="text-primary font-bold text-sm">$18</span>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">Spicy Blaze</h4>
              <p className="text-gray-400 text-sm">Hot Nashville chicken, spicy slaw, dill pickles.</p>
            </div>
          </div>
          {/* Item 4 */}
          <div className="min-w-[280px] md:min-w-[340px] snap-center group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-4">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
              <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGraN6PhS4mLwdzY-KXUBRyi-iQ1VHaFWeykpCutIOWfa1yuk4p7S4aV9kPMW9Tc2HD75wXIIs-fkudPNmxgY_ZXrZAkvVyVVZ2XHnEuCdxyhVFb20tcyLd3xnuC7Tgq0si54e0SPGQyY71cnhgCLogp7lf5E108gRr0JywVKxhGiOjPUOOPQGQpO3BIZ1x_X7aGMhlmQ0f8rzWJV97gegz8saoeDnyuIsbMmDieIqHVt8e7iiukrs_COiArLKrVOOQ3fSTvuWTIbu')" }}></div>
              <div className="absolute top-4 right-4 z-20 bg-home-bg/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <span className="text-primary font-bold text-sm">$22</span>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">The Sunrise</h4>
              <p className="text-gray-400 text-sm">Angus beef, fried egg, maple bacon, espresso aioli.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Craft Section */}
      <section className="bg-home-surface py-20" id="story">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Our Craft</h2>
                <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                  Born from <br />Fire &amp; Passion
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Ember &amp; Bun redefines the burger experience using only the finest locally sourced ingredients and ancient grilling techniques. We believe that true flavor comes from patience and open flames.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-lg bg-home-bg border border-home-border flex items-center justify-center shrink-0 text-primary">
                    <span className="material-symbols-outlined">skillet</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Open Fire Grilling</h4>
                    <p className="text-gray-500 text-sm mt-1">We cook over real oak wood logs for an authentic, deep smoky flavor you can't fake.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-lg bg-home-bg border border-home-border flex items-center justify-center shrink-0 text-primary">
                    <span className="material-symbols-outlined">agriculture</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Premium Wagyu</h4>
                    <p className="text-gray-500 text-sm mt-1">Sourced directly from top-tier local ranches ensuring ethical raising and superior marbling.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-lg bg-home-bg border border-home-border flex items-center justify-center shrink-0 text-primary">
                    <span className="material-symbols-outlined">bakery_dining</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Artisan Baking</h4>
                    <p className="text-gray-500 text-sm mt-1">Our signature buns are baked fresh every morning in our kitchen, never frozen.</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="text-primary font-bold border-b-2 border-primary/20 hover:border-primary pb-1 transition-colors mt-4 inline-block">
                Read Our Full Story
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="aspect-[3/4] w-full rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-bfRaQxCavTLZIKJYc0bV1qx-OUj-2p9dHQcy26mvJfWZwgKp1xhQf2JvdDLt3hnKd_o7xodoZpxpWTnzi1TGZSYREHqBh6bpfMxt8NPFwtffZSQpYyiAGBC_OXmPVjYZzF_IAYzjZDRGPHdWOkuyEJSw27VIDvJwNy1EiPDH6ZYFpBkK5IHabOp7O-KQXOW66onqhnqOfedvV5AP8WHlFAiHpnigTA-75Z62MbSOoOPQ_ThO0UTthj46bWd6K3DQ0-bkpEE-Znhg')" }}></div>
                <div className="aspect-square w-full rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAcmrazikw-kX49M_noFSSCiLRVvgpGwt9R1qUoJWsFjaHT-sLv-r1W52KKbHbkQZ-1ETj6Q-C6ye3NBYj5NKMyFp5iljG029-EasiuTU6i2APkCMOGoDz9a3vebWSeN6uWeC6_nW_6SbBQYfzBWQ-5fUXFhiK3fdIv_w27iPuZfxJmDyH5JKNRKwfCahQTMaq2Y5l-d9qug8dXPgjIHho9mZDKsz0KyiolVDbALedLGpGn6-mHwNx0wdMiFAJsjyI0Djk5FtDP3qZF')" }}></div>
              </div>
              <div className="space-y-4">
                <div className="aspect-square w-full rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQPSopa7iy0AsG-jfBDgEk1gDfZi8O0-E2t1-RM7dY7XimTJbhqQXvmzj5u2f0APTX1dMFeIBDIGsAN8Wv0IwaI-2Hn3e9CCSR8RVjEGeL7spUCVFh7S_Ye-mv0eqgqS5Tcex9ydsRE7kORcCMiSrbJF1aNq3cnkgB3n0fV707iDYHV9NoTaYr5sDHK5cdB_eusqnqPZc-CIU8YTaoTghax0g29IQNerlER0cbgoPT-NT4hW17ox6vG39R8oYMrxginIDga_4OldnT')" }}></div>
                <div className="aspect-[3/4] w-full rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4YaDNlepxyRhAEWqq0l6Ywj2sVuU7QZHHYq-rHf0Wmn6_bhQT1HcyhbhGyNKVmZJYig-O9vBtI1LtF-Cm1sjT4RqSg2lY0lkSoex-qDYRakwLcenJR2jMC0_pb01l-CsVlogVXbBn8009BjmWygXlz6rY_DXaPPHjl95oyx6BVE0Y81o-Ur-egiFOahE9-uD4zbcJ7EH-feQVCMwMf42qft1uwPpBo7XOFDbrZ120q-CpT_Icnq4h6H06HBZ088n41rK9xNteR5r_')" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-home-bg border-t border-home-border" id="reviews">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Testimonials</span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mt-2">Loved by Locals</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Review 1 */}
            <div className="bg-home-surface p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
              <div className="flex gap-1 text-primary mb-4">
                {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined text-[20px] fill-current">star</span>)}
              </div>
              <p className="text-white/90 italic mb-6">"The Golden Ember might just be the best burger I've had in my life. The truffle aioli is a game changer. Absolutely worth the reservation."</p>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-gray-600 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBEBfyBiIo1i9b8NBAgTsTzCROel9pgOSGi1GbN75OoCcyh2q0ylhb3vor_PKJJAz5P-vinR4LwJrNw6ml-OKUlg6628HpiukH0HHgDS3TfoPY2oTn5FhgMTOcCVjCyTE5mu0_5PLgK0vcj-NkrFkxLEpJ-Eq5_wBVUOYM9w20Vmnq0HWYGfg7VPku3IP-tcgcFMkgHdXRJSqy3wNjJiwPcAink3lt29x8kliXYfh_BbhsmIpuqtiSRMBfMLBpe9EhI1KI8UfgXzXR2')" }}></div>
                <div>
                  <p className="text-white font-bold text-sm">James Caldwell</p>
                  <p className="text-gray-500 text-xs">Food Critic</p>
                </div>
              </div>
            </div>
            {/* Review 2 */}
            <div className="bg-home-surface p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
              <div className="flex gap-1 text-primary mb-4">
                {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined text-[20px] fill-current">star</span>)}
              </div>
              <p className="text-white/90 italic mb-6">"Incredible atmosphere. Dark, moody, and perfect for date night. The service was impeccable and the Smoky Bun lived up to the hype."</p>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-gray-600 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBz8JocLYFNVtmlVzetGqevKVv2yHR96hJUMFBp2jQvaCsIG0hjqBS11vP0UbpasoDQRlJTUEwmv9-8671s_PBT-VyFZVt0MZJS5PpHG4Vzp84nnh0WcMFBlE3gkkW4Eo0I1crcjbcakvh0rqgHA1Va57fFHvzx5TliIZqQUNz9zyGd7Ug9BwWTNCD43SWnhgsrW35ISKVAf7Mp6icVIwRMnF14ejPK6gUg2uUh0ZmGeDWw77DnZtCCJiefHS0VCqGRmewxidOMfVzT')" }}></div>
                <div>
                  <p className="text-white font-bold text-sm">Sarah Jenkins</p>
                  <p className="text-gray-500 text-xs">Local Guide</p>
                </div>
              </div>
            </div>
            {/* Review 3 */}
            <div className="bg-home-surface p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
              <div className="flex gap-1 text-primary mb-4">
                {[1, 2, 3, 4].map(i => <span key={i} className="material-symbols-outlined text-[20px] fill-current">star</span>)}
                <span className="material-symbols-outlined text-[20px] fill-current">star_half</span>
              </div>
              <p className="text-white/90 italic mb-6">"Finally, a place that respects the ingredients. No gimmicks, just pure, high-quality flavor. The spicy chicken sandwich packs a serious punch."</p>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-gray-600 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCD9vBNED4HzvIT4V5q3pfH7iitwPyWoe5kkiuR0uepw-vCUt-EbEDyFgOIy4s71Y-AdbBtZEVXqFQxMPMML2_xOenA5OYcawcV9bflW8yCKLfHEqKC-Z3rCmCoiP_H5-_8rou7Z6Thl1dKJKD99PMltp838fZY-3hvr021y7peq2snpXUQRzCZ9J_AEHjDkWSqChl7em6KdFpcdrl78NBCO9L-zInQ9w-GyrjaMNKVa4jWiticCICyo5eYsvZ03905cG6orpz6pohO')" }}></div>
                <div>
                  <p className="text-white font-bold text-sm">Marcus Chen</p>
                  <p className="text-gray-500 text-xs">Chef</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#12100b] border-t border-home-border pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white mb-2">
                <span className="material-symbols-outlined text-primary">local_fire_department</span>
                <h2 className="text-white text-xl font-bold">Ember &amp; Bun</h2>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Premium artisanal burgers crafted with passion and fire. Experience the difference of true quality.
              </p>
              <div className="flex gap-4 pt-2">
                <a className="text-white hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
                <a className="text-white hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">camera_alt</span></a>
                <a className="text-white hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
              </div>
            </div>
            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg">Visit Us</h3>
              <div className="space-y-3">
                <div className="flex gap-3 text-gray-400 text-sm">
                  <span className="material-symbols-outlined text-primary shrink-0">location_on</span>
                  <p>128 Charcoal Lane,<br />Culinary District, NY 10012</p>
                </div>
                <div className="flex gap-3 text-gray-400 text-sm">
                  <span className="material-symbols-outlined text-primary shrink-0">call</span>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div className="flex gap-3 text-gray-400 text-sm">
                  <span className="material-symbols-outlined text-primary shrink-0">mail</span>
                  <p>reservations@emberandbun.com</p>
                </div>
              </div>
            </div>
            {/* Hours */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg">Opening Hours</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Mon - Thu</span>
                  <span className="text-white">11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Fri - Sat</span>
                  <span className="text-white">11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Sunday</span>
                  <span className="text-white">12:00 PM - 9:30 PM</span>
                </div>
              </div>
            </div>
            {/* Newsletter/Map */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg">Find Us</h3>
              <div className="w-full h-32 rounded-lg bg-gray-800 bg-cover bg-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0EslmLEsvjEo8AZbUY619Gm77W_TJkdhhAotm0Ov9kkb7xrDMKNWcAAXJD6vCOY3lJ0VBJMpIbvep9us9B0fYq1AwkKk5K5j-Hgyd0OCfm5R18OYap5KPr_iLZapVto_1PWDQRG-X8ky1hcBngBarCpRxSxuocPVRPeYLfZQ9pfTKolWWvbZGkfECsy9gNKU0fp_D_kNLnVung9HzSx3OMhEqfC0JEkzW8SMYNxB_ziRE1skr-6XQ9nhczhBIj173X-1bkXup7ONx')" }}>
                <div className="w-full h-full flex items-center justify-center bg-black/30 hover:bg-transparent">
                  <span className="material-symbols-outlined text-primary text-3xl drop-shadow-lg">pin_drop</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">© 2024 Ember &amp; Bun. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="text-gray-500 hover:text-white text-xs transition-colors" href="#">Privacy Policy</a>
              <a className="text-gray-500 hover:text-white text-xs transition-colors" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;