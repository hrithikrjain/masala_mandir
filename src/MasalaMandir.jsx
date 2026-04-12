import { useState, useEffect, useRef } from "react";

// ─── DESIGN TOKENS — Maroon & White ──────────────────────────────
const T = {
  bg:     "#FFF8F4",
  red:    "#8B1A2E",
  yellow: "#C8956B",
  orange: "#A82438",
  green:  "#2A9D8F",
  dark:   "#1A0A00",
  mid:    "#5C2030",
  maroon: "#8B1A2E",
  light:  "#F4E0E5",
};

// ─── PRODUCT IMAGES ───────────────────────────────────────────────
const LOGO = "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/MASALA_MANDIR_LOGO_Photoroom.png";
const IMG = {
  hing_royal:          "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Vinayak_Royal_Hing_Photoroom.png",
  hing_premium:        "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Vinayak_Premium_Hing_Photoroom.png",
  hing_rajwadi:        "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Vinayak_Rajwadi_Hing_Photoroom.png",
  regular_kasuri_methi:"https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Regular_Kasuri_Methi_Photoroom.png",
  premium_kasuri_methi:"https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Premium_Kasuri_Methi_Photoroom.png",
  achari_masala:       "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Achari_Masala_Photoroom.png",
  barbeque:            "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Barbeque_Photoroom.png",
  peri_peri:           "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Peri_Peri_Photoroom.png",
  pav_bhaji_masala:    "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/pav_bhaji_masala_Photoroom.png",
  pani_puri:           "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Pani_Puri_Photoroom.png",
  schezwan:            "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Schezwan_Photoroom.png",
  pizza:               "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Pizza_Photoroom.png",
  punjabi_tadka:       "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Punjabi_Tadka_Photoroom.png",
  vadapav_masala:      "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Vadapav_Masala_Photoroom.png",
  pudina:              "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Pudina_Photoroom.png",
  cheese_premium:      "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Cheese_Premium_Photoroom.png",
  vanilla:             "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Vanilla_Photoroom.png",
  tangy_tomato:        "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Tangy_Tomato_Photoroom.png",
  noodles:             "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Noodles_Photoroom.png",
  nachos:              "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Nachos_Photoroom.png",
  manchurian:          "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Manchurian_Powder_Photoroom.png",
  lemon_chilli:        "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Lemon_Chilli_Photoroom.png",
  mexican:             "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Mexican_Photoroom.png",
  kurkure:             "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Kurkure_Photoroom.png",
  katori_tomato:       "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Katori_Tomato_Photoroom.png",
  jeeralu:             "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Jeeralu_Photoroom.png",
  jain_tangy_tomato:   "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Jain_Tangy_Tomato_Photoroom.png",
  jain_pizza:          "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Jain_Pizza_Photoroom.png",
  jain_peri_peri:      "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Jain_Peri_Peri_Photoroom.png",
  jain_maggie:         "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Jain_Maggie_Photoroom.png",
  garlic:              "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Garlic_Photoroom.png",
  cream_onion:         "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Cream_Onion_Photoroom.png",
  chilli_flakes:       "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Chilli_Flakes_Photoroom.png",
  cheese_seasoning:    "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/cheese_seasoning_Photoroom.png",
  cheese_tomato:       "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Cheese_Tomato_Photoroom.png",
  cheese_herbs:        "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Cheese_Herbs_Photoroom.png",
  chatpata:            "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Chatpata_Photoroom.png",
  butter_garlic:       "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Butter_Garlic_Photoroom.png",
  black_pepper:        "https://cdn.jsdelivr.net/gh/hrithikrjain/Seasoning-Website-Pics/Black_Pepper_Photoroom.png",
};

// ─── PRODUCT DATA ─────────────────────────────────────────────────
// variants: array of { size, price } — if present, card shows range & modal shows table
const PRODUCTS = [
  // ── HING ──
  { id:1,  name:"Vinayak Royal Hing",    cat:"hing", label:"Hing Powder",    img:IMG.hing_royal,           heat:40, aroma:95, flavor:85, desc:"Bold, pure asafoetida powder with intense aroma. Transforms every dal, curry and pickle.", badge:"Bestseller", accent:"#8B1A2E",
    variants:[{size:"10g",price:"₹10"},{size:"25g",price:"₹20"},{size:"50g",price:"₹50"},{size:"100g",price:"₹100"},{size:"250g",price:"₹200"},{size:"500g",price:"₹350"}] },
  { id:2,  name:"Vinayak Premium Hing",  cat:"hing", label:"Hing Powder",    img:IMG.hing_premium,         heat:35, aroma:88, flavor:80, desc:"Refined, balanced aroma for discerning home cooks and professional kitchens.", badge:null, accent:"#8B1A2E",
    variants:[{size:"10g",price:"₹20"},{size:"25g",price:"₹30"},{size:"50g",price:"₹40"},{size:"100g",price:"₹50"},{size:"250g",price:"₹80"},{size:"500g",price:"₹140"}] },
  { id:3,  name:"Vinayak Rajwadi Hing",  cat:"hing", label:"Hing Powder",    img:IMG.hing_rajwadi,         heat:45, aroma:90, flavor:88, desc:"Heritage Rajwadi profile with earthy depth for traditional Indian cooking.", badge:"Traditional", accent:"#8B1A2E",
    variants:[{size:"10g",price:"₹10"},{size:"25g",price:"₹20"},{size:"50g",price:"₹40"},{size:"100g",price:"₹60"},{size:"250g",price:"₹100"},{size:"500g",price:"₹140"}] },
  // ── METHI ──
  { id:4,  name:"Regular Kasoori Methi", cat:"methi", label:"Kasoori Methi", img:IMG.regular_kasuri_methi, heat:10, aroma:75, flavor:70, desc:"Sun-dried fenugreek leaves with a gentle bitter-sweet flavor. Essential for butter chicken.", badge:null, accent:"#2A9D8F", price:"₹120" },
  { id:5,  name:"Premium Kasoori Methi", cat:"methi", label:"Kasoori Methi", img:IMG.premium_kasuri_methi, heat:10, aroma:85, flavor:82, desc:"Select-grade dried fenugreek leaves — vibrant color and superior flavor.", badge:"Premium", accent:"#2A9D8F", price:"₹200" },
  // ── SEASONING ──
  { id:6,  name:"Achari Masala",         cat:"seasoning", label:"Seasoning Blend", img:IMG.achari_masala,      heat:65, aroma:80, flavor:90, desc:"Tangy, pungent blend inspired by bold pickle flavors. Elevates snacks and chaats.", badge:null, accent:"#A82438", price:"₹100" },
  { id:7,  name:"Barbeque Masala",       cat:"seasoning", label:"Seasoning Blend", img:IMG.barbeque,           heat:70, aroma:85, flavor:92, desc:"Smoky BBQ seasoning perfect for grilled paneer, cottage cheese and vegetable kebabs.", badge:"Hot Pick", accent:"#8B1A2E", price:"₹150" },
  { id:8,  name:"Peri Peri",             cat:"seasoning", label:"Seasoning Blend", img:IMG.peri_peri,          heat:90, aroma:85, flavor:88, desc:"Fiery peri peri seasoning for fries, grilled paneer and vegetables.", badge:"Spicy", accent:"#8B1A2E", price:"On Request" },
  { id:9,  name:"Pav Bhaji Masala",      cat:"seasoning", label:"Seasoning Blend", img:IMG.pav_bhaji_masala,   heat:50, aroma:88, flavor:95, desc:"Classic Mumbai-style blend giving the beloved street food its iconic taste.", badge:null, accent:"#C8956B", price:"On Request" },
  { id:10, name:"Pani Puri Masala",      cat:"seasoning", label:"Seasoning Blend", img:IMG.pani_puri,          heat:55, aroma:82, flavor:92, desc:"The tangy, minty, spicy magic of India's favorite street snack in powder form.", badge:null, accent:"#2A9D8F", price:"On Request" },
  { id:11, name:"Schezwan Masala",       cat:"seasoning", label:"Seasoning Blend", img:IMG.schezwan,           heat:85, aroma:80, flavor:88, desc:"Bold Indo-Chinese peppercorn heat with garlic punch for noodles and fried rice.", badge:"Trending", accent:"#8B1A2E", price:"On Request" },
  { id:12, name:"Pizza Seasoning",       cat:"seasoning", label:"Seasoning Blend", img:IMG.pizza,              heat:20, aroma:90, flavor:85, desc:"Italian herb and spice blend for pizzas, pasta, and focaccia.", badge:null, accent:"#C8956B", price:"On Request" },
  { id:13, name:"Punjabi Tadka",         cat:"seasoning", label:"Seasoning Blend", img:IMG.punjabi_tadka,      heat:55, aroma:92, flavor:90, desc:"Authentic dhaba-style smoky tadka blend for dals, curries, and parathas.", badge:null, accent:"#A82438", price:"On Request" },
  { id:14, name:"Vadapav Masala",        cat:"seasoning", label:"Seasoning Blend", img:IMG.vadapav_masala,     heat:60, aroma:78, flavor:88, desc:"Mumbai's beloved vadapav flavor — tangy, spicy, and totally addictive.", badge:null, accent:"#8B1A2E", price:"On Request" },
  { id:15, name:"Pudina (Mint)",         cat:"seasoning", label:"Seasoning Blend", img:IMG.pudina,             heat:15, aroma:92, flavor:80, desc:"Cool, refreshing mint seasoning for raitas, chaats, and drinks.", badge:null, accent:"#2A9D8F", price:"On Request" },
  { id:16, name:"Cheese Premium",        cat:"seasoning", label:"Seasoning Blend", img:IMG.cheese_premium,     heat:12, aroma:80, flavor:88, desc:"Rich, creamy premium cheese seasoning for snacks, fries and popcorn.", badge:null, accent:"#C8956B", price:"On Request" },
  { id:17, name:"Vanilla",               cat:"seasoning", label:"Seasoning Blend", img:IMG.vanilla,            heat:2,  aroma:90, flavor:82, desc:"Sweet, delicate vanilla flavoring for desserts, shakes and bakery applications.", badge:null, accent:"#C8956B", price:"On Request" },
  { id:18, name:"Tangy Tomato",          cat:"seasoning", label:"Seasoning Blend", img:IMG.tangy_tomato,       heat:35, aroma:78, flavor:88, desc:"Bright, zingy tomato seasoning for chips, fries and snacks with vibrant color.", badge:null, accent:"#8B1A2E", price:"On Request" },
  { id:19, name:"Noodles Masala",        cat:"seasoning", label:"Seasoning Blend", img:IMG.noodles,            heat:45, aroma:80, flavor:88, desc:"Savory, umami-rich noodle seasoning for instant and restaurant-style noodle dishes.", badge:null, accent:"#8B1A2E", price:"On Request" },
  { id:20, name:"Nachos Seasoning",      cat:"seasoning", label:"Seasoning Blend", img:IMG.nachos,             heat:30, aroma:78, flavor:88, desc:"Cheesy, tangy nacho-style seasoning for popcorn, fries and chips.", badge:null, accent:"#C8956B", price:"On Request" },
  { id:21, name:"Manchurian Powder",     cat:"seasoning", label:"Seasoning Blend", img:IMG.manchurian,         heat:60, aroma:82, flavor:90, desc:"Authentic Indo-Chinese Manchurian blend — savory, garlicky and perfectly balanced.", badge:null, accent:"#A82438", price:"On Request" },
  { id:22, name:"Lemon Chilli",          cat:"seasoning", label:"Seasoning Blend", img:IMG.lemon_chilli,       heat:45, aroma:88, flavor:85, desc:"Zesty lemon with a chilli kick — bright citrus punch for chaats and snacks.", badge:null, accent:"#C8956B", price:"On Request" },
  { id:23, name:"Mexican Masala",        cat:"seasoning", label:"Seasoning Blend", img:IMG.mexican,            heat:65, aroma:82, flavor:90, desc:"Smoky chipotle-inspired Mexican blend for tacos, burritos and grilled corn.", badge:null, accent:"#A82438", price:"On Request" },
  { id:24, name:"Kurkure Masala",        cat:"seasoning", label:"Seasoning Blend", img:IMG.kurkure,            heat:50, aroma:76, flavor:88, desc:"That addictive tangy-spicy crunch coating — perfect for extruded snacks and munchies.", badge:null, accent:"#8B1A2E", price:"On Request" },
  { id:25, name:"Katori Tomato",         cat:"seasoning", label:"Seasoning Blend", img:IMG.katori_tomato,      heat:40, aroma:75, flavor:86, desc:"Classic tangy tomato seasoning tailored for katori-style snacks and chaats.", badge:null, accent:"#8B1A2E", price:"On Request" },
  { id:26, name:"Jeeralu",               cat:"seasoning", label:"Seasoning Blend", img:IMG.jeeralu,            heat:20, aroma:92, flavor:88, desc:"Cumin-forward Gujarati jeeralu blend — earthy, aromatic and delicately spiced.", badge:null, accent:"#A82438", price:"On Request" },
  { id:27, name:"Jain Tangy Tomato",     cat:"seasoning", label:"Seasoning Blend", img:IMG.jain_tangy_tomato,  heat:35, aroma:76, flavor:86, desc:"No onion, no garlic tangy tomato seasoning crafted for Jain dietary preferences.", badge:"Jain", accent:"#2A9D8F", price:"On Request" },
  { id:28, name:"Jain Pizza",            cat:"seasoning", label:"Seasoning Blend", img:IMG.jain_pizza,         heat:15, aroma:88, flavor:83, desc:"Jain-friendly Italian herb blend — no onion, no garlic, full pizza flavour.", badge:"Jain", accent:"#2A9D8F", price:"On Request" },
  { id:29, name:"Jain Peri Peri",        cat:"seasoning", label:"Seasoning Blend", img:IMG.jain_peri_peri,     heat:85, aroma:82, flavor:86, desc:"Fiery Jain peri peri — all the heat, none of the onion or garlic.", badge:"Jain", accent:"#2A9D8F", price:"On Request" },
  { id:30, name:"Jain Maggie Masala",    cat:"seasoning", label:"Seasoning Blend", img:IMG.jain_maggie,        heat:40, aroma:80, flavor:88, desc:"Jain-certified noodle masala blend — the beloved Maggie flavour, Jain style.", badge:"Jain", accent:"#2A9D8F", price:"On Request" },
  { id:31, name:"Garlic Powder",         cat:"seasoning", label:"Seasoning Blend", img:IMG.garlic,             heat:18, aroma:90, flavor:88, desc:"Pure, aromatic garlic powder — a kitchen essential for marinades, breads and dips.", badge:null, accent:"#A82438", price:"On Request" },
  { id:32, name:"Cream & Onion",         cat:"seasoning", label:"Seasoning Blend", img:IMG.cream_onion,        heat:10, aroma:85, flavor:90, desc:"Classic cream and onion seasoning — the all-time favourite snack coating.", badge:null, accent:"#C8956B", price:"On Request" },
  { id:33, name:"Chilli Flakes",         cat:"seasoning", label:"Seasoning Blend", img:IMG.chilli_flakes,      heat:80, aroma:78, flavor:82, desc:"Coarse red chilli flakes for pizzas, pastas and any dish that needs a fiery kick.", badge:null, accent:"#8B1A2E", price:"On Request" },
  { id:34, name:"Cheese Seasoning",      cat:"seasoning", label:"Seasoning Blend", img:IMG.cheese_seasoning,   heat:8,  aroma:78, flavor:88, desc:"Versatile cheese seasoning for popcorn, fries, pasta and bakery products.", badge:null, accent:"#C8956B", price:"On Request" },
  { id:35, name:"Cheese Tomato",         cat:"seasoning", label:"Seasoning Blend", img:IMG.cheese_tomato,      heat:20, aroma:80, flavor:90, desc:"Tangy tomato meets creamy cheese in this crowd-pleasing snack seasoning blend.", badge:null, accent:"#8B1A2E", price:"On Request" },
  { id:36, name:"Cheese Herbs",          cat:"seasoning", label:"Seasoning Blend", img:IMG.cheese_herbs,       heat:10, aroma:88, flavor:88, desc:"Cheese seasoning elevated with aromatic Italian herbs — perfect for baked snacks.", badge:null, accent:"#2A9D8F", price:"On Request" },
  { id:37, name:"Chatpata Masala",       cat:"seasoning", label:"Seasoning Blend", img:IMG.chatpata,           heat:60, aroma:82, flavor:92, desc:"The ultimate chatpata blend — tangy, spicy, sweet and utterly irresistible.", badge:null, accent:"#A82438", price:"On Request" },
  { id:38, name:"Butter Garlic",         cat:"seasoning", label:"Seasoning Blend", img:IMG.butter_garlic,      heat:12, aroma:92, flavor:90, desc:"Rich butter and roasted garlic seasoning for breads, corn, noodles and snacks.", badge:null, accent:"#C8956B", price:"On Request" },
  { id:39, name:"Black Pepper",          cat:"seasoning", label:"Seasoning Blend", img:IMG.black_pepper,       heat:60, aroma:80, flavor:85, desc:"Premium ground black pepper — sharp, pungent and aromatic. A timeless kitchen essential.", badge:null, accent:"#5C2030", price:"On Request" },
];

