function init() {
Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/e/2PACX-1vR55sgYjNVg8uYptas1_D7kkJvKxJbo7HgXmGemKCYO8MFWj4foR5HPbRJ9qTsKVVkELoUh1RnNSqik/pubhtml',
callback: function(data, tabletop) {
console.log(data)
},
simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
