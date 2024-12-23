export default function SettingPage({
  params,
}: {
  params: { setting: string[] };
  searchParams: Record<string, string | string[]>; 
}) {
  return (
    <main>
      <h1>Setting Page</h1>
      <p>Setting: {JSON.stringify(params.setting)}</p>
    </main>
  );
}