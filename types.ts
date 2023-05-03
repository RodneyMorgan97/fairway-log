import { ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export interface RootStackParamList extends ParamListBase {
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
}

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;
