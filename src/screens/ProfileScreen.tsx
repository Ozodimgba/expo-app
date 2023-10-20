import { Text, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import QRCode from "react-qr-code";
import tw from "twrnc";

import { Screen } from "../components/Screen";

export function Profile() {
  const features = [
    {
      "id": 1,
      "name": "My profile",
      "icon": "symbol"
    }
  ];

  return (
    <Screen style={tw`bg-white`}>
      <FlatList
       data={features}
       renderItem={({ item, index }) => {
         return (
            <div key={index} style={tw`p-3 py-5 flex gap-3 items-center bg-purple-500 text-white rounded-2xl`}>
                <MaterialCommunityIcons name={"account"} color="#FFFFFF" size={20} />
                <Text style={tw`text-white text-xl`}>{item.name}</Text>
            </div>
         )
       }}
      />
    </Screen>
  );
}
