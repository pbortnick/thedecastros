/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
	  }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string }
	String: { input: string; output: string }
	Boolean: { input: boolean; output: boolean }
	Int: { input: number; output: number }
	Float: { input: number; output: number }
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
	_eq?: InputMaybe<Scalars['Int']['input']>
	_gt?: InputMaybe<Scalars['Int']['input']>
	_gte?: InputMaybe<Scalars['Int']['input']>
	_in?: InputMaybe<Array<Scalars['Int']['input']>>
	_is_null?: InputMaybe<Scalars['Boolean']['input']>
	_lt?: InputMaybe<Scalars['Int']['input']>
	_lte?: InputMaybe<Scalars['Int']['input']>
	_neq?: InputMaybe<Scalars['Int']['input']>
	_nin?: InputMaybe<Array<Scalars['Int']['input']>>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
	_eq?: InputMaybe<Scalars['String']['input']>
	_gt?: InputMaybe<Scalars['String']['input']>
	_gte?: InputMaybe<Scalars['String']['input']>
	/** does the column match the given case-insensitive pattern */
	_ilike?: InputMaybe<Scalars['String']['input']>
	_in?: InputMaybe<Array<Scalars['String']['input']>>
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?: InputMaybe<Scalars['String']['input']>
	_is_null?: InputMaybe<Scalars['Boolean']['input']>
	/** does the column match the given pattern */
	_like?: InputMaybe<Scalars['String']['input']>
	_lt?: InputMaybe<Scalars['String']['input']>
	_lte?: InputMaybe<Scalars['String']['input']>
	_neq?: InputMaybe<Scalars['String']['input']>
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?: InputMaybe<Scalars['String']['input']>
	_nin?: InputMaybe<Array<Scalars['String']['input']>>
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?: InputMaybe<Scalars['String']['input']>
	/** does the column NOT match the given pattern */
	_nlike?: InputMaybe<Scalars['String']['input']>
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?: InputMaybe<Scalars['String']['input']>
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?: InputMaybe<Scalars['String']['input']>
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?: InputMaybe<Scalars['String']['input']>
	/** does the column match the given SQL regular expression */
	_similar?: InputMaybe<Scalars['String']['input']>
}

/** ordering argument of a cursor */
export enum Cursor_Ordering {
	/** ascending ordering of the cursor */
	Asc = 'ASC',
	/** descending ordering of the cursor */
	Desc = 'DESC',
}

/** mutation root */
export type Mutation_Root = {
	__typename?: 'mutation_root'
	/** delete data from the table: "schedule" */
	delete_schedule?: Maybe<Schedule_Mutation_Response>
	/** delete single row from the table: "schedule" */
	delete_schedule_by_pk?: Maybe<Schedule>
	/** delete data from the table: "schedule_day" */
	delete_schedule_day?: Maybe<Schedule_Day_Mutation_Response>
	/** delete single row from the table: "schedule_day" */
	delete_schedule_day_by_pk?: Maybe<Schedule_Day>
	/** insert data into the table: "schedule" */
	insert_schedule?: Maybe<Schedule_Mutation_Response>
	/** insert data into the table: "schedule_day" */
	insert_schedule_day?: Maybe<Schedule_Day_Mutation_Response>
	/** insert a single row into the table: "schedule_day" */
	insert_schedule_day_one?: Maybe<Schedule_Day>
	/** insert a single row into the table: "schedule" */
	insert_schedule_one?: Maybe<Schedule>
	/** update data of the table: "schedule" */
	update_schedule?: Maybe<Schedule_Mutation_Response>
	/** update single row of the table: "schedule" */
	update_schedule_by_pk?: Maybe<Schedule>
	/** update data of the table: "schedule_day" */
	update_schedule_day?: Maybe<Schedule_Day_Mutation_Response>
	/** update single row of the table: "schedule_day" */
	update_schedule_day_by_pk?: Maybe<Schedule_Day>
	/** update multiples rows of table: "schedule_day" */
	update_schedule_day_many?: Maybe<Array<Maybe<Schedule_Day_Mutation_Response>>>
	/** update multiples rows of table: "schedule" */
	update_schedule_many?: Maybe<Array<Maybe<Schedule_Mutation_Response>>>
}

