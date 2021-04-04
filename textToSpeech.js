const gTTS = require('gtts')
const mpg123 = require('mpg123')
const path = require('path')

const textToSpeech= (text, fileTempName) => {
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
    const filePath = `${path.join(__dirname, fileName)}.mp3`
    player.play(filePath)
  }

  textToSpeech(text, fileTempName)
}

module.exports = textToSpeech
