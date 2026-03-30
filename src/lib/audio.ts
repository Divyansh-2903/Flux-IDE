export const initAudio = () => {
  // @ts-ignore
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return null;
  
  // @ts-ignore
  if (!window.audioCtx) {
    // @ts-ignore
    window.audioCtx = new AudioContext();
  }
  
  // @ts-ignore
  const ctx = window.audioCtx as AudioContext;
  if (ctx.state === 'suspended') {
    ctx.resume();
  }
  return ctx;
};

export const playHoverSound = () => {
  try {
    const ctx = initAudio();
    if (!ctx) return;
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    // Premium subtle hover: very short, high-frequency "glassy" tick
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.02);
    
    // Very low volume, fast decay
    gain.gain.setValueAtTime(0.015, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.02);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.02);
  } catch (e) {
    // Ignore audio errors
  }
};

export const playClickSound = () => {
  try {
    const ctx = initAudio();
    if (!ctx) return;
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    // Premium subtle click: soft, satisfying "thud/pop"
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.05);
    
    // Slightly louder than hover, but still soft
    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) {}
};

let bgmStarted = false;

export const startBackgroundMusic = () => {
  if (bgmStarted) return;
  
  try {
    const ctx = initAudio();
    if (!ctx) return;
    bgmStarted = true;
    
    // Master gain for the ambient drone
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0, ctx.currentTime);
    // Fade in very slowly over 5 seconds to a very soft volume
    masterGain.gain.linearRampToValueAtTime(0.015, ctx.currentTime + 5);
    masterGain.connect(ctx.destination);
    
    // Lowpass filter to make it sound warm and muffled
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 400;
    filter.connect(masterGain);
    
    // Frequencies for a lush, ambient chord (Fmaj9: F2, A2, C3, E3, G3)
    const frequencies = [87.31, 110.00, 130.81, 164.81, 196.00];
    
    frequencies.forEach(freq => {
      const osc = ctx.createOscillator();
      osc.type = 'sine'; // Sine waves provide the smoothest, softest tone
      osc.frequency.value = freq;
      
      // Add a slight random detune to create a thick, chorus-like pad effect
      osc.detune.value = (Math.random() - 0.5) * 10;
      
      // Connect and start
      osc.connect(filter);
      osc.start();
    });
  } catch (e) {
    bgmStarted = false;
  }
};