// ─── HOOKS ────────────────────────────────────────────────────────
function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const h = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);
  return pos;
}
function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return y;
}
function useInView(ref, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}
function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return mobile;
}

// ─── BACKGROUND SPICE CANVAS ──────────────────────────────────────
function SpiceBgCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width  = canvas.offsetWidth  * dpr;
      canvas.height = canvas.offsetHeight * dpr;
    };
    resize();
    window.addEventListener("resize", resize);
    const ctx = canvas.getContext("2d");
    const COLORS = ["#8B1A2E","#A82438","#C8956B","#2A9D8F"];
    const SHAPES = ["dot","ring","line","cross","star"];
    const count  = Math.min(50, Math.floor(canvas.width / dpr / 16));
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: (Math.random() * 6 + 3) * dpr,
      shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      vx: (Math.random() - 0.5) * 0.3 * dpr,
      vy: -(Math.random() * 0.4 + 0.1) * dpr,
      alpha: Math.random() * 0.09 + 0.03,
      rot: Math.random() * Math.PI * 2,
      rotV: (Math.random() - 0.5) * 0.01,
    }));

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.rot += p.rotV;
        if (p.y < -20) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
        if (p.x < -20) p.x = canvas.width + 10;
        if (p.x > canvas.width + 20) p.x = -10;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.strokeStyle = p.color; ctx.fillStyle = p.color;
        ctx.lineWidth = 1.5 * dpr;
        ctx.translate(p.x, p.y); ctx.rotate(p.rot);
        const s = p.size;
        if (p.shape === "dot") { ctx.beginPath(); ctx.arc(0,0,s*0.5,0,Math.PI*2); ctx.fill(); }
        else if (p.shape === "ring") { ctx.beginPath(); ctx.arc(0,0,s*0.5,0,Math.PI*2); ctx.stroke(); }
        else if (p.shape === "line") { ctx.beginPath(); ctx.moveTo(-s,0); ctx.lineTo(s,0); ctx.stroke(); }
        else if (p.shape === "cross") { ctx.beginPath(); ctx.moveTo(-s,0); ctx.lineTo(s,0); ctx.moveTo(0,-s); ctx.lineTo(0,s); ctx.stroke(); }
        else if (p.shape === "star") {
          ctx.beginPath();
          for (let i=0;i<6;i++) {
            const a=(i/6)*Math.PI*2-Math.PI/2, ia=a+Math.PI/6;
            if(i===0) ctx.moveTo(Math.cos(a)*s,Math.sin(a)*s);
            else ctx.lineTo(Math.cos(a)*s,Math.sin(a)*s);
            ctx.lineTo(Math.cos(ia)*s*0.4,Math.sin(ia)*s*0.4);
          }
          ctx.closePath(); ctx.stroke();
        }
        ctx.restore();
      });
    }
    let raf;
    const loop = () => { draw(); raf = requestAnimationFrame(loop); };
    loop();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none" }}/>;
}

// ─── JAR LID-OPEN + POUR ANIMATION ───────────────────────────────
function JarAnimation() {
  // Phases: 0=closed, 1=lid lifting, 2=tilt+pour, 3=close
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const TIMELINE = [
      [1000, () => setPhase(1)],
      [2200, () => setPhase(2)],
      [5000, () => setPhase(3)],
      [6200, () => setPhase(0)],
    ];
    const run = () => {
      setPhase(0);
      return TIMELINE.map(([ms, fn]) => setTimeout(fn, ms));
    };
    let timers = run();
    const loop = setInterval(() => { timers.forEach(clearTimeout); timers = run(); }, 7500);
    return () => { timers.forEach(clearTimeout); clearInterval(loop); };
  }, []);

  const lidTranslate = phase === 0 ? "translateY(0px) rotate(0deg)"
                     : phase === 1 ? "translateY(-60px) rotate(-8deg)"
                     : phase === 2 ? "translateY(-70px) rotate(-32deg)"
                     : "translateY(0px) rotate(0deg)";
  const jarTilt     = phase === 2 ? "rotate(10deg)" : "rotate(0deg)";
  const pourShow    = phase === 2;

  // powder particle positions
  const SPECK_OFFSETS = [
    [-14,90,-12,40], [12,100,10,50], [-8,115,-6,55],
    [16,125,14,60],  [-18,140,-10,65],[8,155,6,70],
  ];

  return (
    <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center", position:"relative" }}>
      {/* Orbit ring glow */}
      <div style={{ position:"absolute", width:"85%", height:"70%", borderRadius:"50%", border:"1px dashed rgba(168,36,56,0.18)", top:"15%", left:"7.5%", pointerEvents:"none" }}/>

      {/* Orbiting dots */}
      {[
        { color:"#8B1A2E", anim:"orbit0", size:10 },
        { color:"#A82438", anim:"orbit1", size:7 },
        { color:"#2A9D8F", anim:"orbit2", size:8 },
      ].map((d,i) => (
        <div key={i} style={{ position:"absolute", top:"50%", left:"50%", width:d.size, height:d.size, background:d.color, borderRadius:"50%", opacity:0.75, animation:`${d.anim} ${6+i*3}s linear infinite`, transformOrigin:"-80px -80px", boxShadow:`0 0 8px ${d.color}` }}/>
      ))}

      {/* Jar + lid group */}
      <div style={{ position:"relative", width:"58%", maxWidth:220, transition:"transform 0.6s cubic-bezier(0.34,1.56,0.64,1)", transform: jarTilt }}>

        {/* Powder pour stream */}
        <div style={{ position:"absolute", top:"-14%", left:"50%", transform:"translateX(-50%)", width:28, opacity: pourShow ? 1 : 0, transition:"opacity 0.5s", pointerEvents:"none", zIndex:5 }}>
          {/* stream */}
          <div style={{ width:"100%", background:"linear-gradient(180deg,#A82438,rgba(200,149,107,0))", borderRadius:"6px 6px 0 0", height:80, marginBottom:0, animation: pourShow ? "pourFlow 0.5s ease-in-out infinite" : "none" }}/>
          {/* dust cloud at base */}
          <div style={{ width:50, height:16, marginLeft:-11, background:"radial-gradient(ellipse,rgba(200,149,107,0.35),transparent 70%)", animation: pourShow ? "dustPuff 0.8s ease-out infinite" : "none" }}/>
          {/* speckles */}
          {SPECK_OFFSETS.map(([x,y,tx,ty],i) => (
            <div key={i} style={{
              position:"absolute", top: y-10, left:"50%",
              width: 5-i*0.5, height: 5-i*0.5,
              borderRadius:"50%",
              background: i%2===0 ? "#A82438" : "#C8956B",
              opacity: pourShow ? 0.85 : 0,
              animation: pourShow ? `speckDrift${i} ${0.7+i*0.12}s ease-out infinite` : "none",
              animationDelay:`${i*0.15}s`,
              transform:`translateX(${x}px)`,
            }}/>
          ))}
        </div>

        {/* LID */}
        <div style={{ width:"100%", position:"relative", zIndex:10, transition:"transform 0.7s cubic-bezier(0.34,1.56,0.64,1)", transform: lidTranslate, transformOrigin:"50% 100%" }}>
          {/* knob */}
          <div style={{ width:"38%", margin:"0 auto", height:"14%", minHeight:14, background:"linear-gradient(135deg,#5A1020,#5A1020)", borderRadius:"8px 8px 0 0", boxShadow:"inset 0 2px 4px rgba(255,255,255,0.2)" }}/>
          {/* lid main */}
          <div style={{ width:"100%", height:0, paddingBottom:"28%", background:"linear-gradient(135deg,#8B1A2E,#6B1A28)", borderRadius:10, position:"relative", overflow:"hidden", boxShadow:"0 -4px 16px rgba(139,26,46,0.4)" }}>
            <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontFamily:"Playfair Display,serif", fontSize:"0.55rem", fontWeight:900, color:"rgba(255,255,255,0.85)", letterSpacing:"0.1em" }}>MASALA MANDIR</span>
            </div>
            <div style={{ position:"absolute", top:"20%", left:"8%", right:"8%", height:"25%", background:"rgba(255,255,255,0.18)", borderRadius:4 }}/>
          </div>
          {/* lid skirt */}
          <div style={{ width:"108%", marginLeft:"-4%", height:10, background:"linear-gradient(135deg,#6B1A28,#5A1020)", borderRadius:"0 0 4px 4px" }}/>
        </div>

        {/* JAR BODY */}
        <div style={{ width:"100%", position:"relative" }}>
          {/* neck */}
          <div style={{ width:"82%", margin:"0 auto", height:22, background:"linear-gradient(90deg,rgba(255,255,255,0.9),rgba(255,248,242,0.7))", border:"1.5px solid rgba(255,255,255,0.7)", borderRadius:"6px 6px 0 0", boxShadow:"inset 0 1px 3px rgba(255,255,255,0.5)" }}/>
          {/* main glass */}
          <div style={{ width:"100%", paddingBottom:"130%", position:"relative", background:"linear-gradient(160deg,rgba(255,255,255,0.92) 0%,rgba(255,248,242,0.7) 40%,rgba(200,149,107,0.32) 100%)", borderRadius:"0 0 22px 22px", border:"1.5px solid rgba(255,255,255,0.7)", overflow:"hidden", boxShadow:"20px 10px 40px rgba(200,149,107,0.2),-6px 0 20px rgba(255,255,255,0.5),0 30px 60px rgba(139,26,46,0.18)" }}>
            {/* spice fill */}
            <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"52%", background:"linear-gradient(180deg,rgba(168,36,56,0.2),rgba(139,26,46,0.4))", borderRadius:"0 0 20px 20px" }}/>
            {/* shimmer */}
            <div style={{ position:"absolute", top:0, left:"-30%", width:"40%", height:"100%", background:"linear-gradient(105deg,transparent,rgba(255,255,255,0.45),transparent)", animation:"shimmerSlide 3s ease-in-out infinite", pointerEvents:"none" }}/>
            {/* label */}
            <div style={{ position:"absolute", bottom:"18%", left:"50%", transform:"translateX(-50%)", background:"rgba(255,255,255,0.93)", backdropFilter:"blur(8px)", borderRadius:10, padding:"10px 14px", textAlign:"center", width:"75%", border:"1px solid rgba(168,36,56,0.25)", boxShadow:"0 4px 14px rgba(0,0,0,0.08)" }}>
              <div style={{ fontSize:"0.42rem", fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:T.orange, fontFamily:"Outfit,sans-serif", marginBottom:2 }}>MASALA MANDIR</div>
              <div style={{ fontFamily:"Playfair Display,serif", fontSize:"0.75rem", fontWeight:900, color:T.dark, lineHeight:1.2 }}>Royal Hing</div>
              <div style={{ width:"60%", margin:"4px auto", height:1, background:"rgba(168,36,56,0.3)" }}/>
              <div style={{ fontSize:"0.4rem", color:T.mid, fontFamily:"Outfit,sans-serif" }}>Pure Asafoetida · 100g</div>
            </div>
          </div>
          {/* base shadow */}
          <div style={{ width:"80%", margin:"-4px auto 0", height:8, background:"rgba(26,10,0,0.08)", borderRadius:"0 0 8px 8px" }}/>
        </div>
      </div>
    </div>
  );
}

