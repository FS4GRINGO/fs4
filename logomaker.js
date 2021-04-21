const logomaker = (prefix, GRINGO-BOT, GRINGO) => {
        return `
「 *${GRINGO-BOT}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creato {GRINGO}
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *LOGO MAKER*
  │
  ├─ ❏ ${prefix}marvellogo
  ├─ ❏ ${prefix}ninjalogo
  ├─ ❏ ${prefix}logowolf
  ├─ ❏ ${prefix}logowolf2
  ├─ ❏ ${prefix}phlogo
  ├─ ❏ ${prefix}neonlogo
  ├─ ❏ ${prefix}neonlogo2
  ├─ ❏ ${prefix}lionlogo
  ├─ ❏ ${prefix}pubglogo
  └─ ❏ ${prefix}jokerlogo`
}
exports.logomaker = logomaker
