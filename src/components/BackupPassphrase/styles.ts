import {Themes} from '../../context/presetsContext/types';
import {boxes, colors, fonts} from '../../config/stylesGuides';

const styles = (theme: Themes) => ({
  wrapper: {
    backgroundColor: colors[theme].warnMild,
    padding: boxes.boxPadding,
    paddingVertical: boxes.doublePadding,
    marginBottom: boxes.boxPadding,
    borderRadius: boxes.thumbnailRadius,
  },
  copied: {
    position: 'absolute',
    top: boxes.boxPadding - 1,
    right: boxes.boxPadding,
    color: colors[theme].primaryStrong,
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  passphrase: {
    color: colors[theme].neutralZero,
    ...fonts.passphrase,
  },
  hiddenPassphrase: {
    ...fonts.hiddenPassphrase,
  },
  iconButton: {
    position: 'absolute',
    bottom: -1 * boxes.boxPadding,
    right: boxes.boxPadding,
    backgroundColor: colors[theme].reassureStrong,
    padding: boxes.elementPadding,
    borderRadius: boxes.thumbnailRadius,
  },
});

export default styles;
