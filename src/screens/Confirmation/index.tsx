import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';

import { styles } from './styles';
import { Button } from '../../components/Button';
import { Background } from '../../components/Background';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smille' | 'hug',
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smille: '😊'
}

export function Confirmation() {

  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen,
  } = routes.params as Params;

  function handleMoveOn() {
    navigation.navigate(nextScreen);
  }

  return (
    <Background>
      <SafeAreaView
        accessible={true}
        accessibilityLabel={"Tela de confirmação da conta"}
        style={styles.container}>
        <View style={styles.content}>
          <Text
            accessibilityLabel={emojis[icon]}
            style={styles.emoji}>
            {emojis[icon]}
          </Text>
          <Text
            accessibilityLabel={title}
            style={styles.title}>
            {title}
          </Text>
          <Text
            accessibilityLabel={subtitle}
            style={styles.subtitle}>
            {subtitle}
          </Text>
          <View style={styles.footer}>
            <Button
              accessible={true}
              accessibilityLabel={`Pressione o botão ${buttonTitle} para continuar`}
              title={buttonTitle}
              onPress={handleMoveOn}
            />
          </View>
        </View>
      </SafeAreaView>
    </Background>
  )
}