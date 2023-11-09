import { StatusBar } from "expo-status-bar";
import { ToDo } from "./src/screens";

export default function App() {
  return (
    <>
      <StatusBar style="auto" backgroundColor="transparent" translucent />
      <ToDo />
    </>
  );
}
