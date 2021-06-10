import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";

interface Props {
  nameIcon: String;
  title: String;
  img: Object;
  value: String;
}

const CardDetail: React.FC<Props> = ({
  nameIcon,
  title,
  img,
  value,
}) => {
  return (
    <View style={styles.contentCard}>
      <View
        style={{
          flex: 7,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ height: 42, width: 42 }}
          source={img}
          resizeMode="contain"
        />
      </View>
      <View style={{ flex: 5 }}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.title}>{title}</Text>
      
      </View>
    </View>
  );
};

export default CardDetail;
