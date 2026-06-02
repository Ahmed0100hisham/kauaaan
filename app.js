/* ===== Shared header & footer (injected on every page) ===== */
var WA = "201110281354"; // رقم الواتساب الرئيسي / main WhatsApp number

var HEADER = '\
<div class="wrap nav">\
  <a href="index.html" class="logo"><span class="big" data-ar="كي<i>ا</i>ن" data-en="Ka<i>y</i>an"></span><span class="sub" data-ar="KAYAN" data-en="كيان"></span></a>\
  <nav class="nav-links" id="navLinks">\
    <a href="index.html" data-page="home" data-ar="الرئيسية" data-en="Home"></a>\
    <a href="about.html" data-page="about" data-ar="من نحن" data-en="About"></a>\
    <a href="services.html" data-page="services" data-ar="الخدمات" data-en="Services"></a>\
    <a href="portfolio.html" data-page="portfolio" data-ar="معرض الأعمال" data-en="Portfolio"></a>\
    <a href="blog.html" data-page="blog" data-ar="المدونة" data-en="Blog"></a>\
    <a href="contact.html" data-page="contact" data-ar="تواصل" data-en="Contact"></a>\
  </nav>\
  <div class="nav-cta">\
    <a href="contact.html#quote" class="btn" data-ar="اطلب عرض سعر" data-en="Get a Quote"></a>\
    <button class="lang-btn" id="langBtn">EN</button>\
    <button class="burger" id="burger"><span></span><span></span><span></span></button>\
  </div>\
</div>';

var FOOTER = '\
<div class="wrap">\
  <div class="foot-grid">\
    <div>\
      <a href="index.html" class="logo"><span class="big" data-ar="كي<i>ا</i>ن" data-en="Ka<i>y</i>an"></span><span class="sub" data-ar="KAYAN" data-en="كيان"></span></a>\
      <p data-ar="كيان — تشطيبات وديكورات وأعمال خرسانة للشقق والفلل والمساحات التجارية. تطبيقٌ معتمد لدهانات جوتن." data-en="Kayan — premium finishing, decor, and concrete works for apartments, villas, and commercial spaces. Official Jotun paint application."></p>\
      <div class="social">\
        <a href="#" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z"/></svg></a>\
        <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.8"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>\
        <a href="https://wa.me/'+WA+'" aria-label="WhatsApp"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20z"/></svg></a>\
      </div>\
    </div>\
    <div class="foot-col"><h4 data-ar="الخدمات" data-en="Services"></h4><a href="services.html" data-ar="دهانات جوتن" data-en="Jotun Painting"></a><a href="services.html" data-ar="جيبس بورد" data-en="Gypsum Board"></a><a href="services.html" data-ar="بديل خشب" data-en="Wood Alternative"></a><a href="services.html" data-ar="بديل رخام" data-en="Marble Alternative"></a></div>\
    <div class="foot-col"><h4 data-ar="روابط" data-en="Links"></h4><a href="about.html" data-ar="من نحن" data-en="About"></a><a href="portfolio.html" data-ar="معرض الأعمال" data-en="Portfolio"></a><a href="blog.html" data-ar="المدونة" data-en="Blog"></a><a href="contact.html" data-ar="تواصل معنا" data-en="Contact"></a></div>\
    <div class="foot-col"><h4 data-ar="كلّمنا" data-en="Call Us"></h4><a class="ph" href="tel:+201110281354" dir="ltr">0111 028 1354</a><a class="ph" href="tel:+201117402906" dir="ltr">0111 740 2906</a><a class="ph" href="tel:+201011953106" dir="ltr">0101 195 3106</a><a class="ph" href="tel:+201044111073" dir="ltr">0104 411 1073</a></div>\
  </div>\
  <div class="foot-bottom">\
    <span data-ar="© 2026 كيان للتشطيبات والديكورات. جميع الحقوق محفوظة." data-en="© 2026 Kayan Finishing &amp; Decor. All rights reserved."></span>\
    <span data-ar="شقق · فلل · محلّات" data-en="Apartments · Villas · Shops"></span>\
  </div>\
</div>';

var WAFLOAT = '<a class="wa-float" href="https://wa.me/'+WA+'" target="_blank" aria-label="WhatsApp"><svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.5 6.5 0 0 1-1.9-1.2 7.2 7.2 0 0 1-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.4.2-.4v-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c.6.3 1.1.4 1.5.5a3.6 3.6 0 0 0 1.6.1c.5-.1 1.4-.6 1.6-1.1s.2-1 .1-1.1z"/></svg></a>';

