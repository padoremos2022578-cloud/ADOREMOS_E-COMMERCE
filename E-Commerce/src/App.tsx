import { FormEvent, useMemo, useState } from "react";

type Role = "customer" | "seller";
type CustomerPage = "home" | "shop" | "categories" | "cart" | "wishlist" | "orders" | "profile";
type SellerPage = "dashboard" | "products" | "orders" | "profile";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  stock: number;
  image: string;
  label?: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Nova X Pro Keyboard",
    category: "Keyboards",
    price: 4299,
    oldPrice: 5199,
    stock: 18,
    label: "Best seller",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "Phantom RGB Mouse",
    category: "Gaming Mice",
    price: 1899,
    stock: 24,
    label: "New drop",
    image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Pulse Elite Headset",
    category: "Audio",
    price: 3499,
    oldPrice: 3999,
    stock: 11,
    image: "https://images.unsplash.com/photo-1613160717888-faa82cdb8a94?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "Strike Mini 65",
    category: "Keyboards",
    price: 2899,
    stock: 8,
    image: "https://images.unsplash.com/photo-1581351123004-757df051db8e?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    name: "Arc Control Deck",
    category: "Controllers",
    price: 2699,
    oldPrice: 3299,
    stock: 15,
    label: "18% off",
    image: "https://images.unsplash.com/photo-1658553344052-889351af5e5b?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    name: "Neon XL Deskmat",
    category: "Accessories",
    price: 999,
    stock: 36,
    image: "https://images.unsplash.com/photo-1520092352425-9699926a9b0b?auto=format&fit=crop&w=900&q=85",
  },
];

const categories = [
  { name: "Keyboards", code: "01", count: 16 },
  { name: "Gaming Mice", code: "02", count: 12 },
  { name: "Audio", code: "03", count: 9 },
  { name: "Controllers", code: "04", count: 14 },
  { name: "Accessories", code: "05", count: 21 },
];

const money = (value: number) =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP", maximumFractionDigits: 0 }).format(value);

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <button className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Game Zone home">
      <span className="logo-mark">GZ</span>
      {!compact && (
        <span className="logo-word">
          GAME<span>ZONE</span>
        </span>
      )}
    </button>
  );
}

function Login({ onLogin }: { onLogin: (role: Role) => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (email === "user@example.com" && password === "user123") return onLogin("customer");
    if (email === "seller@example.com" && password === "seller123") return onLogin("seller");
    setError("Access denied. Check your player ID and passcode.");
  };

  const useDemo = (role: Role) => {
    setEmail(role === "customer" ? "user@example.com" : "seller@example.com");
    setPassword(role === "customer" ? "user123" : "seller123");
    setError("");
  };

  return (
    <main className="login-shell">
      <section className="login-visual">
        <div className="visual-overlay" />
        <Logo />
        <div className="login-hero-copy">
          <span className="eyebrow light">EQUIP. COMPETE. CONQUER.</span>
          <h1>
            YOUR NEXT
            <br />
            <span>LEVEL</span> STARTS
            <br />
            RIGHT HERE.
          </h1>
          <p>Curated gaming gear for players who refuse to settle for average.</p>
        </div>
        <div className="visual-meta">
          <span>FREE SHIPPING OVER ₱3,000</span>
          <span>GEAR UP. PLAY HARD.</span>
        </div>
      </section>

      <section className="login-panel">
        <div className="login-top"><span>PLAYER ACCESS</span><span className="status-dot">SYSTEM ONLINE</span></div>
        <div className="login-form-wrap">
          <span className="eyebrow">WELCOME BACK, PLAYER</span>
          <h2>ENTER THE ZONE</h2>
          <p className="muted">Sign in to access your loadout, orders, and exclusive drops.</p>
          <form onSubmit={submit}>
            <label>
              PLAYER ID / EMAIL
              <input
                type="email"
                value={email}
                onChange={(event) => { setEmail(event.target.value); setError(""); }}
                placeholder="you@email.com"
                required
              />
            </label>
            <label>
              PASSCODE
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => { setPassword(event.target.value); setError(""); }}
                  placeholder="Enter your passcode"
                  required
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>
            </label>
            {error && <div className="error-message">{error}</div>}
            <button className="primary-btn login-btn" type="submit">ENTER GAME ZONE <span>→</span></button>
          </form>
          <div className="demo-divider"><span>QUICK DEMO ACCESS</span></div>
          <div className="demo-buttons">
            <button onClick={() => onLogin("customer")}><b>CONTINUE AS CUSTOMER</b><small>Browse, save, and order gear</small></button>
            <button onClick={() => onLogin("seller")}><b>CONTINUE AS SELLER</b><small>Manage products and orders</small></button>
          </div>
          <p className="login-note">Or fill demo credentials: <button type="button" onClick={() => useDemo("customer")}>Customer Login</button> / <button type="button" onClick={() => useDemo("seller")}>Seller login</button></p>
        </div>
      </section>
    </main>
  );
}

