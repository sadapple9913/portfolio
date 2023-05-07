import React, { useEffect, useState } from "react";
import Main from "./routes/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import Menu from "./routes/Menu";
import Work from "./routes/Work";
import SamsungEm from "./components/SamsungEm";
import Cjone from "./components/Cjone";
import SamsungEg from "./components/SamsungEg";
import Totalks from "./components/Totalks";
import Funfilx from "./components/Funfilx"
import PureCss from "./components/PureCss";

library.add(fas, faTwitter, faFontAwesome, far )


function App() {

  // const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Work" element={<Work />} />
      <Route path="/SamsungEm" element={<SamsungEm />} />
      <Route path="/Cjone" element={<Cjone />} />
      <Route path="/SamsungEg" element={<SamsungEg />} />
      <Route path="/Totalks" element={<Totalks />} />
      <Route path="/Funfilx" element={<Funfilx />} />
      <Route path="/PureCss" element={<PureCss />} />
    </Routes>
    </Router>
  );
}

export default App;
