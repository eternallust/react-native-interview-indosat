/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {fetchData} from '../../stores/contacts/actions';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {styles} from './style';
import {ContactResponse, NavigationProp} from '../../types/type';

const HomeScreen = ({navigation}: NavigationProp) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const {contactList} = useAppSelector(
    (state: {contactList: ContactResponse[]}) => ({
      contactList: state.contactList,
    }),
  );

  const renderContact = ({item}: {item: ContactResponse}) => (
    <TouchableOpacity
      testID={`contact-image-${item.id}`}
      style={styles.contactContainer}
      onPress={() => navigation.navigate('Detail', {contact: item})}>
      <Image
        source={{
          uri:
            item.photo && item.photo !== 'N/A'
              ? item.photo
              : 'https://via.placeholder.com/150',
        }}
        style={styles.contactImage}
      />
      <View>
        <Text
          style={
            styles.contactName
          }>{`${item.firstName} ${item.lastName}`}</Text>
        <Text style={styles.contactPhone}>+6213123123123</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{uri: 'https://via.placeholder.com/150'}}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Rizky Abdulrachman</Text>
        <Text style={styles.profileTitle}>Front End Mobile Developer</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contacts</Text>
        <FlatList
          data={contactList}
          renderItem={renderContact}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Add')}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
