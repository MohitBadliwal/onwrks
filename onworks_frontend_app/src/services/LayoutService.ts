/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./api";

export type ICreateUiLayoutMasterRequest = {
  userId: number;
  businessUnitId?: number;
  itemTypeId: number;
  categoryId?: number;
  name: string;
  description: string;
  expression?: string;
  createdBY: number;
};

export interface LayoutRequest {
  layoutId: number;
  itemTypeId: number;
  layoutType: number;
  layoutJSON: string;
}

export interface IGetLayoutGroupViewRequest {
  layoutId: number;
  itemTypeId: number;
  layoutType: number;
}

export interface LayoutGroupViewResponse {
  layoutGroupViewId: number;
  layoutId: number;
  itemTypeId: number;
  layoutType: number;
  layoutJSON: string;
  ownerID: number;
  groupId: number;
  viewType: number;
  redirectTo: number;
  bindingFields: string;
  designerXML: string;
  lastModifiedByType: number;
  lastModifiedBy: number;
  lastModifiedOn: string; // ISO date string
  uniqueID: string;
  stateID: number;
  isHide: boolean;
  formMode: number;
  rowIndex: number;
}

export interface UpdateLayoutGroupViewRequest {
  layoutGroupViewId: number;
  layoutId: number;
  itemTypeId: number;
  layoutJSON: string;
}

export interface IAddOrRemoveObjectRequest {
  procedureId: number;
  json: string;
}
export interface AddOrRemoveObjectRequest {
  TenantId?: number;
  IsDelete: boolean;
  IsSystem?: boolean;
  ObjectName: string;
  ApiName: string;
  Status?: number;
  User?: string;
}
export interface FilterField {
  Field: string;
  Value: string;
}

type SortDirection = "ASC" | "DESC";

export interface IGetRecordsRequest {
  procedureId: number;
  json: string;
}
export interface GetRecordsRequest {
  TableName: string;
  SelectFields: string[] | null;
  SortBy: string[];
  SortDir: SortDirection;
  Page: number;
  PageSize: number;
  FilterFields?: FilterField[];
}

export interface IDeleteObjectRequest {
  tenantId: number;
  apiName: string;
  user: string;
}

export interface IUpdateScreenFlowRequest {
  id: number;
  objectId: number;
  screensJSON: string;
}
export interface IGetObjectFieldsRequest {
  procedureId: number;
  json: string;
}

export interface GetObjectFieldsRequest {
  TenantId: number;
  ObjectId: number;
  FieldId: number;

  Label: string;
  Type: string;
  SlotId: number;

  IsRequired: boolean;
  IsIndexed: boolean;
  IsSearchable: boolean;
  IsPII: boolean;
  IsSystem: boolean;

  DefaultValue: string;
  EncryptionPolicy: string;
  MaskingStyle: string;

  Status: number;
  Version: number;
  Userid: number;
  LangId: number;

  LegacyKeyId: number;
  LegacyViewId: number;

  TableName: string;
  ObjectName: string;
  ApiName: string;
  Traits: string;
}

export interface IAddScreenFlowRequest {
  objectId: number;
  screensJSON: string;
}

// Response type
export interface UpdateLayoutGroupViewResponse {
  Success: boolean;
  Message: string;
}

export interface IGetObjectFieldsResponse {
  id: number;
  objectName: string;
  ObjectId: number;
  label: string;
  apiName: string;
  fieldTypeId: number;
  required: boolean;
  traits: string | null;
}

export async function getLayoutFields(objectId: number): Promise<any> {
  try {
    const res = await api.post("Layout/get-layout-fields", {
      objectId: objectId,
    });
    return res.data;
  } catch (error) {
    console.error("Failed to fetch layout fields:", error);
    throw error;
  }
}

export async function createUiLayoutMaster(
  createRequest: ICreateUiLayoutMasterRequest
): Promise<any> {
  try {
    const res = await api.post("Layout/add-uilayout-master", createRequest);
    return res;
  } catch (error) {
    console.error("Failed to fetch layout fields:", error);
    throw error;
  }
}

