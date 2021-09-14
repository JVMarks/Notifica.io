declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>;
  export default content;
}

/*

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  > & { title?: string }>;

  const src: string;
  export default src;
}

*/