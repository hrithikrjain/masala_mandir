import { useState, useEffect, useRef } from "react";

// ─── DESIGN TOKENS ────────────────────────────────────────────────
const T = {
  bg: "#FFF8F2", red: "#E63946", yellow: "#F4A261",
  orange: "#FF7F11", green: "#2A9D8F", dark: "#1A0A00", mid: "#7A4A30",
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
  { id:1,  name:"Vinayak Royal Hing",    cat:"hing", label:"Hing Powder",    img:IMG.hing_royal,           heat:40, aroma:95, flavor:85, desc:"Bold, pure asafoetida powder with intense aroma. Transforms every dal, curry and pickle.", badge:"Bestseller", accent:"#E63946",
    variants:[{size:"10g",price:"₹10"},{size:"25g",price:"₹20"},{size:"50g",price:"₹50"},{size:"100g",price:"₹100"},{size:"250g",price:"₹200"},{size:"500g",price:"₹350"}] },
  { id:2,  name:"Vinayak Premium Hing",  cat:"hing", label:"Hing Powder",    img:IMG.hing_premium,         heat:35, aroma:88, flavor:80, desc:"Refined, balanced aroma for discerning home cooks and professional kitchens.", badge:null, accent:"#E63946",
    variants:[{size:"10g",price:"₹20"},{size:"25g",price:"₹30"},{size:"50g",price:"₹40"},{size:"100g",price:"₹50"},{size:"250g",price:"₹80"},{size:"500g",price:"₹140"}] },
  { id:3,  name:"Vinayak Rajwadi Hing",  cat:"hing", label:"Hing Powder",    img:IMG.hing_rajwadi,         heat:45, aroma:90, flavor:88, desc:"Heritage Rajwadi profile with earthy depth for traditional Indian cooking.", badge:"Traditional", accent:"#E63946",
    variants:[{size:"10g",price:"₹10"},{size:"25g",price:"₹20"},{size:"50g",price:"₹40"},{size:"100g",price:"₹60"},{size:"250g",price:"₹100"},{size:"500g",price:"₹140"}] },
  // ── METHI ──
  { id:4,  name:"Regular Kasoori Methi", cat:"methi", label:"Kasoori Methi", img:IMG.regular_kasuri_methi, heat:10, aroma:75, flavor:70, desc:"Sun-dried fenugreek leaves with a gentle bitter-sweet flavor. Essential for butter chicken.", badge:null, accent:"#2A9D8F", price:"₹120" },
  { id:5,  name:"Premium Kasoori Methi", cat:"methi", label:"Kasoori Methi", img:IMG.premium_kasuri_methi, heat:10, aroma:85, flavor:82, desc:"Select-grade dried fenugreek leaves — vibrant color and superior flavor.", badge:"Premium", accent:"#2A9D8F", price:"₹200" },
  // ── SEASONING ──
  { id:6,  name:"Achari Masala",         cat:"seasoning", label:"Seasoning Blend", img:IMG.achari_masala,      heat:65, aroma:80, flavor:90, desc:"Tangy, pungent blend inspired by bold pickle flavors. Elevates snacks and chaats.", badge:null, accent:"#FF7F11", price:"₹100" },
  { id:7,  name:"Barbeque Masala",       cat:"seasoning", label:"Seasoning Blend", img:IMG.barbeque,           heat:70, aroma:85, flavor:92, desc:"Smoky BBQ seasoning perfect for grilled paneer, cottage cheese and vegetable kebabs.", badge:"Hot Pick", accent:"#E63946", price:"₹150" },
  { id:8,  name:"Peri Peri",             cat:"seasoning", label:"Seasoning Blend", img:IMG.peri_peri,          heat:90, aroma:85, flavor:88, desc:"Fiery peri peri seasoning for fries, grilled paneer and vegetables.", badge:"Spicy", accent:"#E63946", price:"On Request" },
  { id:9,  name:"Pav Bhaji Masala",      cat:"seasoning", label:"Seasoning Blend", img:IMG.pav_bhaji_masala,   heat:50, aroma:88, flavor:95, desc:"Classic Mumbai-style blend giving the beloved street food its iconic taste.", badge:null, accent:"#F4A261", price:"On Request" },
  { id:10, name:"Pani Puri Masala",      cat:"seasoning", label:"Seasoning Blend", img:IMG.pani_puri,          heat:55, aroma:82, flavor:92, desc:"The tangy, minty, spicy magic of India's favorite street snack in powder form.", badge:null, accent:"#2A9D8F", price:"On Request" },
  { id:11, name:"Schezwan Masala",       cat:"seasoning", label:"Seasoning Blend", img:IMG.schezwan,           heat:85, aroma:80, flavor:88, desc:"Bold Indo-Chinese peppercorn heat with garlic punch for noodles and fried rice.", badge:"Trending", accent:"#E63946", price:"On Request" },
  { id:12, name:"Pizza Seasoning",       cat:"seasoning", label:"Seasoning Blend", img:IMG.pizza,              heat:20, aroma:90, flavor:85, desc:"Italian herb and spice blend for pizzas, pasta, and focaccia.", badge:null, accent:"#F4A261", price:"On Request" },
  { id:13, name:"Punjabi Tadka",         cat:"seasoning", label:"Seasoning Blend", img:IMG.punjabi_tadka,      heat:55, aroma:92, flavor:90, desc:"Authentic dhaba-style smoky tadka blend for dals, curries, and parathas.", badge:null, accent:"#FF7F11", price:"On Request" },
  { id:14, name:"Vadapav Masala",        cat:"seasoning", label:"Seasoning Blend", img:IMG.vadapav_masala,     heat:60, aroma:78, flavor:88, desc:"Mumbai's beloved vadapav flavor — tangy, spicy, and totally addictive.", badge:null, accent:"#E63946", price:"On Request" },
  { id:15, name:"Pudina (Mint)",         cat:"seasoning", label:"Seasoning Blend", img:IMG.pudina,             heat:15, aroma:92, flavor:80, desc:"Cool, refreshing mint seasoning for raitas, chaats, and drinks.", badge:null, accent:"#2A9D8F", price:"On Request" },
  { id:16, name:"Cheese Premium",        cat:"seasoning", label:"Seasoning Blend", img:IMG.cheese_premium,     heat:12, aroma:80, flavor:88, desc:"Rich, creamy premium cheese seasoning for snacks, fries and popcorn.", badge:null, accent:"#F4A261", price:"On Request" },
  { id:17, name:"Vanilla",               cat:"seasoning", label:"Seasoning Blend", img:IMG.vanilla,            heat:2,  aroma:90, flavor:82, desc:"Sweet, delicate vanilla flavoring for desserts, shakes and bakery applications.", badge:null, accent:"#F4A261", price:"On Request" },
  { id:18, name:"Tangy Tomato",          cat:"seasoning", label:"Seasoning Blend", img:IMG.tangy_tomato,       heat:35, aroma:78, flavor:88, desc:"Bright, zingy tomato seasoning for chips, fries and snacks with vibrant color.", badge:null, accent:"#E63946", price:"On Request" },
  { id:19, name:"Noodles Masala",        cat:"seasoning", label:"Seasoning Blend", img:IMG.noodles,            heat:45, aroma:80, flavor:88, desc:"Savory, umami-rich noodle seasoning for instant and restaurant-style noodle dishes.", badge:null, accent:"#E63946", price:"On Request" },
  { id:20, name:"Nachos Seasoning",      cat:"seasoning", label:"Seasoning Blend", img:IMG.nachos,             heat:30, aroma:78, flavor:88, desc:"Cheesy, tangy nacho-style seasoning for popcorn, fries and chips.", badge:null, accent:"#F4A261", price:"On Request" },
  { id:21, name:"Manchurian Powder",     cat:"seasoning", label:"Seasoning Blend", img:IMG.manchurian,         heat:60, aroma:82, flavor:90, desc:"Authentic Indo-Chinese Manchurian blend — savory, garlicky and perfectly balanced.", badge:null, accent:"#FF7F11", price:"On Request" },
  { id:22, name:"Lemon Chilli",          cat:"seasoning", label:"Seasoning Blend", img:IMG.lemon_chilli,       heat:45, aroma:88, flavor:85, desc:"Zesty lemon with a chilli kick — bright citrus punch for chaats and snacks.", badge:null, accent:"#F4A261", price:"On Request" },
  { id:23, name:"Mexican Masala",        cat:"seasoning", label:"Seasoning Blend", img:IMG.mexican,            heat:65, aroma:82, flavor:90, desc:"Smoky chipotle-inspired Mexican blend for tacos, burritos and grilled corn.", badge:null, accent:"#FF7F11", price:"On Request" },
  { id:24, name:"Kurkure Masala",        cat:"seasoning", label:"Seasoning Blend", img:IMG.kurkure,            heat:50, aroma:76, flavor:88, desc:"That addictive tangy-spicy crunch coating — perfect for extruded snacks and munchies.", badge:null, accent:"#E63946", price:"On Request" },
  { id:25, name:"Katori Tomato",         cat:"seasoning", label:"Seasoning Blend", img:IMG.katori_tomato,      heat:40, aroma:75, flavor:86, desc:"Classic tangy tomato seasoning tailored for katori-style snacks and chaats.", badge:null, accent:"#E63946", price:"On Request" },
  { id:26, name:"Jeeralu",               cat:"seasoning", label:"Seasoning Blend", img:IMG.jeeralu,            heat:20, aroma:92, flavor:88, desc:"Cumin-forward Gujarati jeeralu blend — earthy, aromatic and delicately spiced.", badge:null, accent:"#FF7F11", price:"On Request" },
  { id:27, name:"Jain Tangy Tomato",     cat:"seasoning", label:"Seasoning Blend", img:IMG.jain_tangy_tomato,  heat:35, aroma:76, flavor:86, desc:"No onion, no garlic tangy tomato seasoning crafted for Jain dietary preferences.", badge:"Jain", accent:"#2A9D8F", price:"On Request" },
  { id:28, name:"Jain Pizza",            cat:"seasoning", label:"Seasoning Blend", img:IMG.jain_pizza,         heat:15, aroma:88, flavor:83, desc:"Jain-friendly Italian herb blend — no onion, no garlic, full pizza flavour.", badge:"Jain", accent:"#2A9D8F", price:"On Request" },
  { id:29, name:"Jain Peri Peri",        cat:"seasoning", label:"Seasoning Blend", img:IMG.jain_peri_peri,     heat:85, aroma:82, flavor:86, desc:"Fiery Jain peri peri — all the heat, none of the onion or garlic.", badge:"Jain", accent:"#2A9D8F", price:"On Request" },
  { id:30, name:"Jain Maggie Masala",    cat:"seasoning", label:"Seasoning Blend", img:IMG.jain_maggie,        heat:40, aroma:80, flavor:88, desc:"Jain-certified noodle masala blend — the beloved Maggie flavour, Jain style.", badge:"Jain", accent:"#2A9D8F", price:"On Request" },
  { id:31, name:"Garlic Powder",         cat:"seasoning", label:"Seasoning Blend", img:IMG.garlic,             heat:18, aroma:90, flavor:88, desc:"Pure, aromatic garlic powder — a kitchen essential for marinades, breads and dips.", badge:null, accent:"#FF7F11", price:"On Request" },
  { id:32, name:"Cream & Onion",         cat:"seasoning", label:"Seasoning Blend", img:IMG.cream_onion,        heat:10, aroma:85, flavor:90, desc:"Classic cream and onion seasoning — the all-time favourite snack coating.", badge:null, accent:"#F4A261", price:"On Request" },
  { id:33, name:"Chilli Flakes",         cat:"seasoning", label:"Seasoning Blend", img:IMG.chilli_flakes,      heat:80, aroma:78, flavor:82, desc:"Coarse red chilli flakes for pizzas, pastas and any dish that needs a fiery kick.", badge:null, accent:"#E63946", price:"On Request" },
  { id:34, name:"Cheese Seasoning",      cat:"seasoning", label:"Seasoning Blend", img:IMG.cheese_seasoning,   heat:8,  aroma:78, flavor:88, desc:"Versatile cheese seasoning for popcorn, fries, pasta and bakery products.", badge:null, accent:"#F4A261", price:"On Request" },
  { id:35, name:"Cheese Tomato",         cat:"seasoning", label:"Seasoning Blend", img:IMG.cheese_tomato,      heat:20, aroma:80, flavor:90, desc:"Tangy tomato meets creamy cheese in this crowd-pleasing snack seasoning blend.", badge:null, accent:"#E63946", price:"On Request" },
  { id:36, name:"Cheese Herbs",          cat:"seasoning", label:"Seasoning Blend", img:IMG.cheese_herbs,       heat:10, aroma:88, flavor:88, desc:"Cheese seasoning elevated with aromatic Italian herbs — perfect for baked snacks.", badge:null, accent:"#2A9D8F", price:"On Request" },
  { id:37, name:"Chatpata Masala",       cat:"seasoning", label:"Seasoning Blend", img:IMG.chatpata,           heat:60, aroma:82, flavor:92, desc:"The ultimate chatpata blend — tangy, spicy, sweet and utterly irresistible.", badge:null, accent:"#FF7F11", price:"On Request" },
  { id:38, name:"Butter Garlic",         cat:"seasoning", label:"Seasoning Blend", img:IMG.butter_garlic,      heat:12, aroma:92, flavor:90, desc:"Rich butter and roasted garlic seasoning for breads, corn, noodles and snacks.", badge:null, accent:"#F4A261", price:"On Request" },
  { id:39, name:"Black Pepper",          cat:"seasoning", label:"Seasoning Blend", img:IMG.black_pepper,       heat:60, aroma:80, flavor:85, desc:"Premium ground black pepper — sharp, pungent and aromatic. A timeless kitchen essential.", badge:null, accent:"#7A4A30", price:"On Request" },
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
    const COLORS = ["#E63946","#FF7F11","#F4A261","#2A9D8F"];
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
      <div style={{ position:"absolute", width:"85%", height:"70%", borderRadius:"50%", border:"1px dashed rgba(255,127,17,0.18)", top:"15%", left:"7.5%", pointerEvents:"none" }}/>

      {/* Orbiting dots */}
      {[
        { color:"#E63946", anim:"orbit0", size:10 },
        { color:"#FF7F11", anim:"orbit1", size:7 },
        { color:"#2A9D8F", anim:"orbit2", size:8 },
      ].map((d,i) => (
        <div key={i} style={{ position:"absolute", top:"50%", left:"50%", width:d.size, height:d.size, background:d.color, borderRadius:"50%", opacity:0.75, animation:`${d.anim} ${6+i*3}s linear infinite`, transformOrigin:"-80px -80px", boxShadow:`0 0 8px ${d.color}` }}/>
      ))}

      {/* Jar + lid group */}
      <div style={{ position:"relative", width:"58%", maxWidth:220, transition:"transform 0.6s cubic-bezier(0.34,1.56,0.64,1)", transform: jarTilt }}>

        {/* Powder pour stream */}
        <div style={{ position:"absolute", top:"-14%", left:"50%", transform:"translateX(-50%)", width:28, opacity: pourShow ? 1 : 0, transition:"opacity 0.5s", pointerEvents:"none", zIndex:5 }}>
          {/* stream */}
          <div style={{ width:"100%", background:"linear-gradient(180deg,#FF7F11,rgba(244,162,97,0))", borderRadius:"6px 6px 0 0", height:80, marginBottom:0, animation: pourShow ? "pourFlow 0.5s ease-in-out infinite" : "none" }}/>
          {/* dust cloud at base */}
          <div style={{ width:50, height:16, marginLeft:-11, background:"radial-gradient(ellipse,rgba(244,162,97,0.35),transparent 70%)", animation: pourShow ? "dustPuff 0.8s ease-out infinite" : "none" }}/>
          {/* speckles */}
          {SPECK_OFFSETS.map(([x,y,tx,ty],i) => (
            <div key={i} style={{
              position:"absolute", top: y-10, left:"50%",
              width: 5-i*0.5, height: 5-i*0.5,
              borderRadius:"50%",
              background: i%2===0 ? "#FF7F11" : "#F4A261",
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
          <div style={{ width:"38%", margin:"0 auto", height:"14%", minHeight:14, background:"linear-gradient(135deg,#B5202D,#8B1520)", borderRadius:"8px 8px 0 0", boxShadow:"inset 0 2px 4px rgba(255,255,255,0.2)" }}/>
          {/* lid main */}
          <div style={{ width:"100%", height:0, paddingBottom:"28%", background:"linear-gradient(135deg,#E63946,#C62A35)", borderRadius:10, position:"relative", overflow:"hidden", boxShadow:"0 -4px 16px rgba(230,57,70,0.4)" }}>
            <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontFamily:"Playfair Display,serif", fontSize:"0.55rem", fontWeight:900, color:"rgba(255,255,255,0.85)", letterSpacing:"0.1em" }}>MASALA MANDIR</span>
            </div>
            <div style={{ position:"absolute", top:"20%", left:"8%", right:"8%", height:"25%", background:"rgba(255,255,255,0.18)", borderRadius:4 }}/>
          </div>
          {/* lid skirt */}
          <div style={{ width:"108%", marginLeft:"-4%", height:10, background:"linear-gradient(135deg,#C62A35,#991520)", borderRadius:"0 0 4px 4px" }}/>
        </div>

        {/* JAR BODY */}
        <div style={{ width:"100%", position:"relative" }}>
          {/* neck */}
          <div style={{ width:"82%", margin:"0 auto", height:22, background:"linear-gradient(90deg,rgba(255,255,255,0.9),rgba(255,248,242,0.7))", border:"1.5px solid rgba(255,255,255,0.7)", borderRadius:"6px 6px 0 0", boxShadow:"inset 0 1px 3px rgba(255,255,255,0.5)" }}/>
          {/* main glass */}
          <div style={{ width:"100%", paddingBottom:"130%", position:"relative", background:"linear-gradient(160deg,rgba(255,255,255,0.92) 0%,rgba(255,248,242,0.7) 40%,rgba(244,162,97,0.32) 100%)", borderRadius:"0 0 22px 22px", border:"1.5px solid rgba(255,255,255,0.7)", overflow:"hidden", boxShadow:"20px 10px 40px rgba(244,162,97,0.2),-6px 0 20px rgba(255,255,255,0.5),0 30px 60px rgba(230,57,70,0.18)" }}>
            {/* spice fill */}
            <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"52%", background:"linear-gradient(180deg,rgba(255,127,17,0.2),rgba(230,57,70,0.4))", borderRadius:"0 0 20px 20px" }}/>
            {/* shimmer */}
            <div style={{ position:"absolute", top:0, left:"-30%", width:"40%", height:"100%", background:"linear-gradient(105deg,transparent,rgba(255,255,255,0.45),transparent)", animation:"shimmerSlide 3s ease-in-out infinite", pointerEvents:"none" }}/>
            {/* label */}
            <div style={{ position:"absolute", bottom:"18%", left:"50%", transform:"translateX(-50%)", background:"rgba(255,255,255,0.93)", backdropFilter:"blur(8px)", borderRadius:10, padding:"10px 14px", textAlign:"center", width:"75%", border:"1px solid rgba(255,127,17,0.25)", boxShadow:"0 4px 14px rgba(0,0,0,0.08)" }}>
              <div style={{ fontSize:"0.42rem", fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:T.orange, fontFamily:"Outfit,sans-serif", marginBottom:2 }}>MASALA MANDIR</div>
              <div style={{ fontFamily:"Playfair Display,serif", fontSize:"0.75rem", fontWeight:900, color:T.dark, lineHeight:1.2 }}>Royal Hing</div>
              <div style={{ width:"60%", margin:"4px auto", height:1, background:"rgba(255,127,17,0.3)" }}/>
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
      {angles.map((a,i)=><text key={i} x={cx+Math.cos(a)*(r+10)} y={cy+Math.sin(a)*(r+10)+3} textAnchor="middle" fontSize="6" fill="#7A4A30" fontFamily="Outfit,sans-serif" fontWeight="600">{labels[i]}</text>)}
    </svg>
  );
}

