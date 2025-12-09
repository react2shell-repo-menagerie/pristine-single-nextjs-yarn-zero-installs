export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>CVE-2025-66478 Test Application</h1>
      <h2>Yarn Berry Zero-Installs</h2>

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#d4edda', borderRadius: '4px' }}>
        <h3>Variant: PRISTINE</h3>
        <p>This variant has safe version 15.1.9 consistently across package.json, yarn.lock, and .yarn/cache/.</p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>Test Commands:</h2>
        <ul>
          <li><code>yarn test</code> - Check for vulnerabilities</li>
          <li><code>yarn fix</code> - Apply security patches</li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#fff3cd', borderRadius: '4px' }}>
        <h3>Zero-Installs Configuration:</h3>
        <ul>
          <li><strong>.yarnrc.yml</strong>: <code>enableGlobalCache: false</code>, <code>nodeLinker: node-modules</code></li>
          <li><strong>.yarn/cache/</strong>: Contains all package .zip files (committed to git)</li>
          <li><strong>yarn.lock</strong>: Lockfile for dependency resolution</li>
          <li><strong>Setup</strong>: <code>yarn install --immutable</code> (fast, uses cache)</li>
        </ul>
      </div>

      

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#d1ecf1', borderRadius: '4px' }}>
        <h3>Scanner Challenges:</h3>
        <ul>
          <li><strong>Zero-Installs Setup</strong>: Packages are in .yarn/cache/ as .zip files, not node_modules/</li>
          <li><strong>Committed Cache</strong>: Cache directory is committed to git and contains actual packages</li>
          <li><strong>Cache Structure</strong>: Files are named like next-npm-15.1.0-[hash].zip</li>
          <li><strong>Version Detection</strong>: Must parse .yarn/cache/ filenames or extract .zip metadata</li>
          <li><strong>Multiple Sources</strong>: Should check package.json, yarn.lock, AND .yarn/cache/</li>
        </ul>
      </div>
    </main>
  )
}
