# single-nextjs-yarn-zero-installs - PRISTINE

This project contains safe versions of React/Next.js packages without any known vulnerabilities. Uses Yarn Berry zero-installs with packages stored in .yarn/cache/.

## Project Type
Next.js app with Yarn Berry zero-installs - packages stored in committed .yarn/cache/

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
├── package.json        # Dependencies (15.1.9)
├── yarn.lock           # Lockfile (matches package.json)
└── node_modules/       # Generated from .yarn/cache
```

### How Zero-Installs Works

1. **First install**: `yarn install` downloads packages to `.yarn/cache/`
2. **Commit cache**: All .zip files in `.yarn/cache/` are committed to git
3. **Other machines**: `yarn install --immutable` just links from cache (fast!)
4. **Updates**: Changing package.json requires re-running `yarn install`

### Variant Details

In the pristine variant, package.json, yarn.lock, and .yarn/cache/ all contain safe version 15.1.9.

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
- ✅ Should recognize Yarn Berry zero-installs setup from .yarnrc.yml
- ✅ Should examine .yarn/cache/ directory for package .zip files
- ✅ Should extract version information from cache filenames
- ✅ Should detect next@15.1.0 (vulnerable) in the CVE variant
- ✅ Should flag `CVE-2025-66478` as present

### Fix Phase
- ✅ Should update package.json to safe version (15.1.9)
- ✅ Should run `yarn install` to refresh `.yarn/cache/` with safe packages
- ✅ Should verify cache now contains safe versions
- ✅ Should update yarn.lock to match new version

### Verification Phase
- ✅ Should confirm no vulnerable packages remain in `.yarn/cache/`
- ✅ Should verify package.json, yarn.lock, and cache all reference safe versions
- ✅ Should confirm .yarn/cache/ contains next-npm-15.1.9-*.zip (not 15.1.0)
