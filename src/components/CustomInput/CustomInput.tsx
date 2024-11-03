import { TextInput } from 'react-native';
import styles from './styles';

interface ICustomInput{
    placeHolder?: string;
}

const CustomInput = ({placeHolder=''}: ICustomInput) => {
  return (
    <TextInput placeholder={placeHolder} style={styles.textInput}/>
  );
};

export default CustomInput;