import { Type } from "class-transformer"
import { IsEmail, IsOptional, IsString, ValidateNested } from "class-validator"
import {
  DateComparisonOperator,
  FindParams,
  extendedFindParamsMixin,
} from "../../../types/common"
import { IsType } from "../../../utils"

export class AdminGetInvitesInviteParams extends FindParams {}

export class AdminGetInvitesParams extends extendedFindParamsMixin({
  limit: 50,
  offset: 0,
}) {
  /**
   * IDs to filter users by.
   */
  @IsOptional()
  @IsType([String, [String]])
  id?: string | string[]

  /**
   * The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
   */
  @IsString()
  @IsOptional()
  order?: string

  /**
   * Date filters to apply on the users' `update_at` date.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => DateComparisonOperator)
  updated_at?: DateComparisonOperator

  /**
   * Date filters to apply on the customer users' `created_at` date.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => DateComparisonOperator)
  created_at?: DateComparisonOperator

  /**
   * Date filters to apply on the users' `deleted_at` date.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => DateComparisonOperator)
  deleted_at?: DateComparisonOperator

  /**
   * Filter to apply on the users' `email` field.
   */
  @IsOptional()
  @IsString()
  email?: string

  /**
   * Comma-separated fields that should be included in the returned users.
   */
  @IsOptional()
  @IsString()
  fields?: string
}

export class AdminCreateInviteRequest {
  @IsEmail()
  email: string
}
