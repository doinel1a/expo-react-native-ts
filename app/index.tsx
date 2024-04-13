import { Text, Pressable, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Salute from '@/components/salute';
import { Link } from 'expo-router';

export default function Homepage() {
	return (
		<View className="flex-1 flex flex-col items-center justify-center">
			<StatusBar style="auto" />

			<Salute text="Hello, Homepage!" />

			<Link href="/page-one" asChild>
				<Pressable className="bg-blue-300 px-2.5 py-1 rounded-md mt-2.5">
					<Text>Go to Page one</Text>
				</Pressable>
			</Link>
		</View>
	);
}
