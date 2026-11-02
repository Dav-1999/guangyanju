/* 光盐居 · 线上博物馆 —— 页面逻辑（不需要改动；更新展品只改 works.js）
 *
 * 地址规则
 *   #top / #selection / #qianzou / #visit   主页上的各区
 *   #/c/门类id                              门类页
 *   #/w/作品id                              作品详情（叠在当前页面之上，可直接分享）
 */
(function () {
  'use strict';

  var M = window.MUSEUM;
  var works = M.works;
  var cats = M.categories;

  var $ = function (id) { return document.getElementById(id); };
  var el = function (tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };
  var full = function (p) { return 'assets/' + p; };
  var thumb = function (p) { return 'assets/thumbs/' + p.split('/').pop(); };
  // 有展台图（抠图后放在黑丝绒底上）的作品，用它做封面，并排在图集第一张
  var coverOf = function (w) { return w.stage || w.images[0]; };
  var galleryOf = function (w) { return w.stage ? [w.stage].concat(w.images) : w.images; };
  var canTilt = window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // 立体感：鼠标移动时轻微转动（只用于展台图，不改变作品本身）
  var tilt = function (zone, target) {
    if (!canTilt) return;
    zone.addEventListener('pointermove', function (e) {
      var r = zone.getBoundingClientRect();
      var dx = (e.clientX - r.left) / r.width - .5;
      var dy = (e.clientY - r.top) / r.height - .5;
      (typeof target === 'function' ? target() : target).style.transform =
        'perspective(1100px) rotateY(' + (dx * 9).toFixed(2) + 'deg) rotateX(' + (-dy * 7).toFixed(2) + 'deg)';
    });
    zone.addEventListener('pointerleave', function () {
      var t = typeof target === 'function' ? target() : target;
      if (t) t.style.transform = '';
    });
  };
  // 正文分段；整行写成【xx】或 #xx# 的显示为小标题
  var paragraphs = function (box, text) {
    box.textContent = '';
    String(text || '').split(/\n+/).forEach(function (t) {
      t = t.trim();
      if (!t) return;
      var h = t.match(/^【([^】]+)】$/) || t.match(/^#([^#]+)#?$/);
      box.appendChild(h ? el('h4', 'ex-h', h[1]) : el('p', null, t));
    });
  };
  // 缩略图缺失时自动回落到原图，作者新增作品不必手动做缩略图
  var img = function (src, fallback, alt, eager) {
    var i = new Image();
    i.src = src;
    i.alt = alt || '';
    i.decoding = 'async';
    if (!eager) i.loading = 'lazy';
    if (fallback) i.onerror = function () { i.onerror = null; i.src = fallback; };
    return i;
  };

  /* ---------- 索引 ---------- */
  var catById = {};
  cats.forEach(function (c) { catById[c.id] = c; });
  var byId = {};
  works.forEach(function (w) { byId[w.id] = w; });
  // 有门类的作品按门类顺序编号
  var listed = [];
  cats.forEach(function (c) {
    works.forEach(function (w) { if (w.cat === c.id) listed.push(w); });
  });
  var numOf = function (w) {
    var k = listed.indexOf(w);
    return k < 0 ? '' : 'No.' + String(k + 1).padStart(3, '0');
  };
  var inCat = function (id) { return listed.filter(function (w) { return w.cat === id; }); };
  var inGroup = function (c, g) { return listed.filter(function (w) { return w.cat === c && w.group === g; }); };
  var groupName = function (w) {
    var c = catById[w.cat];
    var g = c && (c.groups || []).filter(function (x) { return x.id === w.group; })[0];
    return g ? g.name : '';
  };

  $('enter-count').textContent = '共 ' + listed.length + ' 件作品 · 四大门类';
  $('shop-link').href = M.shop;

  /* ---------- 作品卡片 ---------- */
  var card = function (w, feature) {
    var li = el('li');
    if (feature) li.className = 'is-feature';
    var b = el('button', 'card');
    b.type = 'button';
    b.style.setProperty('--glow', w.glow || 'var(--ink)');
    b.setAttribute('aria-label', [numOf(w), w.series, w.title, w.subtitle].filter(Boolean).join(' ') + '，查看详情');
    var cover = img(thumb(coverOf(w)), full(coverOf(w)), '');
    if (w.focus && !w.stage) cover.style.objectPosition = w.focus;
    b.appendChild(cover);
    b.appendChild(el('span', 'card-glow-dot'));
    var label = el('span', 'card-label');
    label.appendChild(el('span', 'card-no', numOf(w) || '主页'));
    if (w.series) label.appendChild(el('span', 'card-series', w.series));
    var title = el('span', 'card-title', w.title);
    if (w.subtitle) title.appendChild(el('small', null, w.subtitle));
    label.appendChild(title);
    if (w.tags && w.tags.length) {
      label.appendChild(el('span', 'card-tags', w.tags.map(function (t) { return '#' + t; }).join('  ')));
    }
    b.appendChild(label);
    b.addEventListener('click', function () { lastFocus = b; location.hash = '#/w/' + w.id; });
    li.appendChild(b);
    return li;
  };

  /* ---------- 主页：作品节选 ---------- */
  var featuredBox = $('featured');
  (M.featured || []).forEach(function (id, k) {
    if (byId[id]) featuredBox.appendChild(card(byId[id], k === 0));
  });

  /* ---------- 主页：前奏曲四大门类 ---------- */
  var catsBox = $('cats');
  cats.forEach(function (c, k) {
    var li = el('li');
    var a = el('a', 'cat-card' + (c.status === 'soon' ? ' is-soon' : ''));
    a.href = '#/c/' + c.id;
    var n = inCat(c.id).length;
    if (c.cover) {
      var cv = img(thumb(c.cover), full(c.cover), '');
      cv.className = 'cat-cover';
      a.appendChild(cv);
    }
    a.appendChild(el('span', 'cat-no brush', ['壹', '贰', '叁', '肆', '伍', '陆'][k] || ''));
    var body = el('span', 'cat-body');
    body.appendChild(el('span', 'cat-name brush', c.name));
    body.appendChild(el('span', 'cat-en latin', c.en));
    body.appendChild(el('span', 'cat-intro', c.intro || ''));
    var meta = c.status === 'soon' ? '栏目筹备中'
      : (c.groups || []).map(function (g) { return g.name; }).join(' · ') + '　' + n + ' 件';
    body.appendChild(el('span', 'cat-meta', meta));
    a.appendChild(body);
    li.appendChild(a);
    catsBox.appendChild(li);
  });

  /* ---------- 门类页 ---------- */
  var home = $('home');
  var catview = $('catview');
  var view = 'home';
  var currentCat = '';
  var homeScroll = 0;  // 离开主页时的位置，按“返回”回来时恢复

  var renderCat = function (c) {
    $('crumb-cat').textContent = c.name;
    $('cat-title').textContent = c.name;
    $('cat-en').textContent = c.en;
    paragraphs($('cat-about'), c.about || c.intro);
    var jump = $('cat-jump');
    var groupsBox = $('cat-groups');
    jump.textContent = '';
    groupsBox.textContent = '';

    if (c.status === 'soon' || !(c.groups || []).length) {
      var empty = el('div', 'cat-empty');
      empty.appendChild(el('span', 'brush', c.name));
      empty.appendChild(el('p', null, c.intro || '栏目筹备中。'));
      groupsBox.appendChild(empty);
    }
    (c.groups || []).forEach(function (g) {
      var list = inGroup(c.id, g.id);
      if (!list.length) return;
      if (c.groups.length > 1) {
        var chip = el('button', 'filter', g.name);
        chip.type = 'button';
        chip.appendChild(el('sup', null, String(list.length)));
        chip.addEventListener('click', function () {
          $('g-' + g.id).scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        jump.appendChild(chip);
      }
      var sec = el('section', 'group');
      sec.id = 'g-' + g.id;
      var head = el('header', 'group-head');
      head.appendChild(el('h2', 'group-title brush', g.name));
      head.appendChild(el('span', 'group-meta', (g.en ? g.en + ' · ' : '') + list.length + ' 件'));
      sec.appendChild(head);
      var ul = el('ul', 'wall');
      list.forEach(function (w) { ul.appendChild(card(w, w.feature)); });
      sec.appendChild(ul);
      groupsBox.appendChild(sec);
    });

    var next = $('cat-next');
    next.textContent = '';
    next.appendChild(el('span', 'cat-next-label', '其他门类'));
    cats.forEach(function (o) {
      if (o.id === c.id) return;
      var a = el('a', 'brush', o.name);
      a.href = '#/c/' + o.id;
      next.appendChild(a);
    });
  };

  var showCat = function (id) {
    var c = catById[id];
    if (!c) return showHome('qianzou');
    if (view === 'cat' && currentCat === id) return;
    renderCat(c);
    if (view === 'home') homeScroll = window.scrollY;
    view = 'cat';
    currentCat = id;
    home.hidden = true;
    catview.hidden = false;
    document.title = c.name + ' · 光盐居 · 线上博物馆';
    window.scrollTo({ top: 0, behavior: 'instant' });
    setActive('#qianzou');
  };
  var showHome = function (anchor) {
    var switched = view !== 'home';
    view = 'home';
    currentCat = '';
    catview.hidden = true;
    home.hidden = false;
    document.title = '光盐居 · 线上博物馆';
    var t = anchor && document.getElementById(anchor);
    if (switched) {
      if (t) t.scrollIntoView({ behavior: 'instant', block: 'start' });
      else window.scrollTo({ top: homeScroll, behavior: 'instant' });
    }
  };

  /* ---------- 展品详情 ---------- */
  var dlg = $('exhibit');
  var track = $('ex-track');
  var thumbs = $('ex-thumbs');
  var lastFocus = null;
  var openedFromPage = false;
  var savedScroll = 0;

  var slideIndex = function () {
    return track.clientWidth ? Math.round(track.scrollLeft / track.clientWidth) : 0;
  };
  var syncSlide = function () {
    var n = track.children.length;
    var k = Math.min(n - 1, Math.max(0, slideIndex()));
    $('ex-counter').textContent = n > 1 ? (k + 1) + ' / ' + n : '';
    $('ex-prev').disabled = k <= 0;
    $('ex-next').disabled = k >= n - 1;
    Array.prototype.forEach.call(thumbs.children, function (t, j) {
      t.setAttribute('aria-current', j === k ? 'true' : 'false');
    });
  };
  var goSlide = function (k) {
    track.scrollTo({ left: k * track.clientWidth, behavior: 'smooth' });
  };
  var scrollTick = 0;
  track.addEventListener('scroll', function () {
    cancelAnimationFrame(scrollTick);
    scrollTick = requestAnimationFrame(syncSlide);
  }, { passive: true });
  $('ex-prev').addEventListener('click', function () { goSlide(slideIndex() - 1); });
  $('ex-next').addEventListener('click', function () { goSlide(slideIndex() + 1); });

  // 顺路参观：在同一门类里前后翻
  var walkLabel = function (btn, dir, w) {
    btn.textContent = dir;
    btn.appendChild(el('b', null, w.title));
    btn.onclick = function () { history.replaceState(null, '', '#/w/' + w.id); fill(w); };
  };

  var fill = function (w) {
    dlg.style.setProperty('--glow', w.glow || 'var(--ink)');
    var c = catById[w.cat];
    var meta = $('ex-meta');
    meta.textContent = '';
    if (numOf(w)) meta.appendChild(el('span', 'no', numOf(w)));
    meta.appendChild(document.createTextNode((numOf(w) ? '　' : '') + (c ? [c.name, groupName(w)].filter(Boolean).join(' · ') : '主页')));
    $('ex-series').textContent = w.series || '';
    $('ex-series').hidden = !w.series;
    $('ex-title').textContent = w.title;
    $('ex-subtitle').textContent = w.subtitle || '';
    $('ex-subtitle').hidden = !w.subtitle;
    $('ex-tags').textContent = '';
    (w.tags || []).forEach(function (t) { $('ex-tags').appendChild(el('span', null, '#' + t)); });
    $('ex-tags').hidden = !(w.tags && w.tags.length);

    var facts = $('ex-facts');
    facts.textContent = '';
    (w.facts || []).forEach(function (f) {
      facts.appendChild(el('dt', null, f[0]));
      facts.appendChild(el('dd', null, f[1]));
    });
    facts.hidden = !(w.facts && w.facts.length);

    paragraphs($('ex-summary'), w.summary);
    $('ex-summary').hidden = !w.summary;
    paragraphs($('ex-note'), w.note);
    $('ex-note-wrap').hidden = !(w.note && w.note.trim());
    $('ex-credit').textContent = [w.stage ? '第 1 张为抠图后的展台图' : '', w.credit].filter(Boolean).join('；');
    // 有原帖链到原帖，没有就链到作者闲鱼主页
    var src = $('ex-source');
    src.href = w.source || M.shop;
    src.firstChild.nodeValue = w.source ? '在闲鱼看原帖 ' : '去闲鱼找作者 ';

    track.textContent = '';
    thumbs.textContent = '';
    var gallery = galleryOf(w);
    gallery.forEach(function (p, k) {
      var s = el('div', 'ex-slide' + (w.stage && k === 0 ? ' is-stage' : ''));
      var pic = img(full(p), null, w.title + (w.stage && k === 0 ? '（展台图）' : '（第 ' + (k + 1) + ' 张）'), k === 0);
      s.appendChild(pic);
      if (w.stage && k === 0) tilt(s, pic);
      track.appendChild(s);
      if (gallery.length > 1) {
        var t = el('button');
        t.type = 'button';
        t.setAttribute('aria-label', '第 ' + (k + 1) + ' 张');
        t.appendChild(img(thumb(p), full(p), ''));
        t.addEventListener('click', function () { goSlide(k); });
        thumbs.appendChild(t);
      }
    });
    thumbs.hidden = gallery.length < 2;
    track.scrollLeft = 0;

    var peers = c ? inCat(c.id) : [];
    var k = peers.indexOf(w);
    $('ex-walk').hidden = peers.length < 2 || k < 0;
    if (peers.length > 1 && k >= 0) {
      walkLabel($('ex-walk-prev'), '← 上一件', peers[(k - 1 + peers.length) % peers.length]);
      walkLabel($('ex-walk-next'), '下一件 →', peers[(k + 1) % peers.length]);
    }
    dlg.querySelector('.ex-label').scrollTop = 0;
    dlg.querySelector('.ex-shell').scrollTop = 0;
    document.title = w.title + ' · 光盐居 · 线上博物馆';
    syncSlide();
  };

  var openDialog = function (w) {
    if (!dlg.open) {
      savedScroll = window.scrollY;
      document.documentElement.style.overflow = 'hidden';
      dlg.showModal();
    }
    fill(w);
    $('ex-close').focus({ preventScroll: true });
  };
  // 收尾放在这里同步执行，不依赖 dialog 的 close 事件（个别浏览器不一定触发）
  var closeDialog = function () {
    if (!dlg.open) return;
    dlg.close();
    document.documentElement.style.overflow = '';
    document.title = view === 'cat' ? catById[currentCat].name + ' · 光盐居 · 线上博物馆' : '光盐居 · 线上博物馆';
    window.scrollTo({ top: savedScroll, behavior: 'instant' });
    if (lastFocus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
  };
  var requestClose = function () {
    if (openedFromPage) { history.back(); return; }
    // 从分享链接直接进来的：关掉后落在作品所在的门类页（花冠落在主页）
    history.replaceState(null, '', view === 'cat' ? '#/c/' + currentCat : '#top');
    closeDialog();
  };
  $('ex-close').addEventListener('click', requestClose);
  dlg.addEventListener('cancel', function (e) { e.preventDefault(); requestClose(); });
  dlg.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { e.preventDefault(); goSlide(slideIndex() - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); goSlide(slideIndex() + 1); }
  });
  /* ---------- 主页轮播：四类作品精选 ---------- */
  (function () {
    var box = $('hero-carousel');
    var stageBox = $('hc-stage');
    var dots = $('hc-dots');
    var ids = (M.hero || []).filter(function (id) { return byId[id]; });
    if (!ids.length) { box.hidden = true; return; }
    var at = 0;
    var slides = ids.map(function (id, k) {
      var w = byId[id];
      var b = el('button', 'hc-slide');
      b.type = 'button';
      b.setAttribute('aria-label', [w.title, w.subtitle].filter(Boolean).join(' · ') + '，查看详情');
      b.appendChild(img(full(coverOf(w)), null, w.title, true));
      b.addEventListener('click', function () { lastFocus = b; location.hash = '#/w/' + w.id; });
      stageBox.appendChild(b);
      var d = el('button', 'hc-dot');
      d.type = 'button';
      d.setAttribute('role', 'tab');
      d.setAttribute('aria-label', '第 ' + (k + 1) + ' 件：' + w.title);
      d.appendChild(el('span', 'hc-bar'));
      d.addEventListener('click', function () { go(k); });
      dots.appendChild(d);
      return b;
    });
    // 自动轮播由计时器驱动，进度条动画只负责显示；悬停、聚焦、切到后台时暂停
    var DUR = 6500;
    var autoplay = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var timer = 0;
    var startedAt = 0;
    var remaining = DUR;
    var holds = { hover: false, focus: false, hidden: document.hidden };
    var held = function () { return holds.hover || holds.focus || holds.hidden; };
    var schedule = function () {
      clearTimeout(timer);
      if (!autoplay || held()) return;
      startedAt = Date.now();
      timer = setTimeout(function () { go((at + 1) % ids.length); }, remaining);
    };
    var hold = function (key, on) {
      var before = held();
      holds[key] = on;
      if (!before && held()) { clearTimeout(timer); remaining -= Date.now() - startedAt; }
      box.classList.toggle('is-paused', held());
      if (before && !held()) schedule();
    };
    var go = function (k) {
      at = k;
      var w = byId[ids[k]];
      var c = catById[w.cat];
      slides.forEach(function (s, j) {
        s.classList.toggle('is-active', j === k);
        s.tabIndex = j === k ? 0 : -1;
        s.setAttribute('aria-hidden', j === k ? 'false' : 'true');
      });
      Array.prototype.forEach.call(dots.children, function (d, j) {
        d.classList.remove('is-active');
        d.setAttribute('aria-selected', j === k ? 'true' : 'false');
      });
      void dots.offsetWidth;  // 重新触发进度条动画
      dots.children[k].classList.add('is-active');
      $('hc-cat').textContent = c ? [c.name, groupName(w)].filter(Boolean).join(' · ') : (w.series || '');
      $('hc-title').textContent = [w.title, w.subtitle].filter(Boolean).join(' · ');
      remaining = DUR;
      schedule();
    };
    box.addEventListener('pointerenter', function () { hold('hover', true); });
    box.addEventListener('pointerleave', function () { hold('hover', false); });
    box.addEventListener('focusin', function () { hold('focus', true); });
    box.addEventListener('focusout', function () { hold('focus', false); });
    document.addEventListener('visibilitychange', function () { hold('hidden', document.hidden); });
    var x0 = null;
    stageBox.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    stageBox.addEventListener('touchend', function (e) {
      if (x0 == null) return;
      var dx = e.changedTouches[0].clientX - x0;
      x0 = null;
      if (Math.abs(dx) > 40) go((at + (dx < 0 ? 1 : ids.length - 1)) % ids.length);
    });
    tilt(stageBox, function () { return stageBox.querySelector('.hc-slide.is-active img'); });
    go(0);
  })();

  /* ---------- 路由 ---------- */
  var route = function (fromPage) {
    var h = location.hash;
    var mw = h.match(/^#\/w\/([\w-]+)/);
    var mc = h.match(/^#\/c\/([\w-]+)/);
    if (mw && byId[mw[1]]) {
      var w = byId[mw[1]];
      if (!dlg.open) {
        openedFromPage = !!fromPage;
        // 直接打开分享链接时，背景是作品所在的门类页
        if (!fromPage) { if (w.cat) showCat(w.cat); else showHome('top'); }
      }
      openDialog(w);
      return;
    }
    var wasOpen = dlg.open;
    closeDialog();
    if (mc) { showCat(mc[1]); return; }
    var anchor = h.replace(/^#/, '');
    if (wasOpen && view === 'home') return;  // 关详情回到主页，保持原来的位置
    showHome(anchor);
  };
  var routedOnce = false;
  window.addEventListener('hashchange', function () { route(routedOnce); });
  route(false);
  routedOnce = true;

  /* ---------- 导览栏 ---------- */
  var nav = $('nav');
  var onScroll = function () { nav.classList.toggle('is-solid', window.scrollY > 40); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 函数声明会提升：首次路由进门类页时就会调用它
  function setActive(href) {
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      a.classList.toggle('is-active', a.getAttribute('href') === href);
    });
  }
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      if (view !== 'home') return;
      entries.forEach(function (en) { if (en.isIntersecting) setActive('#' + en.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('#home > section').forEach(function (s) { spy.observe(s); });

    var rev = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); rev.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach(function (n) { rev.observe(n); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (n) { n.classList.add('is-in'); });
  }
  if (view === 'cat') setActive('#qianzou');

  /* ---------- 展厅灯光跟随指针（仅桌面） ---------- */
  if (window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.lit').forEach(function (zone) {
      zone.addEventListener('pointermove', function (e) {
        var r = zone.getBoundingClientRect();
        zone.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        zone.style.setProperty('--my', (e.clientY - r.top) + 'px');
        zone.classList.add('is-lit');
      });
      zone.addEventListener('pointerleave', function () { zone.classList.remove('is-lit'); });
    });
  }
})();
