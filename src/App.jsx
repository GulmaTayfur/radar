import { useEffect, useState } from "react";
import Header from "./components/Header";
import MapView from "./pages/MapView";
import ListView from "./pages/ListView";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions/flightActions";
import Modal from "./components/Modal";

const App = () => {
  //harita görünümü aktif mi?
  const [isMapView, setIsMapView] = useState(true);
  //detayı gösterilece elemanın id'si
  const [detailId, setDeatailId] = useState(null);
  console.log(detailId);

  const dispatch = useDispatch();

  // uçuş verilerini al
  useEffect(() => {
    dispatch(getFlights());
    setInterval(() => {
      dispatch(getFlights());
    }, 10000);
  }, []);
  return (
    <div>
      <Header />

      <div className="veiw-buttons">
        <button
          onClick={() => setIsMapView(true)}
          className={isMapView ? "active" : ""}
        >
          Harita Görünümü
        </button>
        <button
          onClick={() => setIsMapView(false)}
          className={isMapView ? "" : "active"}
        >
          Liste Görünümü
        </button>
      </div>

      {/* hangi görünümü ekrana basılacağını belirle */}

      {isMapView ? (
        <MapView setDeatailId={setDeatailId} />
      ) : (
        <ListView setDeatailId={setDeatailId} />
      )}
      {/* detailId varsa ekrana modal bas */}
      {detailId && (
        <Modal detailId={detailId} close={() => setDeatailId(null)} />
      )}
    </div>
  );
};

export default App;
