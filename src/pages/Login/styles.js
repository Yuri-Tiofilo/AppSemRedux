import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  error: {
    color: '#ff0000',
    textAlign: 'center',
    marginTop: 360,
    marginVertical: -380,
  },
  form: {
    marginTop: 400,
    marginVertical: 200,
  },
  input: {
    backgroundColor: '#eeee',
    borderRadius: 2,
    height: 48,
    padding: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0d47a1',
    borderRadius: 2,
    height: 48,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;
