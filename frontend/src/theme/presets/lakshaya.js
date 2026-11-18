
export default {
  id: 'lakshaya',
  gameTitle: 'REFLEX ARENA',
  tagline: 'READY PLAYER ONE? TEST YOUR REFLEXES!',
  logoEmoji: '🕹️',
  commander: 'ARCADE SAYS',

  verbs: {
    click: 'TAP',
    double: 'DOUBLE TAP',
    hold: 'HOLD',
  },

  pads: {
    red: { label: 'FIRE', emoji: '🔥', color: '#ff3864', tone: 349.23 },
    blue: { label: 'WAVE', emoji: '🌊', color: '#00d9ff', tone: 293.66 },
    green: { label: 'POWER', emoji: '⚡', color: '#39ff88', tone: 440.0 },
    yellow: { label: 'GOLD', emoji: '⭐', color: '#ffe44d', tone: 587.33 },
  },

  colors: {
    background: '#090014',
    backgroundAccent: '#250047',
    surface: 'rgba(140, 80, 255, 0.12)',
    text: '#ffffff',
    muted: '#bba9d9',
    primary: '#ff3cac',
    primaryText: '#090014',
    good: '#39ff88',
    bad: '#ff3864',
  },

  fontsUrl: 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap',
  fonts: {
    display: "'Press Start 2P', monospace",
    body: 'system-ui, sans-serif',
  },

  lifeIcon: '❤️',
  lostLifeIcon: '💔',

  ranks: {
    Rookie: { name: 'NEW PLAYER', emoji: '🎮' },
    Sharp: { name: 'PRO GAMER', emoji: '⚡' },
    Lightning: { name: 'ELITE PLAYER', emoji: '🚀' },
    'Reflex God': { name: 'ARCADE LEGEND', emoji: '👑' },
  },

  messages: {
    ok: ['NICE MOVE!', 'PERFECT!', 'LEGENDARY!', 'GREAT REFLEXES!'],
    trapDodged: ['SMART MOVE!', 'YOU SAW THROUGH IT!'],
    trap: ['GAME OVER! WRONG MOVE!', 'DON’T FALL FOR IT!'],
    wrong_color: ['WRONG PAD!', 'TRY AGAIN!'],
    wrong_action: ['FOLLOW THE COMMAND!'],
    timeout: ['TOO SLOW!', 'TIME IS UP!'],
    invalid_timing: ['FASTER NEXT TIME!'],
  },

  celebrationEmoji: ['🎮', '🏆', '🚀', '👾'],
};
