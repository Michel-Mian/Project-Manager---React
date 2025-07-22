import { useState } from 'react';
import NavBar from '../components/layout/NavBar';
import Welcome from '../components/home/welcome';
import CallToAction from '../components/home/CallToAction';
 
export default function App() {
  const [count, setCount] = useState(0); 

  return (
    <>
      <NavBar />

      <main className="container mx-auto px-4 py-8">
        <Welcome />
        <CallToAction />
      </main>
    </>
  );
}

