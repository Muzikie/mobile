import {Themes} from '../../context/presetsContext/types';
import {boxes, colors, fonts} from '../../config/stylesGuides';

const styles = (theme: Themes) => ({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: boxes.boxPadding,
  },
  image: {
    width: 68,
    height: 72,
  },
  title: {
    paddingTop: boxes.boxPadding,
  },
  passphrase: {
    color: colors[theme].white,
    ...fonts.passphrase,
  },
  hiddenPassphrase: {
    ...fonts.hiddenPassphrase,
  },
  iconButton: {
    position: 'absolute',
    bottom: -1 * boxes.boxPadding,
    right: boxes.boxPadding,
    backgroundColor: colors[theme].fadeSuccess,
    padding: boxes.elementPadding,
    borderRadius: boxes.thumbnailRadius,
  },
});

export default styles;
