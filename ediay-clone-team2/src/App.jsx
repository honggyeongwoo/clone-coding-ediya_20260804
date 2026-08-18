// App.jsx

import "./App.css";

// header 홍경우
import EdiyaHeader from "./header/Ediya_header";
//
// main 이은호
import MainHome from "./main/MainHome";
import MainOne from "./main/MainOne";
import MainTwo from "./main/MainTwo";
import "../src/main/App2.css";
//
// footer 신현호
import Ediya_footer from "./footer/ediya_footer";
//

function App() {
  return (
    <>
      {/* 경우 header */}
      <div>
        <EdiyaHeader />
      </div>

      {/* 은호 main */}
      <div>
        <MainHome />
      </div>

      {/* 현호 footer */}
      <div>
        <Ediya_footer />
      </div>
    </>
  );
}

export default App;
