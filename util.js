/** Utility functions */
module.exports = {
    toTitleCase: function (s) {
        return s.toLowerCase().replace(/^(\w)|\s(\w)/g, c => c.toUpperCase());
    },

    /**
     * Converts a role mention (<@&roleId>) or role id to a role id
     * @param {String|module:"discord.js".Snowflake}  mention role mention (<@&roleId>) or role id
     * @return {module:"discord.js".Snowflake|null}   role id or null
     */
    roleMentionToId: function (mention) {
        if (/^<@&\d+>$/.test(mention)) {
            return /** @type {module:"discord.js".Snowflake|null} */ mention.match(/^<@&?(\d+)>$/)[1];
        }
        else if (/^\d+$/.test(mention)) {
            return mention;
        }
        else {
            return null;
        }
    },

    escapeRegExp: function (strToReplace) {
        return strToReplace.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    },

    getPermissionsString: function (permissionArray, rawString) {
        let permStr = "";
        if (!permissionArray || !permissionArray.length) return "";
        permissionArray.forEach((permission, index) => {
            permStr += `${rawString === true ? (index > 0 ? "+" : "") : "`"
                }${permission
                    .replace("ADMINISTRATOR", "Administrator")
                    .replace("CREATE_INSTANT_INVITE", "Create Instant Invite")
                    .replace("KICK_MEMBERS", "Kick Members")
                    .replace("BAN_MEMBERS", "Ban Members")
                    .replace("MANAGE_CHANNELS", "Manage Channels")
                    .replace("MANAGE_GUILD", "Manage Server")
                    .replace("ADD_REACTIONS", "Add Reactions")
                    .replace("VIEW_AUDIT_LOG", "View Audit Log")
                    .replace("VIEW_CHANNEL", "View Channel")
                    .replace("SEND_MESSAGES", "Send Messages")
                    .replace("SEND_TTS_MESSAGES", "Send Text-to-Speech Messages")
                    .replace("MANAGE_MESSAGES", "Manage Messages")
                    .replace("EMBED_LINKS", "Embed Links")
                    .replace("ATTACH_FILES", "Attach Files")
                    .replace("READ_MESSAGE_HISTORY", "Read Message History")
                    .replace("MENTION_EVERYONE", "Mention Everyone")
                    .replace("USE_EXTERNAL_EMOJIS", "Use External Emojis")
                    .replace("CONNECT", "Connect")
                    .replace("SPEAK", "Speak")
                    .replace("MUTE_MEMBERS", "Mute Members")
                    .replace("DEAFEN_MEMBERS", "Deafen Members")
                    .replace("MOVE_MEMBERS", "Move Members")
                    .replace("USE_VAD", "Use Voice Activation Detection")
                    .replace("CHANGE_NICKNAME", "Change Nickname")
                    .replace("MANAGE_NICKNAMES", "Manage Other Nicknames")
                    .replace("MANAGE_ROLES", "Manage Roles")
                    .replace("MANAGE_WEBHOOKS", "Manage Webhooks")
                    .replace("MANAGE_EMOJIS", "Manage Emojis")}${rawString === true ? "" : "` "
                }`;
        });
        return permStr.trim();
    },

    /**
   * checks if the given value is a number
   * @param {*} value the value to check against
   * @returns {Boolean} is number or not
   */
    isInt: function (value) {
        return !isNaN(value);
    },
}