// =========================================
// Spice & Soul — Menu Data & Filter Logic
// js/menu.js
// =========================================

const menuItems = [
  // STARTERS
  {
    cat: 'starters',
    emoji: '🥗',
    name: 'Paneer Tikka',
    desc: 'Cottage cheese marinated in spiced yogurt, grilled in tandoor.',
    price: '₹220',
    spice: '🌶️ Medium',
    veg: true
  },
  {
    cat: 'starters',
    emoji: '🍗',
    name: 'Chicken Malai Seekh',
    desc: 'Minced chicken with cream, cashews and aromatic herbs.',
    price: '₹280',
    spice: '🌶️ Mild',
    veg: false
  },
  {
    cat: 'starters',
    emoji: '🧅',
    name: 'Dal Soup',
    desc: 'Slow-cooked lentil broth with fresh ginger and cumin tempering.',
    price: '₹120',
    spice: '',
    veg: true
  },

  // MAINS
  {
    cat: 'mains',
    emoji: '🍛',
    name: 'Butter Chicken',
    desc: 'Tender chicken in a rich, velvety tomato and cream gravy.',
    price: '₹320',
    spice: '🌶️ Mild',
    veg: false
  },
  {
    cat: 'mains',
    emoji: '🥘',
    name: 'Dal Makhani',
    desc: 'Black lentils slow-cooked overnight with butter and cream.',
    price: '₹240',
    spice: '',
    veg: true
  },
  {
    cat: 'mains',
    emoji: '🍲',
    name: 'Mutton Rogan Josh',
    desc: 'Kashmiri style mutton in whole spice gravy, slow-braised.',
    price: '₹420',
    spice: '🌶️🌶️ Hot',
    veg: false
  },
  {
    cat: 'mains',
    emoji: '🌱',
    name: 'Palak Paneer',
    desc: 'Fresh cottage cheese in a smooth, vibrant spinach curry.',
    price: '₹260',
    spice: '🌶️ Mild',
    veg: true
  },

  // BREADS
  {
    cat: 'breads',
    emoji: '🫓',
    name: 'Garlic Naan',
    desc: 'Leavened flatbread topped with roasted garlic and butter.',
    price: '₹70',
    spice: '',
    veg: true
  },
  {
    cat: 'breads',
    emoji: '🍞',
    name: 'Tandoori Roti',
    desc: 'Whole wheat bread baked fresh in the clay oven.',
    price: '₹40',
    spice: '',
    veg: true
  },

  // DESSERTS
  {
    cat: 'desserts',
    emoji: '🍮',
    name: 'Gulab Jamun',
    desc: 'Soft milk dumplings soaked in rose-saffron sugar syrup.',
    price: '₹90',
    spice: '',
    veg: true
  },
  {
    cat: 'desserts',
    emoji: '🍨',
    name: 'Kulfi Falooda',
    desc: 'Traditional Indian ice cream with vermicelli and basil seeds.',
    price: '₹120',
    spice: '',
    veg: true
  }
];

let activeCategory = 'all';

function filterMenu(btn, cat) {
  activeCategory = cat;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderMenu();
}

function renderMenu() {
  const grid = document.getElementById('menuGrid');
  const items = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(i => i.cat === activeCategory);

  grid.innerHTML = items.map(item => `
    <div class="menu-card">
      <div class="menu-emoji">${item.emoji}</div>
      <div class="menu-info">
        <div class="menu-name">
          <span class="veg-dot ${item.veg ? 'veg' : 'nonveg'}"></span>
          ${item.name}
        </div>
        <div class="menu-desc">${item.desc}</div>
        <div class="menu-footer">
          <span class="menu-price">${item.price}</span>
          ${item.spice ? `<span class="spicy">${item.spice}</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

// Init on page load
renderMenu();
