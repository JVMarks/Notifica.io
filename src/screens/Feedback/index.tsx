import React, { useState, useEffect } from 'react';
import { Platform, View, KeyboardAvoidingView, SafeAreaView, Alert, Text, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './styles';
import { api } from '../../services/api';
import { theme } from '../../global/styles/theme';

import { Load } from '../../components/Load';
import { Button } from '../../components/Button';
import { FormTitle } from '../../components/FormTitle';
import { Background } from '../../components/Background';
import { SkipButton } from '../../components/SkipButton';
import { ListDivider } from '../../components/ListDivider';
import { FeedBackCard } from '../../components/FeedBackCard';

interface FeedbackProps {
  id: number,
  theme: any,
  title: string,
  comment?: string,
  moment: string,
  user: any
}

export function Feedback() {

  const [feedback, setFeedback] = useState<FeedbackProps[]>([]);
  const [filterfeedback, setFilterFeedback] = useState<FeedbackProps[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const navigation = useNavigation();

  async function fetchFeedBack() {
    try {
      const user = await AsyncStorage.getItem('@d2a95sd84kp08r:users')
      const userID = JSON.parse(user || '').id;

      const result = await api.get(`/feedbacks/user/${userID}?sort=id,desc`);

      if (!result) {
        return setLoading(true)
      }
      if (page > 1) {
        setFeedback(oldValue => [...oldValue, ...result.data.content])
        setFilterFeedback(oldValue => [...oldValue, ...result.data.content])
      } else {
        setFeedback(result.data.content);
        setFilterFeedback(result.data.content);
      }

      setLoading(false);
      setLoadingMore(false);
    } catch (error) {
      Alert.alert('Algo deu errado, tente novamente mais tarde');
      console.log("DEU PAU NA MAQUINA", error)
    }
  }

  function handleFetchMore(distance: number) {
    if (distance < 1)
      return;

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    fetchFeedBack();
  }

  //Romove
  async function removeFeedBack(id: number): Promise<void> {
    api.delete(`/feedbacks/${id}`)
  }

  function handleRemove(feedback: FeedbackProps) {
    Alert.alert('Remover', `Deseja remover a ${feedback.title}?`, [
      {
        text: 'Não 😮',
        style: 'cancel'
      },
      {
        text: 'Sim 😅',
        onPress: async () => {
          try {
            await removeFeedBack(feedback.id);
            setFeedback((oldData) => (
              oldData.filter((item) => item.id !== feedback.id)
            ));
          } catch (error) {
            Alert.alert('Não foi possivel remover! 😮');
          }
        }
      }
    ])
  }

  function handleCreateFeedback() {
    navigation.navigate('CreateFeedback');
  }

  useEffect(() => {
    fetchFeedBack();
  }, [])

  if (loading)
    return <Load />

  return (
    <Background>
      <KeyboardAvoidingView
        accessible={true}
        style={styles.container}
        accessibilityLabel={'Tela de configurações'}
        enabled={Platform.OS === "ios" ? true : false}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
      >

        <SkipButton />

        <SafeAreaView
          accessible={true}
          style={styles.controlsContainer}
          accessibilityLabel={'Tela de configurações'}
        >
          <View
            style={styles.items}
          >
            <View style={styles.header}>
              <FormTitle
                accessibilityLabel={'Feedback Anteriores'}
                title="Feedback Anteriores"
              />
              <ListDivider />
            </View>
            {
              feedback.length > 0 ? <FlatList
                accessible={true}
                accessibilityLabel={"lista de notifiçãoes do dia"}
                data={filterfeedback}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                  <FeedBackCard
                    data={item}
                    handleRemove={() => { handleRemove(item) }}
                  />
                )}
                numColumns={1}
                onEndReachedThreshold={0.1}
                showsVerticalScrollIndicator={false}
                onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
                ListFooterComponent={loadingMore ? <ActivityIndicator color={theme.colors.secondary100} /> : <></>}
                contentContainerStyle={{
                  paddingTop: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                  //maxHeight: 400,
                }}
              />
                : <View style={styles.loadingcontainer}><Text style={styles.loadingtxt}>Você ainda não fez nenhum feedback</Text></View>
            }
            <View style={{ paddingHorizontal: 30, paddingTop: 15 }}>
              <Button
                accessible={true}
                accessibilityLabel={'Pressione o botão para navegar para a tela de criação de feedback'}
                title="Novo Feedback"
                onPress={handleCreateFeedback}
              />
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Background>
  );
}