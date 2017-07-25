import { APIGatewayEvent, Callback, Context } from 'aws-lambda'
import 'source-map-support/register'
import pick = require('lodash/pick')


export async function handler(event: APIGatewayEvent, context: Context, callback: Callback) {

    return callback(null, pick(event, ['pathParameters']))
}