var cur = 'ar';
function getSavedLang(){try{return localStorage.getItem('kayan_lang')||'ar'}catch(e){return 'ar'}}
function saveLang(l){try{localStorage.setItem('kayan_lang',l)}catch(e){}}

function setLang(l){
  cur = l;
  document.documentElement.lang = l;
  document.documentElement.dir = (l==='ar')?'rtl':'ltr';
  document.body.className = (document.body.className.replace(/lang-\w+/g,'').trim()+' lang-'+l).trim();
  document.querySelectorAll('[data-ar]').forEach(function(el){el.innerHTML=(l==='ar')?el.dataset.ar:el.dataset.en});
  var lb = document.getElementById('langBtn'); if(lb) lb.textContent=(l==='ar')?'EN':'ع';
  saveLang(l);
}

document.addEventListener('DOMContentLoaded', function(){
  var h = document.getElementById('header'); if(h) h.innerHTML = HEADER;
  var f = document.getElementById('site-footer'); if(f) f.innerHTML = FOOTER;
  if(!document.querySelector('.wa-float')) document.body.insertAdjacentHTML('beforeend', WAFLOAT);

  // active nav link
  var page = document.body.getAttribute('data-page');
  if(page){var act=document.querySelector('.nav-links a[data-page="'+page+'"]'); if(act) act.classList.add('active');}

  setLang(getSavedLang());

  var lb = document.getElementById('langBtn');
  if(lb) lb.addEventListener('click', function(){ setLang(cur==='ar'?'en':'ar'); });

  var header = document.getElementById('header');
  if(header) addEventListener('scroll', function(){ header.classList.toggle('scrolled', scrollY>40); });

  var burger = document.getElementById('burger'), navLinks = document.getElementById('navLinks');
  if(burger) burger.addEventListener('click', function(){ navLinks.classList.toggle('open'); });

  // before/after slider
  var ba = document.getElementById('ba');
  if(ba){
    var handle=document.getElementById('baHandle'), after=ba.querySelector('.after-img'), dragging=false;
    function setPos(x){var r=ba.getBoundingClientRect();var p=Math.max(0,Math.min(100,((x-r.left)/r.width)*100));handle.style.left=p+'%';after.style.clipPath='inset(0 0 0 '+p+'%)';}
    ba.addEventListener('mousedown',function(e){dragging=true;setPos(e.clientX);});
    addEventListener('mouseup',function(){dragging=false;});
    addEventListener('mousemove',function(e){if(dragging)setPos(e.clientX);});
    ba.addEventListener('touchstart',function(e){setPos(e.touches[0].clientX);},{passive:true});
    ba.addEventListener('touchmove',function(e){setPos(e.touches[0].clientX);},{passive:true});
  }

  // gallery filter
  var tabs = document.querySelectorAll('.tabs .tab');
  if(tabs.length){
    tabs.forEach(function(t){t.addEventListener('click',function(){
      var a=document.querySelector('.tabs .tab.active'); if(a)a.classList.remove('active'); t.classList.add('active');
      var c=t.dataset.cat;
      document.querySelectorAll('.gallery figure').forEach(function(fig){fig.style.display=(c==='all'||fig.dataset.cat===c)?'':'none';});
    });});
  }

  // quote builder
  document.querySelectorAll('#chips .chip').forEach(function(c){c.addEventListener('click',function(){c.classList.toggle('on');});});
  var qs = document.getElementById('qsend');
  if(qs) qs.addEventListener('click', function(){
    var svc=[]; document.querySelectorAll('#chips .chip.on').forEach(function(c){svc.push(c.dataset.v);});
    var sp=document.getElementById('qspace'); var spv=sp?sp.options[sp.selectedIndex].dataset.ar:'';
    var area=(document.getElementById('qarea')||{}).value||'';
    var name=(document.getElementById('qname')||{}).value||'';
    var msg='السلام عليكم، عايز عرض سعر من كيان.\n';
    if(name)msg+='الاسم: '+name+'\n';
    if(spv)msg+='نوع المساحة: '+spv+'\n';
    if(area)msg+='المساحة: '+area+' م²\n';
    if(svc.length)msg+='الخدمات: '+svc.join('، ')+'\n';
    window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(msg),'_blank');
  });

  // faq accordion
  document.querySelectorAll('.qa button').forEach(function(b){b.addEventListener('click',function(){b.parentElement.classList.toggle('open');});});

  // reveal on scroll
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el,i){el.style.transitionDelay=(i%3)*.08+'s';io.observe(el);});
});
