/**
 * @openapi
 * /users:
 *   get:
 *      summary: 회원목록조회 가져오기
 *      tags: [User]
 *      parameters:
 *          - in: query
 *            name: name
 *            type: string
 *      responses:
 *          200:
 *              description: 성공
 *              content:
 *                  application/json:
 *                      schema: 
 *                        type: object
 *                        properties:
 *                           email:
 *                              type: string
 *                              example: fff@naver.com
 *                           name:
 *                              type: string
 *                              example: 둘리
 *                           phone:
 *                              type: string
 *                              example: 01058586464
 *                           personal:
 *                              type: string
 *                              example: 200125-4545698
 *                           perfer:
 *                              type: string
 *                              example: https://nate.com
 */