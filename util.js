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

    /**
   * checks if the given value is a number
   * @param {*} value the value to check against
   * @returns {Boolean} is number or not
   */
    isInt: function (value) {
        return !isNaN(value);
    },
}
