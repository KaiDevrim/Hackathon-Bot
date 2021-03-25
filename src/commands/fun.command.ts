import { Command, CommandMessage, Guard, Description } from "@typeit/discord";
import { NotBot } from "../guards/NotABot.guard";
import { Logger } from "../services/logger.service";
import NekoClient = require("nekos.life");
import { COLOR } from "../enum/colors.enum";
import { MessageEmbed } from "discord.js";
import { Mention } from "../guards/Mention.guard";

function getMentioned(command: CommandMessage) {
    try {
        const mentioned = command.mentions.users.first();
        const guildMentioned = command.guild.member(mentioned);
        return guildMentioned ? guildMentioned.nickname : guildMentioned.user.username;
    } catch (error) {
        Logger.prototype.error("Undefined user");
        return "error";
    }
}
export abstract class Fun {

    logger = Logger.prototype.getInstance();
    neko = new NekoClient();
    api = "https://purrbot.site/api";
    @Command("kiss")
    @Description("Sends a kiss to another user. Must @ another user.")
    @Guard(NotBot)
    async kiss(command: CommandMessage): Promise<void> {
        this.logger.info("Sending kiss");
        const member = await command.guild.member(command.author);
        const author = member ? member.nickname : command.author.username;
        const user = getMentioned(command);

        const kisses = await (await this.neko.sfw.kiss()).url;
        const embed = new MessageEmbed()
            .setColor(COLOR.RANDOM)
            .setTitle(`${author} kisses ${user}`)
            .setImage(kisses)
            .setFooter("You both look cute");

        if (user == "error") { return; }
        else {

            command.reply(embed).then((messageSent) => {
                this.logger.info(`Sent a kiss : message id ${messageSent.id}`);
            });
        }
    }

    @Command("smug")
    @Description("Be smug")
    @Guard(NotBot)
    async smug(command: CommandMessage): Promise<void> {
        this.logger.info("Sending smug");

        const member = await command.guild.member(command.author);
        const author = member ? member.nickname : command.author.username;
        const smug = await (await this.neko.sfw.smug()).url;

        const embed = new MessageEmbed()
            .setColor(COLOR.RANDOM)
            .setTitle(`${author} is smug`)
            .setImage(smug)
            .setFooter("You look smug");

        command.reply(embed).then((messageSent) => {
            this.logger.info(`Sent smug : message id ${messageSent.id}`);
        });
    }

    @Command("baka")
    @Description("You are a baka")
    @Guard(NotBot)
    async baka(command: CommandMessage): Promise<void> {
        this.logger.info("Sending baka");

        const member = await command.guild.member(command.author);
        const author = member ? member.nickname : command.author.username;
        const baka = await (await this.neko.sfw.baka()).url;

        const embed = new MessageEmbed()
            .setColor(COLOR.RANDOM)
            .setTitle(`${author} is baka`)
            .setImage(baka)
            .setFooter("You look baka");

        command.reply(embed).then((messageSent) => {
            this.logger.info(`Sent baka : message id ${messageSent.id}`);
        });
    }

    @Command("pat")
    @Description("Pat another user. Must @ another user")
    @Guard(NotBot, Mention)
    async pat(command: CommandMessage): Promise<void> {
        this.logger.info("Sending pat");

        const member = await command.guild.member(command.author);
        const author = member ? member.nickname : command.author.username;
        const user = getMentioned(command);

        const pat = await (await this.neko.sfw.pat()).url;

        const embed = new MessageEmbed()
            .setColor(COLOR.RANDOM)
            .setTitle(`${author} patted ${user}`)
            .setImage(pat)
            .setFooter("You did a good pat!");

        if (user == "error") { return; }
        else {

            command.reply(embed).then((messageSent) => {
                this.logger.info(`Sent pat : message id ${messageSent.id}`);
            });
        }
    }

    @Command("hug")
    @Description("Hug another user. Must @ another user")
    @Guard(NotBot, Mention)
    async hug(command: CommandMessage): Promise<void> {
        this.logger.info("Sending hug");

        const member = await command.guild.member(command.author);
        const author = member ? member.nickname : command.author.username;
        const user = getMentioned(command);

        const hug = await (await this.neko.sfw.hug()).url;

        const embed = new MessageEmbed()
            .setColor(COLOR.RANDOM)
            .setTitle(`${author} hugged ${user}`)
            .setImage(hug)
            .setFooter("You gave a massive hug!");

        if (user == "error") { return; }
        else {

            command.reply(embed).then((messageSent) => {
                this.logger.info(`Sent a hug : message id ${messageSent.id}`);
            });
        }
    }

    @Command("slap")
    @Description("Slap another user. Must @ another user")
    @Guard(NotBot, Mention)
    async slap(command: CommandMessage): Promise<void> {
        this.logger.info("Sending slap");

        const member = await command.guild.member(command.author);
        const author = member ? member.nickname : command.author.username;
        const user = getMentioned(command);

        const slap = await (await this.neko.sfw.slap()).url;

        const embed = new MessageEmbed()
            .setColor(COLOR.RANDOM)
            .setTitle(`${author} slapped ${user}`)
            .setImage(slap)
            .setFooter("You slapped them hard!");

        if (user == "error") { return; }
        else {

            command.reply(embed).then((messageSent) => {
                this.logger.info(`Sent a slap : message id ${messageSent.id}`);
            });
        }
    }

