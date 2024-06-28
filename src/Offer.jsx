import * as React from "react";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { DownArrowIcon } from "./components/icons";
import { db } from "./firebase"; // Import Firestore database
import { collection, getDocs } from "firebase/firestore"; 

function Offer() {
  const [activePanel, setActivePanel] = useState(null);
  const [panelData, setPanelData] = useState({
    salon: [],
    sypialnia: [],
    kuchnia: [],
    schody: [],
  });

  const handlePanelClick = (panel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  useEffect(() => {
    const fetchData = async () => {
      const salonCollection = collection(db, "salon");
      const sypialniaCollection = collection(db, "sypialnia");
      const kuchniaCollection = collection(db, "kuchnia");
      const schodyCollection = collection(db, "schody");

      const [salonSnapshot, sypialniaSnapshot, kuchniaSnapshot, schodySnapshot] = await Promise.all([
        getDocs(salonCollection),
        getDocs(sypialniaCollection),
        getDocs(kuchniaCollection),
        getDocs(schodyCollection)
      ]);

      setPanelData({
        salon: salonSnapshot.docs.map(doc => doc.data()),
        sypialnia: sypialniaSnapshot.docs.map(doc => doc.data()),
        kuchnia: kuchniaSnapshot.docs.map(doc => doc.data()),
        schody: schodySnapshot.docs.map(doc => doc.data()),
      });
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center font-light p-6">
        <div className="w-full text-6xl text-center text-black border-0 border-solid max-md:max-w-full max-md:text-4xl">
          Oferta
        </div>
        <div className="flex flex-col justify-center items-center px-5 py-2 w-full text-4xl text-black max-md:max-w-full">
          <div className="flex flex-col items-center mt-14 mb-8 w-full max-w-[1201px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 justify-between self-stretch px-4 py-4 mx-8 whitespace-nowrap rounded-3xl text-white max-md:flex-wrap max-md:mr-2.5 max-md:max-w-[1001px]" style={{ backgroundColor: '#121CFF' }}>
              <div>Projekt mebli</div>
              <div className="text-right">od 260 zł</div>
            </div>

            <div className="w-full flex flex-col items-center">
              <div className="flex gap-5 justify-between px-4 py-4 mt-7 w-full max-w-[1001px] whitespace-nowrap rounded-3xl bg-zinc-800 text-white max-md:flex-wrap" onClick={() => handlePanelClick('salon')}>
                <div>Salon</div>
                <div className="text-right"><DownArrowIcon className={`h-10 w-8 transition-transform ${activePanel === 'salon' ? 'transform rotate-180' : ''}`} /></div>
              </div>
              {activePanel === 'salon' && (
                <div className="panel p-8  rounded-lg bg-zinc-800 text-white w-[1001px] max-md:w-full mt-[-20px] -z-50" >
                  {panelData.salon.map((item, index) => (
                    <div key={index} className="flex justify-between items-center mb-4">
                      <img src={item.img} alt={item.text} className="w-24 h-24 rounded-lg" />
                      <span>{item.text}</span>
                      <span>{item.price}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="w-full flex flex-col items-center">
              <div className="flex gap-5 justify-between px-4 py-4 mt-7 w-full max-w-[891px] whitespace-nowrap rounded-3xl bg-zinc-800 text-white max-md:flex-wrap" style={{ backgroundColor: '#121CFF' }} onClick={() => handlePanelClick('sypialnia')}>
                <div>Sypialnia</div>
                <div className="text-right"><DownArrowIcon className={`h-10 w-8 transition-transform ${activePanel === 'sypialnia' ? 'transform rotate-180' : ''}`} /></div>
              </div>
              {activePanel === 'sypialnia' && (
                <div className="panel p-8 text-white w-[891px] max-md:w-full mt-[-20px]" style={{ backgroundColor: '#121CFF' }}>
                  {panelData.sypialnia.map((item, index) => (
                    <div key={index} className="flex justify-between items-center mb-4">
                      <img src={item.img} alt={item.text} className="w-24 h-24 rounded-lg" />
                      <span>{item.text}</span>
                      <span>{item.price}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="w-full flex flex-col items-center">
              <div className="flex gap-5 justify-between px-4 py-4 mt-7 w-full max-w-[841px] whitespace-nowrap rounded-3xl bg-zinc-800 text-white max-md:flex-wrap" onClick={() => handlePanelClick('kuchnia')}>
                <div>Kuchnia</div>
                <div className="text-right"><DownArrowIcon className={`h-10 w-8 transition-transform ${activePanel === 'kuchnia' ? 'transform rotate-180' : ''}`} /></div>
              </div>
              {activePanel === 'kuchnia' && (
                <div className="panel p-8 bg-zinc-800 text-white w-[841px] max-md:w-full mt-[-20px]"> 
                  {panelData.kuchnia.map((item, index) => (
                    <div key={index} className="flex justify-between items-center mb-4">
                      <img src={item.img} alt={item.text} className="w-24 h-24 rounded-lg" />
                      <span>{item.text}</span>
                      <span>{item.price}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="w-full flex flex-col items-center">
              <div className="flex flex-col justify-center mt-7 w-full max-w-[791px] whitespace-nowrap bg-blue-400 rounded-3xl" style={{ backgroundColor: '#121CFF' }} onClick={() => handlePanelClick('schody')}>
                <div className="flex gap-5 justify-between px-4 py-4 max-md:flex-wrap max-md:max-w-full text-white">
                  <div>Schody</div>
                  <div className="text-right"><DownArrowIcon className={`h-10 w-8 transition-transform ${activePanel === 'schody' ? 'transform rotate-180' : ''}`} /></div>
                </div>
              </div>
              {activePanel === 'schody' && (
                <div className="panel p-8 text-white w-[791px] max-md:w-full mt-[-20px]" style={{ backgroundColor: '#121CFF' }}>
                  {panelData.schody.map((item, index) => (
                    <div key={index} className="flex justify-between items-center mb-4">
                      <img src={item.img} alt={item.text} className="w-24 h-24 rounded-lg" />
                      <span>{item.text}</span>
                      <span>{item.price}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-5 justify-between px-4 py-4 mt-7 max-w-full rounded-3xl bg-zinc-800 text-white w-[741px] max-md:flex-wrap" onClick={() => handlePanelClick('wniesienie')}>
              <div>Wniesienie mebli</div>
              <div className="text-right">150 zł</div>
            </div>

            <div className="justify-center items-center px-16 py-2 mt-7 max-w-full text-2xl text-white text-center rounded-3xl border border-solid border-black border-opacity-60 w-[900px] max-md:px-5 max-md:max-w-full" style={{ backgroundColor: '#121CFF' }}>
              Bezpłatna dostawa i montaż przy zakupie 2 usług.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Offer;
