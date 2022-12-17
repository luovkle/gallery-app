/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_send_picture_pictures_post } from '../models/Body_send_picture_pictures_post';
import type { PictureRead } from '../models/PictureRead';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * Search By Tag
     * @param tags
     * @param offset
     * @param limit
     * @returns PictureRead Successful Response
     * @throws ApiError
     */
    public static searchByTagPicturesGet(
        tags: Array<string>,
        offset?: number,
        limit: number = 10,
    ): CancelablePromise<Array<PictureRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pictures',
            query: {
                'offset': offset,
                'limit': limit,
                'tags': tags,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Send Picture
     * @param formData
     * @returns PictureRead Successful Response
     * @throws ApiError
     */
    public static sendPicturePicturesPost(
        formData: Body_send_picture_pictures_post,
    ): CancelablePromise<PictureRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/pictures',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
