import { StyleSheet, View, Text, ImageBackground, ScrollView } from "react-native";
import React from "react";

import abachaImage from "@/assets/images/abacha-served.webp";

export default function AbachaShop() {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={abachaImage} style={styles.headerImage} resizeMode="cover">
        <Text style={styles.headerText}>Welcome to Enugu's Finest Abacha Shop</Text>
      </ImageBackground>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>About Us</Text>
        <Text style={styles.paragraph}>
          Located in the heart of Enugu, we specialize in serving the authentic and beloved African
          delicacy—Abacha, also known as African salad. Our shop is a go-to spot for locals and
          visitors who crave a taste of tradition with a modern twist.
        </Text>
        <Text style={styles.sectionTitle}>What We Offer</Text>
        <Text style={styles.paragraph}>
          - Freshly made Abacha, garnished to perfection with ugba (oil bean) and dried fish.
          {"\n"}- Premium palm oil dishes, spiced to suit your palate.
          {"\n"}- A variety of local refreshments including palm wine and zobo drinks.
        </Text>
        <Text style={styles.sectionTitle}>Visit Us</Text>
        <Text style={styles.paragraph}>
          Drop by our shop at Independence Layout, Enugu. Experience the rich flavors of the
          Southeast in every bite!
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  headerImage: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 16,
    paddingVertical: 8,
    textAlign: "center",
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
    marginBottom: 16,
  },
});
