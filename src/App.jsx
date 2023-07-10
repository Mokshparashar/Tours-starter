import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./context";
import Tours from "./Tours";

const App = () => {
  return (
    <main>
      <Tours />
    </main>
  );
};

export default App;
