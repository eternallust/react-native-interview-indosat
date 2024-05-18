import api from '../../services/contactServices';
import {ContactPayload} from '../../types/type';
import {setContactList, setLoading, setContactDetail} from './slice';
import Toast from 'react-native-toast-message';

export const fetchData = () => async (dispatch: any) => {
  try {
    dispatch(setLoading(true));
    const response = await api.getData();
    dispatch(setContactList(response.data.data));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    console.log(error);
  }
};

export const getDetailContact = (id: string) => async (dispatch: any) => {
  try {
    dispatch(setLoading(true));
    const response = await api.getDetail(id);
    dispatch(setContactDetail(response.data.data));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    console.log(error);
  }
};

export const editContact =
  (id: string, payload: ContactPayload, redirect: () => void) =>
  async (dispatch: any) => {
    try {
      dispatch(setLoading(true));
      const response = await api.update(id, payload);
      dispatch(setContactDetail(response.data.data));
      dispatch(setLoading(false));
      const responseEdit = await api.getData();
      dispatch(setContactList(responseEdit.data.data));
      Toast.show({
        type: 'success',
        text1: 'Edit Contact Success',
      });
      redirect();
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
    }
  };

export const deleteContact =
  (id: string, redirect: () => void) => async (dispatch: any) => {
    try {
      dispatch(setLoading(true));
      await api.delete(id);
      dispatch(setContactDetail({}));
      dispatch(setLoading(false));
      redirect();
      Toast.show({
        type: 'success',
        text1: 'Delete Contact Success',
      });
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
    }
  };

export const addContact =
  (payload: ContactPayload, redirect: () => void) => async (dispatch: any) => {
    try {
      dispatch(setLoading(true));
      await api.create(payload); // Ensure this returns a Promise
      dispatch(setContactDetail({}));
      const response = await api.getData();
      dispatch(setContactList(response.data.data)); // Assuming response has data
      dispatch(setLoading(false));
      redirect();
      Toast.show({
        type: 'success',
        text1: 'Add Contact Success',
      });
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
    }
  };
