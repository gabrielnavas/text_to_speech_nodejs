const gTTS = require('gtts')
const mpg123 = require('mpg123')
const path = require('path')

const textToSpeech= (text) => {
  const textToSpeech = (text, fileName) => {
    var gtts = new gTTS(text, 'en')
    const fileNameWithExtension = `${fileName}.mp3`
    gtts.save(fileNameWithExtension, (err, result) => {
      if(err) { throw new Error(err) }
      playMp3(fileName)
    })
  }
  
  const playMp3 = (fileName) => {
    const player = new mpg123.MpgPlayer();
    player.play(`${path.join(__dirname, fileName)}.mp3`)
  }

  const fileTempName = 'fileTemp'
  textToSpeech(text, 'arq')
}

module.exports = textToSpeech
