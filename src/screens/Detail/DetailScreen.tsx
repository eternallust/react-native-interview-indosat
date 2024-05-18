import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {getDetailContact, deleteContact} from '../../stores/contacts/actions';

import Modal from 'react-native-modal';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {styles} from './styles';
import {ContactResponse, NavigationProp} from '../../types/type';

const DetailScreen = ({navigation}: NavigationProp) => {
  const dispatch = useAppDispatch();
  const route = useRoute();
  const params = route.params as {contact?: ContactResponse};
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    dispatch(getDetailContact(params?.contact?.id || ''));
  }, [params, dispatch]);

  const {contactDetail, isLoading} = useAppSelector(
    (state: {contactDetail: any; isLoading: boolean}) => ({
      contactDetail: state.contactDetail,
      isLoading: state.isLoading,
    }),
  );

  const handleEdit = () => {
    navigation.navigate('Edit', {contact: contactDetail});
  };

  const handleDelete = () => {
    dispatch(
      deleteContact(params?.contact?.id || '', () => {
        setModalVisible(false);
        navigation.navigate('Home');
      }),
    );
  };

  const showModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              source={require('../../assets/delete.png')}
              style={styles.profileImage}
            />
            <Text style={styles.modalText}>
              Are you sure you want to delete this contact?
            </Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={handleDelete}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonCancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Contact Detail</Text>
      </View>
      <View style={styles.section}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <>
            <Image
              source={{
                uri:
                  contactDetail?.photo && contactDetail?.photo !== 'N/A'
                    ? contactDetail?.photo
                    : 'https://via.placeholder.com/150',
              }}
              style={styles.profileImage}
            />
            <Text
              style={
                styles.profileName
              }>{`${contactDetail?.firstName} ${contactDetail?.lastName}`}</Text>
            <Text style={styles.profileTitle}>Lorem Ipsum</Text>
            <View style={styles.contactInfo}>
              <Image
                source={require('../../assets/gmail.png')}
                style={styles.icon}
              />
              <Text
                style={
                  styles.contactText
                }>{`${contactDetail?.firstName}${contactDetail?.lastName}@gmail.com`}</Text>
            </View>
            <View style={styles.contactInfo}>
              <Image
                source={require('../../assets/phone-call.png')}
                style={styles.icon}
              />
              <Text style={styles.contactText}>62821937</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton} onPress={showModal}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default DetailScreen;
