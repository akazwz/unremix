import fs from 'fs-extra'

fs.copy('magic/cf/tsconfig.json', 'tsconfig.json')
fs.copy('magic/cf/vite.config.ts', 'vite.config.ts')
fs.copy('magic/cf/functions', 'functions')
fs.copy('magic/cf/entry.server.tsx', 'app/entry.server.tsx')
fs.copy('magic/cf/load-context.ts', 'load-context.ts')
fs.copy('magic/cf/wrangler.toml', 'wrangler.toml')
