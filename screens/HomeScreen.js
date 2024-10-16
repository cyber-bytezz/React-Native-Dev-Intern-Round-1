import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Using Ionicons for icons
import CategoryItem from '../components/CategoryItem';
import PopularItem from '../components/PopularItem';

export default function HomeScreen() {
  const allCategories = [
    { id: '1', name: 'Burger', icon: 'https://png.pngtree.com/png-clipart/20231017/original/pngtree-burger-food-png-free-download-png-image_13329458.png', bgColor: '#ffe6e6' },
    { id: '2', name: 'Pizza', icon: 'https://static.vecteezy.com/system/resources/thumbnails/024/589/160/small/top-view-pizza-with-ai-generated-free-png.png', bgColor: '#e6f3ff' },
    { id: '3', name: 'Snacks', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/French_Fries.png', bgColor: '#fff2e6' },
    { id: '4', name: 'Rice', icon: 'https://png.pngtree.com/png-vector/20240124/ourmid/pngtree-fried-rice-and-fried-chicken-png-image_11477086.png', bgColor: '#f0ffe6' },
  ];

  const allPopularItems = [
    { id: '1', name: 'Cheese Pizza', restaurant: 'Oliva Food', image: 'https://cdn.eateasily.com/restaurants/profile/app/400X300/18485.jpg', rating: 4.7, distance: '2 km', price: '$8.99' },
    { id: '2', name: 'Burger Snacks', restaurant: 'Food Carnival', image: 'https://www.shutterstock.com/image-photo/kiev-ukraine-september-21-2019-260nw-1510251329.jpg', rating: 4.5, distance: '2 km', price: '$6.99' },
    { id: '3', name: 'Fried Chicken', restaurant: 'Chicken House', image: 'https://cdn.eateasily.com/restaurants/profile/app/400X300/18485.jpg', rating: 4.6, distance: '3 km', price: '$7.50' },
    { id: '4', name: 'Pasta Alfredo', restaurant: 'Italiano', image: 'https://cdn.eateasily.com/restaurants/profile/app/400X300/18485.jpg', rating: 4.8, distance: '1.5 km', price: '$9.20' },
    { id: '5', name: 'Vegetable Salad', restaurant: 'Health Eatery', image: 'https://cdn.eateasily.com/restaurants/profile/app/400X300/18485.jpg', rating: 4.3, distance: '1 km', price: '$5.99' },
    { id: '6', name: 'Sushi Platter', restaurant: 'Sushi Zen', image: 'https://cdn.eateasily.com/restaurants/profile/app/400X300/18485.jpg', rating: 4.9, distance: '4 km', price: '$12.99' },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(allCategories);
  const [filteredPopularItems, setFilteredPopularItems] = useState(allPopularItems);

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query === '') {
      setFilteredCategories(allCategories);
      setFilteredPopularItems(allPopularItems);
    } else {
      // Filter categories
      const filteredCategoriesList = allCategories.filter((category) =>
        category.name.toLowerCase().includes(query.toLowerCase())
      );

      // Filter popular items
      const filteredPopularList = allPopularItems.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );

      setFilteredCategories(filteredCategoriesList);
      setFilteredPopularItems(filteredPopularList);
    }
  };

  return (
    <View style={styles.container}>
      {/* Location and Profile */}
      <View style={styles.locationContainer}>
        <View style={styles.locationTextContainer}>
          <Ionicons name="location-outline" size={20} color="#333" style={styles.locationIcon} />
          <View>
            <Text style={styles.locationText}>Deliver to</Text>
            <Text style={styles.locationValue}>New York, USA</Text>
          </View>
        </View>
        <Image source={{ uri: 'https://github.com/shadcn.png' }} style={styles.profileImage} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search categories or foods"
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Banner */}
      <Image source={{ uri: 'https://img.freepik.com/free-vector/hand-drawn-fast-food-sale-banner_23-2150970571.jpg' }} style={styles.bannerImage} />

      {/* Categories */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <TouchableOpacity><Text style={styles.sectionLink}>See all</Text></TouchableOpacity>
      </View>
      <FlatList
        data={filteredCategories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <CategoryItem name={item.name} icon={item.icon} bgColor={item.bgColor} />}
        keyExtractor={(item) => item.id}
        style={styles.categoryList}
      />

      {/* Popular Items */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular</Text>
        <TouchableOpacity><Text style={styles.sectionLink}>See all</Text></TouchableOpacity>
      </View>
      <FlatList
        data={filteredPopularItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <PopularItem item={item} />}
        keyExtractor={(item) => item.id}
        style={styles.popularList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  locationTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    marginRight: 8,
  },
  locationText: {
    fontSize: 14,
    color: '#666',
  },
  locationValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  filterButton: {
    padding: 10,
    backgroundColor: '#f04d22',
    borderRadius: 8,
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionLink: {
    color: '#f04d22',
    fontWeight: 'bold',
  },
  categoryList: {
    marginBottom: 20,
  },
  popularList: {
    marginBottom: 20,
  },
});