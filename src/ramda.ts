import { APIGatewayEvent, Callback, Context } from 'aws-lambda'
import { pick } from 'ramda'
import 'source-map-support/register'


export async function handler(event: APIGatewayEvent, context: Context, callback: Callback) {

    return callback(null, pick(['pathParameters'], event))
}