function ProductCard({
  product,
  wishlisted,
  onCart,
  onWishlist,
}: {
  product: Product;
  wishlisted: boolean;
  onCart: () => void;
  onWishlist: () => void;
}) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {product.label && <span className="product-label">{product.label}</span>}
        <button className={`wish-btn ${wishlisted ? "active" : ""}`} onClick={onWishlist} aria-label="Toggle wishlist">
          {wishlisted ? "♥" : "♡"}
        </button>
      </div>
      <div className="product-info">
        <span>{product.category}</span>
        <h3>{product.name}</h3>
        <div className="product-bottom">
          <p>{money(product.price)} {product.oldPrice && <s>{money(product.oldPrice)}</s>}</p>
          <button onClick={onCart} aria-label={`Add ${product.name} to cart`}>+</button>
        </div>
      </div>
    </article>
  );
}

function SectionHeading({ eyebrow, title, action }: { eyebrow: string; title: string; action?: React.ReactNode }) {
  return (
    <div className="section-heading">
      <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
      {action}
    </div>
  );
}

function CustomerApp({ onLogout }: { onLogout: () => void }) {
  const [page, setPage] = useState<CustomerPage>("home");
  const [cart, setCart] = useState<Record<number, number>>({ 1: 1 });
  const [wishlist, setWishlist] = useState<number[]>([3, 5]);
  const [search, setSearch] = useState("");
  const [notice, setNotice] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = Object.values(cart).reduce((sum, count) => sum + count, 0);
  const cartTotal = products.reduce((sum, product) => sum + product.price * (cart[product.id] || 0), 0);
  const visibleProducts = products.filter((product) =>
    `${product.name} ${product.category}`.toLowerCase().includes(search.toLowerCase()),
  );

  const addToCart = (id: number) => {
    setCart((current) => ({ ...current, [id]: (current[id] || 0) + 1 }));
    setNotice("Item added to your loadout.");
    window.setTimeout(() => setNotice(""), 1800);
  };

  const toggleWishlist = (id: number) =>
    setWishlist((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);

  const navigate = (next: CustomerPage) => {
    setPage(next);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pageNames: Record<CustomerPage, string> = {
    home: "Home", shop: "All Gear", categories: "Categories", cart: "Your Cart",
    wishlist: "Wishlist", orders: "My Orders", profile: "Customer Profile",
  };

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className={`toast ${notice ? "show" : ""}`} role="status" aria-live="polite">{notice}</div>
      <div className="announcement"><span>LEVEL UP YOUR SETUP</span><p>FREE SHIPPING ON ORDERS OVER ₱3,000</p><span>NEW DROPS WEEKLY</span></div>
      <header className="site-header">
        <Logo />
        <nav>
          {(["home", "shop", "categories", "orders"] as CustomerPage[]).map((item) => (
            <button key={item} aria-current={page === item ? "page" : undefined} className={page === item ? "active" : ""} onClick={() => navigate(item)}>{pageNames[item]}</button>
          ))}
        </nav>
        <div className="header-actions">
          <button onClick={() => navigate("wishlist")} aria-label="Wishlist">♡ <span>{wishlist.length}</span></button>
          <button onClick={() => navigate("cart")} aria-label="Cart">BAG <span>{cartCount}</span></button>
          <button className="avatar" onClick={() => navigate("profile")}>PA</button>
          <button className="mobile-menu-btn" aria-label="Open navigation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>MENU</button>
        </div>
      </header>
      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-label="Navigation menu">
          <div className="mobile-menu-head"><b>WHERE DO YOU WANT TO GO?</b><button onClick={() => setMenuOpen(false)} aria-label="Close menu">CLOSE</button></div>
          {(["home", "shop", "categories", "wishlist", "cart", "orders", "profile"] as CustomerPage[]).map((item) => (
            <button key={item} className={page === item ? "active" : ""} onClick={() => navigate(item)}>
              <span>{pageNames[item]}</span><b>→</b>
            </button>
          ))}
        </div>
      )}

      {page === "home" && (
        <main id="main-content" tabIndex={-1}>
          <section className="hero">
            <img src="https://images.unsplash.com/photo-1696710257827-75e2e5954059?auto=format&fit=crop&w=1800&q=90" alt="Purple gaming computer setup" />
            <div className="hero-shade" />
            <div className="hero-content">
              <span className="hero-kicker">SEASON 01 / 2025</span>
              <h1>BUILT TO<br /><i>OUTPLAY.</i></h1>
              <p>Precision gear. Zero excuses. Build the setup that keeps you one move ahead.</p>
              <div className="hero-actions">
                <button className="primary-btn" onClick={() => navigate("shop")}>SHOP THE DROP <span>→</span></button>
                <button className="ghost-btn" onClick={() => navigate("categories")}>EXPLORE GEAR</button>
              </div>
            </div>
            <div className="hero-product">
              <span>FEATURED LOADOUT</span>
              <b>NOVA X PRO</b>
              <small>ULTRA-FAST / HOT-SWAP / RGB</small>
            </div>
            <div className="scroll-hint">SCROLL TO EXPLORE</div>
          </section>

          <section className="trust-strip">
            <div><b>01</b><span>TESTED BY PLAYERS<small>Competition-grade equipment</small></span></div>
            <div><b>02</b><span>FAST DISPATCH<small>Ships within 24 hours</small></span></div>
            <div><b>03</b><span>1-YEAR WARRANTY<small>Play with total confidence</small></span></div>
          </section>

          <section className="content-section">
            <SectionHeading eyebrow="TOP-TIER EQUIPMENT" title="TRENDING GEAR" action={<button className="text-link" onClick={() => navigate("shop")}>VIEW ALL GEAR →</button>} />
            <div className="product-grid">
              {products.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} wishlisted={wishlist.includes(product.id)} onCart={() => addToCart(product.id)} onWishlist={() => toggleWishlist(product.id)} />
              ))}
            </div>
          </section>

          <section className="promo-grid">
            <button onClick={() => navigate("shop")} className="promo-card promo-main">
              <img src="https://images.unsplash.com/photo-1597380162318-ac49db1dbcf0?auto=format&fit=crop&w=1100&q=85" alt="" />
              <span className="eyebrow light">UPGRADE YOUR INPUT</span><h2>FIND YOUR<br />PERFECT KEYS.</h2><b>SHOP KEYBOARDS →</b>
            </button>
            <div className="promo-side">
              <span>WEEKEND DROP</span><strong>20% OFF</strong><p>SELECTED<br />ACCESSORIES</p><button onClick={() => navigate("shop")}>UNLOCK DEALS →</button>
            </div>
          </section>
        </main>
      )}

      {page === "shop" && (
        <main id="main-content" tabIndex={-1} className="page-wrap">
          <div className="page-title"><span className="eyebrow">THE FULL ARSENAL</span><h1>ALL GAMING GEAR</h1><p>Performance hardware, hand-picked for serious play.</p></div>
          <div className="shop-tools">
            <label>SEARCH GEAR<input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Keyboard, audio, controller..." /></label>
            <span>{visibleProducts.length.toString().padStart(2, "0")} PRODUCTS</span>
          </div>
          <div className="product-grid">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} wishlisted={wishlist.includes(product.id)} onCart={() => addToCart(product.id)} onWishlist={() => toggleWishlist(product.id)} />
            ))}
          </div>
        </main>
      )}

      {page === "categories" && (
        <main id="main-content" tabIndex={-1} className="page-wrap">
          <div className="page-title"><span className="eyebrow">CHOOSE YOUR CLASS</span><h1>SHOP BY CATEGORY</h1><p>Find the exact upgrade your setup needs.</p></div>
          <div className="category-list">
            {categories.map((category) => (
              <button key={category.name} onClick={() => { setSearch(category.name); navigate("shop"); }}>
                <span>{category.code}</span><h2>{category.name}</h2><small>{category.count} ITEMS</small><b>→</b>
              </button>
            ))}
          </div>
        </main>
      )}

      {page === "cart" && (
        <main id="main-content" tabIndex={-1} className="page-wrap">
          <div className="page-title"><span className="eyebrow">YOUR LOADOUT</span><h1>SHOPPING CART</h1></div>
          <div className="cart-layout">
            <div className="cart-list">
              {products.filter((p) => cart[p.id]).map((product) => (
                <div className="cart-row" key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <div><span>{product.category}</span><h3>{product.name}</h3><button onClick={() => setCart((current) => { const next = { ...current }; delete next[product.id]; return next; })}>REMOVE</button></div>
                  <div className="quantity">
                    <button onClick={() => setCart((current) => ({ ...current, [product.id]: Math.max(1, current[product.id] - 1) }))}>−</button>
                    <b>{cart[product.id]}</b>
                    <button onClick={() => addToCart(product.id)}>+</button>
                  </div>
                  <strong>{money(product.price * cart[product.id])}</strong>
                </div>
              ))}
              {!cartCount && <div className="empty-state"><h2>YOUR BAG IS EMPTY</h2><p>Your next upgrade is waiting.</p><button className="primary-btn" onClick={() => navigate("shop")}>BROWSE GEAR</button></div>}
            </div>
            <aside className="order-summary">
              <span className="eyebrow light">ORDER SUMMARY</span>
              <div><span>Subtotal</span><b>{money(cartTotal)}</b></div>
              <div><span>Shipping</span><b>{cartTotal >= 3000 ? "FREE" : money(180)}</b></div>
              <hr />
              <div className="total"><span>TOTAL</span><b>{money(cartTotal + (cartTotal && cartTotal < 3000 ? 180 : 0))}</b></div>
              <button className="primary-btn" disabled={!cartCount} onClick={() => setNotice("Checkout simulated successfully.")}>CHECKOUT SECURELY →</button>
              <small>Secure checkout / 1-year product warranty</small>
            </aside>
          </div>
        </main>
      )}

      {page === "wishlist" && (
        <main id="main-content" tabIndex={-1} className="page-wrap">
          <div className="page-title"><span className="eyebrow">SAVED FOR LATER</span><h1>YOUR WISHLIST</h1><p>{wishlist.length} pieces of gear on your radar.</p></div>
          <div className="product-grid">
            {products.filter((p) => wishlist.includes(p.id)).map((product) => (
              <ProductCard key={product.id} product={product} wishlisted onCart={() => addToCart(product.id)} onWishlist={() => toggleWishlist(product.id)} />
            ))}
          </div>
        </main>
      )}

      {page === "orders" && (
        <main id="main-content" tabIndex={-1} className="page-wrap">
          <div className="page-title"><span className="eyebrow">MISSION LOG</span><h1>MY ORDERS</h1></div>
          <div className="orders-table">
            <div className="table-head"><span>ORDER</span><span>DATE</span><span>STATUS</span><span>TOTAL</span></div>
            {[["#GZ-10482", "MAY 14, 2025", "IN TRANSIT", "₱4,299"], ["#GZ-09831", "APR 02, 2025", "DELIVERED", "₱3,698"], ["#GZ-07420", "JAN 18, 2025", "DELIVERED", "₱2,699"]].map((order) => (
              <div className="table-row" key={order[0]}>{order.map((item, index) => <span key={item} className={index === 2 ? "order-status" : ""}>{item}</span>)}</div>
            ))}
          </div>
        </main>
      )}

      {page === "profile" && (
        <main id="main-content" tabIndex={-1} className="page-wrap">
          <div className="page-title"><span className="eyebrow">PLAYER ONE</span><h1>CUSTOMER PROFILE</h1></div>
          <div className="profile-card">
            <div className="profile-avatar">PA</div>
            <div><span>PLAYER SINCE 2024</span><h2>PAUL ANGELO</h2><p>user@example.com</p><p>+63 917 555 0108</p></div>
            <button className="outline-btn">EDIT PROFILE</button>
          </div>
          <button className="logout-btn" onClick={onLogout}>LOG OUT OF GAME ZONE →</button>
        </main>
      )}

      <footer>
        <Logo />
        <p>Performance gear for those who play to win.</p>
        <span>© 2025 GAME ZONE / ALL SYSTEMS OPERATIONAL</span>
      </footer>

      <nav className="mobile-nav">
        {(["home", "shop", "wishlist", "cart"] as CustomerPage[]).map((item) => (
          <button key={item} aria-current={page === item ? "page" : undefined} className={page === item ? "active" : ""} onClick={() => navigate(item)}>
            {item === "cart" && cartCount > 0 && <span>{cartCount}</span>}{pageNames[item]}
          </button>
        ))}
        <button className={menuOpen ? "active" : ""} onClick={() => setMenuOpen(!menuOpen)}>More</button>
      </nav>
    </div>
  );
}

