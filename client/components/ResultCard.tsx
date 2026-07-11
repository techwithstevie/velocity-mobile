import { MaterialIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { markdownRules, markdownStyles, styles } from './styles';

type ResultCardProps = {
    iconName: string;
    title: string;
    content: string;
};

export function ResultCard({ iconName, title, content }: ResultCardProps) {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <View style={styles.cardIconWrap}>
                    <MaterialIcons name={iconName as any} size={18} color="#a1a1aa" />
                </View>
                <Text style={styles.cardTitle}>{title}</Text>
            </View>
            <View style={styles.cardDivider} />
            <View style={styles.cardBody}>
                <Markdown style={markdownStyles} rules={markdownRules}>
                    {content}
                </Markdown>
            </View>
        </View>
    );
}
