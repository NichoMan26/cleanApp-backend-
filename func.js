const translit = (str) => {
  let latters = {
    а:'a',б:'b',в:'v',г:'g',д:'d',е:'e',ё:'e',ж:'zh',з:'z',и:'i',й:'j',
    к:'k',л:'l',м:'m',н:'n',о:'o',п:'p',р:'r',с:'s',т:'t',у:'u',ф:'f',
    х:'h',ц:'c',ч:'ch',ш:'sh',щ:'sh',ъ:'',ы:'y',ь:'',э:'je',ю:'ju',я:'ya',
    А:'A',Б:'B',В:'V',Г:'G',Д:'D',Е:'E',Ё:'E',Ж:'ZH',З:'Z',И:'I',Й:'J',
    К:'K',Л:'L',М:'M',Н:'N',О:'O',П:'P',Р:'R',С:'S',Т:'T',У:'U',Ф:'F',
    Х:'H',Ц:'C',Ч:'CH',Ш:'SH',Щ:'SH',Ъ:'',Ы:'Y',Ь:'',Э:'JE',Ю:'JU',Я:'YA',


    
  }
  let newStr = ''
  for(i = 0; i < str.length; i++){
    if(str[i] in latters){
      newStr += latters[str[i]]
      }
      else {
        newStr += str[i]
      }
    }
  return newStr
}
module.exports = translit