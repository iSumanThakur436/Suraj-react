import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import e1 from './assets/suraj.png';
import e2 from './assets/daddychill.gif';
import e3 from './assets/5.gif';
import e4 from './assets/6.gif';
import audio1 from './assets/audio1.mp3';
import audio2 from './assets/audio2.mp3';
import audio3 from './assets/audio3.mp3';
import audio4 from './assets/audio4.mp3';
import { useState, useEffect} from 'react';
import React, { useRef } from 'react';

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]


export default function Example() {
const audioRef1 = useRef(null);
const audioRef2 = useRef(null);
const audioRef3 = useRef(null);
const audioRef4 = useRef(null);
let [count, setCount] = useState(0)
let [imageUrl, setImageUrl] = useState({e1}); 
const [showMessage, setShowMessage] = useState(false);
const [showMessage1, setShowMessage1] = useState(false);

useEffect(() => {
  
  if (count < 0) {
    setImageUrl(e2);
    setShowMessage(true);
    setShowMessage1(false);
  } else if (count === 10) {
    setImageUrl(e3);
    setShowMessage(false);
    setShowMessage1(true);
  } else {
    setImageUrl(e1);
    setShowMessage(false); 
    setShowMessage1(false);// Default image or other logic based on range
  }
  console.log(imageUrl)
}, [count]);

let add=()=>{if(count<10){
  if (audioRef1.current) {
    audioRef1.current.play();
  }
  setCount(count+1)}}
let sub=()=>{if(count>-1){
  if (audioRef2.current) {
    audioRef2.current.play();
  }
  setCount(count-1) }
  

}
let reset=()=>{
  if (audioRef3.current) {
    audioRef3.current.play();
  }
  setCount(count=0)}

  let yas=()=>{
    if (audioRef4.current) {
      audioRef4.current.play();
    }
    setImageUrl(e4);
    }


  return (
    <div className="overflow-hidden bg-white py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Nata Nunu</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Small  🍆  Big Dreams</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Suraj Shaw, A small boy with small 🍆. He is a corporate slave from kolkata, he is mesirable and virgin...... but with our new technology you can simply click a button and he will get a breand new russian gf, for FREE.
              </p>
              <h1 className='text-2xl py-9'>Suraj has {count} russian gf</h1>
              <div className="msg"> {showMessage && <h1>He is already virgin, you want him to upgrade to virgin pro 😭</h1>}</div>
              <div className="msg"> {showMessage1 && <h1>Itna me bas, Itna hi milega #mera_isse_bara_ha 💀</h1>}</div>

              <dl className=" py-20 flex justify-between">
              <audio ref={audioRef1} src={audio1} />
              <audio ref={audioRef2} src={audio3} />
              <audio ref={audioRef3} src={audio2} />
              <audio ref={audioRef4} src={audio4} />

              <button onClick={add} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              +1 Bitch
              </button>
              <button onClick={reset} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Make him virgin again :(
              </button>
              <button onClick={sub} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              -1 Bitch
              </button>
    
              </dl>
              <button onClick={yas} className="px-20 py-2 bg-indigo-900 text-white rounded hover:bg-indigo-300 focus:outline-indigo-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Claim your gfs here
              </button>
            </div>
          </div>
          <div className="w-full h-[40rem] sm:w-[48rem] h-[40em] md:w-[40rem] object-cover max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0">
         <img src={imageUrl} alt="Image" className="w-full h-full object-cover rounded-xl shadow-xl" />
          </div>
        
      
          
        </div>
      </div>
    </div>
  )
}
