export function ContentArea() {
  return (
    <main className="flex-1 p-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome to TypeScript</h1>
        <p className="text-gray-600 mb-4">
          Select a topic from the navigation menu to start learning TypeScript. We'll guide you through everything from
          basic setup to advanced concepts.
        </p>
        <div className="bg-rose-50 rounded-lg p-6 mt-8">
          <h2 className="text-xl font-semibold text-rose-900 mb-3">Getting Started</h2>
          <p className="text-rose-700">
            TypeScript is a strongly typed programming language that builds on JavaScript. It adds additional syntax to
            JavaScript to support a tighter integration with your editor, catching errors early in your development
            process.
          </p>
        </div>
        <div className="bg-muted p-4 rounded-lg mt-6">
          <h3 className="text-xl font-semibold mb-2">Quick Start</h3>
          <code className="block bg-background p-3 rounded">
            npm install -g typescript
            <br />
            tsc --init
          </code>
        </div>
      </div>
    </main>
  )
}

