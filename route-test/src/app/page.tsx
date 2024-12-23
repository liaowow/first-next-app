export default function Home({ searchParams }: { searchParams: Record<string, string | string[]>}) {
  return (
    <main className="p-5 text-2xl">
      <h1 className="text-bold mb-5 underline text-4xl">Home page</h1>
      <h2 className="font-bold italic my-3">Search Params</h2>
      <pre>{JSON.stringify(searchParams, null, 2)}</pre>
    </main>
  );
}
