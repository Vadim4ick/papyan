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
  readonly about_page: Maybe<About_Page>;
  readonly about_page_by_version: Maybe<Version_About_Page>;
  readonly about_page_files: ReadonlyArray<About_Page_Files>;
  readonly about_page_files_aggregated: ReadonlyArray<About_Page_Files_Aggregated>;
  readonly about_page_files_by_id: Maybe<About_Page_Files>;
  readonly about_page_files_by_version: Maybe<Version_About_Page_Files>;
  readonly ceny_page: Maybe<Ceny_Page>;
  readonly ceny_page_by_version: Maybe<Version_Ceny_Page>;
  readonly ceny_page_servicesBlock_1: ReadonlyArray<Ceny_Page_ServicesBlock_1>;
  readonly ceny_page_servicesBlock_1_aggregated: ReadonlyArray<Ceny_Page_ServicesBlock_1_Aggregated>;
  readonly ceny_page_servicesBlock_1_by_id: Maybe<Ceny_Page_ServicesBlock_1>;
  readonly ceny_page_servicesBlock_1_by_version: Maybe<Version_Ceny_Page_ServicesBlock_1>;
  readonly doctors: ReadonlyArray<Doctors>;
  readonly doctors_aggregated: ReadonlyArray<Doctors_Aggregated>;
  readonly doctors_by_id: Maybe<Doctors>;
  readonly doctors_by_version: Maybe<Version_Doctors>;
  readonly doctors_files: ReadonlyArray<Doctors_Files>;
  readonly doctors_files_aggregated: ReadonlyArray<Doctors_Files_Aggregated>;
  readonly doctors_files_by_id: Maybe<Doctors_Files>;
  readonly doctors_files_by_version: Maybe<Version_Doctors_Files>;
  readonly doctors_services: ReadonlyArray<Doctors_Services>;
  readonly doctors_services_aggregated: ReadonlyArray<Doctors_Services_Aggregated>;
  readonly doctors_services_by_id: Maybe<Doctors_Services>;
  readonly doctors_services_by_version: Maybe<Version_Doctors_Services>;
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
  readonly servicesClinic_servicesBlock_1: ReadonlyArray<ServicesClinic_ServicesBlock_1>;
  readonly servicesClinic_servicesBlock_1_aggregated: ReadonlyArray<ServicesClinic_ServicesBlock_1_Aggregated>;
  readonly servicesClinic_servicesBlock_1_by_id: Maybe<ServicesClinic_ServicesBlock_1>;
  readonly servicesClinic_servicesBlock_1_by_version: Maybe<Version_ServicesClinic_ServicesBlock_1>;
  readonly servicesClinic_servicesBlock_aggregated: ReadonlyArray<ServicesClinic_ServicesBlock_Aggregated>;
  readonly servicesClinic_servicesBlock_by_id: Maybe<ServicesClinic_ServicesBlock>;
  readonly servicesClinic_servicesBlock_by_version: Maybe<Version_ServicesClinic_ServicesBlock>;
  readonly services_aggregated: ReadonlyArray<Services_Aggregated>;
  readonly services_by_id: Maybe<Services>;
  readonly services_by_version: Maybe<Version_Services>;
  readonly services_page: Maybe<Services_Page>;
  readonly services_page_by_version: Maybe<Version_Services_Page>;
  readonly stock_page: Maybe<Stock_Page>;
  readonly stock_page_by_version: Maybe<Version_Stock_Page>;
  readonly stock_page_services: ReadonlyArray<Stock_Page_Services>;
  readonly stock_page_services_aggregated: ReadonlyArray<Stock_Page_Services_Aggregated>;
  readonly stock_page_services_by_id: Maybe<Stock_Page_Services>;
  readonly stock_page_services_by_version: Maybe<Version_Stock_Page_Services>;
};


