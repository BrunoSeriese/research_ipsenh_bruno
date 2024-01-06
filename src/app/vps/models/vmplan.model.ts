export interface VMplan {
  id: number;
  name: String;
  description: String;
  cores: number;
  ram: number;
  storage: number;
  bandwidth: number;
  firewall: boolean;
  price: number;
  ipv4: boolean;
  ipv6: boolean;
  automatic_backups: boolean;
  monitoring: boolean;
  snapshots: boolean;
}
