import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  },
  containerDialog: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginTop: 5,
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    height: 40,
    borderColor: "grey",
    borderWidth: .5,
    borderRadius: 4
  },
  submitButton: {
    backgroundColor: "pink",
    borderRadius: 4,
    padding: 0,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    alignItems: "center",
    height: 40,
  },
  createAccountLink: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
  },
  submitButtonText: {
    color: "white"
  },
  tinyLogo: {
    marginLeft: 145,
    marginBottom: 45,
    width: 86,
    height: 78,
  }
});

export default styles;