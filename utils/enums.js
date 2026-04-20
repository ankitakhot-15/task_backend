const MachineType = {
  CNC_TURNING_CENTER: 1,
  VMC: 2,
  HMC: 3,
  HBM: 4,
  VTL: 5,
  FIVE_AXIS: 6,
};

const MachineTypeValue = Object.fromEntries(
  Object.entries(MachineType).map(([k, v]) => [k, v])
);

const MachineTypeMap = Object.fromEntries(
  Object.entries(MachineType).map(([k, v]) => [v, k])
);

module.exports = {
  MachineType,
  MachineTypeValue,
  MachineTypeMap,
};