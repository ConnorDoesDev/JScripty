const util = {};

//util.toTitleCase = (s) => {
//    return s.toLowerCase().replace(/^(\w)|\s(\w)/g, c => c.toUpperCase());
//}

/**
 * Converts a role mention (<@&roleId>) or role id to a role id
 * @param {String|module:"discord.js".Snowflake}  mention role mention (<@&roleId>) or role id
 * @return {module:"discord.js".Snowflake|null}   role id or null
 */
util.roleMentionToId = (mention) => {
    if (/^<@&\d+>$/.test(mention)) {
        return /** @type {module:"discord.js".Snowflake|null} */ mention.match(/^<@&?(\d+)>$/)[1];
    }
    else if(/^\d+$/.test(mention)) {
        return mention;
    }
    else {
        return null;
    }
};