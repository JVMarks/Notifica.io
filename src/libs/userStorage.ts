import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
//import { format } from 'date-fns';

export interface UserProps {
  id: string,
  name: string,
  email: string,
  password: string
}

export interface StorageUserProps {
  [id: string]: {
    data: UserProps;
    //notificationUserId: string;
  }
}

export async function saveUser(user: UserProps): Promise<void> {
  try {

    /*
    const notificationUserId = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Ola,',
        body: `Um novo usuario foi criado ${user.name}`,
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        data: {
          user
        },
      },
      trigger: {
        repeats: true
      }
    })
    */

    const data = await AsyncStorage.getItem('@notificamanager:users');
    const oldUsers = data ? (JSON.parse(data) as StorageUserProps) : {};

    const newUsers = {
      [user.id]: {
        data: user,
        //notificationUserId
      }
    }

    await AsyncStorage.setItem('',
      JSON.stringify({
        ...newUsers,
        ...oldUsers
      })
    )
  } catch (error) {
    throw new Error(error);
  }
}
export async function loadUser(): Promise<UserProps[]> {
  try {
    const data = await AsyncStorage.getItem('@notificamanager:users');
    const users = data ? (JSON.parse(data) as StorageUserProps) : {};

    const usersSorted = Object
      .keys(users)
      .map((user) => {
        return {
          ...users[user].data,
        }
      })
    return usersSorted;

  } catch (error) {
    throw new Error(error);
  }
}

export async function removeUser(id: string): Promise<void> {
  const data = await AsyncStorage.getItem('@notificamanager:users');
  const users = data ? (JSON.parse(data) as StorageUserProps) : {};

  //await Notifications.cancelScheduledNotificationAsync(users[id].notificationUserId)
  delete users[id];

  await AsyncStorage.setItem(
    '@notificamanager:users',
    JSON.stringify(users)
  )
}