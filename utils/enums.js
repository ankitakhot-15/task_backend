const MachineType = {
  CNC_TURNING_CENTER: 1,
  VMC: 2,
  HMC: 3,
  HBM: 4,
  VTL: 5,
  FIVE_AXIS: 6,
};

const OperationType = {
  TURNING: 1,
  MILLING: 2,
  DRILLING: 3,
  CHAMFERING: 4,
  TAPPING: 5,
  THREADING: 6,
  BORING: 7,
  KNURLING: 8,
  HONING: 9,
  BUFFING: 10,
};

const MachineTypeMap = Object.fromEntries(
  Object.entries(MachineType).map(([key, value]) => [value, key]),
);

const OperationTypeMap = Object.fromEntries(
  Object.entries(OperationType).map(([key, value]) => [value, key]),
);

module.exports = {
  MachineType,
  OperationType,
  MachineTypeMap,
  OperationTypeMap,
};