function SellerApp({ onLogout }: { onLogout: () => void }) {
  const [page, setPage] = useState<SellerPage>("dashboard");
  const [inventory, setInventory] = useState<Product[]>(products);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [form, setForm] = useState({ name: "", category: "", price: "", stock: "" });

  const openForm = (product?: Product) => {
    setEditing(product || null);
    setForm(product ? { name: product.name, category: product.category, price: String(product.price), stock: String(product.stock) } : { name: "", category: "", price: "", stock: "" });
    setShowForm(true);
  };

  const saveProduct = (event: FormEvent) => {
    event.preventDefault();
    const data = { ...form, price: Number(form.price), stock: Number(form.stock) };
    if (editing) {
      setInventory((current) => current.map((p) => p.id === editing.id ? { ...p, ...data } : p));
    } else {
      setInventory((current) => [...current, { id: Date.now(), ...data, image: products[0].image }]);
    }
    setShowForm(false);
  };

  const navItems: { id: SellerPage; label: string; code: string }[] = [
    { id: "dashboard", label: "Dashboard", code: "01" },
    { id: "products", label: "Manage Gear", code: "02" },
    { id: "orders", label: "Orders", code: "03" },
    { id: "profile", label: "Store Profile", code: "04" },
  ];

  return (
    <div className="seller-shell">
      <aside className="seller-sidebar">
        <Logo />
        <div className="seller-tag">SELLER CONSOLE <span>ONLINE</span></div>
        <nav>
          {navItems.map((item) => <button key={item.id} aria-label={item.label} aria-current={page === item.id ? "page" : undefined} className={page === item.id ? "active" : ""} onClick={() => setPage(item.id)}><span>{item.code}</span>{item.label}</button>)}
        </nav>
        <button className="sidebar-logout" onClick={onLogout}>LOG OUT →</button>
      </aside>
      <main className="seller-main">
        <header className="seller-header"><div><span>CONTROL CENTER / {page.toUpperCase()}</span><h1>{page === "dashboard" ? "GOOD MORNING, DISHAN." : navItems.find((item) => item.id === page)?.label.toUpperCase()}</h1></div><div className="seller-user"><span>DP</span><p><b>DISHAN PAMELA</b><small>STORE ADMIN</small></p><button className="mobile-seller-logout" onClick={onLogout}>LOG OUT</button></div></header>

        {page === "dashboard" && (
          <>
            <section className="metric-grid">
              <div><span>01 / TOTAL REVENUE</span><h2>₱184.8K</h2><small>↑ 12.4% THIS MONTH</small></div>
              <div><span>02 / TOTAL ORDERS</span><h2>428</h2><small>↑ 8.2% THIS MONTH</small></div>
              <div><span>03 / ACTIVE GEAR</span><h2>{inventory.length}</h2><small>{inventory.reduce((sum, p) => sum + p.stock, 0)} UNITS IN STOCK</small></div>
              <div className="alert-metric"><span>04 / ACTION NEEDED</span><h2>03</h2><small>LOW STOCK ITEMS</small></div>
            </section>
            <section className="seller-grid">
              <div className="chart-card">
                <div className="card-title"><div><span className="eyebrow">PERFORMANCE</span><h2>SALES OVERVIEW</h2></div><button>LAST 6 MONTHS</button></div>
                <div className="chart">
                  {[42, 55, 48, 72, 63, 88].map((value, index) => <div key={index}><span style={{ height: `${value}%` }} /><small>{["JAN", "FEB", "MAR", "APR", "MAY", "JUN"][index]}</small></div>)}
                </div>
              </div>
              <div className="inventory-card">
                <span className="eyebrow light">STOCK SIGNAL</span><h2>INVENTORY STATUS</h2>
                <div className="stock-ring"><b>{inventory.reduce((sum, p) => sum + p.stock, 0)}</b><span>TOTAL UNITS</span></div>
                <p><span /> Healthy stock <b>83%</b></p><p><span className="low" /> Low stock <b>17%</b></p>
              </div>
            </section>
            <section className="recent-card">
              <div className="card-title"><div><span className="eyebrow">LIVE FEED</span><h2>RECENT ORDERS</h2></div><button onClick={() => setPage("orders")}>VIEW ALL →</button></div>
              <OrderTable />
            </section>
          </>
        )}

        {page === "products" && (
          <section className="manage-card">
            <div className="card-title"><div><span className="eyebrow">YOUR ARSENAL</span><h2>MANAGE PRODUCTS</h2></div><button className="primary-btn" onClick={() => openForm()}>+ ADD NEW GEAR</button></div>
            <div className="manage-table">
              <div className="manage-head"><span>PRODUCT</span><span>CATEGORY</span><span>PRICE</span><span>STOCK</span><span>ACTIONS</span></div>
              {inventory.map((product) => (
                <div className="manage-row" key={product.id}>
                  <span className="manage-product"><img src={product.image} alt="" /><b>{product.name}</b></span><span>{product.category}</span><span>{money(product.price)}</span><span className={product.stock < 10 ? "low-stock" : ""}>{product.stock} UNITS</span>
                  <span className="row-actions"><button onClick={() => openForm(product)}>EDIT</button><button onClick={() => setInventory((current) => current.filter((p) => p.id !== product.id))}>DELETE</button></span>
                </div>
              ))}
            </div>
          </section>
        )}

        {page === "orders" && <section className="manage-card"><div className="card-title"><div><span className="eyebrow">FULFILLMENT QUEUE</span><h2>CUSTOMER ORDERS</h2></div></div><OrderTable /></section>}

        {page === "profile" && (
          <section className="seller-profile">
            <div className="store-banner"><span>GZ</span><div><small>VERIFIED SELLER</small><h2>DISHAN'S GAME ZONE</h2><p>Premium peripherals. Zero compromise.</p></div></div>
            <div className="store-details"><p><span>OWNER</span><b>Dishan Pamela</b></p><p><span>EMAIL</span><b>seller@example.com</b></p><p><span>CONTACT</span><b>+63 917 800 4421</b></p><p><span>STORE ID</span><b>GZ-SELLER-001</b></p></div>
            <button className="outline-btn">EDIT STORE PROFILE</button>
          </section>
        )}
      </main>

      {showForm && (
        <div className="modal-backdrop">
          <form className="product-modal" onSubmit={saveProduct}>
            <div><span className="eyebrow">{editing ? "UPDATE LOADOUT" : "NEW INVENTORY"}</span><h2>{editing ? "EDIT GEAR" : "ADD NEW GEAR"}</h2></div>
            <label>PRODUCT NAME<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
            <label>CATEGORY<input required value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} /></label>
            <div className="form-row">
              <label>PRICE (PHP)<input required min="1" type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} /></label>
              <label>STOCK<input required min="0" type="number" value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })} /></label>
            </div>
            <div className="modal-actions"><button type="button" onClick={() => setShowForm(false)}>CANCEL</button><button className="primary-btn" type="submit">SAVE PRODUCT →</button></div>
          </form>
        </div>
      )}
    </div>
  );
}

