function makeid(num = 4) {
  let result = "";
  let characters = "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=YZoWmKRC#Zympma8UHxZ-ifhzXCpbc_Oi6t5A2BxYVnKJJfVRWJY";
  var characters9 = characters.length;
  for (var i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters9));
  }
  return result;
}
module.exports = {makeid};
