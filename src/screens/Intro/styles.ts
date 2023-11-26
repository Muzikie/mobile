import {StyleSheet} from 'react-native';
import {boxes, colors} from '../../config/stylesGuides';

const styles = {
  screenContainer: {
    height: '100%',
    width: '100%',
  },
  introScreen: {
    backgroundColor: colors.light.beige,
  },
  stepContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    textAlign: 'center',
    paddingBottom: 50,
  },
  imageContainer: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light.beige,
    borderBottomLeftRadius: boxes.avatarRadius,
    borderBottomRightRadius: boxes.avatarRadius,
  },
  titleContainer: {
    width: '100%',
    paddingBottom: 80,
  },
  image: {
    width: 150,
    height: 150,
  },
  title: {
    color: colors.light.purple,
    textAlign: 'center',
  },
  subtitle: {
    color: colors.light.purple,
    textAlign: 'center',
    paddingTop: boxes.boxPadding,
    paddingRight: boxes.doublePadding,
    paddingLeft: boxes.doublePadding,
  },
  buttonContainer: {
    width: 80,
    height: 80,
    backgroundColor: colors.light.white,
    borderRadius: boxes.boxBorderRadius,
    paddingLeft: 15,
    paddingRight: 5,
    paddingTop: 15,
  },
};

export default StyleSheet.create(styles);
