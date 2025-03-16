import type { PropsWithChildren } from "react";

import Header from "./header/Header";

const MainWrapper = ({ children }: PropsWithChildren) => {


  return (
    <div>
      <Header />
      {children}
    </div>
  )
};

export default MainWrapper;