// ─── PARTICLE BURST ──────────────────────────────────────────────
function ParticleBurst({ active, accent }) {
  if (!active) return null;
  return (
    <div style={{ position:"absolute", inset:0, pointerEvents:"none", overflow:"hidden", borderRadius:"inherit" }}>
      {Array.from({length:12}).map((_,i)=>(
        <div key={i} style={{ position:"absolute", top:"50%", left:"50%", width:6, height:6, borderRadius:"50%", background: i%3===0?accent:i%3===1?"#FF7F11":"#F4A261", transform:`translate(-50%,-50%) rotate(${(i/12)*360}deg) translateX(50px)`, animation:"popOut 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards" }}/>
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
      style={{ background: hov?`${product.accent}06`:"white", borderRadius:20, overflow:"hidden", cursor:"pointer", position:"relative", border:`1.5px solid ${hov?product.accent+"33":"rgba(244,162,97,0.15)"}`, boxShadow: hov?`0 28px 60px ${product.accent}22`:     "0 2px 16px rgba(0,0,0,0.06)", transform: hov?"translateY(-10px) scale(1.02)":"translateY(0) scale(1)", transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)" }}>
      {product.badge&&<div style={{ position:"absolute",top:12,left:12,zIndex:2,background:`linear-gradient(135deg,${product.accent},#FF7F11)`,color:"white",fontSize:"0.62rem",fontWeight:700,padding:"3px 10px",borderRadius:20,letterSpacing:"0.06em",textTransform:"uppercase" }}>{product.badge}</div>}
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
        <button style={{ width:"100%", background: hov?`linear-gradient(135deg,${product.accent},#FF7F11)`:"transparent", color: hov?"white":T.mid, border:`1.5px solid ${hov?"transparent":"rgba(122,74,48,0.2)"}`, padding:"9px 0", borderRadius:10, fontSize:"0.8rem", fontWeight:600, cursor:"pointer", fontFamily:"Outfit,sans-serif", transition:"all 0.3s", display:"flex", alignItems:"center", justifyContent:"center", gap:5 }}>
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
                  <div style={{ height:"100%", borderRadius:3, background:`linear-gradient(90deg,${product.accent},#FF7F11)`, width: anim?`${val}%`:"0%", transition:"width 1.2s cubic-bezier(0.34,1.56,0.64,1)" }}/>
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
  const base = { width:"100%", background:"white", border:`1.5px solid ${foc?T.orange:"rgba(26,10,0,0.1)"}`, borderRadius:11, padding:"12px 15px", fontSize:"0.88rem", fontFamily:"Outfit,sans-serif", color:T.dark, outline:"none", transition:"border-color 0.3s", boxSizing:"border-box", display:"block" };
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
    {label:"Home",href:"#home"},{label:"Shop",href:"#products"},
    {label:"About",href:"#story"},{label:"B2B",href:"#b2b"},{label:"Contact",href:"#contact"},
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Outfit:wght@300;400;500;600;700&display=swap');
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
        html{scroll-behavior:smooth;}
        body{font-family:'Outfit',sans-serif;background:#FFF8F2;color:#1A0A00;overflow-x:hidden;-webkit-tap-highlight-color:transparent;}
        ::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-track{background:#FFF8F2;}::-webkit-scrollbar-thumb{background:#FF7F11;border-radius:3px;}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes slideUp{from{opacity:0;transform:translateY(40px) scale(0.95)}to{opacity:1;transform:translateY(0) scale(1)}}
        @keyframes revealUp{from{opacity:0;transform:translateY(38px)}to{opacity:1;transform:translateY(0)}}
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

      {/* ─── NAV ──────────────────────────────────────── */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:1000, padding:`${navScr?"12px":"18px"} ${pad}`, display:"flex", alignItems:"center", justifyContent:"space-between", background:"rgba(255,248,242,0.9)", backdropFilter:"blur(24px)", borderBottom: navScr?"1px solid rgba(230,57,70,0.12)":"1px solid transparent", boxShadow: navScr?"0 4px 40px rgba(230,57,70,0.08)":"none", transition:"all 0.35s" }}>
        <a href="#home" style={{ display:"flex", alignItems:"center", textDecoration:"none", flexShrink:0 }}>
          <img src={LOGO} alt="Masala Mandir" style={{ height:44, width:"auto", objectFit:"contain" }}/>
        </a>
        <div className="nav-desk" style={{ display:"flex", gap:26, alignItems:"center" }}>
          {NAV.map(l=>(
            <a key={l.label} href={l.href} style={{ textDecoration:"none", color:T.dark, fontWeight:500, fontSize:"0.85rem", letterSpacing:"0.05em", textTransform:"uppercase", transition:"color 0.3s" }}
              onMouseEnter={e=>e.target.style.color=T.red} onMouseLeave={e=>e.target.style.color=T.dark}>{l.label}</a>
          ))}
          <a href="#contact" style={{ background:"linear-gradient(135deg,#E63946,#FF7F11)", color:"white", padding:"9px 20px", borderRadius:28, fontWeight:700, textDecoration:"none", fontSize:"0.83rem", transition:"transform 0.3s,box-shadow 0.3s" }} onMouseEnter={e=>{e.target.style.transform="translateY(-2px)";e.target.style.boxShadow="0 8px 24px rgba(230,57,70,0.4)";}} onMouseLeave={e=>{e.target.style.transform="";e.target.style.boxShadow="";}}>Inquire</a>
        </div>
        <button className="hamburger" style={{ display:"none", flexDirection:"column", gap:5, background:"none", border:"none", padding:4, cursor:"pointer" }} onClick={()=>setMenu(!menu)}>
          {[0,1,2].map(i=><span key={i} style={{ width:24,height:2,background:T.dark,borderRadius:2,display:"block",transition:"all 0.3s",transform:menu&&i===0?"rotate(45deg) translate(5px,5px)":menu&&i===2?"rotate(-45deg) translate(5px,-5px)":"none",opacity:menu&&i===1?0:1 }}/>)}
        </button>
      </nav>
      {menu&&(
        <div style={{ position:"fixed",inset:0,zIndex:999,background:T.bg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:32,animation:"fadeIn 0.3s ease" }}>
          {NAV.map(l=><a key={l.label} href={l.href} onClick={()=>setMenu(false)} style={{ fontFamily:"Playfair Display,serif",fontSize:"2rem",fontWeight:700,color:T.dark,textDecoration:"none" }}>{l.label}</a>)}
        </div>
      )}

      {/* ─── HERO ─────────────────────────────────────── */}
      <section id="home" style={{ minHeight:"100vh", position:"relative", display:"flex", alignItems:"center", paddingTop:90, overflow:"hidden", background:`radial-gradient(ellipse at 60% 50%,rgba(244,162,97,0.22) 0%,transparent 55%),radial-gradient(ellipse at 15% 85%,rgba(230,57,70,0.1) 0%,transparent 50%),#FFF8F2` }}>
        <SpiceBgCanvas/>
        <div style={{ position:"absolute", top:"50%", left:"50%", transform:`translate(-50%,-50%) translateY(${scrollY*0.12}px)`, fontFamily:"Playfair Display,serif", fontSize:"clamp(5rem,18vw,17rem)", fontWeight:900, color:"rgba(230,57,70,0.035)", whiteSpace:"nowrap", userSelect:"none", pointerEvents:"none", lineHeight:1 }}>SPICE</div>

        <div className="hero-inner" style={{ position:"relative", zIndex:10, width:"100%", padding:`0 ${pad}`, display:"flex", alignItems:"center", justifyContent:"space-between", gap:32 }}>
          {/* Text */}
          <div style={{ maxWidth:600, flex:"1 1 auto" }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,127,17,0.1)", border:"1px solid rgba(255,127,17,0.3)", borderRadius:20, padding:"5px 15px", fontSize:"0.7rem", fontWeight:700, color:T.orange, letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:18, animation:"revealUp 0.8s 0.2s both" }}>
              🌶️ Premium Indian Spices — Ahmedabad, Gujarat
            </div>
            <h1 style={{ fontFamily:"Playfair Display,serif", fontSize:"clamp(2.4rem,5.5vw,5.2rem)", fontWeight:900, lineHeight:1.06, letterSpacing:"-0.03em", color:T.dark, marginBottom:18, animation:"revealUp 0.8s 0.4s both" }}>
              Where Tradition<br/>Meets{" "}
              <em style={{ fontStyle:"italic", background:"linear-gradient(135deg,#E63946,#FF7F11)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Flavor.</em>
            </h1>
            <p style={{ fontSize:"1rem", lineHeight:1.75, color:T.mid, maxWidth:490, marginBottom:32, animation:"revealUp 0.8s 0.6s both" }}>
              Premium Hing, Kasoori Methi &amp; 35+ seasoning blends crafted with age-old Indian spice heritage for your kitchen or brand.
            </p>
            <div className="hero-btns" style={{ display:"flex", gap:13, flexWrap:"wrap", animation:"revealUp 0.8s 0.8s both" }}>
              <a href="#products" style={{ background:"linear-gradient(135deg,#E63946,#FF7F11)", color:"white", border:"none", padding:"13px 28px", borderRadius:50, fontSize:"0.92rem", fontWeight:700, cursor:"pointer", textDecoration:"none", display:"inline-flex", alignItems:"center", gap:8, fontFamily:"Outfit,sans-serif", transition:"transform 0.3s,box-shadow 0.3s" }} onMouseEnter={e=>{e.target.style.transform="translateY(-3px)";e.target.style.boxShadow="0 16px 40px rgba(230,57,70,0.35)";}} onMouseLeave={e=>{e.target.style.transform="";e.target.style.boxShadow="";}}>Explore Products ↓</a>
              <a href="#b2b" style={{ background:"transparent", color:T.dark, border:"2px solid rgba(26,10,0,0.18)", padding:"11px 26px", borderRadius:50, fontSize:"0.92rem", fontWeight:700, cursor:"pointer", textDecoration:"none", display:"inline-flex", alignItems:"center", gap:8, fontFamily:"Outfit,sans-serif", transition:"all 0.3s" }} onMouseEnter={e=>{e.currentTarget.style.borderColor=T.red;e.currentTarget.style.color=T.red;}} onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(26,10,0,0.18)";e.currentTarget.style.color=T.dark;}}>B2B Wholesale →</a>
            </div>
            <div className="hero-trust" style={{ display:"flex", gap:18, marginTop:30, animation:"revealUp 0.8s 1s both" }}>
              {["✅ 100% Pure","🚚 Pan-India Delivery","🏷️ Private Label"].map(b=><div key={b} style={{ fontSize:"0.78rem",color:T.mid,fontWeight:500 }}>{b}</div>)}
            </div>
          </div>

          {/* JAR — fully visible on mobile + desktop */}
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
      <div style={{ background:"linear-gradient(135deg,#E63946,#FF7F11)", padding:"12px 0", overflow:"hidden" }}>
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

      {/* ─── CATEGORIES ───────────────────────────────── */}
      <section style={{ padding:`80px ${pad}` }}>
        <div style={{ fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:T.orange, marginBottom:10, display:"flex", alignItems:"center", gap:9 }}>
          <span style={{ width:24,height:2,background:"linear-gradient(90deg,#E63946,#FF7F11)",display:"inline-block" }}/>Collections
        </div>
        <h2 style={{ fontFamily:"Playfair Display,serif", fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:900, lineHeight:1.1, letterSpacing:"-0.02em", color:T.dark, marginBottom:38 }}>
          Explore Every <em style={{ fontStyle:"italic", color:T.red }}>Flavor</em> We Craft
        </h2>
        <div className="cat-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }}>
          {[
            { cat:"hing",      name:"Hing Powder",      tag:"Pure Asafoetida", count:"3 products",   emoji:"🫙",  grad:"linear-gradient(150deg,#E63946,#FF7F11)" },
            { cat:"methi",     name:"Kasoori Methi",    tag:"Dried Fenugreek", count:"2 products",   emoji:"🌿", grad:"linear-gradient(150deg,#2A9D8F,#264653)" },
            { cat:"seasoning", name:"Seasoning Blends", tag:"Custom Masalas",  count:"35+ products", emoji:"🌶️", grad:"linear-gradient(150deg,#F4A261,#E76F51)" },
          ].map((c,i)=>(
            <CatCard key={c.cat} {...c} onClick={()=>{setFilter(c.cat);document.getElementById("products")?.scrollIntoView({behavior:"smooth"});}} delay={i*0.1}/>
          ))}
        </div>
      </section>

      {/* ─── PRODUCTS ─────────────────────────────────── */}
      <section id="products" style={{ padding:`70px ${pad}`, background:"linear-gradient(180deg,#FFF8F2 0%,#FFF0E6 100%)" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:42, flexWrap:"wrap", gap:16 }}>
          <div>
            <div style={{ fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:T.orange, marginBottom:8, display:"flex", alignItems:"center", gap:9 }}>
              <span style={{ width:24,height:2,background:"linear-gradient(90deg,#E63946,#FF7F11)",display:"inline-block" }}/>Our Range
            </div>
            <h2 style={{ fontFamily:"Playfair Display,serif", fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:900, lineHeight:1.1, letterSpacing:"-0.02em", color:T.dark }}>
              Handpicked <em style={{ fontStyle:"italic",color:T.red }}>Bestsellers</em>
            </h2>
          </div>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            {[{k:"all",l:"All"},{k:"hing",l:"Hing"},{k:"methi",l:"Methi"},{k:"seasoning",l:"Seasoning"}].map(({k,l})=>(
              <button key={k} onClick={()=>setFilter(k)} style={{ padding:"8px 17px", borderRadius:20, border:"1.5px solid", borderColor: filter===k?"transparent":"rgba(26,10,0,0.15)", background: filter===k?"linear-gradient(135deg,#E63946,#FF7F11)":"transparent", color: filter===k?"white":T.mid, fontSize:"0.82rem", fontWeight:600, cursor:"pointer", fontFamily:"Outfit,sans-serif", transition:"all 0.3s" }}>{l}</button>
            ))}
          </div>
        </div>
        <div className="prod-grid" style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:17 }}>
          {filtered.map((p,i)=>(
            <div key={p.id} style={{ animation:`revealUp 0.6s ${i*0.06}s both` }}>
              <ProductCard product={p} onOpen={setModal}/>
            </div>
          ))}
        </div>
      </section>

      {/* ─── STORY ────────────────────────────────────── */}
      <section id="story" ref={storyRef} style={{ padding:`90px ${pad}` }}>
        <div className="story-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"center" }}>
          <div style={{ position:"relative", opacity:storyVis?1:0, transform:storyVis?"translateX(0)":"translateX(-45px)", transition:"all 1s cubic-bezier(0.34,1.56,0.64,1) 0.2s" }}>
            <div style={{ width:"100%", aspectRatio:"4/5", background:"linear-gradient(160deg,#E63946 0%,#FF7F11 50%,#F4A261 100%)", borderRadius:28, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"7rem", position:"relative", overflow:"hidden", boxShadow:"0 40px 80px rgba(230,57,70,0.25)" }}>
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
          <div style={{ opacity:storyVis?1:0,transform:storyVis?"translateX(0)":"translateX(45px)",transition:"all 1s cubic-bezier(0.34,1.56,0.64,1) 0.4s" }}>
            <div style={{ fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:T.orange,marginBottom:10,display:"flex",alignItems:"center",gap:9 }}>
              <span style={{ width:24,height:2,background:"linear-gradient(90deg,#E63946,#FF7F11)",display:"inline-block" }}/>Our Story
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
              <div key={f.title} style={{ display:"flex",alignItems:"center",gap:13,padding:"12px 15px",background:"rgba(255,127,17,0.05)",border:"1px solid rgba(255,127,17,0.14)",borderRadius:12,marginBottom:10,transition:"transform 0.3s" }}
                onMouseEnter={e=>e.currentTarget.style.transform="translateX(8px)"}
                onMouseLeave={e=>e.currentTarget.style.transform=""}>
                <div style={{ width:40,height:40,borderRadius:10,flexShrink:0,background:"linear-gradient(135deg,#E63946,#FF7F11)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.1rem" }}>{f.icon}</div>
                <div><div style={{ fontWeight:700,color:T.dark,marginBottom:2 }}>{f.title}</div><div style={{ fontSize:"0.8rem",color:T.mid }}>{f.sub}</div></div>
              </div>
            ))}
            <a href="#contact" style={{ display:"inline-flex",alignItems:"center",gap:8,marginTop:10,background:"linear-gradient(135deg,#E63946,#FF7F11)",color:"white",padding:"13px 26px",borderRadius:50,fontWeight:700,textDecoration:"none",fontSize:"0.9rem",fontFamily:"Outfit,sans-serif",transition:"transform 0.3s,box-shadow 0.3s" }} onMouseEnter={e=>{e.target.style.transform="translateY(-2px)";e.target.style.boxShadow="0 12px 30px rgba(230,57,70,0.35)";}} onMouseLeave={e=>{e.target.style.transform="";e.target.style.boxShadow="";}}>
              Start a Conversation →
            </a>
          </div>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────── */}
      <section style={{ padding:`70px ${pad}`,background:"linear-gradient(135deg,#E63946 0%,#FF7F11 100%)",position:"relative",overflow:"hidden" }}>
        <div style={{ position:"absolute",top:"-40%",right:"-8%",width:450,height:450,background:"rgba(255,255,255,0.06)",borderRadius:"50%",pointerEvents:"none" }}/>
        <div className="stats-grid" style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:28,position:"relative" }}>
          <StatCounter target={40} label="Products"/>
          <StatCounter target={5}  label="Years Experience"/>
          <div style={{ textAlign:"center",color:"white" }}>
            <div style={{ fontFamily:"Playfair Display,serif",fontSize:"clamp(2.2rem,5vw,3.4rem)",fontWeight:900,lineHeight:1 }}>24/7</div>
            <div style={{ fontSize:"0.86rem",opacity:0.75,marginTop:7,fontWeight:500 }}>Customer Support</div>
          </div>
          <StatCounter target={500} label="Happy Clients"/>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────── */}
      <section style={{ padding:`88px ${pad}` }}>
        <div style={{ textAlign:"center",marginBottom:48 }}>
          <div style={{ fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:T.orange,marginBottom:10,display:"flex",alignItems:"center",justifyContent:"center",gap:9 }}>
            <span style={{ width:24,height:2,background:"linear-gradient(90deg,#E63946,#FF7F11)",display:"inline-block" }}/>What Clients Say<span style={{ width:24,height:2,background:"linear-gradient(90deg,#FF7F11,#E63946)",display:"inline-block" }}/>
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
            <div key={t.name} style={{ background:"white",borderRadius:20,padding:24,border:"1px solid rgba(244,162,97,0.15)",position:"relative",transition:"transform 0.3s,box-shadow 0.3s",animation:`revealUp 0.6s ${i*0.12}s both` }}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-6px)";e.currentTarget.style.boxShadow="0 20px 50px rgba(230,57,70,0.12)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="";}}>
              <div style={{ fontFamily:"Playfair Display,serif",fontSize:"3.8rem",color:"rgba(230,57,70,0.08)",position:"absolute",top:-8,left:15,lineHeight:1 }}>"</div>
              <div style={{ color:"#FFB300",fontSize:"0.86rem",marginBottom:11 }}>★★★★★</div>
              <p style={{ color:T.mid,lineHeight:1.75,marginBottom:18,fontStyle:"italic",position:"relative" }}>{t.text}</p>
              <div style={{ display:"flex",alignItems:"center",gap:11 }}>
                <div style={{ width:40,height:40,borderRadius:"50%",background:"linear-gradient(135deg,#E63946,#FF7F11)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:700,fontSize:"0.9rem",flexShrink:0 }}>{t.initials}</div>
                <div><div style={{ fontWeight:700,color:T.dark }}>{t.name}</div><div style={{ fontSize:"0.76rem",color:T.mid }}>{t.role}</div></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── B2B ──────────────────────────────────────── */}
      <section id="b2b" style={{ padding:`88px ${pad}`,background:T.dark,position:"relative",overflow:"hidden" }}>
        <div style={{ position:"absolute",top:"-30%",left:"-15%",width:520,height:520,background:"radial-gradient(circle,rgba(230,57,70,0.18),transparent 70%)",pointerEvents:"none" }}/>
        <div style={{ position:"absolute",bottom:"-30%",right:"-15%",width:520,height:520,background:"radial-gradient(circle,rgba(255,127,17,0.12),transparent 70%)",pointerEvents:"none" }}/>
        <div style={{ position:"relative",zIndex:1,maxWidth:760,margin:"0 auto",textAlign:"center" }}>
          <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,127,17,0.12)",border:"1px solid rgba(255,127,17,0.3)",borderRadius:20,padding:"6px 16px",fontSize:"0.7rem",fontWeight:700,color:T.orange,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:20 }}>🏭 B2B & Wholesale</div>
          <h2 style={{ fontFamily:"Playfair Display,serif",fontSize:"clamp(1.9rem,4vw,3.4rem)",fontWeight:900,color:"white",lineHeight:1.1,marginBottom:16 }}>
            Let's Spice Up<br/><em style={{ fontStyle:"italic",color:T.orange }}>Your Brand</em>
          </h2>
          <p style={{ color:"rgba(255,255,255,0.6)",lineHeight:1.75,marginBottom:34,fontSize:"0.98rem" }}>Partner with Masala Mandir for bulk supply, private label manufacturing, and custom seasoning blends at scale.</p>
          <div style={{ display:"flex",justifyContent:"center",gap:18,flexWrap:"wrap",marginBottom:38 }}>
            {["Bulk & Wholesale Pricing","Private Label Solutions","Custom Blends","Pan-India Delivery","Consistent Supply Chain"].map(f=>(
              <span key={f} style={{ color:"rgba(255,255,255,0.8)",fontSize:"0.85rem",display:"flex",alignItems:"center",gap:7 }}><span style={{ color:T.orange,fontWeight:700 }}>✓</span>{f}</span>
            ))}
          </div>
          <button onClick={()=>document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})} style={{ background:"linear-gradient(135deg,#FF7F11,#F4A261)",color:T.dark,border:"none",padding:"15px 44px",borderRadius:50,fontSize:"0.98rem",fontWeight:700,cursor:"pointer",fontFamily:"Outfit,sans-serif",transition:"transform 0.3s,box-shadow 0.3s",display:"inline-flex",alignItems:"center",gap:10 }} onMouseEnter={e=>{e.target.style.transform="translateY(-3px)";e.target.style.boxShadow="0 20px 50px rgba(255,127,17,0.4)";}} onMouseLeave={e=>{e.target.style.transform="";e.target.style.boxShadow="";}}>
            Get a Quote 📩
          </button>
        </div>
      </section>

      {/* ─── CONTACT ──────────────────────────────────── */}
      <section id="contact" style={{ padding:`88px ${pad}` }}>
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
              <div key={d.label} style={{ display:"flex",alignItems:"flex-start",gap:13,padding:"15px 17px",background:"rgba(255,127,17,0.04)",border:"1px solid rgba(255,127,17,0.12)",borderRadius:13,marginBottom:12,transition:"transform 0.3s" }}
                onMouseEnter={e=>e.currentTarget.style.transform="translateX(8px)"}
                onMouseLeave={e=>e.currentTarget.style.transform=""}>
                <div style={{ width:40,height:40,borderRadius:11,background:"linear-gradient(135deg,#E63946,#FF7F11)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.05rem",flexShrink:0 }}>{d.icon}</div>
                <div>
                  <div style={{ fontSize:"0.67rem",color:T.mid,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:3 }}>{d.label}</div>
                  <div style={{ color:T.dark,fontWeight:500,lineHeight:1.55,fontSize:"0.9rem" }}>{d.value}</div>
                </div>
              </div>
            ))}
            <div style={{ marginTop:18,background:"linear-gradient(135deg,rgba(230,57,70,0.06),rgba(255,127,17,0.08))",border:"1px solid rgba(255,127,17,0.15)",borderRadius:13,padding:20 }}>
              <div style={{ fontWeight:700,color:T.dark,marginBottom:7 }}>🕐 Business Hours</div>
              <div style={{ color:T.mid,fontSize:"0.87rem",lineHeight:1.8 }}>Monday – Saturday: 9:00 AM – 7:00 PM<br/>Sunday: By appointment only</div>
            </div>
          </div>

          {/* Form */}
          <div>
            <div style={{ fontFamily:"Playfair Display,serif",fontSize:"1.4rem",fontWeight:700,color:T.dark,marginBottom:20 }}>Send an Inquiry</div>
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
            <button onClick={handleSend} style={{ width:"100%",background: formSent?"linear-gradient(135deg,#2A9D8F,#264653)":"linear-gradient(135deg,#E63946,#FF7F11)",color:"white",border:"none",padding:"14px 0",borderRadius:12,fontSize:"0.93rem",fontWeight:700,cursor:"pointer",fontFamily:"Outfit,sans-serif",transition:"all 0.4s",display:"flex",alignItems:"center",justifyContent:"center",gap:8 }} onMouseEnter={e=>{if(!formSent){e.target.style.transform="translateY(-2px)";e.target.style.boxShadow="0 12px 30px rgba(230,57,70,0.3)";} }} onMouseLeave={e=>{e.target.style.transform="";e.target.style.boxShadow="";}}>
              {formSent ? "✅ Opening your email app…" : "Send Message 🌶️"}
            </button>
            <p style={{ fontSize:"0.74rem",color:T.mid,marginTop:9,textAlign:"center",lineHeight:1.5 }}>
              Clicking opens your email app pre-filled with your message to <strong>info@masalamandir.com</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────── */}
      <footer style={{ background:T.dark,color:"white",padding:`68px ${pad} 34px` }}>
        <div className="fg" style={{ display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1.5fr",gap:44,marginBottom:44 }}>
          <div>
            <img src={LOGO} alt="Masala Mandir" style={{ height:50, width:"auto", objectFit:"contain", marginBottom:13, filter:"brightness(0) invert(1)" }}/>
            <p style={{ color:"rgba(255,255,255,0.45)",lineHeight:1.75,fontSize:"0.87rem",maxWidth:260 }}>Your trusted source for premium hing, kasoori methi, and seasoning blends. Delivering authentic taste and custom spice solutions.</p>
          </div>
          {[
            { title:"Quick Links",links:[["Home","#home"],["Shop","#products"],["About Us","#story"],["B2B / Wholesale","#b2b"],["Contact","#contact"]] },
            { title:"Products",   links:[["Hing Powder","#products"],["Kasoori Methi","#products"],["Seasoning Blends","#products"],["Raw Hing","#products"]] },
          ].map(col=>(
            <div key={col.title}>
              <div style={{ fontWeight:700,fontSize:"0.8rem",letterSpacing:"0.06em",textTransform:"uppercase",color:"rgba(255,255,255,0.55)",marginBottom:17 }}>{col.title}</div>
              <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
                {col.links.map(([label,href])=>(
                  <a key={label} href={href} style={{ color:"rgba(255,255,255,0.42)",textDecoration:"none",fontSize:"0.85rem",transition:"color 0.3s" }} onMouseEnter={e=>e.target.style.color=T.orange} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.42)"}>{label}</a>
                ))}
              </div>
            </div>
          ))}
          <div>
            <div style={{ fontWeight:700,fontSize:"0.8rem",letterSpacing:"0.06em",textTransform:"uppercase",color:"rgba(255,255,255,0.55)",marginBottom:17 }}>Contact</div>
            <div style={{ color:"rgba(255,255,255,0.42)",fontSize:"0.85rem",lineHeight:1.9 }}>
              Ahmedabad, Gujarat — 380004<br/>
              <a href="mailto:info@masalamandir.com" style={{ color:"rgba(255,255,255,0.42)",textDecoration:"none" }}>info@masalamandir.com</a><br/>
              <a href="tel:+919408754458" style={{ color:"rgba(255,255,255,0.42)",textDecoration:"none" }}>+91 94087 54458</a>
            </div>
          </div>
        </div>
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:26,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:13 }}>
          <div style={{ color:"rgba(255,255,255,0.28)",fontSize:"0.8rem" }}>© 2025 Masala Mandir. All rights reserved. Made with 🌶️ in Ahmedabad.</div>
          <div style={{ display:"flex",gap:9 }}>
            {["f","𝕏","▶"].map(s=>(
              <a key={s} href="#" style={{ width:33,height:33,borderRadius:"50%",background:"rgba(255,255,255,0.07)",display:"flex",alignItems:"center",justifyContent:"center",color:"rgba(255,255,255,0.42)",textDecoration:"none",fontSize:"0.8rem",transition:"background 0.3s,color 0.3s" }} onMouseEnter={e=>{e.target.style.background=T.orange;e.target.style.color="white";}} onMouseLeave={e=>{e.target.style.background="rgba(255,255,255,0.07)";e.target.style.color="rgba(255,255,255,0.42)";}}>
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <Modal product={modal} onClose={()=>setModal(null)}/>
    </>
  );
}
