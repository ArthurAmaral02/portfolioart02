import { Text, View } from 'react-native';

export default function Sobre() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#0f172a',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: 'white', fontSize: 24 }}>
        Nenhuma experiência profissional cadastrada ainda.
      </Text>
    </View>
  );
}