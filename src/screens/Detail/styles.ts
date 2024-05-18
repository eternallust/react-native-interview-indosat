import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  profileTitle: {
    fontSize: 16,
    color: '#666',
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
  contactInfo: {
    marginTop: 12,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#333',
  },
  icon: {
    height: 20,
    width: 20,
  },

  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 40,
    width: '100%',
  },
  editButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  deleteButton: {
    backgroundColor: '#F44336',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    marginTop: 12,
    borderColor: '#F44336',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    color: '#F44336',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    paddingHorizontal: 60,
    color: '#fff',
    fontSize: 16,
  },

  buttonCancelText: {
    paddingHorizontal: 60,
    color: '#F44336',
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalButtonContainer: {
    width: '100%',
  },
});
