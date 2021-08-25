import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import { format } from 'date-fns';

import { UserProps } from './userStorage';

export interface NotificaProps {
  id: string,
  floor: [string];
  local: [string];
  priority: [string];
  frequency: [string];
  category: [string];
  message: string;
  notifier: {
    username: UserProps,
  },
  hours: string;
  dataTimeNotification: Date;
}

export interface StorageNotificationProps {
  [id: string]: {
    data: NotificaProps;
    notificationId: string;
  }
}

export async function saveNotification(notification: NotificaProps): Promise<void> {
  try {
    const nextTime = new Date(notification.dataTimeNotification);
    const now = new Date();

    const seconds = Math.abs(
      Math.ceil(now.getTime() - nextTime.getTime()) / 1000);

    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Olá, 🔔',
        body: `Temos uma nova notificação ${notification.floor}`,
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        data: {
          notification
        },
      },
      trigger: {
        seconds: seconds < 60 ? 60 : seconds,
        repeats: true
      }
    })

    const data = await AsyncStorage.getItem('@notificamanager:notifications');
    const oldNotifications = data ? (JSON.parse(data) as StorageNotificationProps) : {};

    const newNotification = {
      [notification.id]: {
        data: notification,
        notificationId
      }
    }

    await AsyncStorage.setItem('@notificamanager:notifications',
      JSON.stringify({
        ...newNotification,
        ...oldNotifications
      })
    );

  } catch (error) {
    throw new Error(error);
  }
}

export async function loadNotification(): Promise<NotificaProps[]> {
  try {
    const data = await AsyncStorage.getItem('@notificamanager:notifications');
    const notifications = data ? (JSON.parse(data) as StorageNotificationProps) : {};

    const notificationsSorted = Object
      .keys(notifications)
      .map((notification) => {
        return {
          ...notifications[notification].data,
          hour: format(new Date(notifications[notification].data.dataTimeNotification), 'HH:mm')
        }
      })
      .sort((a, b) =>
        Math.floor(
          new Date(a.dataTimeNotification).getTime() / 100 -
          Math.floor(new Date(b.dataTimeNotification).getTime() / 1000)
        )
      );

    return notificationsSorted;

  } catch (error) {
    throw new Error(error);
  }
}

export async function removeNotification(id: string): Promise<void> {
  const data = await AsyncStorage.getItem('@notificamanager:notifications');
  const notifications = data ? (JSON.parse(data) as StorageNotificationProps) : {};

  await Notifications.cancelScheduledNotificationAsync(notifications[id].notificationId);
  delete notifications[id];

  await AsyncStorage.setItem(
    '@notificamanager:notifications',
    JSON.stringify(notifications)
  )
}