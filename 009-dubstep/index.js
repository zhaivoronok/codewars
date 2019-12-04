// https://www.codewars.com/kata/dubstep/javascript

function songDecoder(song) {
  return song.split('WUB').filter(e => e !== '').join(' ');
}