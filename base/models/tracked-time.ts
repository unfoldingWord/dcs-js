import { Issue } from "./issue";

/**
 * TrackedTime worked time for an issue  pr
 * @export
 * @interface TrackedTime
 */

export interface TrackedTime {
  /**
   *
   * @type {string}
   * @memberof TrackedTime
   */
  created: string;
  /**
   *
   * @type {number}
   * @memberof TrackedTime
   */
  id: number;
  /**
   *
   * @type {Issue}
   * @memberof TrackedTime
   */
  issue: Issue;
  /**
   * deprecated (only for backwards compatibility)
   * @type {number}
   * @memberof TrackedTime
   */
  issue_id: number;
  /**
   * Time in seconds
   * @type {number}
   * @memberof TrackedTime
   */
  time: number;
  /**
   * deprecated (only for backwards compatibility)
   * @type {number}
   * @memberof TrackedTime
   */
  user_id: number;
  /**
   *
   * @type {string}
   * @memberof TrackedTime
   */
  user_name: string;
}