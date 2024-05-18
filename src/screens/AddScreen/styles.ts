import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: '5%',

    color: '#2C3E50', // Warna gelap yang elegan
    fontSize: 12,
    fontWeight: 'bold', // Membuat teks lebih tebal
    textTransform: 'uppercase', // Huruf kapital
    letterSpacing: 1, // Menambah jarak antar huruf
  },
  container: {
    flex: 1,
    backgroundColor: '#1e3a5f',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#1e3a5f',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  section: {
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  input: {
    color: 'grey',
    width: '90%',
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  errorText: {
    alignSelf: 'flex-start',
    marginLeft: '5%',
    color: 'red',
    marginBottom: 5,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
