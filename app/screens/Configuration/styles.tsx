import { blue, darkBlue, lightGray, white } from '../../utils/colors';

import { StyleSheet } from 'react-native';
import { getResponsiveFontSize } from '../../utils/dimensions';

const styles = StyleSheet.create({
  bgWhite: {
    backgroundColor: white
  },
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 20,
    paddingTop: 25
  },
  section: {
    marginBottom: 40
  },
  sectionText: {
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: getResponsiveFontSize(3)
  },
  item: {
    backgroundColor: white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 25,
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: lightGray
  },
  itemText: {
    fontSize: getResponsiveFontSize(2.5),
    color: darkBlue,
    width: '80%'
  },
  itemTextVersion: {
    fontSize: getResponsiveFontSize(2.5),
    color: blue
  },
  itemTextSignOut: {
    fontSize: getResponsiveFontSize(2.5),
    color: blue,
    marginTop: 40,
  },
  itemNoBorder: {
    borderBottomWidth: 0,
    flexDirection: 'column',
  },
  icon: {
    marginRight: 5
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  text: {
    textAlign: 'center',
  },
});

export default styles;
