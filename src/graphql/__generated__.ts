import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  GraphQLBigInt: { input: any; output: any; }
  GraphQLStringOrFloat: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export enum EventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type Query = {
  readonly __typename?: 'Query';
  readonly home_page: Maybe<Home_Page>;
  readonly home_page_by_version: Maybe<Version_Home_Page>;
  readonly home_page_files: ReadonlyArray<Home_Page_Files>;
  readonly home_page_files_aggregated: ReadonlyArray<Home_Page_Files_Aggregated>;
  readonly home_page_files_by_id: Maybe<Home_Page_Files>;
  readonly home_page_files_by_version: Maybe<Version_Home_Page_Files>;
  readonly services: ReadonlyArray<Services>;
  readonly servicesBlock: ReadonlyArray<ServicesBlock>;
  readonly servicesBlock_aggregated: ReadonlyArray<ServicesBlock_Aggregated>;
  readonly servicesBlock_by_id: Maybe<ServicesBlock>;
  readonly servicesBlock_by_version: Maybe<Version_ServicesBlock>;
  readonly servicesClinic: Maybe<ServicesClinic>;
  readonly servicesClinic_by_version: Maybe<Version_ServicesClinic>;
  readonly servicesClinic_servicesBlock: ReadonlyArray<ServicesClinic_ServicesBlock>;
  readonly servicesClinic_servicesBlock_aggregated: ReadonlyArray<ServicesClinic_ServicesBlock_Aggregated>;
  readonly servicesClinic_servicesBlock_by_id: Maybe<ServicesClinic_ServicesBlock>;
  readonly servicesClinic_servicesBlock_by_version: Maybe<Version_ServicesClinic_ServicesBlock>;
  readonly services_aggregated: ReadonlyArray<Services_Aggregated>;
  readonly services_by_id: Maybe<Services>;
  readonly services_by_version: Maybe<Version_Services>;
};


