import React, { useEffect, useState } from "react";
import Main from "./src/src/routes/Main";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import Menu from "./src/src/routes/Menu";
import Work from "./src/src/routes/Work";
import SamsungEm from "./src/src/components/SamsungEm";
import Cjone from "./src/src/components/Cjone";
import SamsungEg from "./src/src/components/SamsungEg";
import Totalks from "./src/src/components/Totalks";
import Funfilx from "./src/src/components/Funfilx"
import PureCss from "./src/src/components/PureCss";

library.add(fas, faTwitter, faFontAwesome, far )


function App() {


  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
    </BrowserRouter>
  );
}

export default App;
