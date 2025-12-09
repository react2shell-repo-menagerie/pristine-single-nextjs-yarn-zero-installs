# single-nextjs-yarn-zero-installs - PRISTINE

This project contains pristine versions of React/Next.js packages without any known vulnerabilities. The .yarn/cache/ matches package.json versions.

## Project Type
Next.js app with Yarn Berry zero-installs - .yarn/cache/ persists after package.json fix

## Variant: pristine

### Package.json Dependencies
```json
{
  "nextVersion": "15.1.9",
  "reactVersion": "^18.3.1",
  "reactDomVersion": "^18.3.1"
}
```


## Zero-Installs Configuration

This project uses Yarn Berry (v4+) with zero-installs:

### .yarnrc.yml
```yaml
nodeLinker: node-modules
enableGlobalCache: false
compressionLevel: mixed
```

### Directory Structure
```
project/
├── .yarn/
│   ├── cache/          # All package .zip files (COMMITTED)
│   └── releases/       # Yarn Berry binary
├── .yarnrc.yml         # Yarn configuration
├── package.json        # Dependencies
├── yarn.lock           # Lockfile
└── node_modules/       # Symlinks to .yarn/cache
```

### How Zero-Installs Works

1. **First install**: `yarn install` downloads packages to `.yarn/cache/`
2. **Commit cache**: All .zip files in `.yarn/cache/` are committed to git
3. **Other machines**: `yarn install --immutable` just links from cache (fast!)
4. **Updates**: Changing package.json requires re-running `yarn install`

### The Cache Invalidation Problem

In the pristine variant, package.json and .yarn/cache/ are in sync with safe versions.

## Testing

To check for vulnerabilities:
```bash
yarn test
```

To apply fixes:
```bash
yarn fix
```

## Setup

```bash
# Install using immutable mode (uses existing cache)
yarn install --immutable

# Run development server
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000) with your browser.

## Expected Scanner Behavior

### Detection Phase
- ✅ Should detect vulnerable packages in `.yarn/cache/` even if package.json is "fixed"
- ✅ Should report version mismatch between package.json and cache
- ✅ Should flag `CVE-2025-66478` as present

### Fix Phase
- ✅ Should update package.json to safe version
- ✅ Should run `yarn install` to refresh `.yarn/cache/`
- ✅ Should verify cache now contains safe versions
- ✅ Should update yarn.lock if needed

### Verification Phase
- ✅ Should confirm no vulnerable packages remain in `.yarn/cache/`
- ✅ Should verify package.json, yarn.lock, and cache are all in sync
