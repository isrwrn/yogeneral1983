
(() => {
  const body = document.body;
  const overlay = document.querySelector('[data-mobile-overlay]');
  const openBtn = document.querySelector('[data-menu-open]');
  const closeBtn = document.querySelector('[data-menu-close]');
  const setMenu = (open) => {
    if(!overlay || !openBtn) return;
    overlay.classList.toggle('open', open);
    overlay.setAttribute('aria-hidden', String(!open));
    openBtn.setAttribute('aria-expanded', String(open));
    body.classList.toggle('menu-open', open);
  };
  openBtn?.addEventListener('click',()=>setMenu(true));
  closeBtn?.addEventListener('click',()=>setMenu(false));
  overlay?.addEventListener('click',e=>{ if(e.target===overlay) setMenu(false); });
  overlay?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));

  document.querySelectorAll('[data-filter-input]').forEach(input => {
    const selector = input.dataset.filterInput;
    const targets = [...document.querySelectorAll(selector)];
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      targets.forEach(el => {
        const hay = (el.dataset.search || el.textContent).toLowerCase();
        el.classList.toggle('hidden-by-search', q && !hay.includes(q));
      });
    });
  });

  const heroInput = document.querySelector('#heroSearch');
  const heroBtn = document.querySelector('#heroSearchBtn');
  const note = document.querySelector('#heroSearchNote');
  const doHeroSearch = () => {
    if(!heroInput) return;
    const q = heroInput.value.trim();
    if(!q){ note && (note.textContent='กรอกประเภทสินค้า แบรนด์ หรือรุ่นที่ต้องการค้นหา'); heroInput.focus(); return; }
    window.location.href = '/shop/?q=' + encodeURIComponent(q);
  };
  heroBtn?.addEventListener('click',doHeroSearch);
  heroInput?.addEventListener('keydown',e=>{if(e.key==='Enter') doHeroSearch();});

  const params = new URLSearchParams(location.search);
  const q = params.get('q');
  const shopSearch = document.querySelector('[data-shop-search]');
  if(q && shopSearch){
    shopSearch.value = q;
    shopSearch.dispatchEvent(new Event('input'));
  }

  const quoteForm = document.querySelector('[data-quote-form]');
  quoteForm?.addEventListener('submit',e=>{
    e.preventDefault();
    const fd = new FormData(quoteForm);
    const lines = [
      'เรียน Y.O. General Supply (1983)',
      '',
      'ต้องการขอใบเสนอราคา',
      '',
      'สินค้า / รุ่น: ' + (fd.get('product')||''),
      'จำนวน: ' + (fd.get('qty')||''),
      'ลักษณะการใช้งาน: ' + (fd.get('application')||''),
      'รายละเอียดเพิ่มเติม: ' + (fd.get('notes')||''),
      '',
      'บริษัท: ' + (fd.get('company')||''),
      'ผู้ติดต่อ: ' + (fd.get('name')||''),
      'โทรศัพท์: ' + (fd.get('phone')||''),
      'อีเมล: ' + (fd.get('email')||'')
    ];
    const subject = encodeURIComponent('ขอใบเสนอราคา - ' + (fd.get('product')||'สินค้าอุตสาหกรรม'));
    const bodyText = encodeURIComponent(lines.join('\n'));
    location.href = `mailto:sales@yogeneral1983.com?subject=${subject}&body=${bodyText}`;
  });

  document.querySelectorAll('[data-current-year]').forEach(el=>el.textContent=new Date().getFullYear());
})();
