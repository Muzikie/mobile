import {Themes} from '../../../context/presetsContext/types';
import {
  boxes,
  colors,
  fontFamilies,
  fontSizes,
} from '../../../config/stylesGuides';

const styles = (theme: Themes) => ({
  wrapper: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingBottom: boxes.doublePadding,
  },
  image: {
    marginBottom: boxes.boxPadding,
  },
  descriptionWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
  },
  description: {
    fontSize: fontSizes.h3,
    color: colors[theme].neutralStrong,
    lineHeight: 30,
    marginBottom: 0,
    paddingBottom: 0,
  },
  bold: {
    fontSize: fontSizes.h3,
    color: colors[theme].primaryStrong,
    fontFamily: fontFamilies.poppinsMedium,
    lineHeight: 30,
    marginBottom: 0,
    paddingBottom: 0,
  },
});

export default styles;
