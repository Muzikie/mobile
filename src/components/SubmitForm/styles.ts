import {Themes} from '../../context/presetsContext/types';
import {
  boxes,
  colors,
  fontFamilies,
  fontSizes,
} from '../../config/stylesGuides';

const styles = (theme: Themes) => ({
  input: {
    width: '100%',
    height: boxes.buttonHeight,
    borderRadius: boxes.thumbnailRadius,
    backgroundColor: colors[theme].paleGrey,
    paddingLeft: boxes.elementPadding,
    paddingRight: boxes.elementPadding,
  },
  confirmWrapper: {
    marginTop: boxes.boxPadding * -1,
    paddingBottom: boxes.boxPadding,
  },
  text: {
    color: colors[theme].darkGrey,
    fontSize: fontSizes.h4,
    fontFamily: fontFamilies.poppinsRegular,
  },
  icon: {
    marginBottom: boxes.boxPadding,
  },
});

export default styles;
