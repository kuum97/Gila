export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-stone-200 flex items-center justify-center">
      <div className="w-[450px]">{children}</div>
    </main>
  );
}
