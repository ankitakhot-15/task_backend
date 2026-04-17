const MachineType = {
  CNC_TURNING_CENTER: 1,
  VMC: 2,
  HMC: 3,
  HBM: 4,
  VTL: 5,
  FIVE_AXIS: 6,
};

// string → number (for create)
const MachineTypeValue = Object.fromEntries(
  Object.entries(MachineType).map(([key, value]) => [key, value])
);

// number → string (for response)
const MachineTypeMap = Object.fromEntries(
  Object.entries(MachineType).map(([key, value]) => [value, key])
);

module.exports = {
  MachineType,
  MachineTypeMap,
  MachineTypeValue,
};