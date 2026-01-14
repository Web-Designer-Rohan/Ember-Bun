import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '../components/MobileMenu';

// --- Types ---
type DietaryType = 'veg' | 'non-veg' | 'vegan' | 'egg';
type CategoryType = 'Burgers' | 'Sides' | 'Drinks' | 'Desserts';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: CategoryType;
  dietary: DietaryType;
  rating: number;
  image: string;
  isBestseller?: boolean;
}

// --- Mock Data ---
const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Truffle & Gold",
    description: "Double Wagyu beef, black truffle aioli, 24k gold leaf, aged cheddar.",
    price: 24,
    category: "Burgers",
    dietary: "non-veg",
    rating: 4.9,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2v4vWHYKYE0NmA3amSIlClGIhr80baJkL2V2ewX9OaKrmdhZQXzvPNtW0HC2irsZj6qGR9fJ1www5ovt2MHt8eI90g4xNwLLtq2lCGR9uAVw61eR0hCuQdt8cUaFMHechaDYqmxMrzQxGeDorpXd2PnUW-3AYK94tHt_Wrcqjw1ZQGBnf-Mwv990hWTBJDxrzyd_26Slb2qDn4rLzQVwXqd_0NoauzoTxDMOyfud1YpDVtzSYVqM36U1p5iNfYJlugE-DYDjJIpgj",
    isBestseller: true
  },
  {
    id: 2,
    name: "The Ember Classic",
    description: "Angus beef, oak-smoked bacon, american cheese, house sauce.",
    price: 18,
    category: "Burgers",
    dietary: "non-veg",
    rating: 4.7,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6c4BgZItnxQRzq0F8girEwn8vqwKdradzHZalsfJmh5bb54A0w9XqydVXo_jX6sNuATD-q8kQO2c_difFVLPfLxcwuzcYRPdKWYLwsrtWxKX961WcR4sUF9JBhLV_OijPmhgYkIrdMSM4uKcPMmN1hfc6c5NoGdYOw9laFJDjO605-0JJLUi_w_ZFeFG8a-uTPuXxKvcJFVzFL3qCC0FvKs3NLaCjmFzUhbD0FQaIRoHCGfflW0Jir7kGSsA5VyIw3epJsVvlG4fE"
  },
  {
    id: 3,
    name: "Garden Blaze",
    description: "Spicy bean patty, avocado, pickled onions, vegan chipotle mayo.",
    price: 16,
    category: "Burgers",
    dietary: "vegan",
    rating: 4.5,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtHlspt9_AZLPFp6Z2iBMHFbNmfO2psy8Di8hDi41-PkMfGic4PbbLXZ-lronZvwGAZ_Nr0sbah28_LX3Lc7HM1_5oiOK8NqfxjoP0vSekQp-4Eno6FE2rhmND7IeyYBRTS-60rKAIOzzgG3f4vxSexb7PezPvA-Eyo9_8U6AQmeQZV6gOg_3TFoTzOEazzn9OKe9y1Xl0McBv4jsX2ecwnzQvIxblHEZuOhCzIGsdAO3Vs4VqcA3G51ZXScjP57OAiUO5rUiI-t1b"
  },
  {
    id: 4,
    name: "The Sunrise",
    description: "Angus beef, fried egg, maple bacon, espresso aioli.",
    price: 22,
    category: "Burgers",
    dietary: "egg",
    rating: 4.8,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGraN6PhS4mLwdzY-KXUBRyi-iQ1VHaFWeykpCutIOWfa1yuk4p7S4aV9kPMW9Tc2HD75wXIIs-fkudPNmxgY_ZXrZAkvVyVVZ2XHnEuCdxyhVFb20tcyLd3xnuC7Tgq0si54e0SPGQyY71cnhgCLogp7lf5E108gRr0JywVKxhGiOjPUOOPQGQpO3BIZ1x_X7aGMhlmQ0f8rzWJV97gegz8saoeDnyuIsbMmDieIqHVt8e7iiukrs_COiArLKrVOOQ3fSTvuWTIbu",
    isBestseller: true
  },
  {
    id: 5,
    name: "Mushroom Swiss",
    description: "Grilled portobello mushroom, swiss cheese, caramelized onions.",
    price: 17,
    category: "Burgers",
    dietary: "veg",
    rating: 4.4,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUSTeFgLJOogvLTgSYL0cB6M0OqJSgFDZR832U4iIgFLQeaWtOG_9cmWhWfIQlvYYWbeEjK50PQU7gWssA74Toon0MUWnnAfhY0O3X1M4hNBThqYRmPd9R9beSLuYzAQeNfyvdcyn7s7szctnPPHLrevfefs7gWsINei-EyEnsKW_u7TPz0l56ocvJmTY-cl2KA9ABM4i7DPsGoRK91aR7JCJnMlsMtnZ5ifwgwtOnhCdeHzKe17Ppzr8lfXIeDWVqG88N-T8R-q7m"
  },
  {
    id: 6,
    name: "Rosemary Fries",
    description: "Hand-cut double fried potatoes tossed in rosemary salt.",
    price: 8,
    category: "Sides",
    dietary: "vegan",
    rating: 4.6,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqXNDQauMwDTuC_FpiOMGpLcA1VRViCOa3SfYnFu_pbCkGGAz4gPuJU4RUPoaQG9cu0nmRruiFHHzOLNAEf6AavssXU08q0rMpxq76Gwp2rCaHgy7MexKrPD0AcWKXYpwxyLJG0kTUzwjDRALkQdKPgThqO1hF85ksAqjfB59XSRC5XJ045FlqajUU5KSL-llXgjglZ29MGqTDr4ilwQw2xS73XRdsDWDR-sMPJHGv2BZHEk6gPERgsjsBdy3GmTzfSX3wiSm5F0zd"
  },
  {
    id: 7,
    name: "Charred Corn",
    description: "Fire-roasted corn, lime crema, cotija cheese, chili dust.",
    price: 9,
    category: "Sides",
    dietary: "veg",
    rating: 4.7,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRz4fbExHRCYHoOMlDfc-aVOg2kwpQiwT4m7Xb8WGXBxVRAZEVbs_IxIIf0Le0lK7E0q4Va8mbFWfwYL1uukhuO86Urle3X5RcRjcKuezdGop5y-xDVvN6llQZn3EF-40T0Zrd7ZJNM9E_XDCGVyZxbUFo4efaFmW06C57NipfmqmfM1MpC_G5Yyt1oZvHHaQcgU_iGSRp9Fg3upsE9BVlqNj-cYRR5P-ZTEB9C-Gt8VHlcOdeOfU-0urksbsAbD-Sq3EqNnwlp-w5"
  },
  {
    id: 8,
    name: "Smoked Old Fashioned",
    description: "Bourbon, maple syrup, angostura, hickory smoke.",
    price: 16,
    category: "Drinks",
    dietary: "vegan",
    rating: 4.9,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaUW1PS0X5Amw9dfVOS8sWQt10J-YLUQtVRs2NdwZ4sW5DSttcaY5lUF4HxX7UUaIzOxGYE_mdVcWRG7cK3P6SzP5yO9z5wCxlk7WHd0-NHJHf6BREBbCAtxMznCqaCIT_mt_ICsGpbfPQYLFemqNsIIDxmQLr9Ux0qSR06iT86UDPkUtS6JI6StYsCvp-UyCVJotWWS0uz3Asa6GyLoOIVa4PmTcsSMCwqSPX-8S695MXbZE1zQ_Tlz9Sh7H9IvQK2aWoD20zA_5s"
  },
  {
    id: 9,
    name: "Craft Pilsner",
    description: "Local brewery draft, crisp and refreshing.",
    price: 9,
    category: "Drinks",
    dietary: "vegan",
    rating: 4.3,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZXMq7BVCrs5Uzl86Nu1bDc4g5l9S5373GCtc_6RRwh1Q1_uUKpRmpIPgayemplqyuBf2MUYfd-8Y39lTjjRiEK3xuiX82wAVAOWu1_q3r9hovRfpGct4R6DnRroERXBZZwA55__bANbJJ48t3lmUVrIJO3bsKQQzl4Q2AzoAlvcaYxtR3DSD8YatduV1OPmvcCDweFacICMBM1BO92BBfxZowM_LdZO9emapeD3jvBl0G7qslkJ5K0DMvLXKBhqS8GOwsp5Lwd994"
  },
  {
    id: 10,
    name: "Molten Lava Cake",
    description: "Dark chocolate center, vanilla bean ice cream.",
    price: 12,
    category: "Desserts",
    dietary: "egg",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=2070&auto=format&fit=crop"
  },
];

