import React from "react";
import { TouchableOpacity, Platform } from "react-native";
import PropTypes from "prop-types";

export const AccessibleButton = props =>
  Platform.OS === "iOS" ? (
    <TouchableOpacity
      accessible={true}
      accessibilityLabel={props.label}
      accessibilityHint={props.hint}
      onPress={props.onPress}
      style={props.style}
      activeOpacity={props.activeOpacity}
    >
      >{props.children}
    </TouchableOpacity>
  ) : (
    // android
    <TouchableOpacity
      accessible={true}
      accessibilityLabel={props.label}
      accessibilityHint={props.hint}
      onPress={props.onPress}
      style={props.style}
      activeOpacity={props.activeOpacity}
    >
      {props.children}
    </TouchableOpacity>
  );

AccessibleButton.propTypes = {
  label: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

// cover properties
// add the properties to cat app
// show this file "base component" / "building block" / "COMPONENT"
