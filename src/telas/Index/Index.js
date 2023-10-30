import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Inicial (props) {
return (
<View style={estilo.container}>
<Text style={estilo.titulo}>
Início
</Text>
<Button
title="Ligar"
onPress = { () => { props.navigation.navigate('Ligar') } } />
<Button
title="Pesquisar"
onPress = { () => { props.navigation.navigate('Pesquisar') }} />
<Button
title="Sobre"
onPress = { () => { props.navigation.navigate('Sobre') } } />
</View>
)};
