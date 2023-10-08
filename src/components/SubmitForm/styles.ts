import {StyleSheet} from 'react-native';
import {boxes, colors} from '../../config/stylesGuides';

const styles = {
  wrapper: {
    borderWidth: 1,
    borderColor: 'transparent',
    paddingLeft: boxes.boxPadding,
    paddingRight: boxes.boxPadding,
    marginTop: boxes.boxPadding * 3,
  },
  container: {
    width: '100%',
    // height: 200,
    backgroundColor: colors.light.fadeBeige,
    borderRadius: boxes.boxBorderRadius,
    padding: boxes.boxPadding,
    overflow: 'hidden',
  },
  input: {
    width: '100%',
    height: boxes.buttonHeight,
    borderRadius: boxes.thumbnailRadius,
    backgroundColor: colors.light.white,
    paddingLeft: boxes.elementPadding,
    paddingRight: boxes.elementPadding,
  },
};

export default StyleSheet.create(styles);
