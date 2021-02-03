const help = (prefix) => {
	return ` *Sticker Comandos* 
command : *${prefix}sticker* or *${prefix}stiker*
desc : converte imagem/gif/video em sticker
usage : reply image/gif/video, or send image/gif/video with caption\n
command : *${prefix}sticker nobg* or *${prefix}stiker nobg*
desc : converter imagem em sticker removendo o fundo
usage : reply image, or send image with caption\n
command : *${prefix}toimg*
desc : converte sticker em imagem
usage : reply sticker\n
command : *${prefix}tsticker* or *${prefix}tstiker*
desc : converte texto em sticker
usage : *${prefix}tsticker text in here*\n
> *Meme Commands* <
command : *${prefix}meme*
desc : random meme images [english]
usage : just send the command\n
command : *${prefix}memeindo*
desc : random meme images [indo]
usage : just send the command\n
> *Others Commands* <
command : *${prefix}gtts*
desc : converte texto em audio
usage : *${prefix}gtts [cc] [text]*\nexample : *${prefix}gtts ja On2-chan*\n
command : *${prefix}loli*
desc : random loli images
usage : just send the command\n
command : *${prefix}nsfwloli*
desc : random nsfw loli images
usage : just send the command\n
command : *${prefix}url2img*
desc : tirar screenshots da web
usage : *${prefix}url2img [tipe] [url]*\n
command : *${prefix}simi*
desc : sua mensagem será respondida por simi
usage : *${prefix}simi yourmessage*\n
command : *${prefix}ocr*
desc : pegue o texto na foto
usage : reply image, or send image with caption\n
command : *${prefix}wait*
desc : pesquisar anime com imagem [Que anime é isso / aquilo]
usage : reply image, or send image with caption\n
command : *${prefix}setprefix*
desc : substituir prefixo
usage : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
note : Este comando só pode ser usado pelo proprietário do bot\n
> *Group Comands* <
command : *${prefix}add*
desc : adicionar membro ao grupo
usage : *${prefix}add 55889xxxxxxxx*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}kick*
desc : remover membros do grupo
usage : *${prefix}kick @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}promote*
desc : tornar o membro do grupo como administrador do grupo
usage : *${prefix}promote @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}demote*
desc : tornar o adm como membro do grupo
usage : *${prefix}demote @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}linkgroup*
desc : pegue o link do grupo
usage : just send the command
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}leave*
desc : Faça o bot sair do grupo
usage : just send the command
note : Só pode ser usado por adms de grupo e proprietário do bot\n
command : *${prefix}tagall*
desc : marca todos os membros do grupo, incluindo adms
usage : just send the command
note : Este comando pode ser usado se você for um administrador de grupo\n
command : *${prefix}simih*
desc : ative o modo simi no grupo
usage : *${prefix}simih 1* to activate simi mode and *${prefix}simih 0* to deactivate simi mode
note : Este comando pode ser usado se você for um administrador de grupo\n`
}

exports.help = help
