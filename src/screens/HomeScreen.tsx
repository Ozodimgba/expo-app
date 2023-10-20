import { Text, FlatList } from "react-native";
import QRCode from "react-qr-code";
import tw from "twrnc";

import { Screen } from "../components/Screen";

export function HomeScreen() {
  const features = [
    "tailwind",
    "recoil",
    "native styling",
    "fetching code from an API",
    "using a FlatList to render data",
    "Image for both remote & local images",
    "custom fonts",
    "sign a transaction / message",
    "theme hook with light/dark support",
  ];

  return (
    <Screen style={tw`bg-white`}>
      <Text style={tw`mb-4 text-center`}>
       This is your student generated QR code
      </Text>
      <div style={{ height: "auto", margin: "0 auto", maxWidth: 200, width: "100%" }}>
      <QRCode
       size={256}
       style={{ height: "auto", maxWidth: "100%", width: "100%" }}
       value={`http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5`}
       viewBox={`0 0 256 256`}
      />
    </div>
    </Screen>
  );
}
