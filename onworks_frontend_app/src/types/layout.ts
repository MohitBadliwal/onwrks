/* eslint-disable @typescript-eslint/no-explicit-any */
// Layout and form related types

export interface Layout {
  id: number;
  layoutName: string;
  createdAt: string;
  updatedAt?: string;
  createdBy: number;
  businessUnitId?: number;
  itemTypeId?: number;
  categoryId?: number;
  description?: string;
  expression?: string;
}

export interface DefaultLayout {
  layoutId: number;
  userId: number;
  businessUnitId: number;
  itemTypeId: number;
  categoryId: number;
  name: string;
  description: string;
  expression: string;
  createdBY: number;
}

export interface SavedLayout {
  id: number;
  name: string;
  data: LayoutData;
  createdAt: string;
  updatedAt?: string;
}

export interface LayoutData {
  layoutName: string;
  sections: Section[];
  selectedProcess?: string;
  selectedProcessId?: string;
}

export interface Section {
  id: string;
  type: SectionType;
  title: string;
  fields: Field[];
  order: number;
  isCollapsible?: boolean;
  isCollapsed?: boolean;
}

export enum SectionType {
  SINGLE_COLUMN = "single-column",
  TWO_COLUMN = "two-column",
  THREE_COLUMN = "three-column",
  CUSTOM = "custom",
}

export interface Field {
  id: string;
  type: FieldType;
  label: string;
  value?: any;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  options?: FieldOption[];
  validation?: FieldValidation;
  order: number;
  columnSpan?: number;
}

export enum FieldType {
  TEXT = "text",
  EMAIL = "email",
  PHONE = "phone",
  NUMBER = "number",
  DATE = "date",
  SELECT = "select",
  MULTI_SELECT = "multi-select",
  TEXTAREA = "textarea",
  CHECKBOX = "checkbox",
  RADIO = "radio",
  FILE = "file",
  CUSTOM = "custom",
}

export interface FieldOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface FieldValidation {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  custom?: (value: any) => string | null;
}

export interface LayoutContextType {
  layoutData: LayoutData | null;
  savedLayouts: SavedLayout[];
  isLoading: boolean;
  error: string | null;
  updateLayoutData: (data: Partial<LayoutData>) => void;
  getSavedLayouts: () => Promise<SavedLayout[]>;
  saveLayout: (layout: Omit<SavedLayout, "id" | "createdAt">) => Promise<void>;
  loadLayout: (layoutId: number) => SavedLayout | null;
  deleteSavedLayout: (layoutId: number) => void;
  clearLayoutData: () => void;
}

export interface Message {
  id: number;
  ruleId: number;
  message: string;
  visibleToType: string;
  visibleToMembers: string;
  createdBy: string;
  createdDate: string; // ISO Date string
  updatedBy: string;
  updatedDate: string; // ISO Date string
}

export interface Filter {
  id: number;
  ruleId: number;
  columnName: string;
  operation: string;
  value: string;
  logicOperator: string;
  createdBy: string;
  createdDate: string; // ISO Date string
  updatedBy: string;
  updatedDate: string; // ISO Date string
}

export interface RuleMergeField {
  id: number;
  ruleId: number;
  fieldType: string;
  fieldName: string;
  displayName: string;
  mergeKey: string;
  dataType: string;
  createdBy: string;
  createdDate: string; // ISO Date string
  updatedBy: string;
  updatedDate: string; // ISO Date string
}

export interface ISaveBusinessRulesRequest {
  id: number;
  ruleName: string;
  description: string;
  executeFor: string;
  scope: string;
  triggerType: number;
  trigger: string;
  playbook: string;
  objectId: number;
  ruleType: number;
  alertType: string;
  isActive: boolean;
  createdBy: string;
  createdDate: string; // ISO Date string
  updatedBy: string;
  updatedDate: string; // ISO Date string
  messages: Message[];
  filters: Filter[];
  ruleMergeFields: RuleMergeField[];
}

export enum BUSINESS_RULE_TYPES_ID {
  BUSINESS_ENFORCEMENT_RULE = 1,
  MANAGE_ALERT_RULE = 2,
  MANAGE_CONDITONAL_ACCESS = 3,
}
