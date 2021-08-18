import React, { useState } from 'react';
import { DATA } from '../../utils/carrossel';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { View, Text, Animated, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { Background } from '../../components/Background';
import { ImageCarrossel } from '../../components/ImageCarrossel';


export function Onboarding() {
  const [showBottons, setshowBottons] = useState(DATA);


  const navigation = useNavigation();

  function hadleCreateAccount() {
    navigation.navigate('CreateAccount');
  }

  function hadleSignIn() {
    navigation.navigate('SignIn');
  }

  function hadleShowBottons() {
    setshowBottons(DATA);
  }

  return (
    <Background>
      <View style={styles.container}>
        <SwiperFlatList
          autoplay
          index={2}
          horizontal
          data={DATA}
          autoplayLoop
          pagingEnabled
          showPagination
          autoplayDelay={10}
          scrollEventThrottle={32}
          keyExtractor={(item) => item.key}
          showsHorizontalScrollIndicator={false}
          paginationDefaultColor={theme.colors.on}
          contentContainerStyle={{}}
          paginationStyleItem={{ width: 10, height: 10 }}
          paginationActiveColor={theme.colors.secondary100}
          onScroll={() => Animated.event([], { useNativeDriver: false })}
          paginationStyle={{ borderBottomColor: theme.colors.secondary100, bottom: 180 }}
          renderItem={({ item }) => {
            return (
              <View style={styles.containerCarrosel}>
                <View style={styles.containerImg}>
                  <ImageCarrossel
                    icon={item.image}
                  />
                  {/*                
                  <Image
                    source={item.image}
                    style={styles.itemImage}
                  />
                  <LottieView
                    source={item.image}
                    autoPlay
                    loop
                    style={styles.itemImage}
                  />
                  */}
                  <Text style={styles.flatText}>
                    {item.description}
                  </Text>
                </View>

                {item.key === '3' &&
                  <View style={styles.containerbuttons}>

                    <TouchableOpacity
                      style={styles.buttonCreateAccont}
                      activeOpacity={0.6}
                      onPress={hadleCreateAccount}
                    >
                      <Text style={styles.buttonCreateAcconttxt}>
                        Criar conta
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
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

/*
  {DATA[2].key === '3' &&
          <View style={styles.containerbuttons}>

            <TouchableOpacity
              style={styles.buttonCreateAccont}
              activeOpacity={0.6}
              onPress={hadleCreateAccount}
            >
              <Text style={styles.buttonCreateAcconttxt}>
                Criar conta
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.6}
              onPress={hadleSignIn}
            >
              <Text style={styles.loginButton}>
                Login
              </Text>
            </TouchableOpacity>

          </View>
        }
*/