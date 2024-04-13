import { Pressable, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Salute from '@/components/salute';
import { Link } from 'expo-router';

export default function PageOne() {
	return (
		<View className="flex-1 flex flex-col items-center justify-center">
			<StatusBar style="auto" />

			<Salute text="Hello, Page one!" />

			<Link href="/" asChild>
				<Pressable className="bg-blue-300 px-2.5 py-1 rounded-md mt-2.5">
					<Text>Go to Homepage</Text>
				</Pressable>
			</Link>
		</View>
	);
}
