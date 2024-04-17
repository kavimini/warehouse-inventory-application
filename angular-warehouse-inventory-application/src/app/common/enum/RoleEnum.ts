export enum RoleEnum {
    WAREHOUSE_MANAGER = 'Warehouse Manager',
    OPERATOR = 'Operator'

}

export function getRoles(): string[] {
    return Object.values(RoleEnum);
}