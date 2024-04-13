import { StyleSheet, Text, Pressable, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Salute from '@/components/salute';
import { Link } from 'expo-router';

export default function Homepage() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />

			<Salute text="Hello, Homepage!" />

			<Link href="/page-one" asChild>
				<Pressable style={styles.button}>
					<Text>Go to Page one</Text>
				</Pressable>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
	button: {
		marginTop: 10,
		borderWidth: 1,
		borderRadius: 10,
		padding: 10,
		color: '#fff',
		backgroundColor: 'lightblue',
	},
});
