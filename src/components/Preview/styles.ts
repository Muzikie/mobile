import {StyleSheet} from 'react-native';
import {boxes, colors} from '../../config/stylesGuides';

const styles = {
  wrapper: {
    borderWidth: 1,
    borderColor: 'transparent',
    // paddingLeft: boxes.boxPadding,
    // paddingRight: boxes.boxPadding,
    marginTop: boxes.boxPadding,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  info: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: boxes.boxPadding,
    borderWidth: 1,
    borderColor: 'transparent',
    paddingTop: boxes.boxPadding / 3,
    paddingBottom: boxes.boxPadding / 3,
  },
  image: {
    height: boxes.buttonHeight,
    width: boxes.buttonHeight,
    borderWidth: 1,
    borderColor: colors.light.white,
    borderRadius: boxes.thumbnailRadius,
    overflow: 'hidden',
  },
};

export default StyleSheet.create(styles);
