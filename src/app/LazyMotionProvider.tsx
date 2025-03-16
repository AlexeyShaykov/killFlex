import type { PropsWithChildren } from 'react';
import { LazyMotion, domAnimation } from 'motion/react';

const LazyMotionProvider = ({ children }: PropsWithChildren) => {

  return (
    <LazyMotion features={domAnimation}> 
      {children}
    </LazyMotion>
  );
};

export default LazyMotionProvider;