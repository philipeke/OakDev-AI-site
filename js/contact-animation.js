/**
 * contact-animation.js — OakDev Contact Page
 * Concept: RADAR CONTACT ARRAY
 * A full-canvas rotating radar/sonar system. The radar is larger than the
 * viewport so the outer ring bleeds off all edges — the viewer feels inside
 * a massive signals intelligence array, not looking at a widget.
 *
 * Features:
 *  - Rotating sweep line + trailing luminous wedge
 *  - Concentric range rings that pulse subtly
 *  - Blips spawned along the sweep, fading out over time
 *  - Packet dots that travel between nearby blips
 *  - Expanding pulse rings from center on interval
 *  - Directional tick marks + crosshair grid
 *  - Live HUD readouts (azimuth, contact count)
 *  - Mouse creates a persistent "target" blip
 *  - Pauses when tab is hidden (saves GPU)
 */
(function () {
  'use strict';

  const canvas = document.getElementById('contact-hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: true });

  /* ── colours ────────────────────────────────────────────────── */
  const G  = 'rgba(118,185,0,';   // brand green
  const N  = 'rgba(57,255,20,';   // neon bright
  const NEON_HEX = '#39ff14';

  /* ── state ──────────────────────────────────────────────────── */
  let W, H, cx, cy, R;
  let sweep = -Math.PI / 2;       // start pointing up (north)
  const SWEEP_SPEED = 0.0065;     // rad / frame  (~2.2 RPM at 60fps)
  let time = 0;
  let raf  = null;

  const blips   = [];
  const packets = [];
  const pulseRings = [];

  /* ── resize ─────────────────────────────────────────────────── */
  function resize () {
    W  = canvas.width  = canvas.offsetWidth;
    H  = canvas.height = canvas.offsetHeight;
    cx = W * 0.5;
    cy = H * 0.5;
    // Make R equal to half the diagonal → outer ring exactly at corners
    R  = Math.hypot(W, H) * 0.5;

    // Replace blips with fresh seed so positions match new canvas size
    blips.length = 0;
    seedBlips();
  }

  /* ── blip factory ───────────────────────────────────────────── */
  function makeBlip (x, y, isMouse) {
    return {
      x, y,
      alpha:  isMouse ? 1 : 1,
      decay:  isMouse ? 0 : 0.0038 + Math.random() * 0.005,
      size:   isMouse ? 3.5 : 1.6 + Math.random() * 2.2,
      mouse:  !!isMouse,
    };
  }

  function seedBlips () {
    // Pre-populate 12 fading blips spread across the canvas
    for (let i = 0; i < 12; i++) {
      const b = makeBlip(
        Math.random() * W,
        Math.random() * H,
        false
      );
      b.alpha = 0.05 + Math.random() * 0.55;
      blips.push(b);
    }
  }

  /* ── spawn blip along current sweep line ────────────────────── */
  function spawnSweepBlip () {
    if (Math.random() > 0.055) return;

    // Find how far the sweep ray extends within canvas bounds
    const cos = Math.cos(sweep), sin = Math.sin(sweep);
    let maxD = R;
    if (Math.abs(cos) > 1e-4) maxD = Math.min(maxD, (cos > 0 ? W - cx : cx) / Math.abs(cos));
    if (Math.abs(sin) > 1e-4) maxD = Math.min(maxD, (sin > 0 ? H - cy : cy) / Math.abs(sin));

    const dist = maxD * (0.08 + Math.random() * 0.88);
    const jitter = (Math.random() - 0.5) * 0.04; // tiny angular jitter
    blips.push(makeBlip(
      cx + Math.cos(sweep + jitter) * dist,
      cy + Math.sin(sweep + jitter) * dist,
      false
    ));

    // Prune old blips
    const live = blips.filter(b => !b.mouse);
    while (live.length > 26) {
      const i = blips.findIndex(b => !b.mouse);
      if (i >= 0) blips.splice(i, 1);
      live.shift();
    }
  }

  /* ── spawn packet between two random live blips ─────────────── */
  function maybeSpawnPacket () {
    if (Math.random() > 0.022 || packets.length >= 18) return;
    const live = blips.filter(b => b.alpha > 0.25);
    if (live.length < 2) return;
    const a = live[Math.floor(Math.random() * live.length)];
    const b = live[Math.floor(Math.random() * live.length)];
    if (a === b) return;
    if (Math.hypot(b.x - a.x, b.y - a.y) > 190) return;
    packets.push({ ax: a.x, ay: a.y, bx: b.x, by: b.y, t: 0, speed: 0.007 + Math.random() * 0.011 });
  }

  /* ── spawn centre pulse ring ─────────────────────────────────── */
  function spawnRing () {
    pulseRings.push({ r: 4, alpha: 0.55 });
  }
  setInterval(spawnRing, 3800);

  /* ── mouse blip ─────────────────────────────────────────────── */
  let mouseBlip = null;

  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    if (!mouseBlip) {
      mouseBlip = makeBlip(mx, my, true);
      blips.push(mouseBlip);
    } else {
      mouseBlip.x = mx;
      mouseBlip.y = my;
    }
  });

  canvas.addEventListener('mouseleave', () => {
    if (mouseBlip) {
      const i = blips.indexOf(mouseBlip);
      if (i >= 0) blips.splice(i, 1);
      mouseBlip = null;
    }
  });

  /* ── draw: concentric range rings ───────────────────────────── */
  function drawRings () {
    const RING_COUNT = 6;
    for (let i = 1; i <= RING_COUNT; i++) {
      const r = R * (i / RING_COUNT);
      // Innermost rings slightly brighter
      const baseBright = (RING_COUNT - i) / RING_COUNT;
      const pulse = 0.5 + 0.5 * Math.sin(time * 0.35 + i * 0.9);
      const a = (0.04 + 0.05 * baseBright) * (0.7 + 0.3 * pulse);

      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = G + a + ')';
      ctx.lineWidth   = 0.6;
      ctx.stroke();
    }
  }

  /* ── draw: crosshair grid lines ─────────────────────────────── */
  function drawCrosshair () {
    ctx.save();
    ctx.setLineDash([5, 14]);
    ctx.lineWidth   = 0.5;
    ctx.strokeStyle = G + '0.09)';

    ctx.beginPath();
    ctx.moveTo(0, cy); ctx.lineTo(W, cy);
    ctx.moveTo(cx, 0); ctx.lineTo(cx, H);
    ctx.stroke();

    ctx.setLineDash([]);
    ctx.restore();
  }

  /* ── draw: degree tick marks on outer ring ───────────────────── */
  function drawTicks () {
    for (let d = 0; d < 360; d += 10) {
      const angle = (d / 360) * Math.PI * 2 - Math.PI / 2;
      const major = d % 90 === 0;
      const mid   = d % 30 === 0 && !major;
      const outer = R;
      const inner = outer - (major ? R * 0.06 : mid ? R * 0.04 : R * 0.025);
      const x1 = cx + Math.cos(angle) * inner;
      const y1 = cy + Math.sin(angle) * inner;
      const x2 = cx + Math.cos(angle) * outer;
      const y2 = cy + Math.sin(angle) * outer;

      // Only draw tick if at least one endpoint is on-canvas (rough cull)
      if (x2 < -20 || x2 > W + 20 || y2 < -20 || y2 > H + 20) continue;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = G + (major ? '0.35' : mid ? '0.18' : '0.1') + ')';
      ctx.lineWidth   = major ? 1 : 0.6;
      ctx.stroke();
    }
  }

  /* ── draw: sweep wedge + line ───────────────────────────────── */
  function drawSweep () {
    const WEDGE_ANGLE = Math.PI / 6.5;  // ~28°
    const STEPS = 12;

    // Trailing luminous wedge (12 slivers, alpha tapering to 0)
    for (let s = 0; s < STEPS; s++) {
      const t0 = s / STEPS;
      const t1 = (s + 1) / STEPS;
      const a0 = sweep - WEDGE_ANGLE * t0;
      const a1 = sweep - WEDGE_ANGLE * t1;
      const a  = (1 - t0) * 0.055;

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, R, a1, a0, false);
      ctx.closePath();
      ctx.fillStyle = N + a + ')';
      ctx.fill();
    }

    // Bright sweep line
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(sweep) * R, cy + Math.sin(sweep) * R);
    ctx.strokeStyle = N + '0.9)';
    ctx.lineWidth   = 1.6;
    ctx.shadowColor = NEON_HEX;
    ctx.shadowBlur  = 16;
    ctx.stroke();
    ctx.restore();

    // Pulsing centre dot
    const dotPulse = 0.7 + 0.3 * Math.sin(time * 4);
    ctx.beginPath();
    ctx.arc(cx, cy, 4 * dotPulse, 0, Math.PI * 2);
    ctx.fillStyle   = NEON_HEX;
    ctx.shadowColor = NEON_HEX;
    ctx.shadowBlur  = 22;
    ctx.fill();
    ctx.shadowBlur  = 0;
  }

  /* ── draw: blips ────────────────────────────────────────────── */
  function drawBlips () {
    for (let i = blips.length - 1; i >= 0; i--) {
      const b = blips[i];

      // Decay non-mouse blips
      if (!b.mouse) {
        b.alpha -= b.decay;
        if (b.alpha <= 0) {
          blips.splice(i, 1);
          continue;
        }
      }

      ctx.save();
      ctx.globalAlpha = b.alpha;

      // Soft halo
      const haloR = b.size * 5;
      const haloG = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, haloR);
      haloG.addColorStop(0,   N + '0.18)');
      haloG.addColorStop(0.4, N + '0.06)');
      haloG.addColorStop(1,   N + '0)');
      ctx.beginPath();
      ctx.arc(b.x, b.y, haloR, 0, Math.PI * 2);
      ctx.fillStyle = haloG;
      ctx.fill();

      // Core
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
      ctx.fillStyle = b.mouse ? NEON_HEX : N + '0.95)';
      if (b.mouse) {
        ctx.shadowColor = NEON_HEX;
        ctx.shadowBlur  = 24;
      }
      ctx.fill();
      ctx.shadowBlur = 0;

      // Flash ring on fresh blip (alpha 0.85–1.0)
      if (!b.mouse && b.alpha > 0.82) {
        const progress = (1 - b.alpha) / 0.18;  // 0→1 as alpha drops from 1 to 0.82
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.size + progress * b.size * 11, 0, Math.PI * 2);
        ctx.strokeStyle = N + (0.55 * (1 - progress)) + ')';
        ctx.lineWidth   = 0.9;
        ctx.stroke();
      }

      ctx.restore();
    }
  }

  /* ── draw: connection lines between nearby blips ─────────────── */
  function drawConnections () {
    for (let i = 0; i < blips.length; i++) {
      for (let j = i + 1; j < blips.length; j++) {
        const a = blips[i], b = blips[j];
        const dx = b.x - a.x, dy = b.y - a.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d > 175) continue;
        const alpha = (1 - d / 175) * Math.min(a.alpha, b.alpha) * 0.22;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = G + alpha + ')';
        ctx.lineWidth   = 0.45;
        ctx.stroke();
      }
    }
  }

  /* ── draw: travelling data packets ──────────────────────────── */
  function drawPackets () {
    for (let i = packets.length - 1; i >= 0; i--) {
      const p = packets[i];
      p.t += p.speed;
      if (p.t >= 1) { packets.splice(i, 1); continue; }

      // Short glowing trail
      const TRAIL = 6;
      for (let s = 0; s < TRAIL; s++) {
        const st = Math.max(0, p.t - s * p.speed * 2.5);
        const x  = p.ax + (p.bx - p.ax) * st;
        const y  = p.ay + (p.by - p.ay) * st;
        const a  = ((TRAIL - s) / TRAIL) * 0.85;
        const r  = (TRAIL - s) / TRAIL * 1.8;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = N + a + ')';
        ctx.fill();
      }
    }
  }

  /* ── draw: expanding pulse rings from centre ─────────────────── */
  function drawPulseRings () {
    for (let i = pulseRings.length - 1; i >= 0; i--) {
      const ring = pulseRings[i];
      ring.r     += 1.6;
      ring.alpha  = Math.max(0, ring.alpha - 0.004);
      if (ring.alpha <= 0) { pulseRings.splice(i, 1); continue; }

      ctx.beginPath();
      ctx.arc(cx, cy, ring.r, 0, Math.PI * 2);
      ctx.strokeStyle = N + ring.alpha + ')';
      ctx.lineWidth   = 1.2;
      ctx.shadowColor = NEON_HEX;
      ctx.shadowBlur  = 6;
      ctx.stroke();
      ctx.shadowBlur  = 0;
    }
  }

  /* ── draw: HUD overlay text ─────────────────────────────────── */
  function fmt3 (n) {
    return Math.round(n).toString().padStart(3, '0');
  }

  function drawHUD () {
    const az = ((sweep + Math.PI / 2) * (180 / Math.PI) + 360) % 360;
    const contacts = blips.filter(b => !b.mouse && b.alpha > 0.1).length;

    ctx.save();
    ctx.font        = '9px "Space Grotesk", monospace';
    ctx.fillStyle   = G + '0.28)';
    ctx.textBaseline = 'top';

    // Top-left block
    const lines = [
      `SYS : ONLINE`,
      `MODE: PASSIVE`,
      `AZ  : ${fmt3(az)}°`,
      `RNG : ${Math.round(R / 10) * 10}m`,
      `CONTACTS: ${contacts}`,
    ];
    lines.forEach((l, i) => {
      ctx.fillText(l, 14, 22 + i * 14);
    });

    // Bottom-right signature
    ctx.textAlign    = 'right';
    ctx.textBaseline = 'bottom';
    ctx.font         = '8px "Space Grotesk", monospace';
    ctx.fillStyle    = G + '0.18)';
    ctx.fillText('OakDev Contact Array  v2.1', W - 12, H - 12);

    ctx.restore();
  }

  /* ── draw: subtle radial background glow ────────────────────── */
  function drawGlow () {
    const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.6);
    glow.addColorStop(0,   N  + '0.04)');
    glow.addColorStop(0.35, G + '0.018)');
    glow.addColorStop(1,   'rgba(0,0,0,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, W, H);
  }

  /* ── main animation loop ─────────────────────────────────────── */
  function loop () {
    raf  = requestAnimationFrame(loop);
    time += 0.016;

    ctx.clearRect(0, 0, W, H);

    drawGlow();
    drawRings();
    drawCrosshair();
    drawTicks();
    drawPulseRings();
    drawConnections();
    drawPackets();
    drawSweep();
    drawBlips();
    drawHUD();

    // Advance sweep
    sweep += SWEEP_SPEED;
    if (sweep >= Math.PI * 1.5) sweep -= Math.PI * 2;  // keep in [-π/2, 3π/2)

    // Spawn events
    spawnSweepBlip();
    maybeSpawnPacket();
  }

  /* ── initialise ──────────────────────────────────────────────── */
  resize();
  window.addEventListener('resize', resize);

  // Kick off first pulse ring immediately
  spawnRing();

  loop();

  // Pause when tab is hidden to save GPU
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(raf);
      raf = null;
    } else if (!raf) {
      loop();
    }
  });
}());
