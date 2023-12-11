import {Themes} from '../../../context/presetsContext/types';
import {
  boxes,
  colors,
  fontFamilies,
  fontSizes,
} from '../../../config/stylesGuides';

const styles = (theme: Themes) => ({
  container: {
    width: '100%',
    marginTop: boxes.boxPadding,
    marginBottom: boxes.boxPadding,
    paddingLeft: boxes.boxPadding,
    paddingRight: boxes.boxPadding,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  info: {
    paddingLeft: boxes.elementPadding,
  },
  title: {
    width: '100%',
    color: colors[theme].primaryStrong,
    fontSize: fontSizes.h4,
    fontFamily: fontFamilies.poppinsMedium,
    paddingBottom: 4,
  },
  submitter: {
    color: colors[theme].neutralMild,
    fontSize: fontSizes.base,
    fontFamily: fontFamilies.poppinsRegular,
  },
  artist: {
    color: colors[theme].neutralStrong,
    fontSize: fontSizes.base,
    fontFamily: fontFamilies.poppinsRegular,
  },
  link: {
    flex: 1,
    height: '100%',
  },
  button: {
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors[theme].secondaryStrong,
  },
  thumbnail: {
    width: 66,
    height: 66,
    borderRadius: boxes.thumbnailRadius,
    // marginRight: boxes.boxPadding,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
