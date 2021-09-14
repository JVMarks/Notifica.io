import React from 'react';
import { Text, TextProps } from 'react-native';
import { connect } from 'react-redux';

import { styles } from './styles';

interface Props extends TextProps {
  title?: string;
}


export function CustomText({ title, ...rest }: Props) {
  
  const mapStateToProps = (state : any) => {
    return {
      fontSize:state
    }
  }

  return (
    <Text 
    style={{fontSize: mapStateToProps.arguments}}
    {...rest}>{title}</Text>
  );
}