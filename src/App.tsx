import { Button } from "./components/buttons/button"

export default function App() {
  return (
    <div className="p-8">
      <img src="/logo.png" alt="VarSys" className="w-12 h-12 mb-4 rounded-xl" />
      <h1 className="text-2xl font-bold mb-4">VarSys UI</h1>
      <Button>Click me</Button>
    </div>
  )
}
