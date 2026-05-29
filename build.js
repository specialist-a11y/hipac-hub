const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SUBPROJECTS = [
  'ashbea-proposal',
  'hipac-foods',
  'hipac-foods-concept-3',
  'hipac-foods-concept5',
  'hipac-foods-concept6',
  'hipac-foods-theme-2'
];

const ROOT_DIR = __dirname;
const DIST_DIR = path.join(ROOT_DIR, 'dist');

console.log('🚀 Starting HIPAC Hub Monorepo Build...');

// 1. Clean and recreate dist directory
if (fs.existsSync(DIST_DIR)) {
  console.log('🧹 Cleaning existing dist folder...');
  fs.rmSync(DIST_DIR, { recursive: true, force: true });
}
fs.mkdirSync(DIST_DIR, { recursive: true });

// 2. Build each subproject
for (const sub of SUBPROJECTS) {
  const subPath = path.join(ROOT_DIR, sub);
  console.log(`\n======================================================`);
  console.log(`📦 Building subproject: ${sub}`);
  console.log(`======================================================`);

  if (!fs.existsSync(subPath)) {
    console.warn(`⚠️ Directory ${sub} does not exist. Skipping...`);
    continue;
  }

  try {
    // Install dependencies
    console.log(`👉 Installing dependencies in ${sub}...`);
    execSync('npm install', { cwd: subPath, stdio: 'inherit' });

    // Build project
    console.log(`👉 Running npm run build in ${sub}...`);
    execSync('npm run build', { cwd: subPath, stdio: 'inherit' });

    // Copy dist to root dist/<subproject-name>
    const subDist = path.join(subPath, 'dist');
    const targetDist = path.join(DIST_DIR, sub);

    if (fs.existsSync(subDist)) {
      console.log(`👉 Copying build files from ${subDist} to ${targetDist}...`);
      fs.mkdirSync(targetDist, { recursive: true });
      fs.cpSync(subDist, targetDist, { recursive: true });
      console.log(`✅ Successfully compiled and copied ${sub}!`);
    } else {
      console.error(`❌ Output dist folder not found at ${subDist}!`);
    }
  } catch (err) {
    console.error(`❌ Failed to build ${sub}:`, err.message);
    process.exit(1);
  }
}

// 3. Create Root Landing Page Portal
console.log(`\n======================================================`);
console.log(`🎨 Creating root landing page portal...`);
console.log(`======================================================`);

const portalSrc = path.join(ROOT_DIR, 'portal.html');
const portalDest = path.join(DIST_DIR, 'index.html');

if (fs.existsSync(portalSrc)) {
  fs.copyFileSync(portalSrc, portalDest);
  console.log('✅ Portal HTML copied successfully to root dist!');
} else {
  console.log('⚠️ portal.html template not found. Creating a default redirect landing page...');
  const defaultHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=./ashbea-proposal/index.html">
    <title>Redirecting...</title>
</head>
<body>
    <p>Redirecting to <a href="./ashbea-proposal/index.html">ashbea-proposal</a>...</p>
</body>
</html>`;
  fs.writeFileSync(portalDest, defaultHtml, 'utf8');
  console.log('✅ Default redirect landing page created!');
}

console.log('\n✨ All projects successfully built and aggregated into root /dist folder!');
