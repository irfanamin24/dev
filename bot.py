import discord
import os

TOKEN = os.getenv("MTIzMjE4NjczMzI4MjU5NDg2Ng.GvyW3Z.2ch9rSIeIbDcsMr86xMlR6Gph9JC4_DQZdnWhs")  # Menggunakan environment variable
intents = discord.Intents.default()
client = discord.Client(intents=intents)

@client.event
async def on_ready():
    print(f'Bot {client.user} siap!')

@client.event
async def on_message(message):
    if message.content.startswith("!ping"):
        await message.channel.send("Pong!")

client.run(TOKEN)
