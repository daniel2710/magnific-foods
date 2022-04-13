import React, {useState,useEffect} from 'react';
import Footer from './components/footer/Footer';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Sidebar from './components/navbar/Sidebar';
import Featured from "./components/section/Featured";
import Services from './components/section/Services';

function App() {

  const [sidebar, setSidebar] = useState(false);

  const openSidebar = ()=>{
    setSidebar(!sidebar)
  }

  // Api de open weather para obtener datos a traves de longitud y latitud
  const [ciudad, setCiudad] = useState('Mi')
  const [pais, setPais] = useState('Ubicacion')

  // key que nos brinda la api una vez registrados
  let keyApi = 'ed9961659953ce92ed73632fd0053ebc'

  // funcion para obtener las coordenadas
  const success = (geolocationPosition)=>{
    let coords = geolocationPosition.coords;
    let latitude = coords.latitude;
    let longitude = coords.longitude;

    // consumimos la api
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${keyApi}`;
      fetch(API_URL)
      .then(res => res.json())
      .then(result => {
        setCiudad(result.name)
        setPais(result.sys.country)
      });
  }

  // useEffect para una vez haber ingresado a la app/pagina ejecute las instrucciones
  useEffect(() => {
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(success)
    }else{
      alert("No se pudo obtener la ubicación")
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <div className="App">
      {sidebar ? <Sidebar openSidebar={openSidebar} sidebar={sidebar}/> : null}
      <Navbar
      // le pasamos por props al componente navbar para consumir los datos de ciudad y pais. tambien el estado para abrir el sidebar
        ciudad={ciudad}
        pais={pais}
        sidebar={sidebar}
        openSidebar={openSidebar}
      />
      <Header/>
      <Featured/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
