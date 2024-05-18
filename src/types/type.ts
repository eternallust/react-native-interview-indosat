import {StackNavigationProp} from '@react-navigation/stack';
export interface ContactPayload {
  firstName: string;
  lastName: string;
  age: number | string;
  photo: string;
}

export type NavigationProp = {
  navigation: StackNavigationProp<any>;
};

export interface ContactResponse {
  id: string;
  firstName: string;
  lastName: string;
  age: number | string;
  photo: string;
}