export async function getUiLayoutMaster(): Promise<any> {
  try {
    const res = await api.get("Layout/get-uilayout-master", {});
    return res;
  } catch (error) {
    console.error("Failed to fetch layout fields:", error);
    throw error;
  }
}

export async function getUiLayoutMasterByObjectId(
  objectId: number
): Promise<any> {
  try {
    const res = await api.post("Layout/get-uilayout-master-by-objectId", {
      objectId: objectId,
    });
    return res;
  } catch (error) {
    console.error("Failed to fetch layout fields:", error);
    throw error;
  }
}

export async function addLayoutGroupView(request: LayoutRequest): Promise<any> {
  try {
    const res = await api.post("Layout/add-layout-groupview", request);
    return res;
  } catch (error) {
    console.error("Failed to fetch layout fields:", error);
    throw error;
  }
}

export async function getLayoutGroupView(
  request: IGetLayoutGroupViewRequest
): Promise<any> {
  try {
    const res = await api.post("Layout/get-layout-groupview", request);
    return res;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}

export async function updateLayoutGroupView(
  request: UpdateLayoutGroupViewRequest
): Promise<any> {
  try {
    const res = await api.post("Layout/update-layout-groupview", request);
    return res;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}

export async function deleteUiLayoutMasterById(id: number): Promise<any> {
  try {
    const res = await api.post(
      `Layout/delete-uilayout-master-by-layoutid/${id}`
    );
    return res;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}

export async function execute(
  request: any
): Promise<any> {
  try {
    const res = await api.post("Object/execute", request);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}



export async function getObjects(userId: number): Promise<any> {
  try {
    const res = await api.post(`Object/get-objects/${userId}`);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}


export async function getObjectFields(
  objectName: string | undefined
): Promise<any> {
  try {
    const res = await api.get(`Object/${objectName}/fields`);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}

export async function deleteObjectField(
  objectName: string | string[],
  fieldId: number
): Promise<any> {
  try {
    const res = await api.post(`Object/${objectName}/remove-fields/${fieldId}`);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}

export async function updateObjectField(
  objectName: string | string[],
  fieldId: number,
  updatedData: any
): Promise<any> {
  try {
    const res = await api.post(
      `Object/${objectName}/fields/${fieldId}`,
      updatedData
    );
    return res.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}

export async function saveBusinessRules(request: any): Promise<any> {
  try {
    const res = await api.post(`Alert/add-rule`, request);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}

export async function updateRulesById(id: number, request: any): Promise<any> {
  try {
    const res = await api.post(`Alert/update-rulebyId/${id}`, request);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}

export async function getRulesById(id: number): Promise<any> {
  try {
    const res = await api.get(`Alert/get-rulebyId/${id}`);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}

export async function getUsersAllRules(data: any): Promise<any> {
  try {
    const res = await api.post(`Alert/get-all-rules`, data);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}

export async function getAlertRuleTypes(): Promise<any> {
  try {
    const res = await api.post(`Alert/get-alert-rule-types`);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}
export async function deleteRuleById(id: number): Promise<any> {
  try {
    const res = await api.post(`Alert/delete-rulebyId/${id}`);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}

export async function getUsersList(): Promise<any> {
  try {
    const res = await api.get(`Alert/get-azusers`);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}

export async function getDenyPermissions(): Promise<any> {
  try {
    const res = await api.get(`Alert/get-denypermission`);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}

export async function addScreenFlow(
  request: IAddScreenFlowRequest
): Promise<any> {
  try {
    const res = await api.post(`Layout/add-screen-flow`, request);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}

export async function getScreenFlow(objectId: number): Promise<any> {
  try {
    const res = await api.get(`Layout/get-screen-flow-by-objectId/${objectId}`);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}

export async function updateScreenFlow(
  request: IUpdateScreenFlowRequest
): Promise<any> {
  try {
    const res = await api.post(`Layout/update-screen-flow`, request);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}
