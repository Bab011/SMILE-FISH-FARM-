import {Contact} from './components/Contact';
import {Experience} from './components/Experience';
import {FoodInspiration} from './components/FoodInspiration';
import {Footer} from './components/Footer';
import {Hero} from './components/Hero';
import {Navbar} from './components/Navbar';
import {Products} from './components/Products';
import {WhyChooseSmile} from './components/WhyChooseSmile';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF4EC] text-[#141413]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Products />
        <Experience />
        <WhyChooseSmile />
        <FoodInspiration />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
