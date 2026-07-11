import { MaterialIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type ResetButtonProps = {
    onPress: () => void;
};

export function ResetButton({ onPress }: ResetButtonProps) {
    return (
        <TouchableOpacity style={styles.secondaryButton} onPress={onPress} activeOpacity={0.8}>
            <MaterialIcons name="refresh" size={20} color="#fafafa" style={styles.buttonIcon} />
            <Text style={styles.secondaryButtonText}>Draft Another MVP</Text>
        </TouchableOpacity>
    );
}
