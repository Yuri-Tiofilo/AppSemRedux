import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 30px;
`;
export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
})`
  flex: 1;
  height: 48px;
  background: #eee;
  border-radius: 6px;
  padding: 0 15px;
  border: 1px solid #eee;
`;
export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #0d47a1;
  border-radius: 6px;
  margin-left: 6px;
  padding: 0 12px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;
export const List = styled.FlatList.attrs({
  showsVeerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;
export const Name = styled.Text`
  font-size: 18px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;
export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background: #eee;
  margin-bottom: 20px;
`;
export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
  line-height: 18px;
  color: #707070;
  margin-top: 5px;
  text-align: center;
`;
export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: #0d47a1;
  justify-content: center;
  align-items: center;
  height: 48px;
`;
export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;