// ─── RADAR CHART ─────────────────────────────────────────────────
function RadarChart({ heat, aroma, flavor, accent, animate }) {
  const sz=90, cx=45, cy=45, r=32;
  const labels=["Heat","Aroma","Flavor"];
  const vals=[heat,aroma,flavor].map(v=>v/100);
  const angles=[-90,30,150].map(a=>a*Math.PI/180);
  const pts=vals.map((v,i)=>({ x:cx+Math.cos(angles[i])*r*(animate?v:0), y:cy+Math.sin(angles[i])*r*(animate?v:0) }));
  const grid=[0.33,0.66,1].map(s=>angles.map(a=>({ x:cx+Math.cos(a)*r*s, y:cy+Math.sin(a)*r*s })));
  return (
    <svg width={sz} height={sz} viewBox={`0 0 ${sz} ${sz}`}>
      {grid.map((gps,gi)=><polygon key={gi} points={gps.map(p=>`${p.x},${p.y}`).join(" ")} fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="0.8"/>)}
      {angles.map((a,i)=><line key={i} x1={cx} y1={cy} x2={cx+Math.cos(a)*r} y2={cy+Math.sin(a)*r} stroke="rgba(0,0,0,0.08)" strokeWidth="0.8"/>)}
      <polygon points={pts.map(p=>`${p.x},${p.y}`).join(" ")} fill={accent+"33"} stroke={accent} strokeWidth="1.5" style={{transition:"all 0.8s cubic-bezier(0.34,1.56,0.64,1)"}}/>
      {pts.map((p,i)=><circle key={i} cx={p.x} cy={p.y} r="2.5" fill={accent} style={{transition:"all 0.8s cubic-bezier(0.34,1.56,0.64,1)"}}/>)}
      {angles.map((a,i)=><text key={i} x={cx+Math.cos(a)*(r+10)} y={cy+Math.sin(a)*(r+10)+3} textAnchor="middle" fontSize="6" fill="#5C2030" fontFamily="Outfit,sans-serif" fontWeight="600">{labels[i]}</text>)}
    </svg>
  );
}

// ─── PARTICLE BURST ──────────────────────────────────────────────
function ParticleBurst({ active, accent }) {
  if (!active) return null;
  return (
    <div style={{ position:"absolute", inset:0, pointerEvents:"none", overflow:"hidden", borderRadius:"inherit" }}>
      {Array.from({length:12}).map((_,i)=>(
        <div key={i} style={{ position:"absolute", top:"50%", left:"50%", width:6, height:6, borderRadius:"50%", background: i%3===0?accent:i%3===1?"#A82438":"#C8956B", transform:`translate(-50%,-50%) rotate(${(i/12)*360}deg) translateX(50px)`, animation:"popOut 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards" }}/>
      ))}
    </div>
  );
}

