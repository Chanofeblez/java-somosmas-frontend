export interface Member {
  id?:                   number;
  nombre:               string;
  primerApellido:       string;
  segundoApellido:      null | string;
  telefono:             string;
  email:                string;
  password:             string;
  ciudad:               string;
  pais:                 string;
  enabled?:              boolean;
  accountNotExpired?:    boolean;
  accountNotLocked?:     boolean;
  credentialNotExpired?: boolean;
  rolesList?:            RolesList[];
}

export interface RolesList {
  id:              number;
  role:            string;
  permissionsList: PermissionsList[];
}

export interface PermissionsList {
  id:             number;
  permissionName: string;
}
