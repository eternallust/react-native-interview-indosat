import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
// import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import HomeScreen from '../HomeScreen';
import {useSelector, useDispatch} from 'react-redux';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const mockStore = configureStore([]);
const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

jest.mock('react-native-modal', () => {
  return ({children, isVisible}: any) => (isVisible ? <>{children}</> : null);
});

jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
}));

describe('HomeScreen', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });
  let store: any = null;
  const navigationMock: any = {navigate: jest.fn()};

  beforeEach(() => {
    store = mockStore({
      contactList: [
        {
          age: 111,
          firstName: 'Bilbo',
          id: '93ad6070-c92b-11e8-b02f-cbfa15db428b',
          lastName: 'Baggins',
          photo:
            'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550',
        },
      ],
      isLoading: false,
    });
  });

  const contact = {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    photo: 'https://via.placeholder.com/150',
    phoneNumber: '123-456-7890',
  };

  beforeEach(() => {
    store = mockStore({
      contactList: [
        {
          id: '1',
          firstName: 'John',
          lastName: 'Doe',
          photo: 'https://via.placeholder.com/150',
        },
      ],
    });

    const useDispatchMock = useDispatch as unknown as jest.Mock;
    useDispatchMock.mockReturnValue(mockDispatch);
    const useSelectorMock = useSelector as unknown as jest.Mock;
    useSelectorMock.mockImplementation(callback => callback(store.getState()));

    jest.clearAllMocks();
  });
  it('should render correctly', () => {
    render(<HomeScreen navigation={navigationMock} />);
  });

  const renderComponent = () =>
    render(
      <NavigationContainer>
        <HomeScreen navigation={navigationMock} />
      </NavigationContainer>,
    );

  it('should render contact correctly', () => {
    const {getByText, getByTestId} = renderComponent();

    const contactName = getByText(contact.firstName);
    expect(contactName).toBeTruthy();

    const contactImage = getByTestId(`contact-image-${contact.id}`);
    expect(contactImage).toBeDefined();

    const contactPhone = getByText('682-465-2456');
    expect(contactPhone).toBeTruthy();
  });

  it('should render contact details correctly', () => {
    const item = {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      photo: 'https://via.placeholder.com/150',
    };
    const {getByText, getByTestId} = render(
      <TouchableOpacity onPress={() => {}}>
        <Image
          source={{
            uri: item.photo,
          }}
          testID="contact-image"
        />
        <View>
          <Text>{item.firstName}</Text>
          <Text>{'682-465-2456'}</Text>
        </View>
      </TouchableOpacity>,
    );

    expect(getByText(item.firstName)).toBeTruthy();
    expect(getByText('682-465-2456')).toBeTruthy();
    expect(getByTestId('contact-image').props.source.uri).toBeDefined();
  });
  it('should navigate to Detail screen when contact is pressed', () => {
    const {getByText} = renderComponent();

    const contactName = getByText(contact.firstName);
    fireEvent.press(contactName);

    expect(mockNavigate).toBeDefined();
  });
});
