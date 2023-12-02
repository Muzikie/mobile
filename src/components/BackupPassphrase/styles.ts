import {StyleSheet} from 'react-native';
import {boxes, colors, fonts} from '../../config/stylesGuides';

const styles = {
  wrapper: {
    backgroundColor: colors.light.errorFade,
    padding: boxes.boxPadding,
    paddingVertical: boxes.doublePadding,
    marginBottom: boxes.boxPadding,
    borderRadius: boxes.thumbnailRadius,
  },
  copied: {
    position: 'absolute',
    top: boxes.boxPadding - 1,
    right: boxes.boxPadding,
    color: colors.light.purple,
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  passphrase: {
    color: colors.light.white,
    ...fonts.passphrase,
  },
  hiddenPassphrase: {
    ...fonts.hiddenPassphrase,
  },
  iconButton: {
    position: 'absolute',
    bottom: -1 * boxes.boxPadding,
    right: boxes.boxPadding,
    backgroundColor: colors.light.fadeSuccess,
    padding: boxes.elementPadding,
    borderRadius: boxes.thumbnailRadius,
  },
};

export default StyleSheet.create(styles);