export type QueryHome_PageArgs = {
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryHome_Page_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryHome_Page_FilesArgs = {
  filter: InputMaybe<Home_Page_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHome_Page_Files_AggregatedArgs = {
  filter: InputMaybe<Home_Page_Files_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHome_Page_Files_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryHome_Page_Files_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryServicesArgs = {
  filter: InputMaybe<Services_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryServicesBlockArgs = {
  filter: InputMaybe<ServicesBlock_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryServicesBlock_AggregatedArgs = {
  filter: InputMaybe<ServicesBlock_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryServicesBlock_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryServicesBlock_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryServicesClinicArgs = {
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryServicesClinic_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryServicesClinic_ServicesBlockArgs = {
  filter: InputMaybe<ServicesClinic_ServicesBlock_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryServicesClinic_ServicesBlock_AggregatedArgs = {
  filter: InputMaybe<ServicesClinic_ServicesBlock_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryServicesClinic_ServicesBlock_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryServicesClinic_ServicesBlock_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryServices_AggregatedArgs = {
  filter: InputMaybe<Services_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryServices_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryServices_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};

export type Subscription = {
  readonly __typename?: 'Subscription';
  readonly directus_files_mutated: Maybe<Directus_Files_Mutated>;
  readonly home_page_files_mutated: Maybe<Home_Page_Files_Mutated>;
  readonly home_page_mutated: Maybe<Home_Page_Mutated>;
  readonly servicesBlock_mutated: Maybe<ServicesBlock_Mutated>;
  readonly servicesClinic_mutated: Maybe<ServicesClinic_Mutated>;
  readonly servicesClinic_servicesBlock_mutated: Maybe<ServicesClinic_ServicesBlock_Mutated>;
  readonly services_mutated: Maybe<Services_Mutated>;
};


export type SubscriptionDirectus_Files_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionHome_Page_Files_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionHome_Page_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionServicesBlock_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionServicesClinic_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionServicesClinic_ServicesBlock_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionServices_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};

export type Big_Int_Filter_Operators = {
  readonly _between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  readonly _eq: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _gt: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _gte: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  readonly _lt: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _lte: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _nbetween: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  readonly _neq: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type Count_Function_Filter_Operators = {
  readonly count: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  readonly __typename?: 'count_functions';
  readonly count: Maybe<Scalars['Int']['output']>;
};

export type Date_Filter_Operators = {
  readonly _between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _eq: InputMaybe<Scalars['String']['input']>;
  readonly _gt: InputMaybe<Scalars['String']['input']>;
  readonly _gte: InputMaybe<Scalars['String']['input']>;
  readonly _in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly _lt: InputMaybe<Scalars['String']['input']>;
  readonly _lte: InputMaybe<Scalars['String']['input']>;
  readonly _nbetween: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _neq: InputMaybe<Scalars['String']['input']>;
  readonly _nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type Datetime_Function_Filter_Operators = {
  readonly day: InputMaybe<Number_Filter_Operators>;
  readonly hour: InputMaybe<Number_Filter_Operators>;
  readonly minute: InputMaybe<Number_Filter_Operators>;
  readonly month: InputMaybe<Number_Filter_Operators>;
  readonly second: InputMaybe<Number_Filter_Operators>;
  readonly week: InputMaybe<Number_Filter_Operators>;
  readonly weekday: InputMaybe<Number_Filter_Operators>;
  readonly year: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  readonly __typename?: 'datetime_functions';
  readonly day: Maybe<Scalars['Int']['output']>;
  readonly hour: Maybe<Scalars['Int']['output']>;
  readonly minute: Maybe<Scalars['Int']['output']>;
  readonly month: Maybe<Scalars['Int']['output']>;
  readonly second: Maybe<Scalars['Int']['output']>;
  readonly week: Maybe<Scalars['Int']['output']>;
  readonly weekday: Maybe<Scalars['Int']['output']>;
  readonly year: Maybe<Scalars['Int']['output']>;
};

export type Directus_Files = {
  readonly __typename?: 'directus_files';
  readonly charset: Maybe<Scalars['String']['output']>;
  readonly created_on: Maybe<Scalars['Date']['output']>;
  readonly created_on_func: Maybe<Datetime_Functions>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly duration: Maybe<Scalars['Int']['output']>;
  readonly embed: Maybe<Scalars['String']['output']>;
  readonly filename_disk: Maybe<Scalars['String']['output']>;
  readonly filename_download: Scalars['String']['output'];
  readonly filesize: Maybe<Scalars['GraphQLBigInt']['output']>;
  readonly focal_point_x: Maybe<Scalars['Int']['output']>;
  readonly focal_point_y: Maybe<Scalars['Int']['output']>;
  readonly folder: Maybe<Scalars['String']['output']>;
  readonly height: Maybe<Scalars['Int']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly location: Maybe<Scalars['String']['output']>;
  readonly metadata: Maybe<Scalars['JSON']['output']>;
  readonly metadata_func: Maybe<Count_Functions>;
  readonly modified_by: Maybe<Scalars['String']['output']>;
  readonly modified_on: Maybe<Scalars['Date']['output']>;
  readonly modified_on_func: Maybe<Datetime_Functions>;
  readonly storage: Scalars['String']['output'];
  readonly tags: Maybe<Scalars['JSON']['output']>;
  readonly tags_func: Maybe<Count_Functions>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly tus_data: Maybe<Scalars['JSON']['output']>;
  readonly tus_data_func: Maybe<Count_Functions>;
  readonly tus_id: Maybe<Scalars['String']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
  readonly uploaded_by: Maybe<Scalars['String']['output']>;
  readonly uploaded_on: Maybe<Scalars['Date']['output']>;
  readonly uploaded_on_func: Maybe<Datetime_Functions>;
  readonly width: Maybe<Scalars['Int']['output']>;
};

export type Directus_Files_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Directus_Files_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Directus_Files_Filter>>>;
  readonly charset: InputMaybe<String_Filter_Operators>;
  readonly created_on: InputMaybe<Date_Filter_Operators>;
  readonly created_on_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly duration: InputMaybe<Number_Filter_Operators>;
  readonly embed: InputMaybe<String_Filter_Operators>;
  readonly filename_disk: InputMaybe<String_Filter_Operators>;
  readonly filename_download: InputMaybe<String_Filter_Operators>;
  readonly filesize: InputMaybe<Big_Int_Filter_Operators>;
  readonly focal_point_x: InputMaybe<Number_Filter_Operators>;
  readonly focal_point_y: InputMaybe<Number_Filter_Operators>;
  readonly folder: InputMaybe<String_Filter_Operators>;
  readonly height: InputMaybe<Number_Filter_Operators>;
  readonly id: InputMaybe<String_Filter_Operators>;
  readonly location: InputMaybe<String_Filter_Operators>;
  readonly metadata: InputMaybe<String_Filter_Operators>;
  readonly metadata_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly modified_by: InputMaybe<String_Filter_Operators>;
  readonly modified_on: InputMaybe<Date_Filter_Operators>;
  readonly modified_on_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly storage: InputMaybe<String_Filter_Operators>;
  readonly tags: InputMaybe<String_Filter_Operators>;
  readonly tags_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
  readonly tus_data: InputMaybe<String_Filter_Operators>;
  readonly tus_data_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly tus_id: InputMaybe<String_Filter_Operators>;
  readonly type: InputMaybe<String_Filter_Operators>;
  readonly uploaded_by: InputMaybe<String_Filter_Operators>;
  readonly uploaded_on: InputMaybe<Date_Filter_Operators>;
  readonly uploaded_on_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly width: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Files_Mutated = {
  readonly __typename?: 'directus_files_mutated';
  readonly data: Maybe<Directus_Files>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Home_Page = {
  readonly __typename?: 'home_page';
  readonly id: Scalars['ID']['output'];
  readonly infoBaner: Maybe<Directus_Files>;
  readonly mainBaner: Maybe<Directus_Files>;
  readonly sliderClinik: Maybe<ReadonlyArray<Maybe<Home_Page_Files>>>;
  readonly sliderClinik_func: Maybe<Count_Functions>;
};


export type Home_PageInfoBanerArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Home_PageMainBanerArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Home_PageSliderClinikArgs = {
  filter: InputMaybe<Home_Page_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Home_Page_Files = {
  readonly __typename?: 'home_page_files';
  readonly directus_files_id: Maybe<Directus_Files>;
  readonly home_page_id: Maybe<Home_Page>;
  readonly id: Scalars['ID']['output'];
};


export type Home_Page_FilesDirectus_Files_IdArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Home_Page_FilesHome_Page_IdArgs = {
  filter: InputMaybe<Home_Page_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Home_Page_Files_Aggregated = {
  readonly __typename?: 'home_page_files_aggregated';
  readonly avg: Maybe<Home_Page_Files_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Home_Page_Files_Aggregated_Fields>;
  readonly count: Maybe<Home_Page_Files_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Home_Page_Files_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Home_Page_Files_Aggregated_Fields>;
  readonly min: Maybe<Home_Page_Files_Aggregated_Fields>;
  readonly sum: Maybe<Home_Page_Files_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Home_Page_Files_Aggregated_Fields>;
};

export type Home_Page_Files_Aggregated_Count = {
  readonly __typename?: 'home_page_files_aggregated_count';
  readonly directus_files_id: Maybe<Scalars['Int']['output']>;
  readonly home_page_id: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
};

export type Home_Page_Files_Aggregated_Fields = {
  readonly __typename?: 'home_page_files_aggregated_fields';
  readonly home_page_id: Maybe<Scalars['Float']['output']>;
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type Home_Page_Files_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Home_Page_Files_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Home_Page_Files_Filter>>>;
  readonly directus_files_id: InputMaybe<Directus_Files_Filter>;
  readonly home_page_id: InputMaybe<Home_Page_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
};

export type Home_Page_Files_Mutated = {
  readonly __typename?: 'home_page_files_mutated';
  readonly data: Maybe<Home_Page_Files>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Home_Page_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Home_Page_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Home_Page_Filter>>>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly infoBaner: InputMaybe<Directus_Files_Filter>;
  readonly mainBaner: InputMaybe<Directus_Files_Filter>;
  readonly sliderClinik: InputMaybe<Home_Page_Files_Filter>;
  readonly sliderClinik_func: InputMaybe<Count_Function_Filter_Operators>;
};

export type Home_Page_Mutated = {
  readonly __typename?: 'home_page_mutated';
  readonly data: Maybe<Home_Page>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Number_Filter_Operators = {
  readonly _between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _eq: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _gt: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _gte: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _lt: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _lte: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _nbetween: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _neq: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type Services = {
  readonly __typename?: 'services';
  readonly blockId: Maybe<ServicesBlock>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly price: Maybe<Scalars['Int']['output']>;
  readonly sale: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};


export type ServicesBlockIdArgs = {
  filter: InputMaybe<ServicesBlock_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ServicesBlock = {
  readonly __typename?: 'servicesBlock';
  readonly allServices: Maybe<ReadonlyArray<Maybe<Services>>>;
  readonly allServices_func: Maybe<Count_Functions>;
  readonly id: Scalars['ID']['output'];
  readonly img: Maybe<Directus_Files>;
  readonly title: Maybe<Scalars['String']['output']>;
};


export type ServicesBlockAllServicesArgs = {
  filter: InputMaybe<Services_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type ServicesBlockImgArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ServicesBlock_Aggregated = {
  readonly __typename?: 'servicesBlock_aggregated';
  readonly avg: Maybe<ServicesBlock_Aggregated_Fields>;
  readonly avgDistinct: Maybe<ServicesBlock_Aggregated_Fields>;
  readonly count: Maybe<ServicesBlock_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<ServicesBlock_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<ServicesBlock_Aggregated_Fields>;
  readonly min: Maybe<ServicesBlock_Aggregated_Fields>;
  readonly sum: Maybe<ServicesBlock_Aggregated_Fields>;
  readonly sumDistinct: Maybe<ServicesBlock_Aggregated_Fields>;
};

export type ServicesBlock_Aggregated_Count = {
  readonly __typename?: 'servicesBlock_aggregated_count';
  readonly allServices: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly img: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['Int']['output']>;
};

export type ServicesBlock_Aggregated_Fields = {
  readonly __typename?: 'servicesBlock_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type ServicesBlock_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<ServicesBlock_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<ServicesBlock_Filter>>>;
  readonly allServices: InputMaybe<Services_Filter>;
  readonly allServices_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly img: InputMaybe<Directus_Files_Filter>;
  readonly title: InputMaybe<String_Filter_Operators>;
};

export type ServicesBlock_Mutated = {
  readonly __typename?: 'servicesBlock_mutated';
  readonly data: Maybe<ServicesBlock>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type ServicesClinic = {
  readonly __typename?: 'servicesClinic';
  readonly id: Scalars['ID']['output'];
  readonly servicesClinic: Maybe<ReadonlyArray<Maybe<ServicesClinic_ServicesBlock>>>;
  readonly servicesClinic_func: Maybe<Count_Functions>;
};


export type ServicesClinicServicesClinicArgs = {
  filter: InputMaybe<ServicesClinic_ServicesBlock_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ServicesClinic_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<ServicesClinic_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<ServicesClinic_Filter>>>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly servicesClinic: InputMaybe<ServicesClinic_ServicesBlock_Filter>;
  readonly servicesClinic_func: InputMaybe<Count_Function_Filter_Operators>;
};

export type ServicesClinic_Mutated = {
  readonly __typename?: 'servicesClinic_mutated';
  readonly data: Maybe<ServicesClinic>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type ServicesClinic_ServicesBlock = {
  readonly __typename?: 'servicesClinic_servicesBlock';
  readonly id: Scalars['ID']['output'];
  readonly servicesBlock_id: Maybe<ServicesBlock>;
  readonly servicesClinic_id: Maybe<ServicesClinic>;
};


export type ServicesClinic_ServicesBlockServicesBlock_IdArgs = {
  filter: InputMaybe<ServicesBlock_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type ServicesClinic_ServicesBlockServicesClinic_IdArgs = {
  filter: InputMaybe<ServicesClinic_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ServicesClinic_ServicesBlock_Aggregated = {
  readonly __typename?: 'servicesClinic_servicesBlock_aggregated';
  readonly avg: Maybe<ServicesClinic_ServicesBlock_Aggregated_Fields>;
  readonly avgDistinct: Maybe<ServicesClinic_ServicesBlock_Aggregated_Fields>;
  readonly count: Maybe<ServicesClinic_ServicesBlock_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<ServicesClinic_ServicesBlock_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<ServicesClinic_ServicesBlock_Aggregated_Fields>;
  readonly min: Maybe<ServicesClinic_ServicesBlock_Aggregated_Fields>;
  readonly sum: Maybe<ServicesClinic_ServicesBlock_Aggregated_Fields>;
  readonly sumDistinct: Maybe<ServicesClinic_ServicesBlock_Aggregated_Fields>;
};

export type ServicesClinic_ServicesBlock_Aggregated_Count = {
  readonly __typename?: 'servicesClinic_servicesBlock_aggregated_count';
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly servicesBlock_id: Maybe<Scalars['Int']['output']>;
  readonly servicesClinic_id: Maybe<Scalars['Int']['output']>;
};

export type ServicesClinic_ServicesBlock_Aggregated_Fields = {
  readonly __typename?: 'servicesClinic_servicesBlock_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
  readonly servicesBlock_id: Maybe<Scalars['Float']['output']>;
  readonly servicesClinic_id: Maybe<Scalars['Float']['output']>;
};

export type ServicesClinic_ServicesBlock_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<ServicesClinic_ServicesBlock_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<ServicesClinic_ServicesBlock_Filter>>>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly servicesBlock_id: InputMaybe<ServicesBlock_Filter>;
  readonly servicesClinic_id: InputMaybe<ServicesClinic_Filter>;
};

export type ServicesClinic_ServicesBlock_Mutated = {
  readonly __typename?: 'servicesClinic_servicesBlock_mutated';
  readonly data: Maybe<ServicesClinic_ServicesBlock>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Services_Aggregated = {
  readonly __typename?: 'services_aggregated';
  readonly avg: Maybe<Services_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Services_Aggregated_Fields>;
  readonly count: Maybe<Services_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Services_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Services_Aggregated_Fields>;
  readonly min: Maybe<Services_Aggregated_Fields>;
  readonly sum: Maybe<Services_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Services_Aggregated_Fields>;
};

export type Services_Aggregated_Count = {
  readonly __typename?: 'services_aggregated_count';
  readonly blockId: Maybe<Scalars['Int']['output']>;
  readonly description: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly price: Maybe<Scalars['Int']['output']>;
  readonly sale: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['Int']['output']>;
};

export type Services_Aggregated_Fields = {
  readonly __typename?: 'services_aggregated_fields';
  readonly blockId: Maybe<Scalars['Float']['output']>;
  readonly id: Maybe<Scalars['Float']['output']>;
  readonly price: Maybe<Scalars['Float']['output']>;
  readonly sale: Maybe<Scalars['Float']['output']>;
};

export type Services_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Services_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Services_Filter>>>;
  readonly blockId: InputMaybe<ServicesBlock_Filter>;
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly price: InputMaybe<Number_Filter_Operators>;
  readonly sale: InputMaybe<Number_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
};

export type Services_Mutated = {
  readonly __typename?: 'services_mutated';
  readonly data: Maybe<Services>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type String_Filter_Operators = {
  readonly _contains: InputMaybe<Scalars['String']['input']>;
  readonly _empty: InputMaybe<Scalars['Boolean']['input']>;
  readonly _ends_with: InputMaybe<Scalars['String']['input']>;
  readonly _eq: InputMaybe<Scalars['String']['input']>;
  readonly _icontains: InputMaybe<Scalars['String']['input']>;
  readonly _iends_with: InputMaybe<Scalars['String']['input']>;
  readonly _in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly _istarts_with: InputMaybe<Scalars['String']['input']>;
  readonly _ncontains: InputMaybe<Scalars['String']['input']>;
  readonly _nempty: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nends_with: InputMaybe<Scalars['String']['input']>;
  readonly _neq: InputMaybe<Scalars['String']['input']>;
  readonly _niends_with: InputMaybe<Scalars['String']['input']>;
  readonly _nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly _nistarts_with: InputMaybe<Scalars['String']['input']>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nstarts_with: InputMaybe<Scalars['String']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
  readonly _starts_with: InputMaybe<Scalars['String']['input']>;
};

export type Version_Home_Page = {
  readonly __typename?: 'version_home_page';
  readonly id: Scalars['ID']['output'];
  readonly infoBaner: Maybe<Scalars['JSON']['output']>;
  readonly mainBaner: Maybe<Scalars['JSON']['output']>;
  readonly sliderClinik: Maybe<Scalars['JSON']['output']>;
  readonly sliderClinik_func: Maybe<Count_Functions>;
};

export type Version_Home_Page_Files = {
  readonly __typename?: 'version_home_page_files';
  readonly directus_files_id: Maybe<Scalars['JSON']['output']>;
  readonly home_page_id: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
};

export type Version_Services = {
  readonly __typename?: 'version_services';
  readonly blockId: Maybe<Scalars['JSON']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly price: Maybe<Scalars['Int']['output']>;
  readonly sale: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Version_ServicesBlock = {
  readonly __typename?: 'version_servicesBlock';
  readonly allServices: Maybe<Scalars['JSON']['output']>;
  readonly allServices_func: Maybe<Count_Functions>;
  readonly id: Scalars['ID']['output'];
  readonly img: Maybe<Scalars['JSON']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Version_ServicesClinic = {
  readonly __typename?: 'version_servicesClinic';
  readonly id: Scalars['ID']['output'];
  readonly servicesClinic: Maybe<Scalars['JSON']['output']>;
  readonly servicesClinic_func: Maybe<Count_Functions>;
};

export type Version_ServicesClinic_ServicesBlock = {
  readonly __typename?: 'version_servicesClinic_servicesBlock';
  readonly id: Scalars['ID']['output'];
  readonly servicesBlock_id: Maybe<Scalars['JSON']['output']>;
  readonly servicesClinic_id: Maybe<Scalars['JSON']['output']>;
};

export type MediaFragmentFragment = { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly height: number };

export type ServiceFragmentFragment = { readonly __typename?: 'services', readonly id: string, readonly title: string, readonly price: number, readonly description: string, readonly sale: number };

export type GetAllServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllServicesQuery = { readonly __typename?: 'Query', readonly services: ReadonlyArray<{ readonly __typename?: 'services', readonly id: string, readonly title: string, readonly price: number, readonly description: string, readonly sale: number }> };

export type GetServiceClinicQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServiceClinicQuery = { readonly __typename?: 'Query', readonly servicesClinic: { readonly __typename?: 'servicesClinic', readonly servicesClinic: ReadonlyArray<{ readonly __typename?: 'servicesClinic_servicesBlock', readonly servicesBlock_id: { readonly __typename?: 'servicesBlock', readonly title: string, readonly img: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly height: number }, readonly allServices: ReadonlyArray<{ readonly __typename?: 'services', readonly id: string, readonly title: string, readonly price: number, readonly description: string, readonly sale: number }> } }> } };

export type GetServiceBlockQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServiceBlockQuery = { readonly __typename?: 'Query', readonly servicesBlock: ReadonlyArray<{ readonly __typename?: 'servicesBlock', readonly id: string, readonly title: string, readonly img: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly height: number }, readonly allServices: ReadonlyArray<{ readonly __typename?: 'services', readonly id: string, readonly title: string, readonly price: number, readonly description: string, readonly sale: number }> }> };

export const MediaFragmentFragmentDoc = gql`
    fragment MediaFragment on directus_files {
  id
  title
  width
  height
}
    `;
export const ServiceFragmentFragmentDoc = gql`
    fragment ServiceFragment on services {
  id
  title
  price
  description
  sale
}
    `;
export const GetAllServicesDocument = gql`
    query GetAllServices {
  services {
    id
    title
    price
    description
    sale
  }
}
    `;
export const GetServiceClinicDocument = gql`
    query GetServiceClinic {
  servicesClinic {
    servicesClinic {
      servicesBlock_id {
        title
        img {
          ...MediaFragment
        }
        allServices {
          ...ServiceFragment
        }
      }
    }
  }
}
    ${MediaFragmentFragmentDoc}
${ServiceFragmentFragmentDoc}`;
export const GetServiceBlockDocument = gql`
    query GetServiceBlock {
  servicesBlock {
    id
    title
    img {
      ...MediaFragment
    }
    allServices {
      ...ServiceFragment
    }
  }
}
    ${MediaFragmentFragmentDoc}
${ServiceFragmentFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetAllServices(variables?: GetAllServicesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllServicesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllServicesQuery>(GetAllServicesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllServices', 'query', variables);
    },
    GetServiceClinic(variables?: GetServiceClinicQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetServiceClinicQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetServiceClinicQuery>(GetServiceClinicDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetServiceClinic', 'query', variables);
    },
    GetServiceBlock(variables?: GetServiceBlockQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetServiceBlockQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetServiceBlockQuery>(GetServiceBlockDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetServiceBlock', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;