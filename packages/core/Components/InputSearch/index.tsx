import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";

import { SearchIcon, SearchWhiteIcon } from "@core/Assets";
import { useStyles } from "@core/Theme";
import { InputText } from "@core/Components/base/InputText";

import { InputSearchProps } from "./types";
import { TEST_IDS } from "./constants";

export const InputSearch = ({ onSearch, ...props }: InputSearchProps) => {
  const { scheme } = useStyles();
  const [value, setValue] = useState("");

  const handleSearch = () => {
    onSearch?.(value);
  };

  return (
    <InputText
      {...props}
      returnKeyLabel="Buscar"
      returnKeyType="search"
      onSubmitEditing={handleSearch}
      onChangeText={setValue}
      testID={TEST_IDS.INPUT}
      rightComponent={
        <TouchableOpacity
          style={{ paddingHorizontal: 15 }}
          onPress={handleSearch}
          testID={TEST_IDS.SEARCH_BUTTON}
        >
          <Image source={scheme === "dark" ? SearchWhiteIcon : SearchIcon} />
        </TouchableOpacity>
      }
    />
  );
};
