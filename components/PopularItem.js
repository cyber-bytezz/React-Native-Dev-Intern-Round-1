import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function PopularItem({ item }) {
  return (
    <View style={styles.popularItemContainer}>
      {/* Rectangular Image */}
      <Image source={{ uri: item.image }} style={styles.popularImage} />

      {/* Details below the image */}
      <View style={styles.infoContainer}>
        {/* Food name and distance in the same row */}
        <View style={styles.row}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDistance}>{item.distance}</Text>
        </View>
        <Text style={styles.restaurant}>{item.restaurant}</Text>

        {/* Rating and Price Row */}
        <View style={styles.row}>
          <Text style={styles.itemRating}>⭐ {item.rating} (941 Ratings)</Text>
        </View>

        {/* Price Button */}
        <View style={styles.priceButtonContainer}>
          <TouchableOpacity style={styles.priceButton}>
            <Text style={styles.priceText}>{item.price}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  popularItemContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,  // Smaller border radius for the card
    padding: 8,
    marginRight: 12, 
    width: 200,  // Smaller width for compact cards
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    position: 'relative',  // Allow absolute positioning inside
  },
  popularImage: {
    width: '100%',
    height: 90, 
    borderRadius: 8,
    marginBottom: 8,
  },
  infoContainer: {
    paddingHorizontal: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 6,
  },
  itemName: {
    fontSize: 14, 
    fontWeight: 'bold',
  },
  itemDistance: {
    fontSize: 11, 
    color: '#666',
  },
  restaurant: {
    fontSize: 11, 
    color: '#999',
    marginBottom: 4,
  },
  itemRating: {
    fontSize: 11, 
    color: '#666',
  },
  priceButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',  // Position the button absolutely inside the card
    bottom: 0,  // Align to the bottom
    right: 0,  // Align to the right
    marginRight: -8,  // Negative margin to align it outside the padding
    marginBottom: -8,  // Negative margin for bottom alignment
  },
  priceButton: {
    backgroundColor: '#f04d22',
    borderTopLeftRadius: 10,  // Rounded top-left corner
    borderBottomRightRadius: 10,  // Keep the bottom-right rounded for consistency
    paddingVertical: 5,
    paddingHorizontal: 15, 
    elevation: 3,  // Slight shadow for elevated look
  },
  priceText: {
    color: '#fff',
    fontSize: 14, 
    fontWeight: 'bold',
  },
});

