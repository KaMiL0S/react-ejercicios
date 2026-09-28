import { useState } from 'react'
import './App.css'
import Input from './Input'
import Contador from './Contador'
import Item from './item'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  const t = "This is a simple React application.";
  const myarray = [1, 2, 3, 4, 5];

  return (
    <>
      <div class="flex min-h-screen items-center justify-center bg-slate-100 p-4">
        <div class="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl text-center">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAUo6XXQDho4Dvx6AFhAU-PaqyrYv3mpFyqjb-bUVn-Q&s=10" 
            alt="Foto de perfil" 
            class="mx-auto h-24 w-24 rounded-full border-4 border-indigo-500 object-cover shadow-md"
          />
          <h2 class="mt-4 text-xl font-bold text-slate-800">Sofía Rodríguez</h2>
          <p class="text-sm font-semibold uppercase tracking-wider text-indigo-600">Desarrolladora Frontend</p>
          <p class="mt-3 text-sm text-slate-500 leading-relaxed">
            Apasionada por crear interfaces web intuitivas, limpias y altamente optimizadas utilizando las últimas tecnologías.
          </p>
          <h2 class="mt-4 text-xl font-bold text-slate-800">Sofía Rodríguez</h2>
          <p class="text-sm font-semibold uppercase tracking-wider text-indigo-600">Desarrolladora Frontend</p>
          <p class="mt-3 text-sm text-slate-500 leading-relaxed">
            Apasionada por crear interfaces web intuitivas, limpias y altamente optimizadas utilizando las últimas tecnologías.
          </p>
          <div class="mt-6 flex gap-3">
            <button class="w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-md transition-colors duration-300 hover:bg-indigo-700">
              Conectar
            </button>
            <button class="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-colors duration-300 hover:bg-slate-50">
              Enviar Mensaje
            </button>
          </div>

        </div>
      </div>
      <div class="grid grid-cols-4 gap-4">
        <div>
          <h1>Welcome to My App</h1>
          <p style={{color: 'blue'}}>Inicial {`${t}`}</p>
          <ul>
            {myarray.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <input type="checkbox" id="myCheckbox"/>
          <label htmlFor="myCheckbox">checkbox</label>
        </div>
        <div>
          <Input />
        </div>
        <div>
          <Contador />
        </div>
        <div>
          <Item />
        </div>
      </div>
      <div>
        <Card cardName="John Doe" cardAge={30} cardJob="Developer" />
        <Card cardName="Jane Smith" cardAge={25} cardJob="Designer" />
      </div>
    </>
  )
}

export default App
