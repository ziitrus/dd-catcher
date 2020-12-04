# dd-catcher
---

## Using

### On datadog w Discord

 - Go into integrations page.
 - Add "webhooks" integration
 - Go into Discord
 - Settings of your channel
 - Create a webhook
 - Copy the url
 - and Keep the ID, and Token of you webhook
 - `https://discord.com/api/webhooks/<this_part>/<this_part>`
 - Into the webhooks integration setting
 - - Add a new one
 - - Name it as you want
 - - In the Url input add
 - - ```https://<whatever.com>/hook/<discord_webhook_id>/<discord_webhook_token>```
 - Into your monitor alert page
 - Add a new one
 - and in notify part add
 - @webhook-<name_of_your_webhook>
 - Test notification
 - Done
 - 
### For more

if you want to customize your bot, you can add a name and a avatar url with env var

```
DISCORD_USERNAME = String
DISCORD_AVATAR_URL = String
```