// --- Helpers ---
const DietaryIcon = ({ type }: { type: DietaryType }) => {
  switch (type) {
    case 'veg':
      return <div className="border border-green-600 p-[2px] rounded-sm size-4 flex items-center justify-center"><div className="size-2 rounded-full bg-green-600"></div></div>;
    case 'non-veg':
      return <div className="border border-red-600 p-[2px] rounded-sm size-4 flex items-center justify-center"><div className="size-0 w-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[8px] border-b-red-600 transform rotate-0"></div></div>;
    case 'vegan':
      return <div className="border border-green-500 p-[2px] rounded-sm size-4 flex items-center justify-center text-[8px] font-bold text-green-500">V</div>;
    case 'egg':
      return <div className="border border-yellow-600 p-[2px] rounded-sm size-4 flex items-center justify-center"><div className="size-2 rounded-full bg-yellow-600"></div></div>;
  }
};

const FullMenu: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'All'>('All');
  const [dietaryFilters, setDietaryFilters] = useState<DietaryType[]>([]);
  const [priceRange, setPriceRange] = useState<number>(30);
  const [sortBy, setSortBy] = useState<'relevance' | 'price-low' | 'price-high' | 'rating'>('relevance');

  // Filter Logic
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      // Search
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      // Category
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      // Dietary
      const matchesDietary = dietaryFilters.length === 0 || dietaryFilters.includes(item.dietary);
      // Price
      const matchesPrice = item.price <= priceRange;

      return matchesSearch && matchesCategory && matchesDietary && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // relevance (default)
    });
  }, [searchQuery, selectedCategory, dietaryFilters, priceRange, sortBy]);

  const toggleDietaryFilter = (type: DietaryType) => {
    setDietaryFilters(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="bg-[#f8f7f6] dark:bg-home-bg font-display text-white overflow-x-hidden w-full min-h-screen">
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-home-border bg-home-bg/95 backdrop-blur-md">
        <div className="px-4 md:px-10 py-3 flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2 text-white">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '28px' }}>local_fire_department</span>
            <h2 className="text-white text-xl font-bold tracking-tight">Ember &amp; Bun</h2>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-white/80 hover:text-primary transition-colors text-sm font-medium">Home</Link>
            <Link to="/menu" className="text-white/80 hover:text-primary transition-colors text-sm font-medium">Showcase</Link>
            <Link to="/full-menu" className="text-primary transition-colors text-sm font-medium">Order Online</Link>
            <Link to="/about" className="text-white/80 hover:text-primary transition-colors text-sm font-medium">Our Story</Link>
            <Link to="/contact" className="text-white/80 hover:text-primary transition-colors text-sm font-medium">Contact</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="md:hidden text-white/80" onClick={() => setIsMobileMenuOpen(true)}>
              <span className="material-symbols-outlined">menu</span>
            </button>
            <Link to="/contact" className="hidden md:flex cursor-pointer items-center justify-center rounded-lg h-9 px-6 bg-primary hover:bg-primary/90 transition-colors text-home-bg text-sm font-bold">
              My Cart
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 shrink-0 space-y-8">
          {/* Search Mobile (Also visible on Desktop usually but sidebar is good place) */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search dishes..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-home-surface border border-home-border rounded-lg pl-10 pr-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-500"
            />
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-500 text-[20px]">search</span>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">restaurant_menu</span> Categories
            </h3>
            <div className="flex flex-col gap-2">
              {['All', 'Burgers', 'Sides', 'Drinks', 'Desserts'].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat as any)}
                  className={`text-left px-3 py-2 rounded-md text-sm transition-colors flex justify-between items-center ${selectedCategory === cat ? 'bg-primary text-home-bg font-bold' : 'text-gray-400 hover:bg-home-surface hover:text-white'}`}
                >
                  {cat}
                  {selectedCategory === cat && <span className="material-symbols-outlined text-[16px]">check</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Dietary */}
          <div>
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">eco</span> Dietary
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { type: 'veg', label: 'Vegetarian' },
                { type: 'non-veg', label: 'Non-Vegetarian' },
                { type: 'egg', label: 'Contains Egg' },
                { type: 'vegan', label: 'Vegan' },
              ].map((item) => (
                <label key={item.type} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`size-5 rounded border flex items-center justify-center transition-colors ${dietaryFilters.includes(item.type as DietaryType) ? 'bg-primary border-primary' : 'border-gray-600 group-hover:border-primary'}`}>
                     {dietaryFilters.includes(item.type as DietaryType) && <span className="material-symbols-outlined text-black text-[16px]">check</span>}
                  </div>
                  <input 
                    type="checkbox" 
                    className="hidden" 
                    checked={dietaryFilters.includes(item.type as DietaryType)}
                    onChange={() => toggleDietaryFilter(item.type as DietaryType)}
                  />
                  <span className={`text-sm ${dietaryFilters.includes(item.type as DietaryType) ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">payments</span> Max Price: ${priceRange}
            </h3>
            <input 
              type="range" 
              min="0" 
              max="50" 
              step="1"
              value={priceRange} 
              onChange={(e) => setPriceRange(parseInt(e.target.value))}
              className="w-full h-2 bg-home-surface rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>$0</span>
              <span>$50+</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-home-border">
            <h1 className="text-2xl font-bold text-white">{selectedCategory === 'All' ? 'Full Menu' : selectedCategory} <span className="text-sm font-normal text-gray-500 ml-2">({filteredItems.length} items)</span></h1>
            
            <div className="relative group">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-home-surface border border-home-border text-white text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 outline-none cursor-pointer pr-8 appearance-none"
              >
                <option value="relevance">Relevance</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <span className="material-symbols-outlined absolute right-2 top-3 pointer-events-none text-gray-400">arrow_drop_down</span>
            </div>
          </div>

          {/* Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map(item => (
                <div key={item.id} className="bg-home-surface rounded-xl overflow-hidden border border-home-border hover:border-primary/50 transition-all group flex flex-col h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-white flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-yellow-400 fill-current">star</span> {item.rating}
                    </div>
                    {item.isBestseller && (
                      <div className="absolute top-3 left-3 bg-primary text-black px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                        Bestseller
                      </div>
                    )}
                  </div>
                  
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-white leading-tight">{item.name}</h3>
                      <DietaryIcon type={item.dietary} />
                    </div>
                    <p className="text-sm text-gray-400 mb-4 line-clamp-2">{item.description}</p>
                    
                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">${item.price}</span>
                      <button className="bg-white/10 hover:bg-primary hover:text-black text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide transition-colors flex items-center gap-2">
                        Add <span className="material-symbols-outlined text-[16px]">add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
               <span className="material-symbols-outlined text-6xl text-gray-700 mb-4">no_meals</span>
               <h3 className="text-xl font-bold text-white">No items found</h3>
               <p className="text-gray-500">Try adjusting your filters or search query.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FullMenu;