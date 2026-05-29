const fs = require('fs');
const path = require('path');

const DIRECTORIES = [
  'ashbea-proposal',
  'hipac-foods',
  'hipac-foods-concept-3',
  'hipac-foods-concept5',
  'hipac-foods-concept6',
  'hipac-foods-theme-2'
];

const REPLACEMENTS = [
  { from: /"\/logo\.png"/g, to: '"./logo.png"' },
  { from: /'\/logo\.png'/g, to: "'./logo.png'" },
  { from: /"\/farmers-choice-logo\.png"/g, to: '"./farmers-choice-logo.png"' },
  { from: /'\/farmers-choice-logo\.png'/g, to: "'./farmers-choice-logo.png'" },
  { from: /"\/family-choice-logo\.png"/g, to: '"./family-choice-logo.png"' },
  { from: /'\/family-choice-logo\.png'/g, to: "'./family-choice-logo.png'" },
  { from: /"\/bar-pac-logo\.png"/g, to: '"./bar-pac-logo.png"' },
  { from: /'\/bar-pac-logo\.png'/g, to: "'./bar-pac-logo.png'" },
  { from: /"\/bacon-package\.png"/g, to: '"./bacon-package.png"' },
  { from: /'\/bacon-package\.png'/g, to: "'./bacon-package.png'" },
  { from: /"\/bacon-package-back\.png"/g, to: '"./bacon-package-back.png"' },
  { from: /'\/bacon-package-back\.png'/g, to: "'./bacon-package-back.png'" },
  { from: /"\/hero\.png"/g, to: '"./hero.png"' },
  { from: /'\/hero\.png'/g, to: "'./hero.png'" },
  { from: /"\/story-video\.mp4"/g, to: '"./story-video.mp4"' },
  { from: /'\/story-video\.mp4'/g, to: "'./story-video.mp4'" },
  { from: /"\/hero-video\.mp4"/g, to: '"./hero-video.mp4"' },
  { from: /'\/hero-video\.mp4'/g, to: "'./hero-video.mp4'" },
  { from: /"\/hipac-hero-video\.mp4"/g, to: '"./hipac-hero-video.mp4"' },
  { from: /'\/hipac-hero-video\.mp4'/g, to: "'./hipac-hero-video.mp4'" },
  { from: /"\/make_the_hamburger_move_202605262153\.mp4"/g, to: '"./make_the_hamburger_move_202605262153.mp4"' },
  { from: /'\/make_the_hamburger_move_202605262153\.mp4'/g, to: "'./make_the_hamburger_move_202605262153.mp4'" },
  { from: /"\/Add_nuggets_to_hamburger_202605262322\.mp4"/g, to: '"./Add_nuggets_to_hamburger_202605262322.mp4"' },
  { from: /'\/Add_nuggets_to_hamburger_202605262322\.mp4'/g, to: "'./Add_nuggets_to_hamburger_202605262322.mp4'" }
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  for (const repl of REPLACEMENTS) {
    content = content.replace(repl.from, repl.to);
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated paths in: ${filePath}`);
  }
}

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== '.git') {
        traverse(fullPath);
      }
    } else if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.html') || file.endsWith('.css')) {
      processFile(fullPath);
    }
  }
}

console.log('🔄 Transforming hardcoded absolute paths into relative paths...');

for (const sub of DIRECTORIES) {
  const subPath = path.join(__dirname, sub);
  if (fs.existsSync(subPath)) {
    console.log(`Scanning ${sub}...`);
    traverse(subPath);
  }
}

console.log('✨ All transformations completed successfully!');
