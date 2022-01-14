/**
 * @openapi
 * /5:
 *   get:
 *      summary: 커피목록조회 가져오기
 *      tags: [Coffee]
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
 *                           name:
 *                              type: string
 *                              example: 아메리카노
 *                           kcal:
 *                              type: int
 *                              example: 5
 */