/** mutation root */
export type Mutation_RootDelete_ScheduleArgs = {
	where: Schedule_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Schedule_By_PkArgs = {
	title: Scalars['String']['input']
}

/** mutation root */
export type Mutation_RootDelete_Schedule_DayArgs = {
	where: Schedule_Day_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Schedule_Day_By_PkArgs = {
	day: Scalars['String']['input']
}

/** mutation root */
export type Mutation_RootInsert_ScheduleArgs = {
	objects: Array<Schedule_Insert_Input>
	on_conflict?: InputMaybe<Schedule_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Schedule_DayArgs = {
	objects: Array<Schedule_Day_Insert_Input>
	on_conflict?: InputMaybe<Schedule_Day_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Schedule_Day_OneArgs = {
	object: Schedule_Day_Insert_Input
	on_conflict?: InputMaybe<Schedule_Day_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Schedule_OneArgs = {
	object: Schedule_Insert_Input
	on_conflict?: InputMaybe<Schedule_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_ScheduleArgs = {
	_set?: InputMaybe<Schedule_Set_Input>
	where: Schedule_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Schedule_By_PkArgs = {
	_set?: InputMaybe<Schedule_Set_Input>
	pk_columns: Schedule_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Schedule_DayArgs = {
	_set?: InputMaybe<Schedule_Day_Set_Input>
	where: Schedule_Day_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Schedule_Day_By_PkArgs = {
	_set?: InputMaybe<Schedule_Day_Set_Input>
	pk_columns: Schedule_Day_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Schedule_Day_ManyArgs = {
	updates: Array<Schedule_Day_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Schedule_ManyArgs = {
	updates: Array<Schedule_Updates>
}

/** column ordering options */
export enum Order_By {
	/** in ascending order, nulls last */
	Asc = 'asc',
	/** in ascending order, nulls first */
	AscNullsFirst = 'asc_nulls_first',
	/** in ascending order, nulls last */
	AscNullsLast = 'asc_nulls_last',
	/** in descending order, nulls first */
	Desc = 'desc',
	/** in descending order, nulls first */
	DescNullsFirst = 'desc_nulls_first',
	/** in descending order, nulls last */
	DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
	__typename?: 'query_root'
	/** fetch data from the table: "schedule" */
	schedule: Array<Schedule>
	/** fetch aggregated fields from the table: "schedule" */
	schedule_aggregate: Schedule_Aggregate
	/** fetch data from the table: "schedule" using primary key columns */
	schedule_by_pk?: Maybe<Schedule>
	/** fetch data from the table: "schedule_day" */
	schedule_day: Array<Schedule_Day>
	/** fetch aggregated fields from the table: "schedule_day" */
	schedule_day_aggregate: Schedule_Day_Aggregate
	/** fetch data from the table: "schedule_day" using primary key columns */
	schedule_day_by_pk?: Maybe<Schedule_Day>
}

export type Query_RootScheduleArgs = {
	distinct_on?: InputMaybe<Array<Schedule_Select_Column>>
	limit?: InputMaybe<Scalars['Int']['input']>
	offset?: InputMaybe<Scalars['Int']['input']>
	order_by?: InputMaybe<Array<Schedule_Order_By>>
	where?: InputMaybe<Schedule_Bool_Exp>
}

export type Query_RootSchedule_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Schedule_Select_Column>>
	limit?: InputMaybe<Scalars['Int']['input']>
	offset?: InputMaybe<Scalars['Int']['input']>
	order_by?: InputMaybe<Array<Schedule_Order_By>>
	where?: InputMaybe<Schedule_Bool_Exp>
}

export type Query_RootSchedule_By_PkArgs = {
	title: Scalars['String']['input']
}

export type Query_RootSchedule_DayArgs = {
	distinct_on?: InputMaybe<Array<Schedule_Day_Select_Column>>
	limit?: InputMaybe<Scalars['Int']['input']>
	offset?: InputMaybe<Scalars['Int']['input']>
	order_by?: InputMaybe<Array<Schedule_Day_Order_By>>
	where?: InputMaybe<Schedule_Day_Bool_Exp>
}

export type Query_RootSchedule_Day_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Schedule_Day_Select_Column>>
	limit?: InputMaybe<Scalars['Int']['input']>
	offset?: InputMaybe<Scalars['Int']['input']>
	order_by?: InputMaybe<Array<Schedule_Day_Order_By>>
	where?: InputMaybe<Schedule_Day_Bool_Exp>
}

export type Query_RootSchedule_Day_By_PkArgs = {
	day: Scalars['String']['input']
}

/** columns and relationships of "schedule" */
export type Schedule = {
	__typename?: 'schedule'
	addressLink?: Maybe<Scalars['String']['output']>
	addressText?: Maybe<Scalars['String']['output']>
	day?: Maybe<Scalars['String']['output']>
	details?: Maybe<Scalars['String']['output']>
	imageId?: Maybe<Scalars['String']['output']>
	/** An object relationship */
	schedule_day?: Maybe<Schedule_Day>
	time?: Maybe<Scalars['String']['output']>
	title: Scalars['String']['output']
	titleLinkText?: Maybe<Scalars['String']['output']>
	titleLinkUrl?: Maybe<Scalars['String']['output']>
}

/** aggregated selection of "schedule" */
export type Schedule_Aggregate = {
	__typename?: 'schedule_aggregate'
	aggregate?: Maybe<Schedule_Aggregate_Fields>
	nodes: Array<Schedule>
}

export type Schedule_Aggregate_Bool_Exp = {
	count?: InputMaybe<Schedule_Aggregate_Bool_Exp_Count>
}

export type Schedule_Aggregate_Bool_Exp_Count = {
	arguments?: InputMaybe<Array<Schedule_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']['input']>
	filter?: InputMaybe<Schedule_Bool_Exp>
	predicate: Int_Comparison_Exp
}

/** aggregate fields of "schedule" */
export type Schedule_Aggregate_Fields = {
	__typename?: 'schedule_aggregate_fields'
	count: Scalars['Int']['output']
	max?: Maybe<Schedule_Max_Fields>
	min?: Maybe<Schedule_Min_Fields>
}

/** aggregate fields of "schedule" */
export type Schedule_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Schedule_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "schedule" */
export type Schedule_Aggregate_Order_By = {
	count?: InputMaybe<Order_By>
	max?: InputMaybe<Schedule_Max_Order_By>
	min?: InputMaybe<Schedule_Min_Order_By>
}

/** input type for inserting array relation for remote table "schedule" */
export type Schedule_Arr_Rel_Insert_Input = {
	data: Array<Schedule_Insert_Input>
	/** upsert condition */
	on_conflict?: InputMaybe<Schedule_On_Conflict>
}

/** Boolean expression to filter rows from the table "schedule". All fields are combined with a logical 'AND'. */
export type Schedule_Bool_Exp = {
	_and?: InputMaybe<Array<Schedule_Bool_Exp>>
	_not?: InputMaybe<Schedule_Bool_Exp>
	_or?: InputMaybe<Array<Schedule_Bool_Exp>>
	addressLink?: InputMaybe<String_Comparison_Exp>
	addressText?: InputMaybe<String_Comparison_Exp>
	day?: InputMaybe<String_Comparison_Exp>
	details?: InputMaybe<String_Comparison_Exp>
	imageId?: InputMaybe<String_Comparison_Exp>
	schedule_day?: InputMaybe<Schedule_Day_Bool_Exp>
	time?: InputMaybe<String_Comparison_Exp>
	title?: InputMaybe<String_Comparison_Exp>
	titleLinkText?: InputMaybe<String_Comparison_Exp>
	titleLinkUrl?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "schedule" */
export enum Schedule_Constraint {
	/** unique or primary key constraint on columns "title" */
	SchedulePkey = 'schedule_pkey',
}

/** columns and relationships of "schedule_day" */
export type Schedule_Day = {
	__typename?: 'schedule_day'
	day: Scalars['String']['output']
	/** An array relationship */
	schedules: Array<Schedule>
	/** An aggregate relationship */
	schedules_aggregate: Schedule_Aggregate
}

/** columns and relationships of "schedule_day" */
export type Schedule_DaySchedulesArgs = {
	distinct_on?: InputMaybe<Array<Schedule_Select_Column>>
	limit?: InputMaybe<Scalars['Int']['input']>
	offset?: InputMaybe<Scalars['Int']['input']>
	order_by?: InputMaybe<Array<Schedule_Order_By>>
	where?: InputMaybe<Schedule_Bool_Exp>
}

/** columns and relationships of "schedule_day" */
export type Schedule_DaySchedules_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Schedule_Select_Column>>
	limit?: InputMaybe<Scalars['Int']['input']>
	offset?: InputMaybe<Scalars['Int']['input']>
	order_by?: InputMaybe<Array<Schedule_Order_By>>
	where?: InputMaybe<Schedule_Bool_Exp>
}

/** aggregated selection of "schedule_day" */
export type Schedule_Day_Aggregate = {
	__typename?: 'schedule_day_aggregate'
	aggregate?: Maybe<Schedule_Day_Aggregate_Fields>
	nodes: Array<Schedule_Day>
}

/** aggregate fields of "schedule_day" */
export type Schedule_Day_Aggregate_Fields = {
	__typename?: 'schedule_day_aggregate_fields'
	count: Scalars['Int']['output']
	max?: Maybe<Schedule_Day_Max_Fields>
	min?: Maybe<Schedule_Day_Min_Fields>
}

/** aggregate fields of "schedule_day" */
export type Schedule_Day_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Schedule_Day_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** Boolean expression to filter rows from the table "schedule_day". All fields are combined with a logical 'AND'. */
export type Schedule_Day_Bool_Exp = {
	_and?: InputMaybe<Array<Schedule_Day_Bool_Exp>>
	_not?: InputMaybe<Schedule_Day_Bool_Exp>
	_or?: InputMaybe<Array<Schedule_Day_Bool_Exp>>
	day?: InputMaybe<String_Comparison_Exp>
	schedules?: InputMaybe<Schedule_Bool_Exp>
	schedules_aggregate?: InputMaybe<Schedule_Aggregate_Bool_Exp>
}

/** unique or primary key constraints on table "schedule_day" */
export enum Schedule_Day_Constraint {
	/** unique or primary key constraint on columns "day" */
	ScheduleDayPkey = 'schedule_day_pkey',
}

/** input type for inserting data into table "schedule_day" */
export type Schedule_Day_Insert_Input = {
	day?: InputMaybe<Scalars['String']['input']>
	schedules?: InputMaybe<Schedule_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Schedule_Day_Max_Fields = {
	__typename?: 'schedule_day_max_fields'
	day?: Maybe<Scalars['String']['output']>
}

/** aggregate min on columns */
export type Schedule_Day_Min_Fields = {
	__typename?: 'schedule_day_min_fields'
	day?: Maybe<Scalars['String']['output']>
}

/** response of any mutation on the table "schedule_day" */
export type Schedule_Day_Mutation_Response = {
	__typename?: 'schedule_day_mutation_response'
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int']['output']
	/** data from the rows affected by the mutation */
	returning: Array<Schedule_Day>
}

/** input type for inserting object relation for remote table "schedule_day" */
export type Schedule_Day_Obj_Rel_Insert_Input = {
	data: Schedule_Day_Insert_Input
	/** upsert condition */
	on_conflict?: InputMaybe<Schedule_Day_On_Conflict>
}

/** on_conflict condition type for table "schedule_day" */
export type Schedule_Day_On_Conflict = {
	constraint: Schedule_Day_Constraint
	update_columns?: Array<Schedule_Day_Update_Column>
	where?: InputMaybe<Schedule_Day_Bool_Exp>
}

/** Ordering options when selecting data from "schedule_day". */
export type Schedule_Day_Order_By = {
	day?: InputMaybe<Order_By>
	schedules_aggregate?: InputMaybe<Schedule_Aggregate_Order_By>
}

/** primary key columns input for table: schedule_day */
export type Schedule_Day_Pk_Columns_Input = {
	day: Scalars['String']['input']
}

/** select columns of table "schedule_day" */
export enum Schedule_Day_Select_Column {
	/** column name */
	Day = 'day',
}

/** input type for updating data in table "schedule_day" */
export type Schedule_Day_Set_Input = {
	day?: InputMaybe<Scalars['String']['input']>
}

/** Streaming cursor of the table "schedule_day" */
export type Schedule_Day_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Schedule_Day_Stream_Cursor_Value_Input
	/** cursor ordering */
	ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Schedule_Day_Stream_Cursor_Value_Input = {
	day?: InputMaybe<Scalars['String']['input']>
}

/** update columns of table "schedule_day" */
export enum Schedule_Day_Update_Column {
	/** column name */
	Day = 'day',
}

export type Schedule_Day_Updates = {
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Schedule_Day_Set_Input>
	/** filter the rows which have to be updated */
	where: Schedule_Day_Bool_Exp
}

/** input type for inserting data into table "schedule" */
export type Schedule_Insert_Input = {
	addressLink?: InputMaybe<Scalars['String']['input']>
	addressText?: InputMaybe<Scalars['String']['input']>
	day?: InputMaybe<Scalars['String']['input']>
	details?: InputMaybe<Scalars['String']['input']>
	imageId?: InputMaybe<Scalars['String']['input']>
	schedule_day?: InputMaybe<Schedule_Day_Obj_Rel_Insert_Input>
	time?: InputMaybe<Scalars['String']['input']>
	title?: InputMaybe<Scalars['String']['input']>
	titleLinkText?: InputMaybe<Scalars['String']['input']>
	titleLinkUrl?: InputMaybe<Scalars['String']['input']>
}

/** aggregate max on columns */
export type Schedule_Max_Fields = {
	__typename?: 'schedule_max_fields'
	addressLink?: Maybe<Scalars['String']['output']>
	addressText?: Maybe<Scalars['String']['output']>
	day?: Maybe<Scalars['String']['output']>
	details?: Maybe<Scalars['String']['output']>
	imageId?: Maybe<Scalars['String']['output']>
	time?: Maybe<Scalars['String']['output']>
	title?: Maybe<Scalars['String']['output']>
	titleLinkText?: Maybe<Scalars['String']['output']>
	titleLinkUrl?: Maybe<Scalars['String']['output']>
}

/** order by max() on columns of table "schedule" */
export type Schedule_Max_Order_By = {
	addressLink?: InputMaybe<Order_By>
	addressText?: InputMaybe<Order_By>
	day?: InputMaybe<Order_By>
	details?: InputMaybe<Order_By>
	imageId?: InputMaybe<Order_By>
	time?: InputMaybe<Order_By>
	title?: InputMaybe<Order_By>
	titleLinkText?: InputMaybe<Order_By>
	titleLinkUrl?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Schedule_Min_Fields = {
	__typename?: 'schedule_min_fields'
	addressLink?: Maybe<Scalars['String']['output']>
	addressText?: Maybe<Scalars['String']['output']>
	day?: Maybe<Scalars['String']['output']>
	details?: Maybe<Scalars['String']['output']>
	imageId?: Maybe<Scalars['String']['output']>
	time?: Maybe<Scalars['String']['output']>
	title?: Maybe<Scalars['String']['output']>
	titleLinkText?: Maybe<Scalars['String']['output']>
	titleLinkUrl?: Maybe<Scalars['String']['output']>
}

/** order by min() on columns of table "schedule" */
export type Schedule_Min_Order_By = {
	addressLink?: InputMaybe<Order_By>
	addressText?: InputMaybe<Order_By>
	day?: InputMaybe<Order_By>
	details?: InputMaybe<Order_By>
	imageId?: InputMaybe<Order_By>
	time?: InputMaybe<Order_By>
	title?: InputMaybe<Order_By>
	titleLinkText?: InputMaybe<Order_By>
	titleLinkUrl?: InputMaybe<Order_By>
}

/** response of any mutation on the table "schedule" */
export type Schedule_Mutation_Response = {
	__typename?: 'schedule_mutation_response'
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int']['output']
	/** data from the rows affected by the mutation */
	returning: Array<Schedule>
}

/** on_conflict condition type for table "schedule" */
export type Schedule_On_Conflict = {
	constraint: Schedule_Constraint
	update_columns?: Array<Schedule_Update_Column>
	where?: InputMaybe<Schedule_Bool_Exp>
}

/** Ordering options when selecting data from "schedule". */
export type Schedule_Order_By = {
	addressLink?: InputMaybe<Order_By>
	addressText?: InputMaybe<Order_By>
	day?: InputMaybe<Order_By>
	details?: InputMaybe<Order_By>
	imageId?: InputMaybe<Order_By>
	schedule_day?: InputMaybe<Schedule_Day_Order_By>
	time?: InputMaybe<Order_By>
	title?: InputMaybe<Order_By>
	titleLinkText?: InputMaybe<Order_By>
	titleLinkUrl?: InputMaybe<Order_By>
}

/** primary key columns input for table: schedule */
export type Schedule_Pk_Columns_Input = {
	title: Scalars['String']['input']
}

/** select columns of table "schedule" */
export enum Schedule_Select_Column {
	/** column name */
	AddressLink = 'addressLink',
	/** column name */
	AddressText = 'addressText',
	/** column name */
	Day = 'day',
	/** column name */
	Details = 'details',
	/** column name */
	ImageId = 'imageId',
	/** column name */
	Time = 'time',
	/** column name */
	Title = 'title',
	/** column name */
	TitleLinkText = 'titleLinkText',
	/** column name */
	TitleLinkUrl = 'titleLinkUrl',
}

/** input type for updating data in table "schedule" */
export type Schedule_Set_Input = {
	addressLink?: InputMaybe<Scalars['String']['input']>
	addressText?: InputMaybe<Scalars['String']['input']>
	day?: InputMaybe<Scalars['String']['input']>
	details?: InputMaybe<Scalars['String']['input']>
	imageId?: InputMaybe<Scalars['String']['input']>
	time?: InputMaybe<Scalars['String']['input']>
	title?: InputMaybe<Scalars['String']['input']>
	titleLinkText?: InputMaybe<Scalars['String']['input']>
	titleLinkUrl?: InputMaybe<Scalars['String']['input']>
}

/** Streaming cursor of the table "schedule" */
export type Schedule_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Schedule_Stream_Cursor_Value_Input
	/** cursor ordering */
	ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Schedule_Stream_Cursor_Value_Input = {
	addressLink?: InputMaybe<Scalars['String']['input']>
	addressText?: InputMaybe<Scalars['String']['input']>
	day?: InputMaybe<Scalars['String']['input']>
	details?: InputMaybe<Scalars['String']['input']>
	imageId?: InputMaybe<Scalars['String']['input']>
	time?: InputMaybe<Scalars['String']['input']>
	title?: InputMaybe<Scalars['String']['input']>
	titleLinkText?: InputMaybe<Scalars['String']['input']>
	titleLinkUrl?: InputMaybe<Scalars['String']['input']>
}

/** update columns of table "schedule" */
export enum Schedule_Update_Column {
	/** column name */
	AddressLink = 'addressLink',
	/** column name */
	AddressText = 'addressText',
	/** column name */
	Day = 'day',
	/** column name */
	Details = 'details',
	/** column name */
	ImageId = 'imageId',
	/** column name */
	Time = 'time',
	/** column name */
	Title = 'title',
	/** column name */
	TitleLinkText = 'titleLinkText',
	/** column name */
	TitleLinkUrl = 'titleLinkUrl',
}

export type Schedule_Updates = {
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Schedule_Set_Input>
	/** filter the rows which have to be updated */
	where: Schedule_Bool_Exp
}

export type Subscription_Root = {
	__typename?: 'subscription_root'
	/** fetch data from the table: "schedule" */
	schedule: Array<Schedule>
	/** fetch aggregated fields from the table: "schedule" */
	schedule_aggregate: Schedule_Aggregate
	/** fetch data from the table: "schedule" using primary key columns */
	schedule_by_pk?: Maybe<Schedule>
	/** fetch data from the table: "schedule_day" */
	schedule_day: Array<Schedule_Day>
	/** fetch aggregated fields from the table: "schedule_day" */
	schedule_day_aggregate: Schedule_Day_Aggregate
	/** fetch data from the table: "schedule_day" using primary key columns */
	schedule_day_by_pk?: Maybe<Schedule_Day>
	/** fetch data from the table in a streaming manner: "schedule_day" */
	schedule_day_stream: Array<Schedule_Day>
	/** fetch data from the table in a streaming manner: "schedule" */
	schedule_stream: Array<Schedule>
}

export type Subscription_RootScheduleArgs = {
	distinct_on?: InputMaybe<Array<Schedule_Select_Column>>
	limit?: InputMaybe<Scalars['Int']['input']>
	offset?: InputMaybe<Scalars['Int']['input']>
	order_by?: InputMaybe<Array<Schedule_Order_By>>
	where?: InputMaybe<Schedule_Bool_Exp>
}

export type Subscription_RootSchedule_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Schedule_Select_Column>>
	limit?: InputMaybe<Scalars['Int']['input']>
	offset?: InputMaybe<Scalars['Int']['input']>
	order_by?: InputMaybe<Array<Schedule_Order_By>>
	where?: InputMaybe<Schedule_Bool_Exp>
}

export type Subscription_RootSchedule_By_PkArgs = {
	title: Scalars['String']['input']
}

export type Subscription_RootSchedule_DayArgs = {
	distinct_on?: InputMaybe<Array<Schedule_Day_Select_Column>>
	limit?: InputMaybe<Scalars['Int']['input']>
	offset?: InputMaybe<Scalars['Int']['input']>
	order_by?: InputMaybe<Array<Schedule_Day_Order_By>>
	where?: InputMaybe<Schedule_Day_Bool_Exp>
}

export type Subscription_RootSchedule_Day_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Schedule_Day_Select_Column>>
	limit?: InputMaybe<Scalars['Int']['input']>
	offset?: InputMaybe<Scalars['Int']['input']>
	order_by?: InputMaybe<Array<Schedule_Day_Order_By>>
	where?: InputMaybe<Schedule_Day_Bool_Exp>
}

export type Subscription_RootSchedule_Day_By_PkArgs = {
	day: Scalars['String']['input']
}

export type Subscription_RootSchedule_Day_StreamArgs = {
	batch_size: Scalars['Int']['input']
	cursor: Array<InputMaybe<Schedule_Day_Stream_Cursor_Input>>
	where?: InputMaybe<Schedule_Day_Bool_Exp>
}

export type Subscription_RootSchedule_StreamArgs = {
	batch_size: Scalars['Int']['input']
	cursor: Array<InputMaybe<Schedule_Stream_Cursor_Input>>
	where?: InputMaybe<Schedule_Bool_Exp>
}

export type ScheduleQueryVariables = Exact<{ [key: string]: never }>

export type ScheduleQuery = {
	__typename?: 'query_root'
	schedule_day: Array<{
		__typename?: 'schedule_day'
		day: string
		schedules: Array<{
			__typename?: 'schedule'
			title: string
			titleLinkUrl?: string | null
			titleLinkText?: string | null
			time?: string | null
			addressLink?: string | null
			addressText?: string | null
		}>
	}>
}

export const ScheduleDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'Schedule' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'schedule_day' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'day' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'schedules' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'titleLinkUrl' },
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'titleLinkText' },
											},
											{ kind: 'Field', name: { kind: 'Name', value: 'time' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'addressLink' },
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'addressText' },
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<ScheduleQuery, ScheduleQueryVariables>
