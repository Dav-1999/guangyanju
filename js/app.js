/* 光盐居 · 线上博物馆 —— 页面逻辑（不需要改动；更新展品只改 works.js） */
(function () {
  'use strict';

  var M = window.MUSEUM;
  var works = M.works;
  var halls = M.halls;
  var hallById = {};
  halls.forEach(function (h) { hallById[h.id] = h; });

  var $ = function (id) { return document.getElementById(id); };
  var el = function (tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };
  var no = function (i) { return 'No.' + String(i + 1).padStart(3, '0'); };
  var full = function (p) { return 'assets/' + p; };
  var thumb = function (p) { return 'assets/thumbs/' + p.split('/').pop(); };
  var paragraphs = function (box, text) {
    box.textContent = '';
    String(text || '').split(/\n+/).forEach(function (t) {
      if (t.trim()) box.appendChild(el('p', null, t.trim()));
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

  var openHalls = halls.filter(function (h) { return h.status !== 'soon'; });
  var soonHalls = halls.filter(function (h) { return h.status === 'soon'; });

  /* ---------- 计数与链接 ---------- */
  $('enter-count').textContent = '共 ' + works.length + ' 件展品';
  $('hall-count').textContent = works.length + ' 件展品 · ' + openHalls.length + ' 个展厅开放';
  $('shop-link').href = M.shop;

  /* ---------- 展墙 ---------- */
  var wall = $('wall');
  works.forEach(function (w, i) {
    var li = el('li');
    li.dataset.hall = w.hall;
    if (w.feature) li.className = 'is-feature';
    var b = el('button', 'card');
    b.type = 'button';
    b.style.setProperty('--glow', w.glow || 'var(--ink)');
    b.setAttribute('aria-label', no(i) + ' ' + w.series + ' ' + w.title + '，查看详情');
    b.appendChild(img(thumb(w.images[0]), full(w.images[0]), ''));
    b.appendChild(el('span', 'card-glow-dot'));
    var label = el('span', 'card-label');
    label.appendChild(el('span', 'card-no', no(i)));
    label.appendChild(el('span', 'card-series', w.series));
    label.appendChild(el('span', 'card-title', w.title));
    label.appendChild(el('span', 'card-tags', (w.tags || []).map(function (t) { return '#' + t; }).join('  ')));
    b.appendChild(label);
    b.addEventListener('click', function () { lastFocus = b; location.hash = '#/w/' + w.id; });
    li.appendChild(b);
    wall.appendChild(li);
  });
  soonHalls.forEach(function (h) {
    var li = el('li');
    li.dataset.hall = 'soon';
    var box = el('div', 'soon');
    box.appendChild(el('span', 'soon-name brush', h.name));
    var meta = el('span', 'soon-meta', '展厅筹备中');
    meta.appendChild(el('span', 'latin', h.en));
    box.appendChild(meta);
    li.appendChild(box);
    wall.appendChild(li);
  });

  /* ---------- 展厅筛选 ---------- */
  var filters = [{ id: 'all', name: '全部', count: works.length,
                   intro: '按编号陈列。点开任意一件，读它的展签与来处。' }];
  openHalls.forEach(function (h) {
    filters.push({ id: h.id, name: h.name, intro: h.intro,
      count: works.filter(function (w) { return w.hall === h.id; }).length });
  });
  if (soonHalls.length) {
    filters.push({ id: 'soon', name: '筹备中', count: soonHalls.length,
      intro: soonHalls.map(function (h) { return h.name; }).join('、') + '，展厅正在布置，开放后会出现在这面墙上。' });
  }
  var filterBox = $('filters');
  var setFilter = function (id, animate) {
    var f = filters.filter(function (x) { return x.id === id; })[0] || filters[0];
    Array.prototype.forEach.call(filterBox.children, function (b) {
      b.setAttribute('aria-selected', b.dataset.id === f.id ? 'true' : 'false');
    });
    Array.prototype.forEach.call(wall.children, function (li) {
      li.hidden = !(f.id === 'all' || li.dataset.hall === f.id);
    });
    $('hall-intro').textContent = f.intro || '';
    if (animate) {
      wall.classList.remove('is-filtering');
      void wall.offsetWidth;
      wall.classList.add('is-filtering');
    }
  };
  filters.forEach(function (f) {
    var b = el('button', 'filter', f.name);
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.dataset.id = f.id;
    b.appendChild(el('sup', null, String(f.count)));
    b.addEventListener('click', function () { setFilter(f.id, true); });
    filterBox.appendChild(b);
  });
  setFilter('all', false);

  /* ---------- 展品详情 ---------- */
  var dlg = $('exhibit');
  var track = $('ex-track');
  var thumbs = $('ex-thumbs');
  var current = -1;
  var lastFocus = null;
  var openedFromWall = false;
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

  var walkLabel = function (btn, dir, i) {
    var w = works[i];
    btn.textContent = dir;
    btn.appendChild(el('b', null, w.title));
    btn.onclick = function () { history.replaceState(null, '', '#/w/' + w.id); fill(i); };
  };

  var fill = function (i) {
    var w = works[i];
    current = i;
    dlg.style.setProperty('--glow', w.glow || 'var(--ink)');
    var hall = hallById[w.hall];
    $('ex-meta').innerHTML = '';
    $('ex-meta').appendChild(el('span', 'no', no(i)));
    $('ex-meta').appendChild(document.createTextNode('　' + (hall ? hall.name : '')));
    $('ex-series').textContent = w.series;
    $('ex-series').hidden = !w.series || (hall && hall.name === w.series);
    $('ex-title').textContent = w.title;
    $('ex-tags').textContent = '';
    (w.tags || []).forEach(function (t) { $('ex-tags').appendChild(el('span', null, '#' + t)); });

    var facts = $('ex-facts');
    facts.textContent = '';
    (w.facts || []).forEach(function (f) {
      facts.appendChild(el('dt', null, f[0]));
      facts.appendChild(el('dd', null, f[1]));
    });
    facts.hidden = !(w.facts && w.facts.length);

    paragraphs($('ex-summary'), w.summary);
    paragraphs($('ex-note'), w.note);
    $('ex-note-wrap').hidden = !(w.note && w.note.trim());
    $('ex-credit').textContent = w.credit || '';
    var src = $('ex-source');
    src.hidden = !w.source;
    if (w.source) src.href = w.source;

    track.textContent = '';
    thumbs.textContent = '';
    w.images.forEach(function (p, k) {
      var s = el('div', 'ex-slide');
      s.appendChild(img(full(p), null, w.title + '（第 ' + (k + 1) + ' 张）', k === 0));
      track.appendChild(s);
      if (w.images.length > 1) {
        var t = el('button');
        t.type = 'button';
        t.setAttribute('aria-label', '第 ' + (k + 1) + ' 张');
        t.appendChild(img(thumb(p), full(p), ''));
        t.addEventListener('click', function () { goSlide(k); });
        thumbs.appendChild(t);
      }
    });
    thumbs.hidden = w.images.length < 2;
    track.scrollLeft = 0;

    walkLabel($('ex-walk-prev'), '← 上一件', (i - 1 + works.length) % works.length);
    walkLabel($('ex-walk-next'), '下一件 →', (i + 1) % works.length);
    dlg.querySelector('.ex-label').scrollTop = 0;
    dlg.querySelector('.ex-shell').scrollTop = 0;
    document.title = w.title + ' · 光盐居 · 线上博物馆';
    syncSlide();
  };

  var openDialog = function (i) {
    if (!dlg.open) {
      savedScroll = window.scrollY;
      document.documentElement.style.overflow = 'hidden';
      dlg.showModal();
    }
    fill(i);
    $('ex-close').focus({ preventScroll: true });
  };
  // 收尾放在这里同步执行，不依赖 dialog 的 close 事件（个别浏览器不一定触发）
  var closeDialog = function () {
    if (!dlg.open) return;
    dlg.close();
    document.documentElement.style.overflow = '';
    document.title = '光盐居 · 线上博物馆';
    current = -1;
    window.scrollTo({ top: savedScroll, behavior: 'instant' });
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  };
  var requestClose = function () {
    if (openedFromWall) { history.back(); }
    else {
      // 从分享链接直接进来的，关掉后落在展厅
      history.replaceState(null, '', '#hall');
      savedScroll = $('hall').offsetTop;
      closeDialog();
    }
  };
  $('ex-close').addEventListener('click', requestClose);
  dlg.addEventListener('cancel', function (e) { e.preventDefault(); requestClose(); });
  dlg.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { e.preventDefault(); goSlide(slideIndex() - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); goSlide(slideIndex() + 1); }
  });

  /* ---------- 路由：#/w/作品id 可直接分享某件展品 ---------- */
  var route = function (fromClick) {
    var m = location.hash.match(/^#\/w\/([\w-]+)/);
    var i = m ? works.findIndex(function (w) { return w.id === m[1]; }) : -1;
    if (i >= 0) {
      openedFromWall = !!fromClick;
      openDialog(i);
    } else {
      closeDialog();
    }
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

  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-links a'));
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = en.target.id || 'top';
        navLinks.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main > section').forEach(function (s) { spy.observe(s); });

    var rev = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); rev.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach(function (n) { rev.observe(n); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (n) { n.classList.add('is-in'); });
  }

  /* ---------- 展厅灯光跟随指针（仅桌面） ---------- */
  var hallEl = $('hall');
  if (window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    hallEl.addEventListener('pointermove', function (e) {
      var r = hallEl.getBoundingClientRect();
      hallEl.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      hallEl.style.setProperty('--my', (e.clientY - r.top) + 'px');
      hallEl.classList.add('is-lit');
    });
    hallEl.addEventListener('pointerleave', function () { hallEl.classList.remove('is-lit'); });
  }
})();