    @Command("tickle")
    @Description("Tickle another user. Must @ another user")
    @Guard(NotBot, Mention)
    async tickle(command: CommandMessage): Promise<void> {
        this.logger.info("Sending slap");

        const member = await command.guild.member(command.author);
        const author = member ? member.nickname : command.author.username;
        const user = getMentioned(command);

        const tickle = await (await this.neko.sfw.tickle()).url;

        const embed = new MessageEmbed()
            .setColor(COLOR.RANDOM)
            .setTitle(`${author} tickled ${user}`)
            .setImage(tickle)
            .setFooter("You tickled them hard!");

        if (user == "error") { return; }
        else {

            command.reply(embed).then((messageSent) => {
                this.logger.info(`Sent a tickle : message id ${messageSent.id}`);
            });
        }
    }

    @Command("cuddle")
    @Description("Cuddle another user. Must @ another user")
    @Guard(NotBot, Mention)
    async cuddle(command: CommandMessage): Promise<void> {
        this.logger.info("Sending cuddle");

        const member = await command.guild.member(command.author);
        const author = member ? member.nickname : command.author.username;
        const user = getMentioned(command);

        const cuddle = await (await this.neko.sfw.cuddle()).url;

        const embed = new MessageEmbed()
            .setColor(COLOR.RANDOM)
            .setTitle(`${author} cuddled ${user}`)
            .setImage(cuddle)
            .setFooter("You cuddled them hard!");

        if (user == "error") { return; }
        else {

            command.reply(embed).then((messageSent) => {
                this.logger.info(`Sent a cuddle : message id ${messageSent.id}`);
            });
        }
    }
    @Command("poke")
    @Description("Poke another user. Must @ another user")
    @Guard(NotBot, Mention)
    async poke(command: CommandMessage): Promise<void> {
        this.logger.info("Sending poke");

        const member = await command.guild.member(command.author);
        const author = member ? member.nickname : command.author.username;
        const user = getMentioned(command);

        const poke = await (await this.neko.sfw.poke()).url;

        const embed = new MessageEmbed()
            .setColor(COLOR.RANDOM)
            .setTitle(`${author} poked ${user}`)
            .setImage(poke)
            .setFooter("You poked them hard!");

        if (user == "error") { return; }
        else {

            command.reply(embed).then((messageSent) => {
                this.logger.info(`Sent a poke : message id ${messageSent.id}`);
            });
        }
    }

    @Command("feed")
    @Description("Feed another user. Must @ another user")
    @Guard(NotBot, Mention)
    async feed(command: CommandMessage): Promise<void> {
        this.logger.info("Sending feed");

        const member = await command.guild.member(command.author);
        const author = member ? member.nickname : command.author.username;
        const user = getMentioned(command);

        const feed = await (await this.neko.sfw.feed()).url;

        const embed = new MessageEmbed()
            .setColor(COLOR.RANDOM)
            .setTitle(`${author} fed ${user}`)
            .setImage(feed)
            .setFooter("You fed them good food!");

        if (user === undefined) { return; }
        else {

            command.reply(embed).then((messageSent) => {
                this.logger.info(`Sent a feed : message id ${messageSent.id}`);
            });
        }
    }

    @Command("ping")
    @Description("Get latency of the bot")
    @Guard(NotBot)
    async ping(command: CommandMessage): Promise<void> {
        this.logger.info("Sending feed");
        const time = Date.now() - command.createdTimestamp;
        command.reply("Pong time is " + time).then((messageSent) => {
            this.logger.info(`Sent Ping : message id ${messageSent.id}`);
        });
    }

    @Command("dice")
    @Description("Roll a dice")
    @Guard(NotBot)
    async dice(command: CommandMessage): Promise<void> {
        this.logger.info("Sending dice");
        const diceRoll = Math.floor(Math.random() * 6) + 1;

        command.reply("You rolled a " + diceRoll).then((messageSent) => {
            this.logger.info(`Sent dice : message id ${messageSent.id}`);
        });
    }

    @Command("magic8")
    @Description("Get what the magic 8 ball says")
    @Guard(NotBot)
    async magic8(command: CommandMessage): Promise<void> {
        this.logger.info("Sending magic8");
        const options = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "Most likely.", "Outlook good.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.",
            "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];

        const random = Math.floor(Math.random() * options.length);


        command.reply("The magic8 ball says " + options[random]).then((messageSent) => {
            this.logger.info(`Sent magic8 : message id ${messageSent.id}`);
        });
    }

    @Command("kill")
    @Description("Kill another user. Uh Oh")
    @Guard(NotBot, Mention)
    async kill(command: CommandMessage): Promise<void> {
        this.logger.info("Sending kill");
        const options = ["barbecued", "disintegrated", "360-no-scoped",
            "eaten alive", "yeeted out of existence", "squashed", "smited", "dropped in the void"];
        const member = await command.guild.member(command.author);
        const author = member ? member.nickname : command.author.username;
        const user = getMentioned(command);

        const random = Math.floor(Math.random() * options.length);

        const embed = new MessageEmbed()
            .setColor(COLOR.RANDOM)
            .setTitle(`${author} was ${options[random]} by ${user}`)
            .setFooter("K-O!");

        if (user == "error") { return; }
        else {

            command.reply(embed).then((messageSent) => {
                this.logger.info(`Sent kill : message id ${messageSent.id}`);
            });
        }
    }
}