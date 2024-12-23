import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AdminHome() {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleLogout = () => {
    setShowModal(true);
  };

  const confirmLogout = () => {
    setShowModal(false);
    setLoading(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          setLoading(false);
          navigation.navigate("Login");
        });
      }, 3000);
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.backgroundContainer}>
        <ImageBackground
          source={require("./assets/background.jpg")}
          style={styles.background}
        >
          <View style={styles.topContainer}>
            <View style={styles.logoContainer}>
              <Image
                source={require("./assets/logo.png")}
                style={styles.logo}
              />
              <Text style={styles.logoText}>BLAZEMART</Text>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionContainer}>
            <View style={styles.background_for_actionContainer}>
              <TouchableOpacity style={styles.actionButton}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require("./assets/manage_users.png")}
                    style={styles.iconImage}
                  />
                </View>
                <Text style={styles.actionText}>Manage Users</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require("./assets/manage_listings.png")}
                    style={styles.iconImage}
                  />
                </View>
                <Text style={styles.actionText}>Manage Listings</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require("./assets/announcements.png")}
                    style={styles.iconImage}
                  />
                </View>
                <Text style={styles.actionText}>Announcements</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require("./assets/reports.png")}
                    style={styles.iconImage}
                  />
                </View>
                <Text style={styles.actionText}>Reports</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require("./assets/banned_users.png")}
                    style={styles.iconImage}
                  />
                </View>
                <Text style={styles.actionText}>Banned Users</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require("./assets/update_credentials.png")}
                    style={styles.iconImage}
                  />
                </View>
                <Text style={styles.actionText}>Update My Credentials</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={handleLogout}
              >
                <View style={styles.iconContainer}>
                  <Image
                    source={require("./assets/logout.png")}
                    style={styles.iconImage}
                  />
                </View>
                <Text style={styles.actionText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* Logout Confirmation Modal */}
      <Modal
        transparent={true}
        visible={showModal}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>
              Are you sure you want to logout?
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={confirmLogout}
              >
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setShowModal(false)}
              >
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#7190BF",
  },
  backgroundContainer: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 0,
    paddingVertical: 35,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  logo: {
    width: 100,
    top: 20,
    height: 50,
    resizeMode: "contain",
  },
  logoText: {
    fontSize: 26, // Adjust the size to match the logo height visually
    top: 20,
    fontWeight: 900, // Optional styling for emphasis
    color: "#201B51", // Set a color that matches your theme
    right: 10,
    height: 50, // Same height as the logo
    lineHeight: 50, // Center the text vertically within its container
  },
  actionContainer: {
    marginTop: 20,
    alignItems: "center",
    paddingHorizontal: 16, // Optimized padding
  },
  background_for_actionContainer: {
    marginTop: 20,
    borderRadius: 20, // Smaller for smoother corners
    paddingVertical: 15, // Consistent inner padding
    paddingHorizontal: 16,
    backgroundColor: "#4E56A0",
    alignItems: "center",
    width: "80%", // Ensures better adaptability to different screen sizes
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#7190BF",
    paddingVertical: 10, // Balanced vertical padding
    paddingHorizontal: 0, // Improved horizontal padding
    borderRadius: 12, // Slightly rounded corners
    marginVertical: 8, // Reduced spacing between buttons
    width: "90%", // Utilize full width of the container
    elevation: 3, // Add slight shadow for better contrast
  },
  iconContainer: {
    width: 50, // Adjusted to balance button size
    height: 50,
    backgroundColor: "#4E56A0",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20, // Balanced spacing between icon and text
    borderColor: "#FFFFFF",
    borderWidth: 3,
  },
  iconImage: {
    width: 35, // Resized for consistency
    height: 35,
    resizeMode: "contain",
  },
  actionText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "800",
    textAlign: "left",
    marginLeft: 25,
    flex: 1, // Allow text to expand if needed
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  modalContainer: {
    width: 300,
    padding: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    flex: 1,
    backgroundColor: "#4E56A0",
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
