const Command = require('./command')

module.exports = class Timer extends Command {

    static match(message){
        return message.content.startsWith('lg!timer')
    }


    static action(message){
        let args = message.content.split(' ')
        args.shift()
        message.channel.send('\@Villageois \r Vous avez ' + args.join(' ')+' minutes pour d\ébattre <#337631848018477056>')
    }

}
