export default function GenericsPage() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 id="generics" className="text-4xl font-bold mb-6">
        Generics in TypeScript
      </h1>

      <div className="prose dark:prose-invert">
        <p className="text-lg mb-4">
          Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that
          don't need to explicitly define the types that they use. Generics makes it easier to write reusable code.
        </p>

        <h2 id="advantages" className="text-2xl font-semibold mt-8 mb-4">
          Advantages of Using Generics
        </h2>
        <ul className="space-y-2 list-disc pl-6">
          <li>By using generics we may safely store a single type of object without storing the other types too.</li>
          <li>
            By using generics we need not implement the typecasting of any variable or function at the time of calling.
          </li>
          <li>Generics are usually checked at the compile time so no issue exists in runtime.</li>
        </ul>

        {/* Adding some example code blocks to demonstrate generics usage */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">Generic Function Example</h2>
        <code className="block bg-rose-50 p-3 rounded text-rose-900 mt-2">
          function identity&lt;T&gt;(arg: T): T &#123; <br />
          &nbsp;&nbsp;return arg; <br />
          &#125;
        </code>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Generic Interface Example</h2>
        <code className="block bg-rose-50 p-3 rounded text-rose-900 mt-2">
          interface GenericIdentityFn&lt;T&gt; &#123; <br />
          &nbsp;&nbsp;(arg: T): T; <br />
          &#125;
        </code>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Generic Class Example</h2>
        <code className="block bg-rose-50 p-3 rounded text-rose-900 mt-2">
          class GenericNumber&lt;T&gt; &#123; <br />
          &nbsp;&nbsp;zeroValue: T; <br />
          &nbsp;&nbsp;add: (x: T, y: T) =&gt; T; <br />
          &#125;
        </code>
      </div>
    </div>
  )
}

