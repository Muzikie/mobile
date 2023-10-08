import {StyleSheet} from 'react-native';
import {boxes} from '../../config/stylesGuides';

const styles = {
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
  title: {
    width: '100%',
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
  },
  thumbnail: {
    width: 40,
    height: 40,
    borderRadius: boxes.thumbnailRadius,
    marginRight: boxes.boxPadding,
  },
  upvoteIcon: {
    width: 17,
    height: 15,
  },
};

export default StyleSheet.create(styles);
