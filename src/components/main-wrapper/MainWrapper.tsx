import { headers } from 'next/headers'
import type { PropsWithChildren } from "react";

import Header from "./header/Header";

const MainWrapper = async ({ children }: PropsWithChildren) => {
	const headerList = await headers()
	const pathname = headerList.get('x-current-path')

  return (
    <div>
      <Header pathname={pathname} />
      {children}
    </div>
  )
};

export default MainWrapper;

