import {boxes, fonts} from '../../../config/stylesGuides';

const styles = () => ({
  pageTitle: {
    ...fonts.h2,
    paddingTop: boxes.boxPadding,
    paddingLeft: boxes.boxPadding,
    paddingRight: boxes.boxPadding,
  },
});

export default styles;
