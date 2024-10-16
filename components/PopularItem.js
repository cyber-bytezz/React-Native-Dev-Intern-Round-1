import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function PopularItem({ item }) {
  return (
    <View style={styles.popularItemContainer}>
      {/* Rectangular Image */}
      <Image source={{ uri: item.image }} style={styles.popularImage} />

      {/* Details below the image */}
      <View style={styles.infoContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.restaurant}>{item.restaurant}</Text>

        {/* Rating and Price Row */}
        <View style={styles.row}>
          {/* Rating on the left */}
          <Text style={styles.itemRating}>⭐ {item.rating} (941 Ratings)</Text>
        </View>

        {/* Distance and Price Container */}
        <View style={styles.distanceAndPriceContainer}>
          {/* Distance Text */}
          <Text style={styles.itemDistance}>{item.distance}</Text>

          {/* Price Button */}
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
    borderRadius: 15,
    padding: 8,
    marginRight: 10,  // Reduce margin to make more space for multiple cards
    width: 200,  // Fixed width for consistency
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    flexShrink: 1,  // Ensure the card shrinks properly in the container
  },
  popularImage: {
    width: '100%',
    height: 90,  // Decreased height for the image
    borderRadius: 10,
    marginBottom: 8,
  },
  infoContainer: {
    paddingHorizontal: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,  // Reduced space between name and other details
  },
  restaurant: {
    fontSize: 12,
    color: '#999',
    marginBottom: 2,  // Reduced margin for better alignment
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  itemRating: {
    fontSize: 12,
    color: '#666',
  },
  distanceAndPriceContainer: {
    alignItems: 'flex-end',  // Align distance and price button to the right
  },
  itemDistance: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,  // Add space between distance and price button
    textAlign: 'right',  // Align the distance text to the right
  },
  priceButton: {
    backgroundColor: '#f04d22',  // Red background for the price button
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  priceText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
