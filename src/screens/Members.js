import { View, ScrollView, Button, StyleSheet } from "react-native";

import Avatar from "../components/Avatar";
import data from "../../assets/data.json";

function Members() {
  return (
    <View>
      {/* Header (global) */}

      <ScrollView contentContainerStyle={styles.list}>
        {data.members.map((member) => (
          <View
            style={styles.avatar}
            key={`${member.firstname}${member.lastname}`}
          >
            <Avatar
              label={member.firstname[0].toLocaleUpperCase()}
              color={member.favoriteColor}
            />
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <Button title="Inviter" color="black" />
      </View>
    </View>
  );
}

export default Members;

const styles = StyleSheet.create({
  list: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  avatar: {
    margin: 8,
  },
  footer: {
    backgroundColor: "white",
    padding: 32,
  },
});
