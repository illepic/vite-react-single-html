export type Phase = {
  id: string;
  name: string;
  nameOverride: string;
  isNoCharge: boolean;
  optionPhase: boolean;
};

export type LineItem = {
  id: string;
  name: string;
  material: string;
  coverage: string;
  quantity: number;
  total: number;
  isHidden: boolean;
  option: boolean;
  notes: {
    internal: string;
    external: string;
  };
};
