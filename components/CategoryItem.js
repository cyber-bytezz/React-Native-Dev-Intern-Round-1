import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CategoryItem({ name, icon, bgColor }) {
  return (
    <View style={[styles.categoryContainer, { backgroundColor: bgColor }]}>
      <View style={styles.iconContainer}>
        <Image source={{ uri: icon }} style={styles.icon} />
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    alignItems: 'center',
    marginRight: 15,
    padding: 30,
    borderRadius: 15,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '500',
  },
});
