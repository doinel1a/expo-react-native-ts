import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />

			<Salute text="Hello, World!" />
		</View>
	);
}

type TSalute = {
	text: string;
};

function Salute({ text }: TSalute) {
	return <Text>{text}</Text>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
