(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');

  var NUM = '353899874365';
  var WA = {
    es: 'Hola Gabriel, vengo de tu web. Me gustaría reservar una sesión.',
    en: 'Hi Gabriel, I found you through your website. I’d like to book a session.'
  };

  // CV de ejemplo: los "después" son los ejemplos de la guía de Gabriel
  var CV = {
    es: {
      r1a: 'María García · maria@correo.com',
      r1d: 'María García | Analista de Fraude | Española | +34 600 000 000 | maria@correo.com | linkedin.com/in/maria',
      r2a: 'Profesional responsable y con ganas de aprender, en busca de nuevos retos.',
      r2d: '<span class="mk">Analista de Fraude</span> con experiencia en tecnología y fintech. Especializada en <span class="mk">investigación, KYC y análisis de datos</span>.',
      r3a: 'Atendía solicitudes de clientes.',
      r3d: 'Resolví <span class="mk">+40 casos al día</span> con un <span class="mk">98% de satisfacción</span>.'
    },
    en: {
      r1a: 'María García · maria@email.com',
      r1d: 'María García | Fraud Analyst | Spanish | +34 600 000 000 | maria@email.com | linkedin.com/in/maria',
      r2a: 'Responsible professional, eager to learn, looking for new challenges.',
      r2d: '<span class="mk">Fraud Analyst</span> with experience in tech and fintech. Specialised in <span class="mk">investigations, KYC and data analysis</span>.',
      r3a: 'Handled customer requests.',
      r3d: 'Resolved <span class="mk">40+ cases a day</span> with <span class="mk">98% satisfaction</span>.'
    }
  };

  var EN = {
    skip: 'Skip to content', brandTail: 'with Gabriel', navAria: 'Sections',
    nav1: 'About', nav2: 'Before and after', nav3: 'Sessions', nav4: 'Free guide', ctaTop: 'Book',
    k2: 'CV & interviews',
    h1: '70% of CVs get rejected <span class="mk">in seconds</span>.',
    lead: 'We review your CV together, aim it at the role you want and prepare your interview. 1:1 sessions in English or Spanish.',
    cta1: 'Book my session', cta2: 'Download the free guide',
    cvLine: '<span>CV & interview coach</span><span>8 years in Big Tech | English · Español</span>', cvLab: 'Professional summary',
    cvText: 'Experience at <span class="mk">Airbnb, Amazon and Apple</span>. I help people prepare <span class="mk">CVs and interviews</span>.',
    note: 'Step 1 of my guide: your details, at first glance.',
    altHero: 'Gabriel Forero holding his laptop', altPie: 'Gabriel standing, reviewing a CV on his laptop', altSofa: 'Gabriel smiling while working on his laptop',
    l1: 'Professional summary',
    summary: 'I’m Gabriel. I spent <span class="mk">8 years in Big Tech</span>, at Airbnb, Amazon and Apple, in customer support, onboarding and fraud. <span class="soft">Now I help people aged 23 to 28 living in Europe change jobs, with a CV that reads clearly the first time and interviews they’re ready for.</span>',
    d1t: 'Experience', d1d: '8 years in Big Tech', d2t: 'Areas', d2d: 'Customer support, onboarding and fraud', d3t: 'Sessions in', d3d: 'English and Spanish',
    l2: 'Before and after', baH: 'What changes in one session.',
    baP: 'Three fixes from my guide on a sample CV. Switch versions and notice what a recruiter reads first.',
    swAria: 'CV version', vA: 'Before', vD: 'After',
    r1l: 'Header', r1w: 'Step 1: your details, easy to find.', r2l: 'Summary', r2w: 'Steps 2 and 3: the role, your industry and top 3 skills.', r3l: 'Experience', r3w: 'Step 5: results with numbers, not tasks.',
    baFoot: 'Sample CV. The “after” versions come from the free guide.',
    l3: '1:1 sessions', sH: 'You, your CV and the job you want.',
    w1h: 'CV review', w1p: 'We go through your CV point by point: header, summary, results with numbers, keywords from the job ad and a format ATS systems can read. We aim it at the roles you want to apply for.',
    w2h: 'Interview preparation', w2p: 'We prepare your next interview: how to introduce yourself, how to talk about your experience with concrete results and how to answer with confidence, including interviews in English.',
    tLab: 'Rates', t1: '45-minute session', t2: '1-hour session', tNote: 'Either one works for your CV, your interview or both.', cta3: 'Request my session',
    stAria: 'How to book', s1: 'Message me on WhatsApp', s1s: 'Tell me what you need and whether you prefer 45 minutes or an hour.',
    s2: 'I send you your Calendly link', s2s: 'It’s just for you: pick the day and time that suit you best.',
    s3: 'We meet for the session', s3s: 'Have your CV ready and, if you have one, the job ad you’re applying to.',
    stackAria: 'Open the guide as a PDF',
    l4: 'Free guide', gH: 'Check your CV before your next application.',
    g1: 'Your details in the header', g2: 'The role in your summary', g3: 'Industry and top 3 skills', g4: 'The vocabulary of the role', g5: 'Results with numbers',
    g6: 'Only relevant experience', g7: 'Education and field of study', g8: 'Simple format', g9: 'Spelling and consistency', g10: 'CV matching LinkedIn',
    dl: 'Download the guide', dlMeta: '4-page PDF with a final checklist. In Spanish.', soon: 'More guides on the way.',
    l5: 'References',
    q1: 'The session with Gabriel helped me improve my CV and be more strategic with my applications.',
    q2: '100% recommended. I didn’t know what I had to improve in my CV. Gabriel reviewed it with me and we aimed it at the jobs I want to apply for.',
    l6: 'Contact', cH: 'Shall we review your <span class="mk">CV</span> together?',
    cLead: 'Message me on WhatsApp and I’ll send you your booking link.',
    em: 'Email', copy: 'Copy', copied: 'Copied', footR: 'CV and interviews in English and Spanish',
    title: 'Avanza con Gabriel · CV and interviews'
  };

  function each(sel, fn) { Array.prototype.forEach.call(document.querySelectorAll(sel), fn); }
  var ES = { copied: 'Copiado', title: document.title };
  each('[data-i18n]', function (el) { ES[el.dataset.i18n] = el.textContent; });
  each('[data-i18n-html]', function (el) { ES[el.dataset.i18nHtml] = el.innerHTML; });
  each('[data-i18n-alt]', function (el) { ES[el.dataset.i18nAlt] = el.alt; });
  each('[data-i18n-aria]', function (el) { ES[el.dataset.i18nAria] = el.getAttribute('aria-label'); });

  var lang = 'es';
  var version = 'despues';
  var doc = document.getElementById('cvdoc');
  function t(k) { return lang === 'en' && EN[k] != null ? EN[k] : ES[k]; }

  // ---- rotulador: se dibuja cuando la frase entra en pantalla ----
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var io = (!reduce && 'IntersectionObserver' in window) ? new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.6 }) : null;

  function arm(scope) {
    each(scope + ' .mk', function (el) {
      if (!io || el.classList.contains('draw')) return;
      el.classList.add('draw');
      io.observe(el);
    });
  }

  function paintCV(redraw) {
    doc.dataset.state = version;
    each('#cvdoc [data-k]', function (el) { el.innerHTML = CV[lang][el.dataset.k]; });
    each('.switch button', function (b) { b.setAttribute('aria-pressed', String(b.dataset.v === version)); });
    if (io) {
      each('#cvdoc .vd .mk', function (el) {
        el.classList.add('draw');
        if (redraw && version === 'despues') {
          el.classList.remove('on');
          void el.offsetWidth;
          setTimeout(function () { el.classList.add('on'); }, 180);
        } else { io.observe(el); }
      });
    }
  }

  function apply(l) {
    lang = l;
    root.lang = l;
    document.title = t('title');
    each('[data-i18n]', function (el) { el.textContent = t(el.dataset.i18n); });
    each('[data-i18n-html]', function (el) { el.innerHTML = t(el.dataset.i18nHtml); });
    each('[data-i18n-alt]', function (el) { el.alt = t(el.dataset.i18nAlt); });
    each('[data-i18n-aria]', function (el) { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    each('.lang button', function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === l)); });
    each('.js-wa', function (a) { a.href = 'https://wa.me/' + NUM + '?text=' + encodeURIComponent(WA[l]); });
    paintCV(false);
    arm('main');
    // lo que ya está a la vista no espera al scroll
    each('.hero .mk', function (el) { setTimeout(function () { el.classList.add('on'); }, 650); });
    try { localStorage.setItem('acg-lang', l); } catch (e) {}
  }

  each('.lang button', function (b) { b.addEventListener('click', function () { apply(b.dataset.lang); }); });
  each('.switch button', function (b) {
    b.addEventListener('click', function () {
      if (version === b.dataset.v) return;
      version = b.dataset.v;
      paintCV(true);
    });
  });

  // ---- pasos: se van marcando en orden al llegar a ellos ----
  var steps = document.querySelectorAll('.steps li');
  if (!reduce && 'IntersectionObserver' in window && steps.length) {
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        Array.prototype.forEach.call(steps, function (li, i) {
          setTimeout(function () { li.classList.add('on'); }, 250 + i * 380);
        });
        so.disconnect();
      });
    }, { threshold: 0.5 });
    so.observe(document.querySelector('.steps'));
  } else {
    each('.steps li', function (li) { li.classList.add('on'); });
  }

  // ---- copiar correo ----
  each('.copy', function (btn) {
    btn.addEventListener('click', function () {
      function done() { btn.textContent = t('copied'); setTimeout(function () { btn.textContent = t('copy'); }, 1600); }
      function select() {
        var target = document.getElementById('mail');
        var r = document.createRange(); r.selectNodeContents(target);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      }
      try { navigator.clipboard.writeText(btn.dataset.copy).then(done, select); } catch (e) { select(); }
    });
  });

  var start = 'es';
  try { start = localStorage.getItem('acg-lang') || 'es'; } catch (e) {}
  if (/^en/.test(location.hash.slice(1))) start = 'en';
  apply(start === 'en' ? 'en' : 'es');
})();
