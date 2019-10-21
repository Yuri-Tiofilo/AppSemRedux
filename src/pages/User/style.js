import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
`;
export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Avatar = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;

export const Bio = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #707070;
  margin-top: 5px;
  text-align: center;
`;
export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
export const Starred = styled.View`
  background: #f5f5f5;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;
export const OwnerAvatar = styled.Image`
  width: 41px;
  height: 41px;
  border-radius: 20.5px;
  background: #eee;
`;
export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;
export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  color: #333;
  font-weight: bold;
`;
export const Author = styled.Text`
  font-size: 15px;
  color: #666;
  margin-top: 2px;
`;

export const Text = styled.Text`
  font-size: 15px;
  margin-top: 15px
  margin-bottom: 3px;
  text-align: center;
`;
