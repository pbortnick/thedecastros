import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  date: { input: unknown; output: unknown; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export type Cursor_Ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "hero" */
export type Hero = {
  __typename?: 'hero';
  alt: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  src: Scalars['String']['output'];
  title: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

/** aggregated selection of "hero" */
export type Hero_Aggregate = {
  __typename?: 'hero_aggregate';
  aggregate?: Maybe<Hero_Aggregate_Fields>;
  nodes: Array<Hero>;
};

/** aggregate fields of "hero" */
export type Hero_Aggregate_Fields = {
  __typename?: 'hero_aggregate_fields';
  avg?: Maybe<Hero_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Hero_Max_Fields>;
  min?: Maybe<Hero_Min_Fields>;
  stddev?: Maybe<Hero_Stddev_Fields>;
  stddev_pop?: Maybe<Hero_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Hero_Stddev_Samp_Fields>;
  sum?: Maybe<Hero_Sum_Fields>;
  var_pop?: Maybe<Hero_Var_Pop_Fields>;
  var_samp?: Maybe<Hero_Var_Samp_Fields>;
  variance?: Maybe<Hero_Variance_Fields>;
};


/** aggregate fields of "hero" */
export type Hero_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Hero_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Hero_Avg_Fields = {
  __typename?: 'hero_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "hero". All fields are combined with a logical 'AND'. */
export type Hero_Bool_Exp = {
  _and?: InputMaybe<Array<Hero_Bool_Exp>>;
  _not?: InputMaybe<Hero_Bool_Exp>;
  _or?: InputMaybe<Array<Hero_Bool_Exp>>;
  alt?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Int_Comparison_Exp>;
  src?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  width?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "hero" */
export type Hero_Constraint =
  /** unique or primary key constraint on columns "title" */
  | 'hero_pkey';

/** input type for incrementing numeric columns in table "hero" */
export type Hero_Inc_Input = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "hero" */
export type Hero_Insert_Input = {
  alt?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  src?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Hero_Max_Fields = {
  __typename?: 'hero_max_fields';
  alt?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  src?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Hero_Min_Fields = {
  __typename?: 'hero_min_fields';
  alt?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  src?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "hero" */
export type Hero_Mutation_Response = {
  __typename?: 'hero_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Hero>;
};

/** on_conflict condition type for table "hero" */
export type Hero_On_Conflict = {
  constraint: Hero_Constraint;
  update_columns?: Array<Hero_Update_Column>;
  where?: InputMaybe<Hero_Bool_Exp>;
};

/** Ordering options when selecting data from "hero". */
export type Hero_Order_By = {
  alt?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  src?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** primary key columns input for table: hero */
export type Hero_Pk_Columns_Input = {
  title: Scalars['String']['input'];
};

/** select columns of table "hero" */
export type Hero_Select_Column =
  /** column name */
  | 'alt'
  /** column name */
  | 'height'
  /** column name */
  | 'src'
  /** column name */
  | 'title'
  /** column name */
  | 'width';

/** input type for updating data in table "hero" */
export type Hero_Set_Input = {
  alt?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  src?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Hero_Stddev_Fields = {
  __typename?: 'hero_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Hero_Stddev_Pop_Fields = {
  __typename?: 'hero_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Hero_Stddev_Samp_Fields = {
  __typename?: 'hero_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "hero" */
export type Hero_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Hero_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Hero_Stream_Cursor_Value_Input = {
  alt?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  src?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Hero_Sum_Fields = {
  __typename?: 'hero_sum_fields';
  height?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "hero" */
export type Hero_Update_Column =
  /** column name */
  | 'alt'
  /** column name */
  | 'height'
  /** column name */
  | 'src'
  /** column name */
  | 'title'
  /** column name */
  | 'width';

export type Hero_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Hero_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Hero_Set_Input>;
  /** filter the rows which have to be updated */
  where: Hero_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Hero_Var_Pop_Fields = {
  __typename?: 'hero_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Hero_Var_Samp_Fields = {
  __typename?: 'hero_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Hero_Variance_Fields = {
  __typename?: 'hero_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "hero" */
  delete_hero?: Maybe<Hero_Mutation_Response>;
  /** delete single row from the table: "hero" */
  delete_hero_by_pk?: Maybe<Hero>;
  /** delete data from the table: "schedule" */
  delete_schedule?: Maybe<Schedule_Mutation_Response>;
  /** delete single row from the table: "schedule" */
  delete_schedule_by_pk?: Maybe<Schedule>;
  /** delete data from the table: "schedule_day" */
  delete_schedule_day?: Maybe<Schedule_Day_Mutation_Response>;
  /** delete single row from the table: "schedule_day" */
  delete_schedule_day_by_pk?: Maybe<Schedule_Day>;
  /** insert data into the table: "hero" */
  insert_hero?: Maybe<Hero_Mutation_Response>;
  /** insert a single row into the table: "hero" */
  insert_hero_one?: Maybe<Hero>;
  /** insert data into the table: "schedule" */
  insert_schedule?: Maybe<Schedule_Mutation_Response>;
  /** insert data into the table: "schedule_day" */
  insert_schedule_day?: Maybe<Schedule_Day_Mutation_Response>;
  /** insert a single row into the table: "schedule_day" */
  insert_schedule_day_one?: Maybe<Schedule_Day>;
  /** insert a single row into the table: "schedule" */
  insert_schedule_one?: Maybe<Schedule>;
  /** update data of the table: "hero" */
  update_hero?: Maybe<Hero_Mutation_Response>;
  /** update single row of the table: "hero" */
  update_hero_by_pk?: Maybe<Hero>;
  /** update multiples rows of table: "hero" */
  update_hero_many?: Maybe<Array<Maybe<Hero_Mutation_Response>>>;
  /** update data of the table: "schedule" */
  update_schedule?: Maybe<Schedule_Mutation_Response>;
  /** update single row of the table: "schedule" */
  update_schedule_by_pk?: Maybe<Schedule>;
  /** update data of the table: "schedule_day" */
  update_schedule_day?: Maybe<Schedule_Day_Mutation_Response>;
  /** update single row of the table: "schedule_day" */
  update_schedule_day_by_pk?: Maybe<Schedule_Day>;
  /** update multiples rows of table: "schedule_day" */
  update_schedule_day_many?: Maybe<Array<Maybe<Schedule_Day_Mutation_Response>>>;
  /** update multiples rows of table: "schedule" */
  update_schedule_many?: Maybe<Array<Maybe<Schedule_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_HeroArgs = {
  where: Hero_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Hero_By_PkArgs = {
  title: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ScheduleArgs = {
  where: Schedule_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Schedule_By_PkArgs = {
  title: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Schedule_DayArgs = {
  where: Schedule_Day_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Schedule_Day_By_PkArgs = {
  day: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsert_HeroArgs = {
  objects: Array<Hero_Insert_Input>;
  on_conflict?: InputMaybe<Hero_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hero_OneArgs = {
  object: Hero_Insert_Input;
  on_conflict?: InputMaybe<Hero_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ScheduleArgs = {
  objects: Array<Schedule_Insert_Input>;
  on_conflict?: InputMaybe<Schedule_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Schedule_DayArgs = {
  objects: Array<Schedule_Day_Insert_Input>;
  on_conflict?: InputMaybe<Schedule_Day_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Schedule_Day_OneArgs = {
  object: Schedule_Day_Insert_Input;
  on_conflict?: InputMaybe<Schedule_Day_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Schedule_OneArgs = {
  object: Schedule_Insert_Input;
  on_conflict?: InputMaybe<Schedule_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_HeroArgs = {
  _inc?: InputMaybe<Hero_Inc_Input>;
  _set?: InputMaybe<Hero_Set_Input>;
  where: Hero_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Hero_By_PkArgs = {
  _inc?: InputMaybe<Hero_Inc_Input>;
  _set?: InputMaybe<Hero_Set_Input>;
  pk_columns: Hero_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Hero_ManyArgs = {
  updates: Array<Hero_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ScheduleArgs = {
  _set?: InputMaybe<Schedule_Set_Input>;
  where: Schedule_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Schedule_By_PkArgs = {
  _set?: InputMaybe<Schedule_Set_Input>;
  pk_columns: Schedule_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Schedule_DayArgs = {
  _inc?: InputMaybe<Schedule_Day_Inc_Input>;
  _set?: InputMaybe<Schedule_Day_Set_Input>;
  where: Schedule_Day_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Schedule_Day_By_PkArgs = {
  _inc?: InputMaybe<Schedule_Day_Inc_Input>;
  _set?: InputMaybe<Schedule_Day_Set_Input>;
  pk_columns: Schedule_Day_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Schedule_Day_ManyArgs = {
  updates: Array<Schedule_Day_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Schedule_ManyArgs = {
  updates: Array<Schedule_Updates>;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "hero" */
  hero: Array<Hero>;
  /** fetch aggregated fields from the table: "hero" */
  hero_aggregate: Hero_Aggregate;
  /** fetch data from the table: "hero" using primary key columns */
  hero_by_pk?: Maybe<Hero>;
  /** fetch data from the table: "schedule" */
  schedule: Array<Schedule>;
  /** fetch aggregated fields from the table: "schedule" */
  schedule_aggregate: Schedule_Aggregate;
  /** fetch data from the table: "schedule" using primary key columns */
  schedule_by_pk?: Maybe<Schedule>;
  /** fetch data from the table: "schedule_day" */
  schedule_day: Array<Schedule_Day>;
  /** fetch aggregated fields from the table: "schedule_day" */
  schedule_day_aggregate: Schedule_Day_Aggregate;
  /** fetch data from the table: "schedule_day" using primary key columns */
  schedule_day_by_pk?: Maybe<Schedule_Day>;
};


export type Query_RootHeroArgs = {
  distinct_on?: InputMaybe<Array<Hero_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hero_Order_By>>;
  where?: InputMaybe<Hero_Bool_Exp>;
};


export type Query_RootHero_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hero_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hero_Order_By>>;
  where?: InputMaybe<Hero_Bool_Exp>;
};


export type Query_RootHero_By_PkArgs = {
  title: Scalars['String']['input'];
};


export type Query_RootScheduleArgs = {
  distinct_on?: InputMaybe<Array<Schedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Schedule_Order_By>>;
  where?: InputMaybe<Schedule_Bool_Exp>;
};


export type Query_RootSchedule_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Schedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Schedule_Order_By>>;
  where?: InputMaybe<Schedule_Bool_Exp>;
};


export type Query_RootSchedule_By_PkArgs = {
  title: Scalars['String']['input'];
};


export type Query_RootSchedule_DayArgs = {
  distinct_on?: InputMaybe<Array<Schedule_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Schedule_Day_Order_By>>;
  where?: InputMaybe<Schedule_Day_Bool_Exp>;
};


export type Query_RootSchedule_Day_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Schedule_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Schedule_Day_Order_By>>;
  where?: InputMaybe<Schedule_Day_Bool_Exp>;
};


export type Query_RootSchedule_Day_By_PkArgs = {
  day: Scalars['String']['input'];
};

/** columns and relationships of "schedule" */
export type Schedule = {
  __typename?: 'schedule';
  addressLink?: Maybe<Scalars['String']['output']>;
  addressText?: Maybe<Scalars['String']['output']>;
  day?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  imageId?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  schedule_day?: Maybe<Schedule_Day>;
  time?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  titleLinkText?: Maybe<Scalars['String']['output']>;
  titleLinkUrl?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "schedule" */
export type Schedule_Aggregate = {
  __typename?: 'schedule_aggregate';
  aggregate?: Maybe<Schedule_Aggregate_Fields>;
  nodes: Array<Schedule>;
};

export type Schedule_Aggregate_Bool_Exp = {
  count?: InputMaybe<Schedule_Aggregate_Bool_Exp_Count>;
};

export type Schedule_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Schedule_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Schedule_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "schedule" */
export type Schedule_Aggregate_Fields = {
  __typename?: 'schedule_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Schedule_Max_Fields>;
  min?: Maybe<Schedule_Min_Fields>;
};


/** aggregate fields of "schedule" */
export type Schedule_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Schedule_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "schedule" */
export type Schedule_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Schedule_Max_Order_By>;
  min?: InputMaybe<Schedule_Min_Order_By>;
};

/** input type for inserting array relation for remote table "schedule" */
export type Schedule_Arr_Rel_Insert_Input = {
  data: Array<Schedule_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Schedule_On_Conflict>;
};

/** Boolean expression to filter rows from the table "schedule". All fields are combined with a logical 'AND'. */
export type Schedule_Bool_Exp = {
  _and?: InputMaybe<Array<Schedule_Bool_Exp>>;
  _not?: InputMaybe<Schedule_Bool_Exp>;
  _or?: InputMaybe<Array<Schedule_Bool_Exp>>;
  addressLink?: InputMaybe<String_Comparison_Exp>;
  addressText?: InputMaybe<String_Comparison_Exp>;
  day?: InputMaybe<String_Comparison_Exp>;
  details?: InputMaybe<String_Comparison_Exp>;
  imageId?: InputMaybe<String_Comparison_Exp>;
  schedule_day?: InputMaybe<Schedule_Day_Bool_Exp>;
  time?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  titleLinkText?: InputMaybe<String_Comparison_Exp>;
  titleLinkUrl?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "schedule" */
export type Schedule_Constraint =
  /** unique or primary key constraint on columns "title" */
  | 'schedule_pkey';

/** columns and relationships of "schedule_day" */
export type Schedule_Day = {
  __typename?: 'schedule_day';
  Sort?: Maybe<Scalars['Int']['output']>;
  calendarDate?: Maybe<Scalars['date']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  day: Scalars['String']['output'];
  /** An array relationship */
  schedules: Array<Schedule>;
  /** An aggregate relationship */
  schedules_aggregate: Schedule_Aggregate;
};


/** columns and relationships of "schedule_day" */
export type Schedule_DaySchedulesArgs = {
  distinct_on?: InputMaybe<Array<Schedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Schedule_Order_By>>;
  where?: InputMaybe<Schedule_Bool_Exp>;
};


/** columns and relationships of "schedule_day" */
export type Schedule_DaySchedules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Schedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Schedule_Order_By>>;
  where?: InputMaybe<Schedule_Bool_Exp>;
};

/** aggregated selection of "schedule_day" */
export type Schedule_Day_Aggregate = {
  __typename?: 'schedule_day_aggregate';
  aggregate?: Maybe<Schedule_Day_Aggregate_Fields>;
  nodes: Array<Schedule_Day>;
};

/** aggregate fields of "schedule_day" */
export type Schedule_Day_Aggregate_Fields = {
  __typename?: 'schedule_day_aggregate_fields';
  avg?: Maybe<Schedule_Day_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Schedule_Day_Max_Fields>;
  min?: Maybe<Schedule_Day_Min_Fields>;
  stddev?: Maybe<Schedule_Day_Stddev_Fields>;
  stddev_pop?: Maybe<Schedule_Day_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Schedule_Day_Stddev_Samp_Fields>;
  sum?: Maybe<Schedule_Day_Sum_Fields>;
  var_pop?: Maybe<Schedule_Day_Var_Pop_Fields>;
  var_samp?: Maybe<Schedule_Day_Var_Samp_Fields>;
  variance?: Maybe<Schedule_Day_Variance_Fields>;
};


/** aggregate fields of "schedule_day" */
export type Schedule_Day_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Schedule_Day_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Schedule_Day_Avg_Fields = {
  __typename?: 'schedule_day_avg_fields';
  Sort?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "schedule_day". All fields are combined with a logical 'AND'. */
export type Schedule_Day_Bool_Exp = {
  Sort?: InputMaybe<Int_Comparison_Exp>;
  _and?: InputMaybe<Array<Schedule_Day_Bool_Exp>>;
  _not?: InputMaybe<Schedule_Day_Bool_Exp>;
  _or?: InputMaybe<Array<Schedule_Day_Bool_Exp>>;
  calendarDate?: InputMaybe<Date_Comparison_Exp>;
  date?: InputMaybe<String_Comparison_Exp>;
  day?: InputMaybe<String_Comparison_Exp>;
  schedules?: InputMaybe<Schedule_Bool_Exp>;
  schedules_aggregate?: InputMaybe<Schedule_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "schedule_day" */
export type Schedule_Day_Constraint =
  /** unique or primary key constraint on columns "day" */
  | 'schedule_day_pkey';

/** input type for incrementing numeric columns in table "schedule_day" */
export type Schedule_Day_Inc_Input = {
  Sort?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "schedule_day" */
export type Schedule_Day_Insert_Input = {
  Sort?: InputMaybe<Scalars['Int']['input']>;
  calendarDate?: InputMaybe<Scalars['date']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  day?: InputMaybe<Scalars['String']['input']>;
  schedules?: InputMaybe<Schedule_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Schedule_Day_Max_Fields = {
  __typename?: 'schedule_day_max_fields';
  Sort?: Maybe<Scalars['Int']['output']>;
  calendarDate?: Maybe<Scalars['date']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  day?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Schedule_Day_Min_Fields = {
  __typename?: 'schedule_day_min_fields';
  Sort?: Maybe<Scalars['Int']['output']>;
  calendarDate?: Maybe<Scalars['date']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  day?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "schedule_day" */
export type Schedule_Day_Mutation_Response = {
  __typename?: 'schedule_day_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Schedule_Day>;
};

/** input type for inserting object relation for remote table "schedule_day" */
export type Schedule_Day_Obj_Rel_Insert_Input = {
  data: Schedule_Day_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Schedule_Day_On_Conflict>;
};

/** on_conflict condition type for table "schedule_day" */
export type Schedule_Day_On_Conflict = {
  constraint: Schedule_Day_Constraint;
  update_columns?: Array<Schedule_Day_Update_Column>;
  where?: InputMaybe<Schedule_Day_Bool_Exp>;
};

/** Ordering options when selecting data from "schedule_day". */
export type Schedule_Day_Order_By = {
  Sort?: InputMaybe<Order_By>;
  calendarDate?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  day?: InputMaybe<Order_By>;
  schedules_aggregate?: InputMaybe<Schedule_Aggregate_Order_By>;
};

/** primary key columns input for table: schedule_day */
export type Schedule_Day_Pk_Columns_Input = {
  day: Scalars['String']['input'];
};

/** select columns of table "schedule_day" */
export type Schedule_Day_Select_Column =
  /** column name */
  | 'Sort'
  /** column name */
  | 'calendarDate'
  /** column name */
  | 'date'
  /** column name */
  | 'day';

/** input type for updating data in table "schedule_day" */
export type Schedule_Day_Set_Input = {
  Sort?: InputMaybe<Scalars['Int']['input']>;
  calendarDate?: InputMaybe<Scalars['date']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  day?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Schedule_Day_Stddev_Fields = {
  __typename?: 'schedule_day_stddev_fields';
  Sort?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Schedule_Day_Stddev_Pop_Fields = {
  __typename?: 'schedule_day_stddev_pop_fields';
  Sort?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Schedule_Day_Stddev_Samp_Fields = {
  __typename?: 'schedule_day_stddev_samp_fields';
  Sort?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "schedule_day" */
export type Schedule_Day_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Schedule_Day_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Schedule_Day_Stream_Cursor_Value_Input = {
  Sort?: InputMaybe<Scalars['Int']['input']>;
  calendarDate?: InputMaybe<Scalars['date']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  day?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Schedule_Day_Sum_Fields = {
  __typename?: 'schedule_day_sum_fields';
  Sort?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "schedule_day" */
export type Schedule_Day_Update_Column =
  /** column name */
  | 'Sort'
  /** column name */
  | 'calendarDate'
  /** column name */
  | 'date'
  /** column name */
  | 'day';

export type Schedule_Day_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Schedule_Day_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Schedule_Day_Set_Input>;
  /** filter the rows which have to be updated */
  where: Schedule_Day_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Schedule_Day_Var_Pop_Fields = {
  __typename?: 'schedule_day_var_pop_fields';
  Sort?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Schedule_Day_Var_Samp_Fields = {
  __typename?: 'schedule_day_var_samp_fields';
  Sort?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Schedule_Day_Variance_Fields = {
  __typename?: 'schedule_day_variance_fields';
  Sort?: Maybe<Scalars['Float']['output']>;
};

/** input type for inserting data into table "schedule" */
export type Schedule_Insert_Input = {
  addressLink?: InputMaybe<Scalars['String']['input']>;
  addressText?: InputMaybe<Scalars['String']['input']>;
  day?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['String']['input']>;
  schedule_day?: InputMaybe<Schedule_Day_Obj_Rel_Insert_Input>;
  time?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  titleLinkText?: InputMaybe<Scalars['String']['input']>;
  titleLinkUrl?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Schedule_Max_Fields = {
  __typename?: 'schedule_max_fields';
  addressLink?: Maybe<Scalars['String']['output']>;
  addressText?: Maybe<Scalars['String']['output']>;
  day?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  imageId?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  titleLinkText?: Maybe<Scalars['String']['output']>;
  titleLinkUrl?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "schedule" */
export type Schedule_Max_Order_By = {
  addressLink?: InputMaybe<Order_By>;
  addressText?: InputMaybe<Order_By>;
  day?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  imageId?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  titleLinkText?: InputMaybe<Order_By>;
  titleLinkUrl?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Schedule_Min_Fields = {
  __typename?: 'schedule_min_fields';
  addressLink?: Maybe<Scalars['String']['output']>;
  addressText?: Maybe<Scalars['String']['output']>;
  day?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  imageId?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  titleLinkText?: Maybe<Scalars['String']['output']>;
  titleLinkUrl?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "schedule" */
export type Schedule_Min_Order_By = {
  addressLink?: InputMaybe<Order_By>;
  addressText?: InputMaybe<Order_By>;
  day?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  imageId?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  titleLinkText?: InputMaybe<Order_By>;
  titleLinkUrl?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "schedule" */
export type Schedule_Mutation_Response = {
  __typename?: 'schedule_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Schedule>;
};

/** on_conflict condition type for table "schedule" */
export type Schedule_On_Conflict = {
  constraint: Schedule_Constraint;
  update_columns?: Array<Schedule_Update_Column>;
  where?: InputMaybe<Schedule_Bool_Exp>;
};

/** Ordering options when selecting data from "schedule". */
export type Schedule_Order_By = {
  addressLink?: InputMaybe<Order_By>;
  addressText?: InputMaybe<Order_By>;
  day?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  imageId?: InputMaybe<Order_By>;
  schedule_day?: InputMaybe<Schedule_Day_Order_By>;
  time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  titleLinkText?: InputMaybe<Order_By>;
  titleLinkUrl?: InputMaybe<Order_By>;
};

/** primary key columns input for table: schedule */
export type Schedule_Pk_Columns_Input = {
  title: Scalars['String']['input'];
};

/** select columns of table "schedule" */
export type Schedule_Select_Column =
  /** column name */
  | 'addressLink'
  /** column name */
  | 'addressText'
  /** column name */
  | 'day'
  /** column name */
  | 'details'
  /** column name */
  | 'imageId'
  /** column name */
  | 'time'
  /** column name */
  | 'title'
  /** column name */
  | 'titleLinkText'
  /** column name */
  | 'titleLinkUrl';

/** input type for updating data in table "schedule" */
export type Schedule_Set_Input = {
  addressLink?: InputMaybe<Scalars['String']['input']>;
  addressText?: InputMaybe<Scalars['String']['input']>;
  day?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['String']['input']>;
  time?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  titleLinkText?: InputMaybe<Scalars['String']['input']>;
  titleLinkUrl?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "schedule" */
export type Schedule_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Schedule_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Schedule_Stream_Cursor_Value_Input = {
  addressLink?: InputMaybe<Scalars['String']['input']>;
  addressText?: InputMaybe<Scalars['String']['input']>;
  day?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['String']['input']>;
  time?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  titleLinkText?: InputMaybe<Scalars['String']['input']>;
  titleLinkUrl?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "schedule" */
export type Schedule_Update_Column =
  /** column name */
  | 'addressLink'
  /** column name */
  | 'addressText'
  /** column name */
  | 'day'
  /** column name */
  | 'details'
  /** column name */
  | 'imageId'
  /** column name */
  | 'time'
  /** column name */
  | 'title'
  /** column name */
  | 'titleLinkText'
  /** column name */
  | 'titleLinkUrl';

export type Schedule_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Schedule_Set_Input>;
  /** filter the rows which have to be updated */
  where: Schedule_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "hero" */
  hero: Array<Hero>;
  /** fetch aggregated fields from the table: "hero" */
  hero_aggregate: Hero_Aggregate;
  /** fetch data from the table: "hero" using primary key columns */
  hero_by_pk?: Maybe<Hero>;
  /** fetch data from the table in a streaming manner: "hero" */
  hero_stream: Array<Hero>;
  /** fetch data from the table: "schedule" */
  schedule: Array<Schedule>;
  /** fetch aggregated fields from the table: "schedule" */
  schedule_aggregate: Schedule_Aggregate;
  /** fetch data from the table: "schedule" using primary key columns */
  schedule_by_pk?: Maybe<Schedule>;
  /** fetch data from the table: "schedule_day" */
  schedule_day: Array<Schedule_Day>;
  /** fetch aggregated fields from the table: "schedule_day" */
  schedule_day_aggregate: Schedule_Day_Aggregate;
  /** fetch data from the table: "schedule_day" using primary key columns */
  schedule_day_by_pk?: Maybe<Schedule_Day>;
  /** fetch data from the table in a streaming manner: "schedule_day" */
  schedule_day_stream: Array<Schedule_Day>;
  /** fetch data from the table in a streaming manner: "schedule" */
  schedule_stream: Array<Schedule>;
};


export type Subscription_RootHeroArgs = {
  distinct_on?: InputMaybe<Array<Hero_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hero_Order_By>>;
  where?: InputMaybe<Hero_Bool_Exp>;
};


export type Subscription_RootHero_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hero_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hero_Order_By>>;
  where?: InputMaybe<Hero_Bool_Exp>;
};


export type Subscription_RootHero_By_PkArgs = {
  title: Scalars['String']['input'];
};


export type Subscription_RootHero_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Hero_Stream_Cursor_Input>>;
  where?: InputMaybe<Hero_Bool_Exp>;
};


export type Subscription_RootScheduleArgs = {
  distinct_on?: InputMaybe<Array<Schedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Schedule_Order_By>>;
  where?: InputMaybe<Schedule_Bool_Exp>;
};


export type Subscription_RootSchedule_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Schedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Schedule_Order_By>>;
  where?: InputMaybe<Schedule_Bool_Exp>;
};


export type Subscription_RootSchedule_By_PkArgs = {
  title: Scalars['String']['input'];
};


export type Subscription_RootSchedule_DayArgs = {
  distinct_on?: InputMaybe<Array<Schedule_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Schedule_Day_Order_By>>;
  where?: InputMaybe<Schedule_Day_Bool_Exp>;
};


export type Subscription_RootSchedule_Day_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Schedule_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Schedule_Day_Order_By>>;
  where?: InputMaybe<Schedule_Day_Bool_Exp>;
};


export type Subscription_RootSchedule_Day_By_PkArgs = {
  day: Scalars['String']['input'];
};


export type Subscription_RootSchedule_Day_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Schedule_Day_Stream_Cursor_Input>>;
  where?: InputMaybe<Schedule_Day_Bool_Exp>;
};


export type Subscription_RootSchedule_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Schedule_Stream_Cursor_Input>>;
  where?: InputMaybe<Schedule_Bool_Exp>;
};

export type ScheduleQueryVariables = Exact<{ [key: string]: never; }>;


export type ScheduleQuery = { __typename?: 'query_root', hero: Array<{ __typename?: 'hero', alt: string, title: string, src: string, width: number, height: number }>, scheduleDays: Array<{ __typename?: 'schedule_day', day: string, date?: string | null, schedules: Array<{ __typename?: 'schedule', title: string, details?: string | null, titleLinkUrl?: string | null, titleLinkText?: string | null, time?: string | null, addressLink?: string | null, addressText?: string | null, imageId?: string | null }> }> };

export type HeroFieldsFragment = { __typename?: 'hero', alt: string, title: string, src: string, width: number, height: number };

export const HeroFieldsFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"heroFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"hero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]} as unknown as DocumentNode<HeroFieldsFragment, unknown>;
export const ScheduleDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Schedule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hero"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"Schedule","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"heroFields"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"scheduleDays"},"name":{"kind":"Name","value":"schedule_day"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Sort"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"day"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"schedules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"titleLinkUrl"}},{"kind":"Field","name":{"kind":"Name","value":"titleLinkText"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"addressLink"}},{"kind":"Field","name":{"kind":"Name","value":"addressText"}},{"kind":"Field","name":{"kind":"Name","value":"imageId"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"heroFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"hero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]} as unknown as DocumentNode<ScheduleQuery, ScheduleQueryVariables>;