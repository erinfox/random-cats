import React from "react";
import { TouchableOpacity, Platform, Image, Text, Picker } from "react-native";
import PropTypes from "prop-types";

export const AccessibleText = props =>
  Platform.OS === "iOS" ? (
    <Text accessible={true} accessibilityRole={props.role} style={props.style}>
      {props.children}
    </Text>
  ) : (
    // android
    <Text accessible={true} accessibilityRole={props.role} style={props.style}>
      {props.children}
    </Text>
  );

export const AccessibleImage = props =>
  Platform.OS === "iOS" ? (
    <Image
      accessible={true}
      accessibilityHint={props.hint}
      accessibilityLabel={props.label}
      accessibilityRole={props.role}
      style={props.style}
      source={props.source}
    >
      {props.children}
    </Image>
  ) : (
    // android
    <Image
      accessible={true}
      accessibilityHint={props.hint}
      accessibilityLabel={props.label}
      accessibilityRole={props.role}
      style={props.style}
      source={props.source}
    >
      {props.children}
    </Image>
  );

export const AccessibleButton = props =>
  Platform.OS === "iOS" ? (
    <TouchableOpacity
      accessible={true}
      accessibilityHint={props.hint}
      accessibilityLabel={props.label}
      accessibilityRole={props.role}
      onPress={props.onPress}
      style={props.style}
      activeOpacity={props.activeOpacity}
    >
      {props.children}
    </TouchableOpacity>
  ) : (
    // android
    <TouchableOpacity
      accessible={true}
      accessibilityHint={props.hint}
      accessibilityLabel={props.label}
      accessibilityRole={props.role}
      onPress={props.onPress}
      style={props.style}
      activeOpacity={props.activeOpacity}
    >
      {props.children}
    </TouchableOpacity>
  );

export const AccessiblePicker = props =>
  Platform.OS === "iOS" ? (
    <Picker
      accessible={true}
      accessibilityHint={props.hint}
      accessibilityLabel={props.label}
      accessibilityRole={props.role}
      selectedValue={props.selectedValue}
      onValueChange={itemValue => setTag(itemValue)}
    >
      {props.children}
    </Picker>
  ) : (
    // android
    <Picker
      accessible={true}
      accessibilityHint={props.hint}
      accessibilityLabel={props.label}
      accessibilityRole={props.role}
      selectedValue={props.selectedValue}
      onValueChange={itemValue => setTag(itemValue)}
    >
      {props.children}
    </Picker>
  );

AccessibleButton.propTypes = {
  label: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired
  // selectedValue: PropTypes.string.isRequired,
  // onValueChange: PropTypes.func.isRequired
};
