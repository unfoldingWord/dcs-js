/* tslint:disable */
/* eslint-disable */
/**
 * DCS (Gitea) API.
 * This documentation describes the DCS (Gitea) API.
 *
 * OpenAPI spec version: 1.16.7+dcs
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Comment } from './comment';
import { Issue } from './issue';
import { Label } from './label';
import { Milestone } from './milestone';
import { Team } from './team';
import { TrackedTime } from './tracked-time';
import { User } from './user';
/**
 * TimelineComment represents a timeline comment (comment of any type) on a commit or issue
 * @export
 * @interface TimelineComment
 */
export interface TimelineComment {
    /**
     * 
     * @type {User}
     * @memberof TimelineComment
     */
    assignee?: User;
    /**
     * 
     * @type {Team}
     * @memberof TimelineComment
     */
    assigneeTeam?: Team;
    /**
     * 
     * @type {string}
     * @memberof TimelineComment
     */
    body?: string;
    /**
     * 
     * @type {Date}
     * @memberof TimelineComment
     */
    createdAt?: Date;
    /**
     * 
     * @type {Issue}
     * @memberof TimelineComment
     */
    dependentIssue?: Issue;
    /**
     * 
     * @type {string}
     * @memberof TimelineComment
     */
    htmlUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof TimelineComment
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof TimelineComment
     */
    issueUrl?: string;
    /**
     * 
     * @type {Label}
     * @memberof TimelineComment
     */
    label?: Label;
    /**
     * 
     * @type {Milestone}
     * @memberof TimelineComment
     */
    milestone?: Milestone;
    /**
     * 
     * @type {string}
     * @memberof TimelineComment
     */
    newRef?: string;
    /**
     * 
     * @type {string}
     * @memberof TimelineComment
     */
    newTitle?: string;
    /**
     * 
     * @type {Milestone}
     * @memberof TimelineComment
     */
    oldMilestone?: Milestone;
    /**
     * 
     * @type {number}
     * @memberof TimelineComment
     */
    oldProjectId?: number;
    /**
     * 
     * @type {string}
     * @memberof TimelineComment
     */
    oldRef?: string;
    /**
     * 
     * @type {string}
     * @memberof TimelineComment
     */
    oldTitle?: string;
    /**
     * 
     * @type {number}
     * @memberof TimelineComment
     */
    projectId?: number;
    /**
     * 
     * @type {string}
     * @memberof TimelineComment
     */
    pullRequestUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof TimelineComment
     */
    refAction?: string;
    /**
     * 
     * @type {Comment}
     * @memberof TimelineComment
     */
    refComment?: Comment;
    /**
     * commit SHA where issue/PR was referenced
     * @type {string}
     * @memberof TimelineComment
     */
    refCommitSha?: string;
    /**
     * 
     * @type {Issue}
     * @memberof TimelineComment
     */
    refIssue?: Issue;
    /**
     * whether the assignees were removed or added
     * @type {boolean}
     * @memberof TimelineComment
     */
    removedAssignee?: boolean;
    /**
     * 
     * @type {User}
     * @memberof TimelineComment
     */
    resolveDoer?: User;
    /**
     * 
     * @type {number}
     * @memberof TimelineComment
     */
    reviewId?: number;
    /**
     * 
     * @type {TrackedTime}
     * @memberof TimelineComment
     */
    trackedTime?: TrackedTime;
    /**
     * 
     * @type {string}
     * @memberof TimelineComment
     */
    type?: string;
    /**
     * 
     * @type {Date}
     * @memberof TimelineComment
     */
    updatedAt?: Date;
    /**
     * 
     * @type {User}
     * @memberof TimelineComment
     */
    user?: User;
}