// ─── PRODUCT CARD ────────────────────────────────────────────────
function ProductCard({ product, onOpen }) {
  const [hov, setHov] = useState(false);
  const [burst, setBurst] = useState(false);
  return (
    <div onMouseEnter={()=>{setHov(true);setBurst(true);setTimeout(()=>setBurst(false),700);}} onMouseLeave={()=>setHov(false)} onClick={()=>onOpen(product)}
      style={{ background: hov?`${product.accent}06`:"white", borderRadius:20, overflow:"hidden", cursor:"pointer", position:"relative", border:`1.5px solid ${hov?product.accent+"33":"rgba(200,149,107,0.15)"}`, boxShadow: hov?`0 28px 60px ${product.accent}22`:     "0 2px 16px rgba(0,0,0,0.06)", transform: hov?"translateY(-10px) scale(1.02)":"translateY(0) scale(1)", transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)" }}>
      {product.badge&&<div style={{ position:"absolute",top:12,left:12,zIndex:2,background:`linear-gradient(135deg,${product.accent},#A82438)`,color:"white",fontSize:"0.62rem",fontWeight:700,padding:"3px 10px",borderRadius:20,letterSpacing:"0.06em",textTransform:"uppercase" }}>{product.badge}</div>}
      <ParticleBurst active={burst} accent={product.accent}/>
      <div style={{ height:165, display:"flex", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden", background: hov?`linear-gradient(135deg,${product.accent}18,${product.accent}28)`:`linear-gradient(135deg,${product.accent}06,${product.accent}10)`, transition:"background 0.5s" }}>
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          style={{ width:"100%", height:"100%", objectFit:"contain", padding:"12px 10px", transform: hov?"scale(1.12)":"scale(1)", transition:"transform 0.45s cubic-bezier(0.34,1.56,0.64,1)", filter: hov?`drop-shadow(0 10px 22px ${product.accent}70)`:"drop-shadow(0 4px 8px rgba(0,0,0,0.08))" }}
        />
        <div style={{ position:"absolute", bottom:8, right:8, opacity: hov?1:0, transform: hov?"scale(1)":"scale(0.7)", transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)" }}>
          <RadarChart heat={product.heat} aroma={product.aroma} flavor={product.flavor} accent={product.accent} animate={hov}/>
        </div>
      </div>
      <div style={{ padding:"15px 16px 18px" }}>
        <div style={{ fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:product.accent, marginBottom:4 }}>{product.label}</div>
        <div style={{ fontFamily:"Playfair Display,serif", fontSize:"0.95rem", fontWeight:700, color:T.dark, marginBottom:7, lineHeight:1.3 }}>{product.name}</div>
        {product.variants ? (
          <div style={{ marginBottom:12 }}>
            <div style={{ fontSize:"0.62rem", fontWeight:700, color:T.mid, textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:5 }}>From</div>
            <div style={{ display:"flex", gap:5, flexWrap:"wrap" }}>
              {product.variants.slice(0,3).map(v=>(
                <span key={v.size} style={{ background:`${product.accent}12`, border:`1px solid ${product.accent}28`, borderRadius:6, padding:"3px 8px", fontSize:"0.7rem", fontWeight:600, color:product.accent }}>
                  {v.size} · {v.price}
                </span>
              ))}
              {product.variants.length > 3 && (
                <span style={{ background:"rgba(0,0,0,0.04)", borderRadius:6, padding:"3px 8px", fontSize:"0.7rem", fontWeight:600, color:T.mid }}>+{product.variants.length-3} more</span>
              )}
            </div>
          </div>
        ) : (
          <div style={{ fontSize:"0.95rem", fontWeight:700, color: product.price==="On Request"?T.mid:T.red, marginBottom:12 }}>
            {product.price==="On Request"
              ? <span style={{ fontSize:"0.78rem", background:"rgba(122,74,48,0.08)", border:"1px solid rgba(122,74,48,0.15)", borderRadius:6, padding:"3px 10px", fontWeight:600 }}>On Request</span>
              : product.price}
          </div>
        )}
        <button style={{ width:"100%", background: hov?`linear-gradient(135deg,${product.accent},#A82438)`:"transparent", color: hov?"white":T.mid, border:`1.5px solid ${hov?"transparent":"rgba(122,74,48,0.2)"}`, padding:"9px 0", borderRadius:10, fontSize:"0.8rem", fontWeight:600, cursor:"pointer", fontFamily:"Outfit,sans-serif", transition:"all 0.3s", display:"flex", alignItems:"center", justifyContent:"center", gap:5 }}>
          {product.variants ? (hov?"View Sizes →":"View Sizes") : (hov?"Inquire Now →":"Inquire Now")}
        </button>
      </div>
    </div>
  );
}

// ─── MODAL ───────────────────────────────────────────────────────
function Modal({ product, onClose }) {
  const [anim, setAnim] = useState(false);
  useEffect(() => {
    if (product) { document.body.style.overflow="hidden"; setTimeout(()=>setAnim(true),300); }
    else { document.body.style.overflow=""; setAnim(false); }
    return () => { document.body.style.overflow=""; };
  }, [product]);
  if (!product) return null;
  return (
    <div onClick={e=>e.target===e.currentTarget&&onClose()} style={{ position:"fixed", inset:0, zIndex:2000, background:"rgba(26,10,0,0.65)", backdropFilter:"blur(12px)", display:"flex", alignItems:"center", justifyContent:"center", padding:20, animation:"fadeIn 0.3s ease" }}>
      <div style={{ background:T.bg, borderRadius:28, maxWidth:600, width:"100%", maxHeight:"88vh", overflowY:"auto", animation:"slideUp 0.4s cubic-bezier(0.34,1.56,0.64,1)", position:"relative" }}>
        <div style={{ height:220, display:"flex", alignItems:"center", justifyContent:"center", borderRadius:"28px 28px 0 0", background:`linear-gradient(135deg,${product.accent}14,${product.accent}28)`, position:"relative", overflow:"hidden" }}>
          <img
            src={product.img}
            alt={product.name}
            style={{ height:"100%", maxWidth:"100%", objectFit:"contain", padding:"20px 24px", animation:"float 4s ease-in-out infinite", filter:`drop-shadow(0 12px 28px ${product.accent}55)` }}
          />
          <button onClick={onClose} style={{ position:"absolute", top:14, right:14, width:34, height:34, borderRadius:"50%", background:"rgba(255,255,255,0.92)", border:"none", cursor:"pointer", fontSize:"1rem", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:700, transition:"transform 0.2s" }} onMouseEnter={e=>e.target.style.transform="rotate(90deg)"} onMouseLeave={e=>e.target.style.transform=""}>✕</button>
        </div>
        <div style={{ padding:26 }}>
          <div style={{ fontSize:"0.68rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:product.accent, marginBottom:5 }}>{product.label}</div>
          <div style={{ fontFamily:"Playfair Display,serif", fontSize:"1.65rem", fontWeight:900, color:T.dark, marginBottom:7 }}>{product.name}</div>

          {/* Price — flat or variant table */}
          {product.variants ? (
            <div style={{ marginBottom:18 }}>
              <div style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:T.mid, marginBottom:10 }}>Available Sizes & Pricing</div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8 }}>
                {product.variants.map(v=>(
                  <div key={v.size} style={{ background:`${product.accent}08`, border:`1.5px solid ${product.accent}22`, borderRadius:10, padding:"10px 12px", textAlign:"center", transition:"transform 0.2s,box-shadow 0.2s" }}
                    onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow=`0 6px 18px ${product.accent}22`;}}
                    onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="";}}>
                    <div style={{ fontSize:"0.72rem", fontWeight:700, color:T.mid, marginBottom:4 }}>{v.size}</div>
                    <div style={{ fontFamily:"Playfair Display,serif", fontSize:"1.05rem", fontWeight:900, color:product.accent }}>{v.price}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div style={{ fontSize:"1.15rem", fontWeight:700, color: product.price==="On Request"?T.mid:T.red, marginBottom:13 }}>
              {product.price==="On Request"
                ? <span style={{ fontSize:"0.85rem", background:"rgba(122,74,48,0.07)", border:"1px solid rgba(122,74,48,0.15)", borderRadius:8, padding:"5px 14px", fontWeight:600 }}>Contact us for pricing</span>
                : product.price}
            </div>
          )}
          <p style={{ color:T.mid, lineHeight:1.8, marginBottom:20, fontSize:"0.91rem" }}>{product.desc}</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10, marginBottom:20 }}>
            {[{label:"Heat",val:product.heat},{label:"Aroma",val:product.aroma},{label:"Flavor",val:product.flavor}].map(({label,val})=>(
              <div key={label} style={{ background:`${product.accent}08`, border:`1px solid ${product.accent}20`, borderRadius:10, padding:12, textAlign:"center" }}>
                <div style={{ fontSize:"0.62rem", color:T.mid, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:6 }}>{label}</div>
                <div style={{ height:5, background:"rgba(0,0,0,0.08)", borderRadius:3, overflow:"hidden" }}>
                  <div style={{ height:"100%", borderRadius:3, background:`linear-gradient(90deg,${product.accent},#A82438)`, width: anim?`${val}%`:"0%", transition:"width 1.2s cubic-bezier(0.34,1.56,0.64,1)" }}/>
                </div>
                <div style={{ fontSize:"0.68rem", color:T.mid, marginTop:3 }}>{val}%</div>
              </div>
            ))}
          </div>
          <div style={{ display:"flex", justifyContent:"center", marginBottom:22 }}>
            <RadarChart heat={product.heat} aroma={product.aroma} flavor={product.flavor} accent={product.accent} animate={anim}/>
          </div>
          <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
            <button onClick={()=>{onClose();setTimeout(()=>document.getElementById("contact")?.scrollIntoView({behavior:"smooth"}),100);}} style={{ flex:1, background:`linear-gradient(135deg,${T.red},${T.orange})`, color:"white", border:"none", padding:"13px 0", borderRadius:12, fontSize:"0.92rem", fontWeight:700, cursor:"pointer", fontFamily:"Outfit,sans-serif", minWidth:140 }}>
              {product.variants ? "Order / Inquire 📩" : "Inquire Now 📩"}
            </button>
            <button onClick={onClose} style={{ padding:"13px 20px", borderRadius:12, background:"transparent", border:"2px solid rgba(26,10,0,0.15)", cursor:"pointer", fontSize:"0.88rem", fontWeight:600, fontFamily:"Outfit,sans-serif", color:T.dark }}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── STAT COUNTER ────────────────────────────────────────────────
function StatCounter({ target, label }) {
  const ref=useRef(null); const visible=useInView(ref); const [val,setVal]=useState(0);
  useEffect(()=>{ if(!visible)return; let n=0; const s=target/50; const t=setInterval(()=>{ n=Math.min(n+s,target); setVal(Math.floor(n)); if(n>=target)clearInterval(t); },30); return()=>clearInterval(t); },[visible,target]);
  return (
    <div ref={ref} style={{ textAlign:"center", color:"white" }}>
      <div style={{ fontFamily:"Playfair Display,serif", fontSize:"clamp(2.3rem,5vw,3.4rem)", fontWeight:900, lineHeight:1 }}>{val}+</div>
      <div style={{ fontSize:"0.86rem", opacity:0.75, marginTop:7, fontWeight:500 }}>{label}</div>
    </div>
  );
}

// ─── SCROLL SPREAD SECTION (Jeton-style) ─────────────────────────
// Cards start clustered together in center; as user scrolls through the sticky
// section they SPREAD APART to their final positions. The heading gains weight.
const HING_BOTTLES_IMG = "data:image/webp;base64,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";

const CATS = [
  { cat:"hing",      name:"Hing Powder",      tag:"Compounded Asafoetida", count:"3 products",   bgImg: HING_BOTTLES_IMG, grad:"linear-gradient(150deg,rgba(139,26,46,0.72),rgba(168,36,56,0.85))" },
  { cat:"methi",     name:"Kasoori Methi",    tag:"Dried Fenugreek",       count:"2 products",   bgImg: null,             grad:"linear-gradient(150deg,#2A9D8F,#264653)" },
  { cat:"seasoning", name:"Seasoning Blends", tag:"Custom Masalas",        count:"35+ products", bgImg: null,             grad:"linear-gradient(150deg,#C8956B,#8B3A2E)" },
];

function ScrollSpreadSection({ onCatClick }) {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isMob, setIsMob] = useState(false);

  useEffect(() => {
    const checkMob = () => setIsMob(window.innerWidth <= 768);
    checkMob();
    window.addEventListener("resize", checkMob);
    return () => window.removeEventListener("resize", checkMob);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const totalH = el.offsetHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, -rect.top / Math.max(totalH, 1)));
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Desktop: cards spread left/center/right with Y offset
  // Mobile: cards spread only vertically (no horizontal spread) so nothing escapes sideways
  const cardProps = isMob ? [
    { startX: "0px", endX: "0px", startY: "24px",  endY: "0px", startScale: 0.88 },
    { startX: "0px", endX: "0px", startY: "0px",   endY: "0px", startScale: 0.92 },
    { startX: "0px", endX: "0px", startY: "-24px", endY: "0px", startScale: 0.88 },
  ] : [
    { startX: "60px",  endX: "0px", startY: "30px",  endY: "0px", startScale: 0.82 },
    { startX: "0px",   endX: "0px", startY: "-20px", endY: "0px", startScale: 0.9  },
    { startX: "-60px", endX: "0px", startY: "30px",  endY: "0px", startScale: 0.82 },
  ];

  const eased = progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;

  const headingWeight = Math.round(300 + eased * 600);
  const emOpacity     = 0.3 + eased * 0.7;

  // On mobile, cards stack vertically — use a scrollable column layout once spread
  const mobileCardH = isMob ? `clamp(140px, ${140 + eased * 60}px, 200px)` : `clamp(200px, ${200 + eased * 80}px, 280px)`;

  return (
    <div ref={sectionRef} style={{ height: isMob ? "320vh" : "260vh", position:"relative" }}>
      <div style={{
        position:"sticky", top:0, height:"100vh",
        display:"flex", flexDirection:"column",
        alignItems:"center", justifyContent:"center",
        /* clip so spread cards never bleed into next section */
        overflow:"hidden",
        padding:`0 clamp(18px,5vw,80px)`,
        background:"#FFF8F4",
        /* extra bottom padding on mobile so last card isn't clipped */
        paddingBottom: isMob ? "clamp(16px, 6vh, 40px)" : 0,
      }}>
        {/* label */}
        <div style={{
          fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.15em",
          textTransform:"uppercase", color:"#A82438",
          marginBottom: isMob ? 10 : 16,
          display:"flex", alignItems:"center", gap:9,
          opacity: 0.4 + eased * 0.6,
          flexShrink: 0,
        }}>
          <span style={{ width:24, height:2, background:"linear-gradient(90deg,#8B1A2E,#A82438)", display:"inline-block" }}/>
          Collections
          <span style={{ width:24, height:2, background:"linear-gradient(90deg,#A82438,#8B1A2E)", display:"inline-block" }}/>
        </div>

        {/* heading */}
        <h2 style={{
          fontFamily:"Playfair Display,serif",
          fontSize: isMob ? "clamp(1.4rem,5vw,1.9rem)" : `clamp(1.8rem,3vw,2.8rem)`,
          fontWeight: headingWeight,
          lineHeight:1.1, letterSpacing:"-0.02em",
          color:"#1A0A00", marginBottom: isMob ? 20 : 44,
          textAlign:"center", transition:"font-weight 0.05s",
          flexShrink: 0,
        }}>
          Explore Every{" "}
          <em style={{ fontStyle:"italic", color:"#8B1A2E", opacity: emOpacity, transition:"opacity 0.05s" }}>
            Flavor
          </em>{" "}We Craft
        </h2>

        {/* cards container */}
        <div style={{
          display:"flex",
          flexDirection: isMob ? "column" : "row",
          gap: isMob ? `${8 + eased * 8}px` : `clamp(12px,${4 + eased * 2}vw,28px)`,
          alignItems:"center",
          justifyContent:"center",
          width:"100%",
          maxWidth: isMob ? 420 : 1100,
          /* on mobile, make sure the cards container itself clips */
          overflow: "visible",
        }}>
          {CATS.map((c, i) => {
            const cp = cardProps[i];
            const tx = `calc(${cp.endX} + (${cp.startX} - ${cp.endX}) * ${(1 - eased).toFixed(3)})`;
            const ty = `calc(${cp.endY} + (${cp.startY} - ${cp.endY}) * ${(1 - eased).toFixed(3)})`;
            const scale = cp.startScale + (1 - cp.startScale) * eased;
            const cardOpacity = 0.5 + eased * 0.5;
            const blur = (1 - eased) * 3;
            return (
              <div key={c.cat}
                onClick={() => eased > 0.6 && onCatClick(c.cat)}
                style={{
                  flex: isMob ? "none" : "1 1 220px",
                  width: isMob ? "100%" : undefined,
                  maxWidth: isMob ? 380 : 340,
                  minWidth: isMob ? "unset" : 180,
                  borderRadius:20, overflow:"hidden", position:"relative",
                  height: mobileCardH,
                  transform:`translateX(${tx}) translateY(${ty}) scale(${scale.toFixed(3)})`,
                  opacity: cardOpacity,
                  filter: blur > 0.2 ? `blur(${blur.toFixed(1)}px)` : "none",
                  cursor: eased > 0.6 ? "pointer" : "default",
                  boxShadow: `0 ${8 + eased * 24}px ${20 + eased * 40}px rgba(139,26,46,${(eased * 0.25).toFixed(2)})`,
                  transition:"box-shadow 0.1s",
                  flexShrink: 0,
                }}>

                {/* gradient background always */}
                <div style={{ position:"absolute", inset:0, background:c.grad }}/>

                {/* dot pattern overlay */}
                <div style={{ position:"absolute", inset:0, opacity:0.06, backgroundImage:"radial-gradient(circle,white 1px,transparent 1px)", backgroundSize:"20px 20px" }}/>

                {/* hing only: bottles fill the full card as a centered cover image */}
                {c.bgImg && (
                  <>
                    {/* full-card image — cover style, centered */}
                    <img
                      src={c.bgImg}
                      alt="Vinayak Hing Bottles"
                      style={{
                        position:"absolute",
                        inset:0,
                        width:"100%",
                        height:"100%",
                        objectFit:"cover",
                        objectPosition:"center center",
                        transition:"transform 0.4s ease",
                        transform: eased > 0.5 ? "scale(1.05)" : "scale(1)",
                      }}
                    />
                    {/* dark scrim at bottom so text stays legible */}
                    <div style={{
                      position:"absolute", inset:0,
                      background:"linear-gradient(180deg, rgba(139,26,46,0.08) 0%, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.78) 100%)",
                    }}/>
                  </>
                )}

                {/* text bar at bottom */}
                <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"16px 18px" }}>
                  {/* tag line */}
                  <div style={{
                    fontSize:"0.58rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase",
                    color:"rgba(255,255,255,0.75)", marginBottom:3,
                    fontFamily: c.cat === "hing" ? '"Bahnschrift","Franklin Gothic Medium","Arial Narrow",sans-serif' : "Outfit,sans-serif",
                  }}>{c.tag}</div>

                  {/* card name */}
                  <div style={{
                    fontSize: isMob ? "1.05rem" : "clamp(1.1rem,2vw,1.4rem)",
                    fontWeight:900, color:"white", marginBottom:4,
                    fontFamily: c.cat === "hing"
                      ? '"Bahnschrift","Franklin Gothic Medium","Arial Narrow",sans-serif'
                      : "Playfair Display,serif",
                    letterSpacing: c.cat === "hing" ? "0.02em" : "normal",
                  }}>{c.name}</div>

                  {/* count + arrow */}
                  <div style={{ fontSize:"0.72rem", color:"rgba(255,255,255,0.65)", display:"flex", alignItems:"center", gap:8 }}>
                    <span style={{
                      fontFamily: c.cat === "hing" ? '"Bahnschrift","Franklin Gothic Medium","Arial Narrow",sans-serif' : "Outfit,sans-serif",
                    }}>{c.count}</span>
                    <span style={{
                      display:"inline-flex", width:22, height:22,
                      alignItems:"center", justifyContent:"center",
                      background: eased > 0.8 ? "white" : "rgba(255,255,255,0.2)",
                      borderRadius:"50%", color: eased > 0.8 ? "#1A0A00" : "white",
                      transform: eased > 0.8 ? "rotate(-45deg)" : "rotate(0)",
                      transition:"all 0.35s", fontSize:"0.72rem",
                    }}>→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* scroll hint */}
        {eased < 0.3 && (
          <div style={{
            position:"absolute", bottom: isMob ? 14 : 28, left:"50%", transform:"translateX(-50%)",
            display:"flex", flexDirection:"column", alignItems:"center", gap:5,
            color:"#5C2030", fontSize:"0.65rem", fontWeight:600, letterSpacing:"0.1em",
            textTransform:"uppercase", animation:"pulse 2s ease-in-out infinite",
            opacity: 1 - eased * 3, pointerEvents:"none",
          }}>
            <span>Scroll to explore</span>
            <div style={{ width:1, height:24, background:"linear-gradient(180deg,rgba(92,32,48,0.5),transparent)" }}/>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── CAT CARD ────────────────────────────────────────────────────
function CatCard({ name, tag, count, emoji, grad, onClick, delay }) {
  const [hov, setHov] = useState(false);
  return (
    <div onClick={onClick} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{ borderRadius:20, overflow:"hidden", cursor:"pointer", height:260, position:"relative", transform: hov?"translateY(-8px) scale(1.02)":"translateY(0) scale(1)", boxShadow: hov?"0 28px 56px rgba(0,0,0,0.2)":"0 4px 18px rgba(0,0,0,0.08)", transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)", animation:`revealUp 0.7s ${delay}s both` }}>
      <div style={{ position:"absolute", inset:0, background:grad, transform: hov?"scale(1.06)":"scale(1)", transition:"transform 0.5s" }}/>
      <div style={{ position:"absolute", inset:0, opacity:0.06, backgroundImage:"radial-gradient(circle,white 1px,transparent 1px)", backgroundSize:"20px 20px" }}/>
      <div style={{ position:"absolute", top:20, right:20, fontSize:"2.8rem", animation:"float 4s ease-in-out infinite", filter:"drop-shadow(0 4px 12px rgba(0,0,0,0.2))" }}>{emoji}</div>
      <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"22px 20px", background:"linear-gradient(0deg,rgba(0,0,0,0.55) 0%,transparent 100%)" }}>
        <div style={{ fontSize:"0.64rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"rgba(255,255,255,0.7)", marginBottom:4 }}>{tag}</div>
        <div style={{ fontFamily:"Playfair Display,serif", fontSize:"1.3rem", fontWeight:900, color:"white", marginBottom:6 }}>{name}</div>
        <div style={{ fontSize:"0.8rem", color:"rgba(255,255,255,0.65)", display:"flex", alignItems:"center", gap:10 }}>
          {count}
          <span style={{ display:"inline-flex", width:28, height:28, alignItems:"center", justifyContent:"center", background: hov?"white":"rgba(255,255,255,0.2)", borderRadius:"50%", color: hov?"#1A0A00":"white", transform: hov?"rotate(-45deg)":"rotate(0)", transition:"all 0.35s", fontSize:"0.85rem" }}>→</span>
        </div>
      </div>
    </div>
  );
}

// ─── FIELD ───────────────────────────────────────────────────────
function Field({ label, type="text", placeholder, value, onChange, textarea }) {
  const [foc, setFoc] = useState(false);
  const base = { width:"100%", background:"white", border:`1.5px solid ${foc?T.maroon:"rgba(26,10,0,0.1)"}`, borderRadius:11, padding:"12px 15px", fontSize:"0.88rem", fontFamily:"Outfit,sans-serif", color:T.dark, outline:"none", transition:"border-color 0.3s", boxSizing:"border-box", display:"block" };
  return (
    <div>
      <label style={{ display:"block", fontSize:"0.8rem", fontWeight:600, color:T.dark, marginBottom:7 }}>{label}</label>
      {textarea
        ? <textarea placeholder={placeholder} value={value} onChange={e=>onChange(e.target.value)} onFocus={()=>setFoc(true)} onBlur={()=>setFoc(false)} style={{ ...base, height:115, resize:"vertical" }}/>
        : <input type={type} placeholder={placeholder} value={value} onChange={e=>onChange(e.target.value)} onFocus={()=>setFoc(true)} onBlur={()=>setFoc(false)} style={base}/>
      }
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────
export default function MasalaMandir() {
  const mouse    = useMousePosition();
  const scrollY  = useScrollY();
  const isMobile = useIsMobile();
  const [filter, setFilter] = useState("all");
  const [modal,  setModal]  = useState(null);
  const [navScr, setNavScr] = useState(false);
  const [menu,   setMenu]   = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [page,   setPage]   = useState("home"); // "home" | "products" | "story" | "b2b" | "contact"

  const [fname,    setFname]    = useState("");
  const [femail,   setFemail]   = useState("");
  const [fphone,   setFphone]   = useState("");
  const [fsubject, setFsubject] = useState("");
  const [fmessage, setFmessage] = useState("");

  const storyRef = useRef(null);
  const storyVis = useInView(storyRef);

  useEffect(() => { setNavScr(scrollY > 60); }, [scrollY]);

  const filtered = filter === "all" ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);
  const pad = "clamp(18px,5vw,80px)";

  const handleSend = () => {
    const subj = encodeURIComponent(fsubject || "Inquiry from Masala Mandir Website");
    const body  = encodeURIComponent(
      `Hi Masala Mandir Team,\n\n${fmessage || "(No message provided)"}\n\n` +
      `────────────────────────\n` +
      `Name:  ${fname  || "—"}\n` +
      `Phone: ${fphone || "—"}\n` +
      `Email: ${femail || "—"}\n` +
      `────────────────────────\n` +
      `Sent via masalamandir.com`
    );
    window.location.href = `mailto:info@masalamandir.com?subject=${subj}&body=${body}`;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  const NAV = [
    {label:"Home",     page:"home"},
    {label:"Products", page:"products"},
    {label:"Our Story",page:"story"},
    {label:"B2B",      page:"b2b"},
    {label:"Contact",  page:"contact"},
  ];

  const goPage = (p) => {
    setPage(p);
    setMenu(false);
    window.scrollTo({top:0, behavior:"smooth"});
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Outfit:wght@300;400;500;600;700&display=swap');
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
        html{scroll-behavior:smooth;}
        body{font-family:'Outfit',sans-serif;background:#FFF8F4;color:#1A0A00;overflow-x:hidden;-webkit-tap-highlight-color:transparent;}
        ::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-track{background:#FFF8F4;}::-webkit-scrollbar-thumb{background:#A82438;border-radius:3px;}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes slideUp{from{opacity:0;transform:translateY(40px) scale(0.95)}to{opacity:1;transform:translateY(0) scale(1)}}
        @keyframes revealUp{from{opacity:0;transform:translateY(38px)}to{opacity:1;transform:translateY(0)}}
        @keyframes revealLeft{from{opacity:0;transform:translateX(-48px)}to{opacity:1;transform:translateX(0)}}
        @keyframes revealRight{from{opacity:0;transform:translateX(48px)}to{opacity:1;transform:translateX(0)}}
        @keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        @keyframes popOut{0%{opacity:1;transform:translate(-50%,-50%) scale(1)}100%{opacity:0;transform:translate(-50%,-50%) scale(4)}}
        @keyframes shimmerSlide{0%{transform:translateX(-60px)}55%{transform:translateX(240px)}100%{transform:translateX(240px)}}
        @keyframes dustPuff{0%{transform:scaleX(0.5);opacity:0.35}60%{transform:scaleX(1.4);opacity:0.18}100%{transform:scaleX(0.9);opacity:0}}
        @keyframes pourFlow{0%,100%{opacity:0.9;transform:scaleX(1)}50%{opacity:1;transform:scaleX(1.08)}}
        @keyframes orbit0{from{transform:rotate(0deg)   translateX(85px) rotate(0deg)}   to{transform:rotate(360deg)  translateX(85px) rotate(-360deg)}}
        @keyframes orbit1{from{transform:rotate(120deg) translateX(100px)rotate(-120deg)} to{transform:rotate(480deg) translateX(100px)rotate(-480deg)}}
        @keyframes orbit2{from{transform:rotate(240deg) translateX(72px) rotate(-240deg)} to{transform:rotate(600deg) translateX(72px) rotate(-600deg)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.55}}

        /* Speckle animations */
        @keyframes speckDrift0{0%{transform:translateX(-14px) translateY(0);opacity:0.85}100%{transform:translateX(-26px) translateY(30px);opacity:0}}
        @keyframes speckDrift1{0%{transform:translateX(12px)  translateY(0);opacity:0.85}100%{transform:translateX(22px)  translateY(35px);opacity:0}}
        @keyframes speckDrift2{0%{transform:translateX(-8px)  translateY(0);opacity:0.85}100%{transform:translateX(-18px) translateY(40px);opacity:0}}
        @keyframes speckDrift3{0%{transform:translateX(16px)  translateY(0);opacity:0.8} 100%{transform:translateX(28px)  translateY(45px);opacity:0}}
        @keyframes speckDrift4{0%{transform:translateX(-18px) translateY(0);opacity:0.8} 100%{transform:translateX(-30px) translateY(50px);opacity:0}}
        @keyframes speckDrift5{0%{transform:translateX(8px)   translateY(0);opacity:0.75}100%{transform:translateX(18px)  translateY(55px);opacity:0}}

        @media(max-width:768px){
          .nav-desk{display:none!important;}
          .hamburger{display:flex!important;}
          .hero-inner{flex-direction:column!important;text-align:center!important;}
          .hero-btns{justify-content:center!important;}
          .hero-trust{justify-content:center!important;flex-wrap:wrap!important;}
          .cat-grid{grid-template-columns:1fr!important;}
          .prod-grid{grid-template-columns:repeat(2,1fr)!important;}
          .story-grid{grid-template-columns:1fr!important;}
          .stats-grid{grid-template-columns:repeat(2,1fr)!important;}
          .testi-grid{grid-template-columns:1fr!important;}
          .cg{grid-template-columns:1fr!important;}
          .fg{grid-template-columns:1fr 1fr!important;}
          .form-row{grid-template-columns:1fr!important;}
          .jar-hero{width:260px!important;height:340px!important;margin-top:28px!important;}
        }
        @media(min-width:769px) and (max-width:1100px){
          .prod-grid{grid-template-columns:repeat(3,1fr)!important;}
        }
        @media(max-width:480px){
          .prod-grid{grid-template-columns:1fr!important;}
          .fg{grid-template-columns:1fr!important;}
        }
        @media(min-width:769px){.hamburger{display:none!important;}}
      `}</style>

      {/* ─── MODERN NAV ───────────────────────────────── */}
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:1000,
        padding:`${navScr?"10px":"16px"} ${pad}`,
        display:"flex", alignItems:"center", justifyContent:"space-between",
        background: navScr ? "rgba(255,248,244,0.97)" : "rgba(255,248,244,0.85)",
        backdropFilter:"blur(28px)",
        WebkitBackdropFilter:"blur(28px)",
        borderBottom: navScr ? `1px solid rgba(139,26,46,0.1)` : "1px solid transparent",
        boxShadow: navScr ? "0 2px 32px rgba(139,26,46,0.1)" : "none",
        transition:"all 0.35s ease",
      }}>
        {/* Logo */}
        <button onClick={()=>goPage("home")} style={{ display:"flex",alignItems:"center",background:"none",border:"none",cursor:"pointer",padding:0,flexShrink:0 }}>
          <img src={LOGO} alt="Masala Mandir" style={{ height: navScr ? 38 : 44, width:"auto", objectFit:"contain", transition:"height 0.35s" }}/>
        </button>

        {/* Desktop pill nav */}
        <div className="nav-desk" style={{ display:"flex", alignItems:"center", gap:4, background:"rgba(139,26,46,0.06)", borderRadius:50, padding:"5px 6px", border:"1px solid rgba(139,26,46,0.1)" }}>
          {NAV.map(l=>(
            <button key={l.label} onClick={()=>goPage(l.page)} style={{
              padding:"7px 18px", borderRadius:50, border:"none", cursor:"pointer",
              fontFamily:"Outfit,sans-serif", fontWeight:600, fontSize:"0.82rem",
              letterSpacing:"0.03em", textTransform:"uppercase",
              background: page===l.page ? `linear-gradient(135deg,${T.red},${T.orange})` : "transparent",
              color: page===l.page ? "white" : T.mid,
              boxShadow: page===l.page ? `0 4px 14px rgba(139,26,46,0.3)` : "none",
              transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
              transform: page===l.page ? "scale(1.02)" : "scale(1)",
            }}
            onMouseEnter={e=>{ if(page!==l.page){ e.target.style.background="rgba(139,26,46,0.08)"; e.target.style.color=T.dark; }}}
            onMouseLeave={e=>{ if(page!==l.page){ e.target.style.background="transparent"; e.target.style.color=T.mid; }}}
            >{l.label}</button>
          ))}
        </div>

        {/* Inquire pill CTA */}
        <button onClick={()=>goPage("contact")} className="nav-desk"
          style={{ background:`linear-gradient(135deg,${T.red},${T.orange})`, color:"white", padding:"9px 22px", borderRadius:50, fontWeight:700, fontSize:"0.82rem", border:"none", cursor:"pointer", fontFamily:"Outfit,sans-serif", boxShadow:`0 4px 18px rgba(139,26,46,0.3)`, transition:"transform 0.3s,box-shadow 0.3s", display:"flex", alignItems:"center", gap:6 }}
          onMouseEnter={e=>{e.target.style.transform="translateY(-2px)";e.target.style.boxShadow=`0 8px 28px rgba(139,26,46,0.45)`;}}
          onMouseLeave={e=>{e.target.style.transform="";e.target.style.boxShadow=`0 4px 18px rgba(139,26,46,0.3)`;}}>
          Inquire Now
        </button>

        {/* Mobile: logo-center + hamburger layout */}
        <button className="hamburger" onClick={()=>setMenu(!menu)} style={{
          display:"none", flexDirection:"column", gap:5,
          background: menu ? `rgba(139,26,46,0.08)` : "none",
          border: menu ? `1px solid rgba(139,26,46,0.15)` : "1px solid transparent",
          borderRadius:10, padding:"8px 10px", cursor:"pointer", transition:"all 0.3s",
        }}>
          <span style={{ width:22,height:2,background: menu ? T.red : T.dark,borderRadius:2,display:"block",transition:"all 0.3s",transform:menu?"rotate(45deg) translate(5px,5px)":"none" }}/>
          <span style={{ width:22,height:2,background: menu ? T.red : T.dark,borderRadius:2,display:"block",transition:"all 0.3s",opacity:menu?0:1 }}/>
          <span style={{ width:22,height:2,background: menu ? T.red : T.dark,borderRadius:2,display:"block",transition:"all 0.3s",transform:menu?"rotate(-45deg) translate(5px,-5px)":"none" }}/>
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      {menu&&(
        <div style={{ position:"fixed",inset:0,zIndex:999,background:`linear-gradient(160deg,${T.bg} 0%,rgba(244,224,229,0.98) 100%)`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,animation:"fadeIn 0.3s ease", paddingTop:80 }}>
          {/* Logo at top of mobile menu */}
          <img src={LOGO} alt="Masala Mandir" style={{ height:52, objectFit:"contain", marginBottom:32 }}/>
          {NAV.map((l,i)=>(
            <button key={l.label} onClick={()=>goPage(l.page)} style={{
              fontFamily:"Playfair Display,serif", fontSize:"1.7rem", fontWeight:700,
              color: page===l.page ? T.red : T.dark,
              background: page===l.page ? `rgba(139,26,46,0.06)` : "transparent",
              border: page===l.page ? `1px solid rgba(139,26,46,0.15)` : "1px solid transparent",
              borderRadius:14, cursor:"pointer", padding:"12px 40px", width:"80%", textAlign:"center",
              animation:`revealUp 0.4s ${i*0.06}s both`,
              transition:"all 0.3s",
            }}
            onMouseEnter={e=>{ if(page!==l.page){ e.currentTarget.style.background="rgba(139,26,46,0.04)"; }}}
            onMouseLeave={e=>{ if(page!==l.page){ e.currentTarget.style.background="transparent"; }}}
            >{l.label}</button>
          ))}
          <a href="https://wa.me/919408754458" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#25D366",color:"white",padding:"13px 28px",borderRadius:50,fontWeight:700,textDecoration:"none",fontSize:"1rem",fontFamily:"Outfit,sans-serif",marginTop:20,animation:"revealUp 0.4s 0.3s both" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp Us
          </a>
        </div>
      )}

      {/* ─── PAGE CONTENT ─────────────────────────────── */}
      <div style={{ animation:"fadeIn 0.4s ease", paddingTop: page!=="home" ? 80 : 0 }}>

      {/* ═══ HOME PAGE ═══════════════════════════════════ */}
      {page === "home" && <>
      {/* ─── HERO ─────────────────────────────────────── */}
      <section id="home" style={{ minHeight:"100vh", position:"relative", display:"flex", alignItems:"center", paddingTop:90, overflow:"hidden", background:`radial-gradient(ellipse at 60% 50%,rgba(200,149,107,0.22) 0%,transparent 55%),radial-gradient(ellipse at 15% 85%,rgba(139,26,46,0.1) 0%,transparent 50%),#FFF8F4` }}>
        <SpiceBgCanvas/>
        <div style={{ position:"absolute", top:"50%", left:"50%", transform:`translate(-50%,-50%) translateY(${scrollY*0.12}px)`, fontFamily:"Playfair Display,serif", fontSize:"clamp(5rem,18vw,17rem)", fontWeight:900, color:"rgba(139,26,46,0.035)", whiteSpace:"nowrap", userSelect:"none", pointerEvents:"none", lineHeight:1 }}>SPICE</div>

        <div className="hero-inner" style={{ position:"relative", zIndex:10, width:"100%", padding:`0 ${pad}`, display:"flex", alignItems:"center", justifyContent:"space-between", gap:32 }}>
          {/* Text */}
          <div style={{ maxWidth:600, flex:"1 1 auto" }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(168,36,56,0.1)", border:"1px solid rgba(168,36,56,0.3)", borderRadius:20, padding:"5px 15px", fontSize:"0.7rem", fontWeight:700, color:T.orange, letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:18, animation:"revealUp 0.8s 0.2s both" }}>
              🌶️ Premium Indian Spices — Ahmedabad, Gujarat
            </div>
            <h1 style={{ fontFamily:"Playfair Display,serif", fontSize:"clamp(2.4rem,5.5vw,5.2rem)", fontWeight:900, lineHeight:1.06, letterSpacing:"-0.03em", color:T.dark, marginBottom:18, animation:"revealUp 0.8s 0.4s both" }}>
              Where Tradition<br/>Meets{" "}
              <em style={{ fontStyle:"italic", background:"linear-gradient(135deg,#8B1A2E,#A82438)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Flavor.</em>
            </h1>
            <p style={{ fontSize:"1rem", lineHeight:1.75, color:T.mid, maxWidth:490, marginBottom:32, animation:"revealUp 0.8s 0.6s both" }}>
              Premium Hing, Kasoori Methi &amp; 35+ seasoning blends crafted with age-old Indian spice heritage for your kitchen or brand.
            </p>
            <div className="hero-btns" style={{ display:"flex", gap:13, flexWrap:"wrap", animation:"revealUp 0.8s 0.8s both" }}>
              <button onClick={()=>goPage("products")} style={{ background:"linear-gradient(135deg,#8B1A2E,#A82438)", color:"white", border:"none", padding:"13px 28px", borderRadius:50, fontSize:"0.92rem", fontWeight:700, cursor:"pointer", display:"inline-flex", alignItems:"center", gap:8, fontFamily:"Outfit,sans-serif", transition:"transform 0.3s,box-shadow 0.3s" }} onMouseEnter={e=>{e.target.style.transform="translateY(-3px)";e.target.style.boxShadow="0 16px 40px rgba(139,26,46,0.35)";}} onMouseLeave={e=>{e.target.style.transform="";e.target.style.boxShadow="";}}>Explore Products ↓</button>
              <button onClick={()=>goPage("b2b")} style={{ background:"transparent", color:T.dark, border:"2px solid rgba(26,10,0,0.18)", padding:"11px 26px", borderRadius:50, fontSize:"0.92rem", fontWeight:700, cursor:"pointer", display:"inline-flex", alignItems:"center", gap:8, fontFamily:"Outfit,sans-serif", transition:"all 0.3s" }} onMouseEnter={e=>{e.currentTarget.style.borderColor=T.red;e.currentTarget.style.color=T.red;}} onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(26,10,0,0.18)";e.currentTarget.style.color=T.dark;}}>B2B Wholesale →</button>
            </div>
            <div className="hero-trust" style={{ display:"flex", gap:18, marginTop:30, animation:"revealUp 0.8s 1s both" }}>
              {["✅ 100% Pure","🚚 Pan-India Delivery","🏷️ Private Label"].map(b=><div key={b} style={{ fontSize:"0.78rem",color:T.mid,fontWeight:500 }}>{b}</div>)}
            </div>
          </div>

          {/* JAR */}
          <div className="jar-hero" style={{ width: isMobile?240:360, height: isMobile?320:460, flexShrink:0, position:"relative", animation:"float 7s ease-in-out infinite" }}>
            <JarAnimation/>
          </div>
        </div>

        <div style={{ position:"absolute", bottom:26, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:6, color:T.mid, fontSize:"0.7rem", fontWeight:500, letterSpacing:"0.1em", textTransform:"uppercase", animation:"pulse 2s ease-in-out infinite" }}>
          <span>Scroll</span>
          <div style={{ width:1,height:34,background:"linear-gradient(180deg,rgba(122,74,48,0.5),transparent)" }}/>
        </div>
      </section>

      {/* ─── MARQUEE ──────────────────────────────────── */}
      <div style={{ background:"linear-gradient(135deg,#8B1A2E,#A82438)", padding:"12px 0", overflow:"hidden" }}>
        <div style={{ display:"flex", animation:"marquee 22s linear infinite", width:"max-content" }}>
          {[0,1].map(rep=>(
            <div key={rep} style={{ display:"flex", gap:56, paddingRight:56 }}>
              {["🌿 Premium Hing Powder","🍃 Kasoori Methi","🌶️ 35+ Seasoning Blends","📦 Wholesale & Bulk","🏷️ Private Label","✅ ISO-Grade Purity","🚚 Pan-India Delivery"].map(item=>(
                <span key={item} style={{ color:"white", fontWeight:600, fontSize:"0.82rem", letterSpacing:"0.05em", textTransform:"uppercase", whiteSpace:"nowrap", display:"flex", alignItems:"center", gap:9 }}>
                  {item}<span style={{ width:5,height:5,background:"rgba(255,255,255,0.4)",borderRadius:"50%",display:"inline-block" }}/>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ─── CATEGORIES — Jeton Scroll Spread Effect ──── */}
      <ScrollSpreadSection onCatClick={(cat)=>{setFilter(cat);goPage("products");}}/>

      {/* ─── HOME TESTIMONIALS ────────────────────────── */}
      <section style={{ padding:`88px ${pad}` }}>
        <div style={{ textAlign:"center",marginBottom:48 }}>
          <div style={{ fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:T.orange,marginBottom:10,display:"flex",alignItems:"center",justifyContent:"center",gap:9 }}>
            <span style={{ width:24,height:2,background:"linear-gradient(90deg,#8B1A2E,#A82438)",display:"inline-block" }}/>What Clients Say<span style={{ width:24,height:2,background:"linear-gradient(90deg,#A82438,#8B1A2E)",display:"inline-block" }}/>
          </div>
          <h2 style={{ fontFamily:"Playfair Display,serif",fontSize:"clamp(1.8rem,3.5vw,2.8rem)",fontWeight:900,lineHeight:1.1,letterSpacing:"-0.02em",color:T.dark }}>
            Real Stories, <em style={{ fontStyle:"italic",color:T.red }}>Genuine Satisfaction</em>
          </h2>
        </div>
        <div className="testi-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:18 }}>
          {[
            { name:"Ravi Thakkar",role:"Restaurant Owner, Ahmedabad",initials:"RT",text:"Masala Mandir's hing and spice blends have taken our dishes to the next level. The quality is unmatched, and our customers love the flavor!" },
            { name:"Neha Shah",role:"F&B Procurement, Mumbai",initials:"NS",text:"We've been sourcing kasoori methi and seasonings for over 2 years — consistent quality, prompt delivery, and great support every time." },
            { name:"Ankit Patel",role:"Brand Founder, Gujarat",initials:"AP",text:"Their private labeling service helped launch our spice brand smoothly. The team understood our needs and delivered beyond expectations." },
          ].map((t,i)=>(
            <div key={t.name} style={{ background:"white",borderRadius:20,padding:24,border:"1px solid rgba(200,149,107,0.15)",position:"relative",transition:"transform 0.3s,box-shadow 0.3s",animation:`revealUp 0.6s ${i*0.12}s both` }}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-6px)";e.currentTarget.style.boxShadow="0 20px 50px rgba(139,26,46,0.12)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="";}}>
              <div style={{ fontFamily:"Playfair Display,serif",fontSize:"3.8rem",color:"rgba(139,26,46,0.08)",position:"absolute",top:-8,left:15,lineHeight:1 }}>"</div>
              <div style={{ color:"#B8860B",fontSize:"0.86rem",marginBottom:11 }}>★★★★★</div>
              <p style={{ color:T.mid,lineHeight:1.75,marginBottom:18,fontStyle:"italic",position:"relative" }}>{t.text}</p>
              <div style={{ display:"flex",alignItems:"center",gap:11 }}>
                <div style={{ width:40,height:40,borderRadius:"50%",background:"linear-gradient(135deg,#8B1A2E,#A82438)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:700,fontSize:"0.9rem",flexShrink:0 }}>{t.initials}</div>
                <div><div style={{ fontWeight:700,color:T.dark }}>{t.name}</div><div style={{ fontSize:"0.76rem",color:T.mid }}>{t.role}</div></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      </>}

      {/* ═══ PRODUCTS PAGE ═══════════════════════════════ */}
      {page === "products" && <>
      <section style={{ padding:`50px ${pad} 80px` }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:42, flexWrap:"wrap", gap:16 }}>
          <div>
            <div style={{ fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:T.orange, marginBottom:8, display:"flex", alignItems:"center", gap:9 }}>
              <span style={{ width:24,height:2,background:"linear-gradient(90deg,#8B1A2E,#A82438)",display:"inline-block" }}/>Our Full Range
            </div>
            <h2 style={{ fontFamily:"Playfair Display,serif", fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:900, lineHeight:1.1, letterSpacing:"-0.02em", color:T.dark }}>
              Handpicked <em style={{ fontStyle:"italic",color:T.red }}>Bestsellers</em>
            </h2>
          </div>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            {[{k:"all",l:"All"},{k:"hing",l:"Hing"},{k:"methi",l:"Methi"},{k:"seasoning",l:"Seasoning"}].map(({k,l})=>(
              <button key={k} onClick={()=>setFilter(k)} style={{ padding:"8px 17px", borderRadius:20, border:"1.5px solid", borderColor: filter===k?"transparent":"rgba(26,10,0,0.15)", background: filter===k?"linear-gradient(135deg,#8B1A2E,#A82438)":"transparent", color: filter===k?"white":T.mid, fontSize:"0.82rem", fontWeight:600, cursor:"pointer", fontFamily:"Outfit,sans-serif", transition:"all 0.3s" }}>{l}</button>
            ))}
          </div>
        </div>
        <div className="prod-grid" style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:17 }}>
          {filtered.map((p,i)=>(
            <div key={p.id} style={{ animation:`revealUp 0.6s ${i*0.04}s both` }}>
              <ProductCard product={p} onOpen={setModal}/>
            </div>
          ))}
        </div>
      </section>
      </>}

      {/* ═══ OUR STORY PAGE ══════════════════════════════ */}
      {page === "story" && <>
      <section style={{ padding:`60px ${pad} 90px` }}>
        <div className="story-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"center" }}>
          <div style={{ position:"relative", animation:"revealLeft 0.8s 0.1s both" }}>
            <div style={{ width:"100%", aspectRatio:"4/5", background:"linear-gradient(160deg,#8B1A2E 0%,#A82438 50%,#C8956B 100%)", borderRadius:28, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"7rem", position:"relative", overflow:"hidden", boxShadow:"0 40px 80px rgba(139,26,46,0.25)" }}>
              <div style={{ position:"absolute",inset:0,opacity:0.06,backgroundImage:"radial-gradient(circle,white 1px,transparent 1px)",backgroundSize:"22px 22px" }}/>
              <span style={{ animation:"float 6s ease-in-out infinite",position:"relative",zIndex:1 }}>🏺</span>
            </div>
            {[{label:"Years of Heritage",value:"100+",unit:"yrs",pos:{bottom:-16,right:-16}},{label:"Products",value:"40+",unit:"SKUs",pos:{top:34,left:-16}}].map(({label,value,unit,pos})=>(
              <div key={label} style={{ position:"absolute",...pos,background:"rgba(255,255,255,0.92)",backdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,0.6)",borderRadius:14,padding:"11px 17px",boxShadow:"0 20px 50px rgba(0,0,0,0.1)" }}>
                <div style={{ fontSize:"0.67rem",color:T.mid,fontWeight:500 }}>{label}</div>
                <div style={{ fontFamily:"Playfair Display,serif",fontSize:"1.3rem",fontWeight:900,color:T.dark }}>{value} <span style={{ fontSize:"0.78rem",color:T.orange,fontFamily:"Outfit,sans-serif" }}>{unit}</span></div>
              </div>
            ))}
          </div>
          <div style={{ animation:"revealRight 0.8s 0.25s both" }}>
            <div style={{ fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:T.orange,marginBottom:10,display:"flex",alignItems:"center",gap:9 }}>
              <span style={{ width:24,height:2,background:"linear-gradient(90deg,#8B1A2E,#A82438)",display:"inline-block" }}/>Our Story
            </div>
            <h2 style={{ fontFamily:"Playfair Display,serif",fontSize:"clamp(1.6rem,3vw,2.5rem)",fontWeight:900,lineHeight:1.1,letterSpacing:"-0.02em",color:T.dark,marginBottom:16 }}>
              Rooted in Tradition,<br/><em style={{ fontStyle:"italic",color:T.red }}>Blended for Your Brand</em>
            </h2>
            <p style={{ color:T.mid,lineHeight:1.8,marginBottom:12 }}>Based in Ahmedabad, Gujarat, we manufacture authentic Hing Powder and trade Kasoori Methi and expertly crafted seasoning blends — rooted in purity, tradition, and taste.</p>
            <p style={{ color:T.mid,lineHeight:1.8,marginBottom:26 }}>From retailers and wholesalers to food businesses and private label brands, we are a reliable spice partner at scale.</p>
            {[
              { icon:"⭐",title:"Premium Quality Spices",sub:"Sourced from the finest farms across India" },
              { icon:"📦",title:"Wholesale & Bulk Supply",sub:"Scalable supply for retailers and food businesses" },
              { icon:"🏷️",title:"Private Label Available",sub:"Launch your spice brand with our manufacturing" },
            ].map(f=>(
              <div key={f.title} style={{ display:"flex",alignItems:"center",gap:13,padding:"12px 15px",background:"rgba(168,36,56,0.05)",border:"1px solid rgba(168,36,56,0.14)",borderRadius:12,marginBottom:10,transition:"transform 0.3s" }}
                onMouseEnter={e=>e.currentTarget.style.transform="translateX(8px)"}
                onMouseLeave={e=>e.currentTarget.style.transform=""}>
                <div style={{ width:40,height:40,borderRadius:10,flexShrink:0,background:"linear-gradient(135deg,#8B1A2E,#A82438)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.1rem" }}>{f.icon}</div>
                <div><div style={{ fontWeight:700,color:T.dark,marginBottom:2 }}>{f.title}</div><div style={{ fontSize:"0.8rem",color:T.mid }}>{f.sub}</div></div>
              </div>
            ))}
            <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginTop:10 }}>
              <button onClick={()=>goPage("contact")} style={{ display:"inline-flex",alignItems:"center",gap:8,background:"linear-gradient(135deg,#8B1A2E,#A82438)",color:"white",padding:"13px 26px",borderRadius:50,fontWeight:700,fontSize:"0.9rem",fontFamily:"Outfit,sans-serif",transition:"transform 0.3s,box-shadow 0.3s",border:"none",cursor:"pointer" }} onMouseEnter={e=>{e.target.style.transform="translateY(-2px)";e.target.style.boxShadow="0 12px 30px rgba(139,26,46,0.35)";}} onMouseLeave={e=>{e.target.style.transform="";e.target.style.boxShadow="";}}>
                Start a Conversation →
              </button>
              <a href="https://wa.me/919408754458" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#25D366",color:"white",padding:"13px 22px",borderRadius:50,fontWeight:700,textDecoration:"none",fontSize:"0.9rem",fontFamily:"Outfit,sans-serif",transition:"transform 0.3s,box-shadow 0.3s" }} onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 12px 30px rgba(37,211,102,0.35)";}} onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="";}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ marginTop:80, padding:`70px ${pad}`, background:"linear-gradient(135deg,#8B1A2E 0%,#A82438 100%)", borderRadius:28, position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute",top:"-40%",right:"-8%",width:400,height:400,background:"rgba(255,255,255,0.06)",borderRadius:"50%",pointerEvents:"none" }}/>
          <div className="stats-grid" style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:28,position:"relative" }}>
            <StatCounter target={40} label="Products"/>
            <StatCounter target={5}  label="Years Experience"/>
            <div style={{ textAlign:"center",color:"white" }}>
              <div style={{ fontFamily:"Playfair Display,serif",fontSize:"clamp(2.2rem,5vw,3.4rem)",fontWeight:900,lineHeight:1 }}>24/7</div>
              <div style={{ fontSize:"0.86rem",opacity:0.75,marginTop:7,fontWeight:500 }}>Customer Support</div>
            </div>
            <StatCounter target={500} label="Happy Clients"/>
          </div>
        </div>
      </section>
      </>}

      {/* ═══ B2B PAGE ════════════════════════════════════ */}
      {page === "b2b" && <>
      <section style={{ padding:`60px ${pad} 90px`,background:T.dark,minHeight:"80vh",position:"relative",overflow:"hidden" }}>
        <div style={{ position:"absolute",top:"-30%",left:"-15%",width:520,height:520,background:"radial-gradient(circle,rgba(139,26,46,0.25),transparent 70%)",pointerEvents:"none" }}/>
        <div style={{ position:"absolute",bottom:"-30%",right:"-15%",width:520,height:520,background:"radial-gradient(circle,rgba(168,36,56,0.15),transparent 70%)",pointerEvents:"none" }}/>
        <div style={{ position:"relative",zIndex:1,maxWidth:760,margin:"0 auto",textAlign:"center",paddingTop:40 }}>
          <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:"rgba(168,36,56,0.12)",border:"1px solid rgba(168,36,56,0.3)",borderRadius:20,padding:"6px 16px",fontSize:"0.7rem",fontWeight:700,color:"#C8956B",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:20 }}>🏭 B2B & Wholesale</div>
          <h2 style={{ fontFamily:"Playfair Display,serif",fontSize:"clamp(1.9rem,4vw,3.4rem)",fontWeight:900,color:"white",lineHeight:1.1,marginBottom:16 }}>
            Let's Spice Up<br/><em style={{ fontStyle:"italic",color:"#C8956B" }}>Your Brand</em>
          </h2>
          <p style={{ color:"rgba(255,255,255,0.6)",lineHeight:1.75,marginBottom:34,fontSize:"0.98rem" }}>Partner with Masala Mandir for bulk supply, private label manufacturing, and custom seasoning blends at scale.</p>
          <div style={{ display:"flex",justifyContent:"center",gap:18,flexWrap:"wrap",marginBottom:44 }}>
            {["Bulk & Wholesale Pricing","Private Label Solutions","Custom Blends","Pan-India Delivery","Consistent Supply Chain"].map(f=>(
              <span key={f} style={{ color:"rgba(255,255,255,0.8)",fontSize:"0.85rem",display:"flex",alignItems:"center",gap:7 }}><span style={{ color:"#C8956B",fontWeight:700 }}>✓</span>{f}</span>
            ))}
          </div>
          <div style={{ display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap" }}>
            <button onClick={()=>goPage("contact")} style={{ background:"linear-gradient(135deg,#A82438,#C8956B)",color:"white",border:"none",padding:"15px 44px",borderRadius:50,fontSize:"0.98rem",fontWeight:700,cursor:"pointer",fontFamily:"Outfit,sans-serif",transition:"transform 0.3s,box-shadow 0.3s",display:"inline-flex",alignItems:"center",gap:10 }} onMouseEnter={e=>{e.target.style.transform="translateY(-3px)";e.target.style.boxShadow="0 20px 50px rgba(168,36,56,0.4)";}} onMouseLeave={e=>{e.target.style.transform="";e.target.style.boxShadow="";}}>
              Get a Quote 📩
            </button>
            <a href="https://wa.me/919408754458" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex",alignItems:"center",gap:10,background:"#25D366",color:"white",padding:"15px 36px",borderRadius:50,fontWeight:700,textDecoration:"none",fontSize:"0.98rem",fontFamily:"Outfit,sans-serif",transition:"transform 0.3s,box-shadow 0.3s" }} onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 20px 50px rgba(37,211,102,0.35)";}} onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="";}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
      </>}

      {/* ═══ CONTACT PAGE ════════════════════════════════ */}
      {page === "contact" && <>
      <section style={{ padding:`60px ${pad} 90px` }}>
        <div style={{ textAlign:"center",marginBottom:52 }}>
          <div style={{ fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:T.orange,marginBottom:9 }}>Get in Touch</div>
          <h2 style={{ fontFamily:"Playfair Display,serif",fontSize:"clamp(1.8rem,3.5vw,2.8rem)",fontWeight:900,color:T.dark }}>
            Let's Talk <em style={{ fontStyle:"italic",color:T.red }}>Spice</em>
          </h2>
        </div>
        <div className="cg" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:56,alignItems:"start" }}>
          {/* Info */}
          <div>
            {[
              { icon:"📍",label:"Address",value:"1264/1, Thakorwas, Nr. Milan Transport, Madhupura Road, Ahmedabad, Gujarat — 380004" },
              { icon:"📧",label:"Email",  value:"info@masalamandir.com" },
              { icon:"📞",label:"Phone",  value:"+91 94087 54458 / +91 75730 77725" },
            ].map(d=>(
              <div key={d.label} style={{ display:"flex",alignItems:"flex-start",gap:13,padding:"15px 17px",background:"rgba(168,36,56,0.04)",border:"1px solid rgba(168,36,56,0.12)",borderRadius:13,marginBottom:12,transition:"transform 0.3s" }}
                onMouseEnter={e=>e.currentTarget.style.transform="translateX(8px)"}
                onMouseLeave={e=>e.currentTarget.style.transform=""}>
                <div style={{ width:40,height:40,borderRadius:11,background:"linear-gradient(135deg,#8B1A2E,#A82438)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.05rem",flexShrink:0 }}>{d.icon}</div>
                <div>
                  <div style={{ fontSize:"0.67rem",color:T.mid,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:3 }}>{d.label}</div>
                  <div style={{ color:T.dark,fontWeight:500,lineHeight:1.55,fontSize:"0.9rem" }}>{d.value}</div>
                </div>
              </div>
            ))}
            <div style={{ marginTop:18,background:"linear-gradient(135deg,rgba(139,26,46,0.06),rgba(168,36,56,0.08))",border:"1px solid rgba(168,36,56,0.15)",borderRadius:13,padding:20 }}>
              <div style={{ fontWeight:700,color:T.dark,marginBottom:7 }}>🕐 Business Hours</div>
              <div style={{ color:T.mid,fontSize:"0.87rem",lineHeight:1.8 }}>Monday – Saturday: 9:00 AM – 7:00 PM<br/>Sunday: By appointment only</div>
            </div>
          </div>

          {/* Form */}
          <div>
            <div style={{ fontFamily:"Playfair Display,serif",fontSize:"1.4rem",fontWeight:700,color:T.dark,marginBottom:16 }}>Send an Inquiry</div>

            {/* WhatsApp CTA above form */}
            <a href="https://wa.me/919408754458" target="_blank" rel="noopener noreferrer"
              style={{ display:"flex", alignItems:"center", gap:12, background:"#25D366", color:"white", borderRadius:12, padding:"13px 20px", textDecoration:"none", marginBottom:20, fontFamily:"Outfit,sans-serif", fontWeight:700, fontSize:"0.92rem", transition:"transform 0.3s,box-shadow 0.3s" }}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 10px 28px rgba(37,211,102,0.35)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="";}}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span>Chat on WhatsApp</span>
              <span style={{ marginLeft:"auto", fontSize:"0.8rem", opacity:0.85 }}>+91 94087 54458</span>
            </a>

            <div className="form-row" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:13,marginBottom:13 }}>
              <Field label="Name *"  placeholder="Your full name"   value={fname}  onChange={setFname}/>
              <Field label="Email *" placeholder="your@email.com"   value={femail} onChange={setFemail} type="email"/>
            </div>
            <div style={{ marginBottom:13 }}>
              <Field label="Phone Number *" placeholder="+91 98765 43210" value={fphone} onChange={setFphone} type="tel"/>
            </div>
            <div style={{ marginBottom:13 }}>
              <Field label="Subject" placeholder="Bulk order / Product inquiry / Partnership" value={fsubject} onChange={setFsubject}/>
            </div>
            <div style={{ marginBottom:18 }}>
              <Field label="Message" placeholder="Tell us about your requirements..." value={fmessage} onChange={setFmessage} textarea/>
            </div>
            <button onClick={handleSend} style={{ width:"100%",background: formSent?"linear-gradient(135deg,#2A9D8F,#264653)":"linear-gradient(135deg,#8B1A2E,#A82438)",color:"white",border:"none",padding:"14px 0",borderRadius:12,fontSize:"0.93rem",fontWeight:700,cursor:"pointer",fontFamily:"Outfit,sans-serif",transition:"all 0.4s",display:"flex",alignItems:"center",justifyContent:"center",gap:8 }} onMouseEnter={e=>{if(!formSent){e.target.style.transform="translateY(-2px)";e.target.style.boxShadow="0 12px 30px rgba(139,26,46,0.3)";} }} onMouseLeave={e=>{e.target.style.transform="";e.target.style.boxShadow="";}}>
              {formSent ? "✅ Opening your email app…" : "Send Message 🌶️"}
            </button>
            <p style={{ fontSize:"0.74rem",color:T.mid,marginTop:9,textAlign:"center",lineHeight:1.5 }}>
              Clicking opens your email app pre-filled to <strong>info@masalamandir.com</strong>
            </p>
          </div>
        </div>
      </section>
      </>}

      </div>{/* end page content */}

      {/* ─── FOOTER ───────────────────────────────────── */}
      <footer style={{
        background: "#F7F3F1",
        borderTop: "1px solid rgba(139,26,46,0.1)",
        padding: "48px clamp(18px,5vw,80px) 0",
        fontFamily: "Outfit, sans-serif",
      }}>
        {/* Main footer grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "40px 48px",
          marginBottom: 48,
        }}>
          {/* Brand column */}
          <div>
            <img src={LOGO} alt="Masala Mandir" style={{ height:46, objectFit:"contain", marginBottom:14, display:"block" }}/>
            <p style={{ color:"#7A6060", fontSize:"0.82rem", lineHeight:1.75, maxWidth:260, margin:0 }}>
              Premium hing, kasoori methi and seasoning blends rooted in authentic Indian spice heritage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontSize:"0.68rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"#A88080", marginBottom:16 }}>Quick Links</div>
            <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
              {[["Home","home"],["Products","products"],["Our Story","story"],["B2B / Wholesale","b2b"],["Contact","contact"]].map(([label,pg])=>(
                <button key={label} onClick={()=>goPage(pg)} style={{ color:"#5C3A3A", fontSize:"0.84rem", background:"none", border:"none", cursor:"pointer", fontFamily:"Outfit,sans-serif", textAlign:"left", padding:0, transition:"color 0.25s", width:"fit-content" }}
                  onMouseEnter={e=>e.target.style.color="#8B1A2E"}
                  onMouseLeave={e=>e.target.style.color="#5C3A3A"}>{label}</button>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <div style={{ fontSize:"0.68rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"#A88080", marginBottom:16 }}>Products</div>
            <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
              {[["Hing Powder","products"],["Kasoori Methi","products"],["Seasoning Blends","products"],["B2B / Private Label","b2b"]].map(([label,pg])=>(
                <button key={label} onClick={()=>goPage(pg)} style={{ color:"#5C3A3A", fontSize:"0.84rem", background:"none", border:"none", cursor:"pointer", fontFamily:"Outfit,sans-serif", textAlign:"left", padding:0, transition:"color 0.25s", width:"fit-content" }}
                  onMouseEnter={e=>e.target.style.color="#8B1A2E"}
                  onMouseLeave={e=>e.target.style.color="#5C3A3A"}>{label}</button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize:"0.68rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"#A88080", marginBottom:16 }}>Contact</div>
            <div style={{ display:"flex", flexDirection:"column", gap:9, fontSize:"0.84rem", color:"#5C3A3A" }}>
              <span>Ahmedabad, Gujarat — 380004</span>
              <a href="mailto:info@masalamandir.com" style={{ color:"#5C3A3A", textDecoration:"none", transition:"color 0.25s" }}
                onMouseEnter={e=>e.target.style.color="#8B1A2E"}
                onMouseLeave={e=>e.target.style.color="#5C3A3A"}>info@masalamandir.com</a>
              <a href="tel:+919408754458" style={{ color:"#5C3A3A", textDecoration:"none", transition:"color 0.25s" }}
                onMouseEnter={e=>e.target.style.color="#8B1A2E"}
                onMouseLeave={e=>e.target.style.color="#5C3A3A"}>+91 94087 54458</a>
              <a href="https://wa.me/919408754458" target="_blank" rel="noopener noreferrer"
                style={{ display:"inline-flex", alignItems:"center", gap:7, color:"#25A84E", textDecoration:"none", fontWeight:600, fontSize:"0.82rem", marginTop:4, transition:"opacity 0.25s" }}
                onMouseEnter={e=>e.currentTarget.style.opacity="0.8"}
                onMouseLeave={e=>e.currentTarget.style.opacity="1"}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#25A84E"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height:1, background:"rgba(139,26,46,0.1)", marginBottom:20 }}/>

        {/* Bottom bar — two lines stacked, centered */}
        <div style={{ textAlign:"center", paddingBottom:28 }}>
          <p style={{ fontSize:"0.78rem", color:"#9A7878", margin:"0 0 6px", letterSpacing:"0.01em", lineHeight:1.6 }}>
            © 2026 Masala Mandir. All rights reserved. Infused with authentic Indian flavors.
          </p>
          <p style={{ fontSize:"0.75rem", color:"#B89898", margin:0, lineHeight:1.6 }}>
            Powered by{" "}
            <a
              href="https://morphedai.org/web-studio/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color:"#8B1A2E", textDecoration:"none", fontWeight:600, borderBottom:"1px solid transparent", transition:"border-color 0.25s, color 0.25s" }}
              onMouseEnter={e=>{ e.target.style.borderBottomColor="#8B1A2E"; e.target.style.color="#A82438"; }}
              onMouseLeave={e=>{ e.target.style.borderBottomColor="transparent"; e.target.style.color="#8B1A2E"; }}
            >Morphed AI Pvt. Ltd.</a>
            {" "}admin@morphedai.org
          </p>
        </div>
      </footer>

      <Modal product={modal} onClose={()=>setModal(null)}/>
    </>
  );
}
