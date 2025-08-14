module.exports.config = {
  'name': "goiadmin",
  'version': "1.0.0",
  'hasPermssion': 0x0,
  'credits': "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  'description': "Bot will rep ng tag admin or rep ng tagbot ",
  'commandCategory': "Other",
  'usages': '',
  'cooldowns': 0x1
};
module.exports.handleEvent = function ({
  api: _0x242514,
  event: _0x1ec2d5
}) {
  if (_0x1ec2d5.senderID !== "100082962740878") {
    var _0x2dc479 = ["100082962740878"];
    for (const _0x2bee35 of _0x2dc479) {
      if (Object.keys(_0x1ec2d5.mentions) == _0x2bee35) {
        var _0x3a7db6 = ["সর সামনে থেকে🤪"];
        return _0x242514.sendMessage({
          'body': _0x3a7db6[Math.floor(Math.random() * _0x3a7db6.length)]
        }, _0x1ec2d5.threadID, _0x1ec2d5.messageID);
      }
    }
  }
};
module.exports.run = async function ({}) {};
                                     
