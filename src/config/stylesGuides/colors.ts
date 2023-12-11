const common = {
  backdrop: 'transparent',
  seeThroughWhite: 'rgba(255, 255, 255, 0.5)',
  seeThroughBlack: 'rgba(0, 0, 0, 0.5)',
};

const light = {
  ...common,
  neutralMighty: '#000000',
  neutralStrong: '#3D3D3D',
  neutralMild: '#6D6C6C',
  neutralTender: '#B1B1B1',
  neutralZero: '#FFFFFF',
  primaryStrong: '#4E344D',
  primaryMild: '#A687AB',
  secondaryStrong: '#FEEAE3',
  secondaryMild: '#FEF2EE',
  warnStrong: '#F47081',
  warnMild: '#FF9DAA',
  reassureStrong: '#42BFC7',
  reassureMild: '#BDDFE1',
  seeThroughShade: common.seeThroughWhite,
};

const dark = {
  ...common,
  neutralMighty: '#FFFFFF',
  neutralStrong: '#999999',
  neutralMild: '#5D5D5D',
  neutralTender: '#323131',
  neutralZero: '#111111',
  primaryStrong: '#825E87',
  primaryMild: '#573F5A',
  secondaryStrong: '#1E161F',
  secondaryMild: '#0B080C',
  warnStrong: '#F47081',
  warnMild: '#FF9DAA',
  reassureStrong: '#42BFC7',
  reassureMild: '#BDDFE1',
  seeThroughShade: common.seeThroughBlack,
};

export default {
  light,
  dark,
};
