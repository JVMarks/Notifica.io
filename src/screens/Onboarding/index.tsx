import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { View, Text, Animated, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { DATA } from '../../utils/carrossel';
import { theme } from '../../global/styles/theme';

import { Background } from '../../components/Background';
import { ImageCarrossel } from '../../components/ImageCarrossel';

export function Onboarding() {

  const navigation = useNavigation();

  function hadleCreateAccount() {
    navigation.navigate('CreateAccount');
  }

  function hadleSignIn() {
    navigation.navigate('SignIn');
  }

  return (
    <Background>
      <View
        accessible={true}
        accessibilityLabel="Tela Orboarding"
        style={styles.container}
      >
        <SwiperFlatList
          autoplay
          index={0}
          horizontal
          data={DATA}
          autoplayLoop
          pagingEnabled
          showPagination
          autoplayDelay={35}
          scrollEventThrottle={32}
          keyExtractor={(item) => item.key}
          showsHorizontalScrollIndicator={false}
          paginationDefaultColor={theme.colors.on}
          paginationStyleItem={{ width: 10, height: 10 }}
          paginationActiveColor={theme.colors.secondary100}
          onScroll={() => Animated.event([], { useNativeDriver: false })}
          paginationStyle={{ borderBottomColor: theme.colors.secondary100, bottom: 165 }}
          renderItem={({ item }) => {
            return (
              <View
                accessible={true}
                accessibilityLabel="Deslize a tela para a direita até o terceiro item do Carrosel para 
              ter acesso aos botões de criar conta ou de login"
                style={styles.containerCarrosel}
              >
                <View
                  accessible={true}
                  accessibilityLabel="Primeiro descrição - Notifique acontecimentos regulares e não programados
                Segundo descrição - Saiba tudo que está acontecendo em seu ambiente antes de se locomover"
                  style={styles.containerImg}>
                  <ImageCarrossel
                    icon={item.image}
                  />
                  <Text style={styles.flatText}>
                    {item.description}
                  </Text>
                </View>

                {item.key === '3' &&
                  <View
                    accessible={true}
                    accessibilityLabel=" Terceira descrição - Segurança, rapidez e tranquilidade para você.
                  Você liberou os botões"
                    style={styles.containerbuttons}>

                    <TouchableOpacity
                      accessible={true}
                      accessibilityLabel={'Pressione o botão para criar conta'}
                      activeOpacity={0.6}
                      onPress={hadleCreateAccount}
                      style={styles.buttonCreateAccont}
                    >
                      <Text style={styles.buttonCreateAcconttxt}>
                        Criar conta
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      accessible={true}
                      accessibilityLabel="Pressione o botão para logar na conta"
                      activeOpacity={0.6}
                      onPress={hadleSignIn}
                    >
                      <Text style={styles.loginButton}>
                        Login
                      </Text>
                    </TouchableOpacity>

                  </View>
                }
              </View>
            )
          }}
        />
      </View>
    </Background >
  );
}