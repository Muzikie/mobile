import {StyleSheet} from 'react-native';
import {boxes, colors} from '../../config/stylesGuides';

const styles = {
  motivations: {
    paddingTop: boxes.boxPadding,
    paddingLeft: boxes.boxPadding,
  },
  motivation: {
    width: 210,
    height: 243,
    backgroundColor: colors.light.fadeBeige,
    marginRight: boxes.elementPadding,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: boxes.boxBorderRadius,
    overflow: 'hidden',
  },
  motivationContainer: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: colors.light.success,
    borderRadius: boxes.thumbnailRadius,
    padding: boxes.elementPadding,
    backgroundColor: colors.light.fadeSuccess,
  },
  image: {
    width: 100 - boxes.elementPadding * 2,
    height: 100 - boxes.elementPadding * 2,
  },
  title: {
    textAlign: 'center',
    paddingTop: boxes.boxPadding,
    padding: boxes.elementPadding,
  },
};

export default StyleSheet.create(styles);
