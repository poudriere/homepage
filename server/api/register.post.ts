import { Redis } from "ioredis";
import { MailcowApiClient } from "mailcow-api";

const redis = new Redis();

export default defineEventHandler(async (event) => {
  const tokens = await redis.lrange("tokens", 0, -1);
  const body = await readBody(event);

  if(tokens.includes(body.token)) {
    try {
      const mcc = new MailcowApiClient(process.env.MAILCOW_API_BASEURL, process.env.MAILCOW_API_KEY);

      let r = await mcc.addMailbox({
        domain: "poudriere.be",
        local_part: body.local_part,
        name: body.full_name,
        password: body.password,
        qota: 1024,
        active: 1
      });
      
      if(!r) {
        throw createError({
          statusCode: 400,
          statusMessage: "Error while creating mailbox. Maybe it alerady exists."
        });
      }

      return "Ok"
    } catch (e) {
      return e
    }
  } else {
    throw createError({
      statusCode: 401,
      statusMessage: 'Token invalid',
    })
  }
})
