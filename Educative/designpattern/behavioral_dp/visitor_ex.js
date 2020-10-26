class RockMusicVisitor {
  visit(musicLibrary) {
    return musicLibrary.library
      .filter((song) => song.genre === "Rock")
      .map((song) => song.name)
  }
}

class Song {
  constructor(name, genre) {
    this.name = name
    this.genre = genre
  }

  getName() {
    return this.name
  }

  getGenre() {
    return this.genre
  }
}

class MusicLibrary {
  constructor() {
    this.library = []
  }

  addSong(song) {
    this.library.push(song)
  }

  accept(visitor) {
    return visitor.visit(this)
  }
}

var rockMusicVisitor = new RockMusicVisitor()
var song1 = new Song("Bohemian Rhapsody", "Rock")
var song2 = new Song("Stairway to Heaven", "Rock")
var song3 = new Song("Oops I did it again", "Pop")
var song4 = new Song("Crazy", "Country")
var musicLibrary = new MusicLibrary()

musicLibrary.addSong(song1)
musicLibrary.addSong(song2)
musicLibrary.addSong(song3)
musicLibrary.addSong(song4)
console.log(musicLibrary.accept(rockMusicVisitor))
