export default function Layout ({children}: {children: React.ReactNode}){
  return <div className="min-h-screen bg-stone-200 flex items-center justify-center">{children}</div>
}