const axios = require("axios");
const { builtinModules } = require("module");

module.exports = {
  async send_message(id, token, body) {
    const { DISCORD_USERNAME, DISCORD_AVATAR_URL } = process.env;
    const discordWebhookUrl = `
          https://discord.com/api/webhooks/${id}/${token}
          `;
    const discordBody = {
      content: `@infra : ${body.title} \n --------- \n ${body.body}`,
      username: DISCORD_USERNAME,
      avatar_url: DISCORD_AVATAR_URL,
    };
    return await axios.post(discordWebhookUrl, discordBody);
  },
};
