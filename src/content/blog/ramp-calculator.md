---
title: "Ramp Calculator"
pubDate: 2025-07-24
description: "Quickly size ramps for accessibility and safety."
author: "TrueAssist Technology"
tags: ["ramp", "calculator", "accessibility", "safety"]
---

Below is an interactive ramp calculator. Enter rise and slope to get the required ramp length.

<div class="ramp-card">
  <h2>Ramp Calculator</h2>
  <label>
    Rise (height to overcome, in inches)
    <input id="rise" type="number" min="0" step="0.1" value="12" />
  </label>
  <label>
    Slope ratio (e.g., 12 for 1:12)
    <input id="slope" type="number" min="1" step="1" value="12" />
  </label>
  <button id="calc-btn">Calculate Ramp Length</button>

  <div id="result" class="result">
    Ramp length: <span id="length-ft">—</span> ft (<span id="length-m">—</span> m)
  </div>
  <p class="note">ADA guideline: 1:12 for public accessibility ramps; check local codes.</p>
</div>

<style>
  .ramp-card {
    max-width: 620px;
    margin: 1.5rem 0;
    padding: 1.25rem;
    border-radius: 16px;
    background: linear-gradient(135deg, #0a3a83 0%, #0b5fdc 55%, #10c2ff 100%);
    color: #fff;
    box-shadow: 0 16px 34px rgba(11, 63, 156, 0.28);
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  }
  .ramp-card h2 { margin-top: 0; }
  .ramp-card label {
    display: block;
    margin: 0.75rem 0 0.25rem;
    font-weight: 700;
  }
  .ramp-card input {
    width: 100%;
    padding: 0.6rem 0.75rem;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  .ramp-card button {
    margin-top: 0.5rem;
    width: 100%;
    padding: 0.8rem;
    border: none;
    border-radius: 12px;
    background: #fff;
    color: #0a3a83;
    font-weight: 800;
    cursor: pointer;
    transition: transform 120ms ease, box-shadow 120ms ease;
    box-shadow: 0 14px 26px rgba(0, 0, 0, 0.18);
  }
  .ramp-card button:hover { transform: translateY(-1px); }
  .ramp-card button:active { transform: translateY(0); }
  .result {
    margin-top: 0.75rem;
    font-size: 1.05rem;
    font-weight: 800;
  }
  .note {
    margin-top: 0.35rem;
    font-size: 0.95rem;
    opacity: 0.92;
  }
</style>

<script type="module">
  const riseEl = document.getElementById("rise");
  const slopeEl = document.getElementById("slope");
  const lengthFtEl = document.getElementById("length-ft");
  const lengthMEl = document.getElementById("length-m");
  const resultEl = document.getElementById("result");
  const btn = document.getElementById("calc-btn");

  function compute() {
    const rise = parseFloat(riseEl.value);
    const slope = parseFloat(slopeEl.value);
    if (!rise || !slope || slope <= 0) {
      lengthFtEl.textContent = "—";
      lengthMEl.textContent = "—";
      resultEl.style.opacity = "0.8";
      return;
    }
    const lengthInches = rise * slope;
    const lengthFeet = lengthInches / 12;
    const lengthMeters = lengthInches * 0.0254;
    lengthFtEl.textContent = lengthFeet.toFixed(2);
    lengthMEl.textContent = lengthMeters.toFixed(2);
    resultEl.style.opacity = "1";
  }

  btn.addEventListener("click", compute);
  riseEl.addEventListener("input", compute);
  slopeEl.addEventListener("input", compute);
  compute();
</script>

## How to use
1) Enter the vertical rise in inches.  
2) Use slope 12 for typical accessibility (1:12).  
3) The tool shows the required ramp length in feet and meters.

## Safety note
Always follow local codes and consider landings, handrails, and surface grip.
