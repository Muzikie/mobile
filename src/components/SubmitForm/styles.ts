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
    backgroundColor: colors[theme].neutralTender,
    color: colors[theme].neutralStrong,
    paddingLeft: boxes.elementPadding,
    paddingRight: boxes.elementPadding,
  },
  confirmWrapper: {
    marginTop: boxes.boxPadding * -1,
    paddingBottom: boxes.boxPadding,
  },
  actionBar: {
    height: boxes.buttonHeight,
    marginTop: boxes.elementPadding,
  },
  text: {
    color: colors[theme].neutralStrong,
    fontSize: fontSizes.h4,
    fontFamily: fontFamilies.poppinsRegular,
  },
  icon: {
    marginBottom: boxes.boxPadding,
  },
});

export default styles;
