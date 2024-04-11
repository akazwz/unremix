import fs from 'fs-extra'

fs.remove('load-context.ts')
fs.remove('wrangler.toml')
fs.remove('functions')

fs.copy('magic/node/tsconfig.json', 'tsconfig.json')
fs.copy('magic/node/vite.config.ts', 'vite.config.ts')
fs.copy('magic/node/entry.server.tsx', 'app/entry.server.tsx')



