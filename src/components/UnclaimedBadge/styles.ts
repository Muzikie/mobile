import {StyleSheet} from 'react-native';
import {boxes, colors} from '../../config/stylesGuides';

const styles = {
  container: {
    width: '100%',
    marginTop: boxes.boxPadding * 2,
    paddingLeft: boxes.boxPadding,
    paddingRight: boxes.boxPadding,
    backgroundColor: colors.light.fadeBeige,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    borderWidth: 1,
    borderColor: colors.light.fadeBeige,
    paddingBottom: boxes.boxPadding,
    borderRadius: boxes.thumbnailRadius,
  },
  info: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.light.fadeBeige,
    height: 85 + boxes.boxPadding,
  },
  awardDate: {
    paddingTop: boxes.boxPadding / 3,
    paddingBottom: 0,
  },
  action: {
    width: 120,
    height: 85,
  },
  grey: {
    color: colors.light.grey,
  },
  badge: {
    marginTop: -1 * boxes.boxPadding,
    marginBottom: boxes.boxPadding / 2,
  },
  title: {
    fontWeight: 500,
  },
  claim: {
    padding: 0,
  },
  prizeWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    paddingTop: boxes.boxPadding,
    justifyContent: 'flex-end',
  },
  prizeTitle: {
    paddingRight: 5,
  },
  buttonWrapper: {
    width: 120,
    paddingLeft: 40,
  },
};

export default StyleSheet.create(styles);
