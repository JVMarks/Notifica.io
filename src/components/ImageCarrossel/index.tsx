import React from 'react';
import { SvgProps } from 'react-native-svg';
import { View, ViewProps } from 'react-native';

type Props = ViewProps & {
  icon: React.FC<SvgProps>;
}

export function ImageCarrossel({ icon: Icon, ...rest }: Props) {
  return (
    <View {...rest}>

      <Icon
        width={300}
        height={205}
      />

    </View>
  );
}