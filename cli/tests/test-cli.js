const { execSync } = require('child_process')
try {
  const out = execSync('node ./bin/devtool.js greet --name CI_Test', { encoding: 'utf8' })
  if (!out.includes('Hello, CI_Test')) {
    console.error('Unexpected output:', out)
    process.exit(1)
  }
  console.log('CLI greet output OK')
  process.exit(0)
} catch (err) {
  console.error('CLI test failed', err.message)
  process.exit(1)
}
