/**
 * OpenAPI definition
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { PageableObject } from './pageableObject';
import { SortObject } from './sortObject';
import { Contact } from './contact';


export interface PageContact { 
    totalPages?: number;
    totalElements?: number;
    pageable?: PageableObject;
    size?: number;
    content?: Array<Contact>;
    number?: number;
    sort?: Array<SortObject>;
    first?: boolean;
    last?: boolean;
    numberOfElements?: number;
    empty?: boolean;
}

