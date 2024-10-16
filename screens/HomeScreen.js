import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CategoryItem from "../components/CategoryItem";
import PopularItem from "../components/PopularItem";

export default function HomeScreen() {
  const allCategories = [
    {
      id: "1",
      name: "Burgers",
      icon: "https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png",
      bgColor: "#ffe6e6",
    },
    {
      id: "2",
      name: "Pizza",
      icon: "https://w7.pngwing.com/pngs/168/596/png-transparent-pizza-chicago-style-pizza-take-out-italian-cuisine-greek-pizza-vegetable-pizza-free-free-logo-design-template-food-cheese.png",
      bgColor: "#e6f3ff",
    },
    {
      id: "3",
      name: "Sushi",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWfyj7N4unMWB-6dKzw5fCOzwvZllF2gyE3Q&s",
      bgColor: "#fce6ff",
    },
    {
      id: "4",
      name: "Salads",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdegxthcQytVVzjXDkS6oNJbczfxcSzSu9kg&s",
      bgColor: "#e6ffe6",
    },
    {
      id: "5",
      name: "Desserts",
      icon: "https://w7.pngwing.com/pngs/965/299/png-transparent-ice-cream-creme-caramel-frutti-di-bosco-cheesecake-dessert-assorted-desserts-cream-frutti-di-bosco-food-thumbnail.png",
      bgColor: "#fff2cc",
    },
    {
      id: "6",
      name: "Seafood",
      icon: "https://e7.pngegg.com/pngimages/410/683/png-clipart-plate-of-seafood-seafood-lobster-crab-boston-lobster-meal-food-animals.png",
      bgColor: "#e6e6ff",
    },
    {
      id: "7",
      name: "Grills",
      icon: "https://t3.ftcdn.net/jpg/07/85/42/86/360_F_785428654_oR6W2GShZvlwoSqKRzDeL4Itfjf3HKcw.jpg",
      bgColor: "#ffe6cc",
    },
    {
      id: "8",
      name: "Pasta",
      icon: "https://e7.pngegg.com/pngimages/822/65/png-clipart-pasta-pasta-thumbnail.png",
      bgColor: "#e6f9ff",
    },
    {
      id: "9",
      name: "Tacos",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRliIiOmfGk0VNU3Q8LKgr9kxDwJQOTjGpYiA&s",
      bgColor: "#fff5e6",
    },
    {
      id: "10",
      name: "Smoothies",
      icon: "https://static.vecteezy.com/system/resources/previews/047/490/432/non_2x/colorful-fruit-smoothies-isolated-on-a-transparent-background-free-png.png",
      bgColor: "#e6ffe6",
    },
  ];

  const allPopularItems = [
    {
      id: "1",
      name: "Pepperoni Pizza",
      restaurant: "Pizza Palace",
      image: "https://www.fastfoodclub.com/wp-content/uploads/2024/02/kfc-chizza-750x422.png",
      rating: 4.9,
      distance: "2.5 km",
      price: "$10.99",
    },
    {
      id: "2",
      name: "BBQ Burger",
      restaurant: "Grill Master",
      image: "https://japantoday-asset.scdn3.secure.raxcdn.com/img/store/7a/9b/226603d2e760ba52c27520c750610019bc7e/Screen-Shot-2023-06-18-at-14.44.21/_w1700.png",
      rating: 4.6,
      distance: "3 km",
      price: "$9.50",
    },
    {
      id: "3",
      name: "Spaghetti Bolognese",
      restaurant: "Pasta House",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD0tiG6jgIGXjUn-w9skCPDA4KZAwcWtDhTg&s",
      rating: 4.7,
      distance: "1.8 km",
      price: "$11.00",
    },
    {
      id: "4",
      name: "Chicken Wrap",
      restaurant: "Healthy Eats",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6gTdiNrmehn-ASMkR9ohJ6dI51o6UpM0jfA&s",
      rating: 4.5,
      distance: "2 km",
      price: "$7.99",
    },
    {
      id: "5",
      name: "Vegetable Stir Fry",
      restaurant: "Asian Fusion",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmeLPQVzWmhsxKyAVcUhjepPrp7cQwC88og&s",
      rating: 4.3,
      distance: "1.5 km",
      price: "$8.75",
    },
    {
      id: "6",
      name: "Margherita Pizza",
      restaurant: "Italiano",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVuV6SzmwpKNDlBKg0ipoupN1j_puo6X7VSg&s",
      rating: 4.8,
      distance: "2.2 km",
      price: "$9.99",
    },
    {
      id: "7",
      name: "Grilled Salmon",
      restaurant: "Seafood Delight",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxEekLRdDv6WEk9j5sPD09RVdbO2P_3LKVJA&s",
      rating: 4.9,
      distance: "3.5 km",
      price: "$14.99",
    },
    {
      id: "8",
      name: "Steak and Fries",
      restaurant: "Steakhouse",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlkpFzDNp7Ye85VmGEZCSs1LLBETM-LNUmNQ&s",
      rating: 4.8,
      distance: "4 km",
      price: "$16.99",
    },
    {
      id: "9",
      name: "Falafel Bowl",
      restaurant: "Middle East Delights",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvtEbBmeaIpVWg-gzX85R47ClQGuq_A5LjiA&s",
      rating: 4.6,
      distance: "1.3 km",
      price: "$7.50",
    },
    {
      id: "10",
      name: "Chocolate Cake",
      restaurant: "Sweet Tooth",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHu8QVzgoeRL1uWuCHAsjoGMlKaIIcKbN0Lg&s",
      rating: 4.7,
      distance: "2.8 km",
      price: "$5.99",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(allCategories);
  const [filteredPopularItems, setFilteredPopularItems] =
    useState(allPopularItems);

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query === "") {
      setFilteredCategories(allCategories);
      setFilteredPopularItems(allPopularItems);
    } else {
      const filteredCategoriesList = allCategories.filter((category) =>
        category.name.toLowerCase().includes(query.toLowerCase())
      );

      const filteredPopularList = allPopularItems.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );

      setFilteredCategories(filteredCategoriesList);
      setFilteredPopularItems(filteredPopularList);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        {/* Location and Profile */}
        <View style={styles.locationContainer}>
          <View style={styles.locationTextContainer}>
            <Ionicons
              name="location-outline"
              size={20}
              color="#333"
              style={styles.locationIcon}
            />
            <View>
              <Text style={styles.locationText}>Deliver to</Text>
              <Text style={styles.locationValue}>New York, USA</Text>
            </View>
          </View>
          <Image
            source={{ uri: "https://github.com/shadcn.png" }}
            style={styles.profileImage}
          />
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
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/hand-drawn-fast-food-sale-banner_23-2150970571.jpg",
          }}
          style={styles.bannerImage}
        />

        {/* Categories */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <TouchableOpacity>
            <Text style={styles.sectionLink}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={filteredCategories}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CategoryItem
              name={item.name}
              icon={item.icon}
              bgColor={item.bgColor}
            />
          )}
          keyExtractor={(item) => item.id}
          style={styles.categoryList}
        />

        {/* Popular Items */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular</Text>
          <TouchableOpacity>
            <Text style={styles.sectionLink}>See all</Text>
          </TouchableOpacity>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingBottom: 20, // Ensures all content is scrollable
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 30,
  },
  locationTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: {
    marginRight: 8,
  },
  locationText: {
    fontSize: 14,
    color: "#666",
  },
  locationValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    backgroundColor: "#e0e0e0",
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
    backgroundColor: "#f04d22",
    borderRadius: 8,
  },
  bannerImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  sectionLink: {
    color: "#f04d22",
    fontWeight: "bold",
  },
  categoryList: {
    marginBottom: 20,
  },
  popularList: {
    marginBottom: 20,
  },
});
