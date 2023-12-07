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
    color: colors[theme].purple,
    fontSize: fontSizes.h4,
    fontFamily: fontFamilies.poppinsMedium,
    paddingBottom: 4,
  },
  submitter: {
    color: colors[theme].lightGrey,
    fontSize: fontSizes.base,
    fontFamily: fontFamilies.poppinsRegular,
  },
  artist: {
    color: colors[theme].darkGrey,
    fontSize: fontSizes.base,
    fontFamily: fontFamilies.poppinsRegular,
  },
  link: {
    flex: 1,
    height: '100%',
  },
  thumbnail: {
    width: 66,
    height: 66,
    borderRadius: boxes.thumbnailRadius,
    // marginRight: boxes.boxPadding,
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    color: colors[theme].darkGrey,
    fontSize: fontSizes.base,
    fontFamily: fontFamilies.poppinsRegular,
  },
  rankWrapper: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  hashTag: {
    color: colors[theme].purple,
    fontSize: fontSizes.h4,
    fontFamily: fontFamilies.poppinsRegular,
    paddingTop: 3,
    paddingRight: 2,
  },
  rank: {
    color: colors[theme].purple,
    fontSize: fontSizes.h1,
    fontFamily: fontFamilies.poppinsRegular,
  },
});

export default styles;
