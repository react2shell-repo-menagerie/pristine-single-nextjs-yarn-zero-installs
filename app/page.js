export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>CVE-2025-66478 Test Application</h1>
      <h2>Yarn Berry Zero-Installs Cache Invalidation</h2>

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#d4edda', borderRadius: '4px' }}>
        <h3>Variant: PRISTINE</h3>
        <p>This variant has matching package.json and .yarn/cache/ with safe versions.</p>
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
          <li><strong>Cache Invalidation</strong>: .yarn/cache/ may not match package.json versions</li>
          <li><strong>Zero-Installs</strong>: Cache is committed, making it easy to miss updates</li>
          <li><strong>No Automatic Refresh</strong>: Yarn doesn't auto-update cache when package.json changes</li>
          <li><strong>Version Detection</strong>: Must check both package.json AND .yarn/cache/ contents</li>
        </ul>
      </div>
    </main>
  )
}