function OrderTable() {
  const orders = [
    ["#GZ-10482", "Paul Angelo", "Nova X Pro Keyboard", "₱4,299", "SHIPPED"],
    ["#GZ-10481", "Mia Santos", "Pulse Elite Headset", "₱3,499", "PROCESSING"],
    ["#GZ-10480", "Theo Cruz", "Arc Control Deck", "₱2,699", "DELIVERED"],
    ["#GZ-10479", "Sam Reyes", "Neon XL Deskmat", "₱999", "PROCESSING"],
  ];
  return (
    <div className="admin-orders">
      <div className="admin-order-head"><span>ORDER ID</span><span>CUSTOMER</span><span>PRODUCT</span><span>TOTAL</span><span>STATUS</span></div>
      {orders.map((order) => <div className="admin-order-row" key={order[0]}>{order.map((value, i) => <span key={value} className={i === 4 ? `status-${value.toLowerCase()}` : ""}>{value}</span>)}</div>)}
    </div>
  );
}

export default function App() {
  const [role, setRole] = useState<Role | null>(null);
  const app = useMemo(() => {
    if (role === "customer") return <CustomerApp onLogout={() => setRole(null)} />;
    if (role === "seller") return <SellerApp onLogout={() => setRole(null)} />;
    return <Login onLogin={setRole} />;
  }, [role]);
  return app;
}