export type QueryAbout_PageArgs = {
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryAbout_Page_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryAbout_Page_FilesArgs = {
  filter: InputMaybe<About_Page_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAbout_Page_Files_AggregatedArgs = {
  filter: InputMaybe<About_Page_Files_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAbout_Page_Files_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryAbout_Page_Files_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryCeny_PageArgs = {
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryCeny_Page_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryCeny_Page_ServicesBlock_1Args = {
  filter: InputMaybe<Ceny_Page_ServicesBlock_1_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCeny_Page_ServicesBlock_1_AggregatedArgs = {
  filter: InputMaybe<Ceny_Page_ServicesBlock_1_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCeny_Page_ServicesBlock_1_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryCeny_Page_ServicesBlock_1_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryDoctorsArgs = {
  filter: InputMaybe<Doctors_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDoctors_AggregatedArgs = {
  filter: InputMaybe<Doctors_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDoctors_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryDoctors_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryDoctors_FilesArgs = {
  filter: InputMaybe<Doctors_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDoctors_Files_AggregatedArgs = {
  filter: InputMaybe<Doctors_Files_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDoctors_Files_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryDoctors_Files_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryDoctors_ServicesArgs = {
  filter: InputMaybe<Doctors_Services_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDoctors_Services_AggregatedArgs = {
  filter: InputMaybe<Doctors_Services_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDoctors_Services_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryDoctors_Services_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
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


export type QueryServicesClinic_ServicesBlock_1Args = {
  filter: InputMaybe<ServicesClinic_ServicesBlock_1_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryServicesClinic_ServicesBlock_1_AggregatedArgs = {
  filter: InputMaybe<ServicesClinic_ServicesBlock_1_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryServicesClinic_ServicesBlock_1_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryServicesClinic_ServicesBlock_1_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
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


export type QueryServices_PageArgs = {
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryServices_Page_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryStock_PageArgs = {
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryStock_Page_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryStock_Page_ServicesArgs = {
  filter: InputMaybe<Stock_Page_Services_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryStock_Page_Services_AggregatedArgs = {
  filter: InputMaybe<Stock_Page_Services_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryStock_Page_Services_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryStock_Page_Services_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};

export type Subscription = {
  readonly __typename?: 'Subscription';
  readonly about_page_files_mutated: Maybe<About_Page_Files_Mutated>;
  readonly about_page_mutated: Maybe<About_Page_Mutated>;
  readonly ceny_page_mutated: Maybe<Ceny_Page_Mutated>;
  readonly ceny_page_servicesBlock_1_mutated: Maybe<Ceny_Page_ServicesBlock_1_Mutated>;
  readonly directus_files_mutated: Maybe<Directus_Files_Mutated>;
  readonly doctors_files_mutated: Maybe<Doctors_Files_Mutated>;
  readonly doctors_mutated: Maybe<Doctors_Mutated>;
  readonly doctors_services_mutated: Maybe<Doctors_Services_Mutated>;
  readonly home_page_files_mutated: Maybe<Home_Page_Files_Mutated>;
  readonly home_page_mutated: Maybe<Home_Page_Mutated>;
  readonly servicesBlock_mutated: Maybe<ServicesBlock_Mutated>;
  readonly servicesClinic_mutated: Maybe<ServicesClinic_Mutated>;
  readonly servicesClinic_servicesBlock_1_mutated: Maybe<ServicesClinic_ServicesBlock_1_Mutated>;
  readonly servicesClinic_servicesBlock_mutated: Maybe<ServicesClinic_ServicesBlock_Mutated>;
  readonly services_mutated: Maybe<Services_Mutated>;
  readonly services_page_mutated: Maybe<Services_Page_Mutated>;
  readonly stock_page_mutated: Maybe<Stock_Page_Mutated>;
  readonly stock_page_services_mutated: Maybe<Stock_Page_Services_Mutated>;
};


export type SubscriptionAbout_Page_Files_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionAbout_Page_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionCeny_Page_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionCeny_Page_ServicesBlock_1_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Files_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDoctors_Files_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDoctors_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDoctors_Services_MutatedArgs = {
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


export type SubscriptionServicesClinic_ServicesBlock_1_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionServicesClinic_ServicesBlock_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionServices_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionServices_Page_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionStock_Page_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionStock_Page_Services_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};

export type About_Page = {
  readonly __typename?: 'about_page';
  readonly adress: Maybe<Scalars['String']['output']>;
  readonly baner: Maybe<Directus_Files>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly phone: Maybe<Scalars['GraphQLBigInt']['output']>;
  readonly slider: Maybe<ReadonlyArray<Maybe<About_Page_Files>>>;
  readonly slider_func: Maybe<Count_Functions>;
  readonly time: Maybe<Scalars['String']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};


export type About_PageBanerArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type About_PageSliderArgs = {
  filter: InputMaybe<About_Page_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Page_Files = {
  readonly __typename?: 'about_page_files';
  readonly about_page_id: Maybe<About_Page>;
  readonly directus_files_id: Maybe<Directus_Files>;
  readonly id: Scalars['ID']['output'];
};


export type About_Page_FilesAbout_Page_IdArgs = {
  filter: InputMaybe<About_Page_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type About_Page_FilesDirectus_Files_IdArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Page_Files_Aggregated = {
  readonly __typename?: 'about_page_files_aggregated';
  readonly avg: Maybe<About_Page_Files_Aggregated_Fields>;
  readonly avgDistinct: Maybe<About_Page_Files_Aggregated_Fields>;
  readonly count: Maybe<About_Page_Files_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<About_Page_Files_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<About_Page_Files_Aggregated_Fields>;
  readonly min: Maybe<About_Page_Files_Aggregated_Fields>;
  readonly sum: Maybe<About_Page_Files_Aggregated_Fields>;
  readonly sumDistinct: Maybe<About_Page_Files_Aggregated_Fields>;
};

export type About_Page_Files_Aggregated_Count = {
  readonly __typename?: 'about_page_files_aggregated_count';
  readonly about_page_id: Maybe<Scalars['Int']['output']>;
  readonly directus_files_id: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
};

export type About_Page_Files_Aggregated_Fields = {
  readonly __typename?: 'about_page_files_aggregated_fields';
  readonly about_page_id: Maybe<Scalars['Float']['output']>;
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type About_Page_Files_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<About_Page_Files_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<About_Page_Files_Filter>>>;
  readonly about_page_id: InputMaybe<About_Page_Filter>;
  readonly directus_files_id: InputMaybe<Directus_Files_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
};

export type About_Page_Files_Mutated = {
  readonly __typename?: 'about_page_files_mutated';
  readonly data: Maybe<About_Page_Files>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type About_Page_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<About_Page_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<About_Page_Filter>>>;
  readonly adress: InputMaybe<String_Filter_Operators>;
  readonly baner: InputMaybe<Directus_Files_Filter>;
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly phone: InputMaybe<Big_Int_Filter_Operators>;
  readonly slider: InputMaybe<About_Page_Files_Filter>;
  readonly slider_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly time: InputMaybe<String_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
};

export type About_Page_Mutated = {
  readonly __typename?: 'about_page_mutated';
  readonly data: Maybe<About_Page>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
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

export type Ceny_Page = {
  readonly __typename?: 'ceny_page';
  readonly banner: Maybe<Directus_Files>;
  readonly blocks: Maybe<ReadonlyArray<Maybe<Ceny_Page_ServicesBlock_1>>>;
  readonly blocks_func: Maybe<Count_Functions>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly title: Maybe<Scalars['String']['output']>;
};


export type Ceny_PageBannerArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Ceny_PageBlocksArgs = {
  filter: InputMaybe<Ceny_Page_ServicesBlock_1_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Ceny_Page_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Ceny_Page_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Ceny_Page_Filter>>>;
  readonly banner: InputMaybe<Directus_Files_Filter>;
  readonly blocks: InputMaybe<Ceny_Page_ServicesBlock_1_Filter>;
  readonly blocks_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
};

export type Ceny_Page_Mutated = {
  readonly __typename?: 'ceny_page_mutated';
  readonly data: Maybe<Ceny_Page>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Ceny_Page_ServicesBlock_1 = {
  readonly __typename?: 'ceny_page_servicesBlock_1';
  readonly ceny_page_id: Maybe<Ceny_Page>;
  readonly id: Scalars['ID']['output'];
  readonly servicesBlock_id: Maybe<ServicesBlock>;
};


export type Ceny_Page_ServicesBlock_1Ceny_Page_IdArgs = {
  filter: InputMaybe<Ceny_Page_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Ceny_Page_ServicesBlock_1ServicesBlock_IdArgs = {
  filter: InputMaybe<ServicesBlock_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Ceny_Page_ServicesBlock_1_Aggregated = {
  readonly __typename?: 'ceny_page_servicesBlock_1_aggregated';
  readonly avg: Maybe<Ceny_Page_ServicesBlock_1_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Ceny_Page_ServicesBlock_1_Aggregated_Fields>;
  readonly count: Maybe<Ceny_Page_ServicesBlock_1_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Ceny_Page_ServicesBlock_1_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Ceny_Page_ServicesBlock_1_Aggregated_Fields>;
  readonly min: Maybe<Ceny_Page_ServicesBlock_1_Aggregated_Fields>;
  readonly sum: Maybe<Ceny_Page_ServicesBlock_1_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Ceny_Page_ServicesBlock_1_Aggregated_Fields>;
};

export type Ceny_Page_ServicesBlock_1_Aggregated_Count = {
  readonly __typename?: 'ceny_page_servicesBlock_1_aggregated_count';
  readonly ceny_page_id: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly servicesBlock_id: Maybe<Scalars['Int']['output']>;
};

export type Ceny_Page_ServicesBlock_1_Aggregated_Fields = {
  readonly __typename?: 'ceny_page_servicesBlock_1_aggregated_fields';
  readonly ceny_page_id: Maybe<Scalars['Float']['output']>;
  readonly id: Maybe<Scalars['Float']['output']>;
  readonly servicesBlock_id: Maybe<Scalars['Float']['output']>;
};

export type Ceny_Page_ServicesBlock_1_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Ceny_Page_ServicesBlock_1_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Ceny_Page_ServicesBlock_1_Filter>>>;
  readonly ceny_page_id: InputMaybe<Ceny_Page_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly servicesBlock_id: InputMaybe<ServicesBlock_Filter>;
};

export type Ceny_Page_ServicesBlock_1_Mutated = {
  readonly __typename?: 'ceny_page_servicesBlock_1_mutated';
  readonly data: Maybe<Ceny_Page_ServicesBlock_1>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
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

export type Doctors = {
  readonly __typename?: 'doctors';
  readonly description: Maybe<Scalars['String']['output']>;
  readonly education: Maybe<Scalars['String']['output']>;
  readonly experience: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly img: Maybe<Directus_Files>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly post: Maybe<Scalars['String']['output']>;
  readonly sevices: Maybe<ReadonlyArray<Maybe<Doctors_Services>>>;
  readonly sevices_func: Maybe<Count_Functions>;
  readonly slider: Maybe<ReadonlyArray<Maybe<Doctors_Files>>>;
  readonly slider_func: Maybe<Count_Functions>;
};


export type DoctorsImgArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type DoctorsSevicesArgs = {
  filter: InputMaybe<Doctors_Services_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type DoctorsSliderArgs = {
  filter: InputMaybe<Doctors_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Doctors_Aggregated = {
  readonly __typename?: 'doctors_aggregated';
  readonly avg: Maybe<Doctors_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Doctors_Aggregated_Fields>;
  readonly count: Maybe<Doctors_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Doctors_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Doctors_Aggregated_Fields>;
  readonly min: Maybe<Doctors_Aggregated_Fields>;
  readonly sum: Maybe<Doctors_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Doctors_Aggregated_Fields>;
};

export type Doctors_Aggregated_Count = {
  readonly __typename?: 'doctors_aggregated_count';
  readonly description: Maybe<Scalars['Int']['output']>;
  readonly education: Maybe<Scalars['Int']['output']>;
  readonly experience: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly img: Maybe<Scalars['Int']['output']>;
  readonly name: Maybe<Scalars['Int']['output']>;
  readonly post: Maybe<Scalars['Int']['output']>;
  readonly sevices: Maybe<Scalars['Int']['output']>;
  readonly slider: Maybe<Scalars['Int']['output']>;
};

export type Doctors_Aggregated_Fields = {
  readonly __typename?: 'doctors_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type Doctors_Files = {
  readonly __typename?: 'doctors_files';
  readonly directus_files_id: Maybe<Directus_Files>;
  readonly doctors_id: Maybe<Doctors>;
  readonly id: Scalars['ID']['output'];
};


export type Doctors_FilesDirectus_Files_IdArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Doctors_FilesDoctors_IdArgs = {
  filter: InputMaybe<Doctors_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Doctors_Files_Aggregated = {
  readonly __typename?: 'doctors_files_aggregated';
  readonly avg: Maybe<Doctors_Files_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Doctors_Files_Aggregated_Fields>;
  readonly count: Maybe<Doctors_Files_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Doctors_Files_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Doctors_Files_Aggregated_Fields>;
  readonly min: Maybe<Doctors_Files_Aggregated_Fields>;
  readonly sum: Maybe<Doctors_Files_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Doctors_Files_Aggregated_Fields>;
};

export type Doctors_Files_Aggregated_Count = {
  readonly __typename?: 'doctors_files_aggregated_count';
  readonly directus_files_id: Maybe<Scalars['Int']['output']>;
  readonly doctors_id: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
};

export type Doctors_Files_Aggregated_Fields = {
  readonly __typename?: 'doctors_files_aggregated_fields';
  readonly doctors_id: Maybe<Scalars['Float']['output']>;
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type Doctors_Files_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Doctors_Files_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Doctors_Files_Filter>>>;
  readonly directus_files_id: InputMaybe<Directus_Files_Filter>;
  readonly doctors_id: InputMaybe<Doctors_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
};

export type Doctors_Files_Mutated = {
  readonly __typename?: 'doctors_files_mutated';
  readonly data: Maybe<Doctors_Files>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Doctors_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Doctors_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Doctors_Filter>>>;
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly education: InputMaybe<String_Filter_Operators>;
  readonly experience: InputMaybe<String_Filter_Operators>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly img: InputMaybe<Directus_Files_Filter>;
  readonly name: InputMaybe<String_Filter_Operators>;
  readonly post: InputMaybe<String_Filter_Operators>;
  readonly sevices: InputMaybe<Doctors_Services_Filter>;
  readonly sevices_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly slider: InputMaybe<Doctors_Files_Filter>;
  readonly slider_func: InputMaybe<Count_Function_Filter_Operators>;
};

export type Doctors_Mutated = {
  readonly __typename?: 'doctors_mutated';
  readonly data: Maybe<Doctors>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Doctors_Services = {
  readonly __typename?: 'doctors_services';
  readonly doctors_id: Maybe<Doctors>;
  readonly id: Scalars['ID']['output'];
  readonly services_id: Maybe<Services>;
};


export type Doctors_ServicesDoctors_IdArgs = {
  filter: InputMaybe<Doctors_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Doctors_ServicesServices_IdArgs = {
  filter: InputMaybe<Services_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Doctors_Services_Aggregated = {
  readonly __typename?: 'doctors_services_aggregated';
  readonly avg: Maybe<Doctors_Services_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Doctors_Services_Aggregated_Fields>;
  readonly count: Maybe<Doctors_Services_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Doctors_Services_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Doctors_Services_Aggregated_Fields>;
  readonly min: Maybe<Doctors_Services_Aggregated_Fields>;
  readonly sum: Maybe<Doctors_Services_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Doctors_Services_Aggregated_Fields>;
};

export type Doctors_Services_Aggregated_Count = {
  readonly __typename?: 'doctors_services_aggregated_count';
  readonly doctors_id: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly services_id: Maybe<Scalars['Int']['output']>;
};

export type Doctors_Services_Aggregated_Fields = {
  readonly __typename?: 'doctors_services_aggregated_fields';
  readonly doctors_id: Maybe<Scalars['Float']['output']>;
  readonly id: Maybe<Scalars['Float']['output']>;
  readonly services_id: Maybe<Scalars['Float']['output']>;
};

export type Doctors_Services_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Doctors_Services_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Doctors_Services_Filter>>>;
  readonly doctors_id: InputMaybe<Doctors_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly services_id: InputMaybe<Services_Filter>;
};

export type Doctors_Services_Mutated = {
  readonly __typename?: 'doctors_services_mutated';
  readonly data: Maybe<Doctors_Services>;
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
  readonly baner: Maybe<Directus_Files>;
  readonly blockId: Maybe<ServicesBlock>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly img: Maybe<Directus_Files>;
  readonly info: Maybe<Scalars['String']['output']>;
  readonly price: Maybe<Scalars['Int']['output']>;
  readonly sale: Maybe<Scalars['Int']['output']>;
  readonly sortId: Maybe<Scalars['String']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};


export type ServicesBanerArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type ServicesBlockIdArgs = {
  filter: InputMaybe<ServicesBlock_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type ServicesImgArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
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
  readonly description: Maybe<Scalars['String']['output']>;
  readonly descriptionBlock: Maybe<Scalars['String']['output']>;
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
  readonly description: Maybe<Scalars['Int']['output']>;
  readonly descriptionBlock: Maybe<Scalars['Int']['output']>;
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
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly descriptionBlock: InputMaybe<String_Filter_Operators>;
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
  readonly description: Maybe<Scalars['String']['output']>;
  readonly dopServices: Maybe<ReadonlyArray<Maybe<ServicesClinic_ServicesBlock_1>>>;
  readonly dopServices_func: Maybe<Count_Functions>;
  readonly id: Scalars['ID']['output'];
  readonly servicesClinic: Maybe<ReadonlyArray<Maybe<ServicesClinic_ServicesBlock>>>;
  readonly servicesClinic_func: Maybe<Count_Functions>;
  readonly title: Maybe<Scalars['String']['output']>;
};


export type ServicesClinicDopServicesArgs = {
  filter: InputMaybe<ServicesClinic_ServicesBlock_1_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
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
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly dopServices: InputMaybe<ServicesClinic_ServicesBlock_1_Filter>;
  readonly dopServices_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly servicesClinic: InputMaybe<ServicesClinic_ServicesBlock_Filter>;
  readonly servicesClinic_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
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

export type ServicesClinic_ServicesBlock_1 = {
  readonly __typename?: 'servicesClinic_servicesBlock_1';
  readonly id: Scalars['ID']['output'];
  readonly servicesBlock_id: Maybe<ServicesBlock>;
  readonly servicesClinic_id: Maybe<ServicesClinic>;
};


export type ServicesClinic_ServicesBlock_1ServicesBlock_IdArgs = {
  filter: InputMaybe<ServicesBlock_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type ServicesClinic_ServicesBlock_1ServicesClinic_IdArgs = {
  filter: InputMaybe<ServicesClinic_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ServicesClinic_ServicesBlock_1_Aggregated = {
  readonly __typename?: 'servicesClinic_servicesBlock_1_aggregated';
  readonly avg: Maybe<ServicesClinic_ServicesBlock_1_Aggregated_Fields>;
  readonly avgDistinct: Maybe<ServicesClinic_ServicesBlock_1_Aggregated_Fields>;
  readonly count: Maybe<ServicesClinic_ServicesBlock_1_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<ServicesClinic_ServicesBlock_1_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<ServicesClinic_ServicesBlock_1_Aggregated_Fields>;
  readonly min: Maybe<ServicesClinic_ServicesBlock_1_Aggregated_Fields>;
  readonly sum: Maybe<ServicesClinic_ServicesBlock_1_Aggregated_Fields>;
  readonly sumDistinct: Maybe<ServicesClinic_ServicesBlock_1_Aggregated_Fields>;
};

export type ServicesClinic_ServicesBlock_1_Aggregated_Count = {
  readonly __typename?: 'servicesClinic_servicesBlock_1_aggregated_count';
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly servicesBlock_id: Maybe<Scalars['Int']['output']>;
  readonly servicesClinic_id: Maybe<Scalars['Int']['output']>;
};

export type ServicesClinic_ServicesBlock_1_Aggregated_Fields = {
  readonly __typename?: 'servicesClinic_servicesBlock_1_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
  readonly servicesBlock_id: Maybe<Scalars['Float']['output']>;
  readonly servicesClinic_id: Maybe<Scalars['Float']['output']>;
};

export type ServicesClinic_ServicesBlock_1_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<ServicesClinic_ServicesBlock_1_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<ServicesClinic_ServicesBlock_1_Filter>>>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly servicesBlock_id: InputMaybe<ServicesBlock_Filter>;
  readonly servicesClinic_id: InputMaybe<ServicesClinic_Filter>;
};

export type ServicesClinic_ServicesBlock_1_Mutated = {
  readonly __typename?: 'servicesClinic_servicesBlock_1_mutated';
  readonly data: Maybe<ServicesClinic_ServicesBlock_1>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
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
  readonly baner: Maybe<Scalars['Int']['output']>;
  readonly blockId: Maybe<Scalars['Int']['output']>;
  readonly description: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly img: Maybe<Scalars['Int']['output']>;
  readonly info: Maybe<Scalars['Int']['output']>;
  readonly price: Maybe<Scalars['Int']['output']>;
  readonly sale: Maybe<Scalars['Int']['output']>;
  readonly sortId: Maybe<Scalars['Int']['output']>;
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
  readonly baner: InputMaybe<Directus_Files_Filter>;
  readonly blockId: InputMaybe<ServicesBlock_Filter>;
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly img: InputMaybe<Directus_Files_Filter>;
  readonly info: InputMaybe<String_Filter_Operators>;
  readonly price: InputMaybe<Number_Filter_Operators>;
  readonly sale: InputMaybe<Number_Filter_Operators>;
  readonly sortId: InputMaybe<String_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
};

export type Services_Mutated = {
  readonly __typename?: 'services_mutated';
  readonly data: Maybe<Services>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Services_Page = {
  readonly __typename?: 'services_page';
  readonly baner: Maybe<Directus_Files>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly title: Maybe<Scalars['String']['output']>;
};


export type Services_PageBanerArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Services_Page_Mutated = {
  readonly __typename?: 'services_page_mutated';
  readonly data: Maybe<Services_Page>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Stock_Page = {
  readonly __typename?: 'stock_page';
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly stockItems: Maybe<ReadonlyArray<Maybe<Stock_Page_Services>>>;
  readonly stockItems_func: Maybe<Count_Functions>;
  readonly title: Maybe<Scalars['String']['output']>;
};


export type Stock_PageStockItemsArgs = {
  filter: InputMaybe<Stock_Page_Services_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Stock_Page_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Stock_Page_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Stock_Page_Filter>>>;
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly stockItems: InputMaybe<Stock_Page_Services_Filter>;
  readonly stockItems_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
};

export type Stock_Page_Mutated = {
  readonly __typename?: 'stock_page_mutated';
  readonly data: Maybe<Stock_Page>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Stock_Page_Services = {
  readonly __typename?: 'stock_page_services';
  readonly id: Scalars['ID']['output'];
  readonly services_id: Maybe<Services>;
  readonly sortId: Maybe<Scalars['Int']['output']>;
  readonly stock_page_id: Maybe<Stock_Page>;
};


export type Stock_Page_ServicesServices_IdArgs = {
  filter: InputMaybe<Services_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Stock_Page_ServicesStock_Page_IdArgs = {
  filter: InputMaybe<Stock_Page_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Stock_Page_Services_Aggregated = {
  readonly __typename?: 'stock_page_services_aggregated';
  readonly avg: Maybe<Stock_Page_Services_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Stock_Page_Services_Aggregated_Fields>;
  readonly count: Maybe<Stock_Page_Services_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Stock_Page_Services_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Stock_Page_Services_Aggregated_Fields>;
  readonly min: Maybe<Stock_Page_Services_Aggregated_Fields>;
  readonly sum: Maybe<Stock_Page_Services_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Stock_Page_Services_Aggregated_Fields>;
};

export type Stock_Page_Services_Aggregated_Count = {
  readonly __typename?: 'stock_page_services_aggregated_count';
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly services_id: Maybe<Scalars['Int']['output']>;
  readonly sortId: Maybe<Scalars['Int']['output']>;
  readonly stock_page_id: Maybe<Scalars['Int']['output']>;
};

export type Stock_Page_Services_Aggregated_Fields = {
  readonly __typename?: 'stock_page_services_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
  readonly services_id: Maybe<Scalars['Float']['output']>;
  readonly sortId: Maybe<Scalars['Float']['output']>;
  readonly stock_page_id: Maybe<Scalars['Float']['output']>;
};

export type Stock_Page_Services_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Stock_Page_Services_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Stock_Page_Services_Filter>>>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly services_id: InputMaybe<Services_Filter>;
  readonly sortId: InputMaybe<Number_Filter_Operators>;
  readonly stock_page_id: InputMaybe<Stock_Page_Filter>;
};

export type Stock_Page_Services_Mutated = {
  readonly __typename?: 'stock_page_services_mutated';
  readonly data: Maybe<Stock_Page_Services>;
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

export type Version_About_Page = {
  readonly __typename?: 'version_about_page';
  readonly adress: Maybe<Scalars['String']['output']>;
  readonly baner: Maybe<Scalars['JSON']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly phone: Maybe<Scalars['GraphQLBigInt']['output']>;
  readonly slider: Maybe<Scalars['JSON']['output']>;
  readonly slider_func: Maybe<Count_Functions>;
  readonly time: Maybe<Scalars['String']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Version_About_Page_Files = {
  readonly __typename?: 'version_about_page_files';
  readonly about_page_id: Maybe<Scalars['JSON']['output']>;
  readonly directus_files_id: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
};

export type Version_Ceny_Page = {
  readonly __typename?: 'version_ceny_page';
  readonly banner: Maybe<Scalars['JSON']['output']>;
  readonly blocks: Maybe<Scalars['JSON']['output']>;
  readonly blocks_func: Maybe<Count_Functions>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Version_Ceny_Page_ServicesBlock_1 = {
  readonly __typename?: 'version_ceny_page_servicesBlock_1';
  readonly ceny_page_id: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly servicesBlock_id: Maybe<Scalars['JSON']['output']>;
};

export type Version_Doctors = {
  readonly __typename?: 'version_doctors';
  readonly description: Maybe<Scalars['String']['output']>;
  readonly education: Maybe<Scalars['String']['output']>;
  readonly experience: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly img: Maybe<Scalars['JSON']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly post: Maybe<Scalars['String']['output']>;
  readonly sevices: Maybe<Scalars['JSON']['output']>;
  readonly sevices_func: Maybe<Count_Functions>;
  readonly slider: Maybe<Scalars['JSON']['output']>;
  readonly slider_func: Maybe<Count_Functions>;
};

export type Version_Doctors_Files = {
  readonly __typename?: 'version_doctors_files';
  readonly directus_files_id: Maybe<Scalars['JSON']['output']>;
  readonly doctors_id: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
};

export type Version_Doctors_Services = {
  readonly __typename?: 'version_doctors_services';
  readonly doctors_id: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly services_id: Maybe<Scalars['JSON']['output']>;
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
  readonly baner: Maybe<Scalars['JSON']['output']>;
  readonly blockId: Maybe<Scalars['JSON']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly img: Maybe<Scalars['JSON']['output']>;
  readonly info: Maybe<Scalars['String']['output']>;
  readonly price: Maybe<Scalars['Int']['output']>;
  readonly sale: Maybe<Scalars['Int']['output']>;
  readonly sortId: Maybe<Scalars['String']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Version_ServicesBlock = {
  readonly __typename?: 'version_servicesBlock';
  readonly allServices: Maybe<Scalars['JSON']['output']>;
  readonly allServices_func: Maybe<Count_Functions>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly descriptionBlock: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly img: Maybe<Scalars['JSON']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Version_ServicesClinic = {
  readonly __typename?: 'version_servicesClinic';
  readonly description: Maybe<Scalars['String']['output']>;
  readonly dopServices: Maybe<Scalars['JSON']['output']>;
  readonly dopServices_func: Maybe<Count_Functions>;
  readonly id: Scalars['ID']['output'];
  readonly servicesClinic: Maybe<Scalars['JSON']['output']>;
  readonly servicesClinic_func: Maybe<Count_Functions>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Version_ServicesClinic_ServicesBlock = {
  readonly __typename?: 'version_servicesClinic_servicesBlock';
  readonly id: Scalars['ID']['output'];
  readonly servicesBlock_id: Maybe<Scalars['JSON']['output']>;
  readonly servicesClinic_id: Maybe<Scalars['JSON']['output']>;
};

export type Version_ServicesClinic_ServicesBlock_1 = {
  readonly __typename?: 'version_servicesClinic_servicesBlock_1';
  readonly id: Scalars['ID']['output'];
  readonly servicesBlock_id: Maybe<Scalars['JSON']['output']>;
  readonly servicesClinic_id: Maybe<Scalars['JSON']['output']>;
};

export type Version_Services_Page = {
  readonly __typename?: 'version_services_page';
  readonly baner: Maybe<Scalars['JSON']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Version_Stock_Page = {
  readonly __typename?: 'version_stock_page';
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly stockItems: Maybe<Scalars['JSON']['output']>;
  readonly stockItems_func: Maybe<Count_Functions>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Version_Stock_Page_Services = {
  readonly __typename?: 'version_stock_page_services';
  readonly id: Scalars['ID']['output'];
  readonly services_id: Maybe<Scalars['JSON']['output']>;
  readonly sortId: Maybe<Scalars['Int']['output']>;
  readonly stock_page_id: Maybe<Scalars['JSON']['output']>;
};

export type GetDoctorByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetDoctorByIdQuery = { readonly __typename?: 'Query', readonly doctors_by_id: { readonly __typename?: 'doctors', readonly id: string, readonly post: string, readonly name: string, readonly description: string, readonly education: string, readonly experience: string, readonly sevices: ReadonlyArray<{ readonly __typename?: 'doctors_services', readonly services_id: { readonly __typename?: 'services', readonly id: string, readonly title: string, readonly price: number, readonly description: string, readonly sale: number, readonly baner: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number } } }>, readonly img: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number }, readonly slider: ReadonlyArray<{ readonly __typename?: 'doctors_files', readonly directus_files_id: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number } }> } };

export type GetAllDoctorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDoctorsQuery = { readonly __typename?: 'Query', readonly doctors: ReadonlyArray<{ readonly __typename?: 'doctors', readonly id: string, readonly post: string, readonly name: string, readonly description: string, readonly education: string, readonly experience: string, readonly sevices: ReadonlyArray<{ readonly __typename?: 'doctors_services', readonly services_id: { readonly __typename?: 'services', readonly id: string, readonly title: string, readonly price: number, readonly description: string, readonly sale: number, readonly baner: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number } } }>, readonly img: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number }, readonly slider: ReadonlyArray<{ readonly __typename?: 'doctors_files', readonly directus_files_id: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number } }> }> };

export type DoctorFragmentFragment = { readonly __typename?: 'doctors', readonly id: string, readonly post: string, readonly name: string, readonly description: string, readonly education: string, readonly experience: string, readonly img: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number }, readonly slider: ReadonlyArray<{ readonly __typename?: 'doctors_files', readonly directus_files_id: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number } }> };

export type MediaFragmentFragment = { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number };

export type ServiceByIdFragmentFragment = { readonly __typename?: 'services', readonly info: string, readonly id: string, readonly title: string, readonly price: number, readonly description: string, readonly sale: number, readonly baner: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number } };

export type ServiceFragmentFragment = { readonly __typename?: 'services', readonly id: string, readonly title: string, readonly price: number, readonly description: string, readonly sale: number, readonly baner: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number } };

export type ServiceBlockFragmentFragment = { readonly __typename?: 'servicesBlock', readonly id: string, readonly title: string, readonly img: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number }, readonly allServices: ReadonlyArray<{ readonly __typename?: 'services', readonly id: string, readonly title: string, readonly price: number, readonly description: string, readonly sale: number, readonly baner: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number } }> };

export type GetAboutPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAboutPageQuery = { readonly __typename?: 'Query', readonly about_page: { readonly __typename?: 'about_page', readonly id: string, readonly title: string, readonly description: string, readonly time: string, readonly phone: any, readonly adress: string, readonly baner: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number }, readonly slider: ReadonlyArray<{ readonly __typename?: 'about_page_files', readonly directus_files_id: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number } }> } };

export type GetCenyPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCenyPageQuery = { readonly __typename?: 'Query', readonly ceny_page: { readonly __typename?: 'ceny_page', readonly id: string, readonly title: string, readonly description: string, readonly banner: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number }, readonly blocks: ReadonlyArray<{ readonly __typename?: 'ceny_page_servicesBlock_1', readonly id: string, readonly servicesBlock_id: { readonly __typename?: 'servicesBlock', readonly id: string, readonly title: string, readonly img: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number }, readonly allServices: ReadonlyArray<{ readonly __typename?: 'services', readonly id: string, readonly title: string, readonly price: number, readonly description: string, readonly sale: number, readonly baner: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number } }> } }> } };

export type GetHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageQuery = { readonly __typename?: 'Query', readonly home_page: { readonly __typename?: 'home_page', readonly id: string, readonly infoBaner: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number }, readonly mainBaner: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number }, readonly sliderClinik: ReadonlyArray<{ readonly __typename?: 'home_page_files', readonly directus_files_id: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number } }> } };

export type GetServicesPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServicesPageQuery = { readonly __typename?: 'Query', readonly services_page: { readonly __typename?: 'services_page', readonly id: string, readonly title: string, readonly description: string, readonly baner: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number } } };

export type GetStockPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStockPageQuery = { readonly __typename?: 'Query', readonly stock_page: { readonly __typename?: 'stock_page', readonly id: string, readonly title: string, readonly description: string, readonly stockItems: ReadonlyArray<{ readonly __typename?: 'stock_page_services', readonly id: string, readonly services_id: { readonly __typename?: 'services', readonly id: string, readonly title: string, readonly price: number, readonly description: string, readonly sale: number, readonly img: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number }, readonly baner: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number } } }> } };

export type GetServiceByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetServiceByIdQuery = { readonly __typename?: 'Query', readonly services_by_id: { readonly __typename?: 'services', readonly info: string, readonly id: string, readonly title: string, readonly price: number, readonly description: string, readonly sale: number, readonly baner: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number } } };

export type GetServicesBlockFilterByServiceQueryVariables = Exact<{
  id: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
}>;


export type GetServicesBlockFilterByServiceQuery = { readonly __typename?: 'Query', readonly servicesBlock: ReadonlyArray<{ readonly __typename?: 'servicesBlock', readonly id: string, readonly title: string, readonly allServices: ReadonlyArray<{ readonly __typename?: 'services', readonly id: string, readonly title: string, readonly price: number, readonly description: string, readonly sale: number, readonly baner: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number } }> }> };

export type GetAllServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllServicesQuery = { readonly __typename?: 'Query', readonly services: ReadonlyArray<{ readonly __typename?: 'services', readonly id: string, readonly title: string, readonly price: number, readonly description: string, readonly sale: number }> };

export type GetServiceClinicQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServiceClinicQuery = { readonly __typename?: 'Query', readonly servicesClinic: { readonly __typename?: 'servicesClinic', readonly title: string, readonly description: string, readonly servicesClinic: ReadonlyArray<{ readonly __typename?: 'servicesClinic_servicesBlock', readonly servicesBlock_id: { readonly __typename?: 'servicesBlock', readonly id: string, readonly title: string, readonly img: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number }, readonly allServices: ReadonlyArray<{ readonly __typename?: 'services', readonly id: string, readonly title: string, readonly price: number, readonly description: string, readonly sale: number, readonly baner: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number } }> } }>, readonly dopServices: ReadonlyArray<{ readonly __typename?: 'servicesClinic_servicesBlock_1', readonly servicesBlock_id: { readonly __typename?: 'servicesBlock', readonly id: string, readonly title: string, readonly img: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number }, readonly allServices: ReadonlyArray<{ readonly __typename?: 'services', readonly id: string, readonly title: string, readonly price: number, readonly description: string, readonly sale: number, readonly baner: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number } }> } }> } };

export type GetServiceBlockQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServiceBlockQuery = { readonly __typename?: 'Query', readonly servicesBlock: ReadonlyArray<{ readonly __typename?: 'servicesBlock', readonly id: string, readonly title: string, readonly img: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number }, readonly allServices: ReadonlyArray<{ readonly __typename?: 'services', readonly id: string, readonly title: string, readonly price: number, readonly description: string, readonly sale: number, readonly baner: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number } }> }> };

export type GetServiceBlockByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetServiceBlockByIdQuery = { readonly __typename?: 'Query', readonly servicesBlock_by_id: { readonly __typename?: 'servicesBlock', readonly id: string, readonly title: string, readonly description: string, readonly descriptionBlock: string, readonly img: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number }, readonly allServices: ReadonlyArray<{ readonly __typename?: 'services', readonly id: string, readonly title: string, readonly price: number, readonly description: string, readonly sale: number, readonly baner: { readonly __typename?: 'directus_files', readonly id: string, readonly title: string, readonly width: number, readonly type: string, readonly height: number } }> } };

export const MediaFragmentFragmentDoc = gql`
    fragment MediaFragment on directus_files {
  id
  title
  width
  type
  height
}
    `;
export const DoctorFragmentFragmentDoc = gql`
    fragment DoctorFragment on doctors {
  id
  img {
    ...MediaFragment
  }
  post
  name
  description
  education
  experience
  slider {
    directus_files_id {
      ...MediaFragment
    }
  }
}
    ${MediaFragmentFragmentDoc}`;
export const ServiceFragmentFragmentDoc = gql`
    fragment ServiceFragment on services {
  id
  title
  price
  description
  sale
  baner {
    ...MediaFragment
  }
}
    ${MediaFragmentFragmentDoc}`;
export const ServiceByIdFragmentFragmentDoc = gql`
    fragment ServiceByIdFragment on services {
  ...ServiceFragment
  info
  baner {
    ...MediaFragment
  }
}
    ${ServiceFragmentFragmentDoc}
${MediaFragmentFragmentDoc}`;
export const ServiceBlockFragmentFragmentDoc = gql`
    fragment ServiceBlockFragment on servicesBlock {
  id
  img {
    ...MediaFragment
  }
  title
  allServices {
    ...ServiceFragment
  }
}
    ${MediaFragmentFragmentDoc}
${ServiceFragmentFragmentDoc}`;
export const GetDoctorByIdDocument = gql`
    query GetDoctorById($id: ID!) {
  doctors_by_id(id: $id) {
    ...DoctorFragment
    sevices {
      services_id {
        ...ServiceFragment
      }
    }
  }
}
    ${DoctorFragmentFragmentDoc}
${ServiceFragmentFragmentDoc}`;
export const GetAllDoctorsDocument = gql`
    query GetAllDoctors {
  doctors {
    ...DoctorFragment
    sevices {
      services_id {
        ...ServiceFragment
      }
    }
  }
}
    ${DoctorFragmentFragmentDoc}
${ServiceFragmentFragmentDoc}`;
export const GetAboutPageDocument = gql`
    query GetAboutPage {
  about_page {
    id
    title
    description
    time
    phone
    adress
    baner {
      ...MediaFragment
    }
    slider {
      directus_files_id {
        ...MediaFragment
      }
    }
  }
}
    ${MediaFragmentFragmentDoc}`;
export const GetCenyPageDocument = gql`
    query GetCenyPage {
  ceny_page {
    id
    title
    description
    banner {
      ...MediaFragment
    }
    blocks {
      id
      servicesBlock_id {
        ...ServiceBlockFragment
      }
    }
  }
}
    ${MediaFragmentFragmentDoc}
${ServiceBlockFragmentFragmentDoc}`;
export const GetHomePageDocument = gql`
    query GetHomePage {
  home_page {
    id
    infoBaner {
      ...MediaFragment
    }
    mainBaner {
      ...MediaFragment
    }
    sliderClinik {
      directus_files_id {
        ...MediaFragment
      }
    }
  }
}
    ${MediaFragmentFragmentDoc}`;
export const GetServicesPageDocument = gql`
    query GetServicesPage {
  services_page {
    id
    title
    description
    baner {
      ...MediaFragment
    }
  }
}
    ${MediaFragmentFragmentDoc}`;
export const GetStockPageDocument = gql`
    query GetStockPage {
  stock_page {
    id
    title
    description
    stockItems {
      id
      services_id {
        ...ServiceFragment
        img {
          ...MediaFragment
        }
      }
    }
  }
}
    ${ServiceFragmentFragmentDoc}
${MediaFragmentFragmentDoc}`;
export const GetServiceByIdDocument = gql`
    query GetServiceById($id: ID!) {
  services_by_id(id: $id) {
    ...ServiceByIdFragment
  }
}
    ${ServiceByIdFragmentFragmentDoc}`;
export const GetServicesBlockFilterByServiceDocument = gql`
    query GetServicesBlockFilterByService($id: GraphQLStringOrFloat) {
  servicesBlock(filter: {allServices: {id: {_eq: $id}}}) {
    id
    title
    allServices {
      ...ServiceFragment
    }
  }
}
    ${ServiceFragmentFragmentDoc}`;
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
    title
    description
    servicesClinic {
      servicesBlock_id {
        ...ServiceBlockFragment
      }
    }
    dopServices {
      servicesBlock_id {
        ...ServiceBlockFragment
      }
    }
  }
}
    ${ServiceBlockFragmentFragmentDoc}`;
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
export const GetServiceBlockByIdDocument = gql`
    query GetServiceBlockById($id: ID!) {
  servicesBlock_by_id(id: $id) {
    id
    title
    description
    descriptionBlock
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
    GetDoctorById(variables: GetDoctorByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetDoctorByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDoctorByIdQuery>(GetDoctorByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetDoctorById', 'query', variables);
    },
    GetAllDoctors(variables?: GetAllDoctorsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllDoctorsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllDoctorsQuery>(GetAllDoctorsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllDoctors', 'query', variables);
    },
    GetAboutPage(variables?: GetAboutPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAboutPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAboutPageQuery>(GetAboutPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAboutPage', 'query', variables);
    },
    GetCenyPage(variables?: GetCenyPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCenyPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCenyPageQuery>(GetCenyPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCenyPage', 'query', variables);
    },
    GetHomePage(variables?: GetHomePageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetHomePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHomePageQuery>(GetHomePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetHomePage', 'query', variables);
    },
    GetServicesPage(variables?: GetServicesPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetServicesPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetServicesPageQuery>(GetServicesPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetServicesPage', 'query', variables);
    },
    GetStockPage(variables?: GetStockPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetStockPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetStockPageQuery>(GetStockPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetStockPage', 'query', variables);
    },
    GetServiceById(variables: GetServiceByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetServiceByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetServiceByIdQuery>(GetServiceByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetServiceById', 'query', variables);
    },
    GetServicesBlockFilterByService(variables?: GetServicesBlockFilterByServiceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetServicesBlockFilterByServiceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetServicesBlockFilterByServiceQuery>(GetServicesBlockFilterByServiceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetServicesBlockFilterByService', 'query', variables);
    },
    GetAllServices(variables?: GetAllServicesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllServicesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllServicesQuery>(GetAllServicesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllServices', 'query', variables);
    },
    GetServiceClinic(variables?: GetServiceClinicQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetServiceClinicQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetServiceClinicQuery>(GetServiceClinicDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetServiceClinic', 'query', variables);
    },
    GetServiceBlock(variables?: GetServiceBlockQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetServiceBlockQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetServiceBlockQuery>(GetServiceBlockDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetServiceBlock', 'query', variables);
    },
    GetServiceBlockById(variables: GetServiceBlockByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetServiceBlockByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetServiceBlockByIdQuery>(GetServiceBlockByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetServiceBlockById', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;