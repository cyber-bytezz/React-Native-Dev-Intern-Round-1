# Aforro Groceries Mobile App

This is a React Native mobile application built for Aforro Groceries as part of an internship project. The app allows users to search for food items, view categories, and popular food products, and provides a clean, user-friendly interface. It is designed to replicate a specific mobile UI with pixel-perfect design and functionality.

## Features
- **Search Bar**: Allows users to search for food items and categories.
- **Filter Option**: A filter icon to refine the search results.
- **Food Categories**: Displays various categories of food with corresponding images.
- **Popular Items**: Displays a list of popular food items with name, restaurant details, rating, and price.
- **Interactive UI**: Includes navigation, clickable items, and smooth transitions.

## Demo

### YouTube Video
[Watch the demo on YouTube](https://www.youtube.com/watch?v=DqwY0DcqYzg)

<p align="center">
  <img src="https://github.com/user-attachments/assets/c23216cc-7f55-48aa-8fd2-486cb41bc537" alt="App Screenshot" width="200"/>
</p>

## Getting Started

### Prerequisites
To run this project locally, you'll need the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/aforro-groceries-app.git
   cd aforro-groceries-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the Expo development server:

   ```bash
   npm start
   ```

4. Run the app on your device:

   - Scan the QR code with your **Expo Go** app (for Android or iOS).
   - Alternatively, run it on an emulator using:

   ```bash
   npm run android   # For Android emulator
   npm run ios       # For iOS simulator (only on macOS)
   ```

### Folder Structure

```plaintext
.
├── assets/                 # Static images and fonts
├── components/             # Reusable components (e.g., CategoryItem, PopularItem)
├── screens/                # Screens like HomeScreen
├── App.js                  # Entry point of the app
├── package.json            # Dependencies and project metadata
└── README.md               # Project overview and instructions
```

### Components

1. **CategoryItem.js**: Displays individual food categories with images and names.
2. **PopularItem.js**: Displays the popular food items with price, ratings, and distance.

### Built With

- [React Native](https://reactnative.dev/) - Framework for building native apps.
- [Expo](https://expo.dev/) - Development platform for React Native apps.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m 'Add a new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
