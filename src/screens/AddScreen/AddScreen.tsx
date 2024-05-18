import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import {useAppSelector, useAppDispatch} from '../../hooks';
import {addContact} from '../../stores/contacts/actions';
import {styles} from './styles';
import {ContactPayload, NavigationProp} from '../../types/type';

const AddScreen = ({navigation}: NavigationProp) => {
  const dispatch = useAppDispatch();
  const {isLoading} = useAppSelector((state: {isLoading: boolean}) => ({
    isLoading: state.isLoading,
  }));
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      age: '',
      photo: 'https://via.placeholder.com/150',
    },
  });

  const onSubmit = (payload: ContactPayload) => {
    dispatch(addContact(payload, () => navigation.navigate('Home')));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Add Contact</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>First Name</Text>
        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholderTextColor="#f5f5f5"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="First Name"
            />
          )}
          name="firstName"
        />
        {errors.firstName && (
          <Text style={styles.errorText}>First name is required.</Text>
        )}

        <Text style={styles.label}>Last Name</Text>
        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Last Name"
            />
          )}
          name="lastName"
        />
        {errors.lastName && (
          <Text style={styles.errorText}>Last name is required.</Text>
        )}

        <Text style={styles.label}>Age</Text>
        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Age"
              keyboardType="numeric"
            />
          )}
          name="age"
        />
        {errors.age && <Text style={styles.errorText}>Age is required.</Text>}

        <TouchableOpacity
          disabled={isLoading}
          style={styles.submitButton}
          onPress={handleSubmit(onSubmit)}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.buttonText}>Submit</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddScreen;
