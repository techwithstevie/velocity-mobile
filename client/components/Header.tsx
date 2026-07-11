import { MaterialIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { styles } from './styles';

export function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.logoContainer}>
                <MaterialIcons name="bolt" size={28} color="#ffffff" />
            </View>
            <Text style={styles.headerTitle}>Velocity</Text>
        </View>
    );
}
