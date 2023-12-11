import {Themes} from '../../context/presetsContext/types';
import {
  boxes,
  colors,
  fontFamilies,
  fontSizes,
} from '../../config/stylesGuides';

const styles = (theme: Themes) => ({
  container: {
    width: '100%',
    marginTop: boxes.boxPadding * 2,
    paddingLeft: boxes.boxPadding,
    paddingRight: boxes.boxPadding,
    backgroundColor: colors[theme].secondaryMild,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    paddingBottom: boxes.boxPadding,
    borderRadius: boxes.thumbnailRadius,
  },
  info: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors[theme].secondaryMild,
    height: 85 + boxes.boxPadding,
  },
  awardDate: {
    paddingTop: boxes.boxPadding / 3,
    paddingBottom: 0,
    color: colors[theme].neutralMild,
  },
  action: {
    width: 120,
    height: 85,
  },
  badge: {
    marginTop: -1 * boxes.boxPadding,
    marginBottom: boxes.boxPadding / 2,
  },
  badgeName: {
    color: colors[theme].neutralMighty,
    fontFamily: fontFamilies.poppinsRegular,
    fontSize: fontSizes.h4,
    paddingTop: boxes.elementPadding,
  },
  prizeWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    paddingTop: boxes.boxPadding,
    paddingBottom: boxes.elementPadding,
    justifyContent: 'flex-end',
  },
  prizeTitle: {
    paddingRight: 5,
    color: colors[theme].neutralMild,
    fontFamily: fontFamilies.poppinsRegular,
    fontSize: fontSizes.base,
  },
  titleValue: {
    color: colors[theme].neutralMighty,
    fontFamily: fontFamilies.poppinsRegular,
    fontSize: fontSizes.h4,
  },
  buttonWrapper: {
    width: 120,
    paddingLeft: 40,
    flexDirection: 'row',
  },
});

export default styles;
