(function(global) {
    var albums = [
        {
            "id":1,
            "title":"Absent Lovers: Live in Montreal",
            "group":"King Crimson",
            "release_date":"6/23/98",
            "no_of_discs":2,
            "wiki_link":"http://en.wikipedia.org/wiki/Absent_Lovers:_Live_in_Montreal",
            "recording_date":"7/11/84"
        },
        {
            "id":2,
            "title":"B'Boom: Live in Argentina",
            "group":"King Crimson",
            "release_date":"8/22/95",
            "no_of_discs":2,
            "wiki_link":"http://en.wikipedia.org/wiki/B%27Boom:_Live_in_Argentina",
            "recording_date":""
        },
        {
            "id":3,
            "title":"The Beat Club: Bremen",
            "group":"King Crimson",
            "release_date":"2/1/99",
            "no_of_discs":1,
            "wiki_link":"http://en.wikipedia.org/wiki/The_Beat_Club,_Bremen",
            "recording_date":"10/17/72"
        },
        {
            "id":4,
            "title":"Earthbound",
            "group":"King Crimson",
            "release_date":"6/9/72",
            "no_of_discs":1,
            "wiki_link":"http://en.wikipedia.org/wiki/Earthbound_(King_Crimson_album)",
            "recording_date":""
        },
        {
            "id":5,
            "title":"Elektrik: Live in Japan",
            "group":"King Crimson",
            "release_date":"10/1/03",
            "no_of_discs":1,
            "wiki_link":"http://en.wikipedia.org/wiki/EleKtrik:_Live_in_Japan",
            "recording_date":"4/16/03"
        },
        {
            "id":6,
            "title":"Epitaph",
            "group":"King Crimson",
            "release_date":"1/13/97",
            "no_of_discs":4,
            "wiki_link":"http://en.wikipedia.org/wiki/Epitaph_(King_Crimson_album)",
            "recording_date":""
        },
        {
            "id":7,
            "title":"The Great Deceiver",
            "group":"King Crimson",
            "release_date":"10/30/92",
            "no_of_discs":4,
            "wiki_link":"http://en.wikipedia.org/wiki/The_Great_Deceiver_(King_Crimson_album)",
            "recording_date":""
        },
        {
            "id":8,
            "title":"Live at Plymouth Guildhall",
            "group":"King Crimson",
            "release_date":"12/1/00",
            "no_of_discs":2,
            "wiki_link":"http://en.wikipedia.org/wiki/King_Crimson_Live_at_Plymouth_Guildhall",
            "recording_date":"5/11/71"
        },
        {
            "id":9,
            "title":"Live at Summit Studios",
            "group":"King Crimson",
            "release_date":"2/1/00",
            "no_of_discs":1,
            "wiki_link":"http://en.wikipedia.org/wiki/King_Crimson_Live_at_Summit_Studios",
            "recording_date":"3/12/72"
        },
        {
            "id":10,
            "title":"Live in Hyde Park, London",
            "group":"King Crimson",
            "release_date":"7/1/02",
            "no_of_discs":1,
            "wiki_link":"http://en.wikipedia.org/wiki/King_Crimson_Live_in_Hyde_Park,_London",
            "recording_date":"7/5/69"
        },
        {
            "id":11,
            "title":"Live in Mainz",
            "group":"King Crimson",
            "release_date":"2/1/01",
            "no_of_discs":1,
            "wiki_link":"http://en.wikipedia.org/wiki/King_Crimson_Live_in_Mainz",
            "recording_date":"3/30/74"
        },
        {
            "id":12,
            "title":"On Broadway",
            "group":"King Crimson",
            "release_date":"6/1/99",
            "no_of_discs":2,
            "wiki_link":"http://en.wikipedia.org/wiki/King_Crimson_on_Broadway",
            "recording_date":""
        },
        {
            "id":13,
            "title":"Ladies of the Road",
            "group":"King Crimson",
            "release_date":"11/12/02",
            "no_of_discs":2,
            "wiki_link":"http://en.wikipedia.org/wiki/Ladies_of_the_Road",
            "recording_date":""
        },
        {
            "id":14,
            "title":"Level Five",
            "group":"King Crimson",
            "release_date":"11/9/01",
            "no_of_discs":1,
            "wiki_link":"http://en.wikipedia.org/wiki/Level_Five_(EP)",
            "recording_date":""
        },
        {
            "id":15,
            "title":"Live at Cap D'Adge",
            "group":"King Crimson",
            "release_date":"4/1/99",
            "no_of_discs":1,
            "wiki_link":"http://en.wikipedia.org/wiki/Live_at_Cap_D%27Agde",
            "recording_date":""
        },
        {
            "id":16,
            "title":"Live at Fillmore East",
            "group":"King Crimson",
            "release_date":"2/1/04",
            "no_of_discs":1,
            "wiki_link":"http://en.wikipedia.org/wiki/Live_at_Fillmore_East_(King_Crimson_album)",
            "recording_date":""
        },
        {
            "id":17,
            "title":"Live in Jacksonville",
            "group":"King Crimson",
            "release_date":"12/1/98",
            "no_of_discs":1,
            "wiki_link":"http://en.wikipedia.org/wiki/Live_at_Jacksonville",
            "recording_date":"2/26/72"
        },
        {
            "id":18,
            "title":"Live at Moles Club",
            "group":"King Crimson",
            "release_date":"6/1/00",
            "no_of_discs":1,
            "wiki_link":"http://en.wikipedia.org/wiki/Live_at_Moles_Club,_Bath",
            "recording_date":""
        },
        {
            "id":19,
            "title":"Live at the Jazz Caf�",
            "group":"ProjeKct One",
            "release_date":"12/1/98",
            "no_of_discs":1,
            "wiki_link":"http://en.wikipedia.org/wiki/Live_at_the_Jazz_Caf%C3%A9",
            "recording_date":""
        },
        {
            "id":20,
            "title":"Live at the Marquee",
            "group":"King Crimson",
            "release_date":"10/1/98",
            "no_of_discs":1,
            "wiki_link":"http://en.wikipedia.org/wiki/Live_at_the_Marquee_(King_Crimson_album)",
            "recording_date":""
        },
        {
            "id":21,
            "title":"Live at the Zoom Club",
            "group":"King Crimson",
            "release_date":"5/1/02",
            "no_of_discs":2,
            "wiki_link":"http://en.wikipedia.org/wiki/Live_at_the_Zoom_Club",
            "recording_date":""
        },
        {
            "id":22,
            "title":"Live in Austin",
            "group":"ProjeKct Three",
            "release_date":"10/1/04",
            "no_of_discs":1,
            "wiki_link":"http://en.wikipedia.org/wiki/Live_in_Austin,_TX_(ProjeKct_Three_album)",
            "recording_date":"3/25/99"
        },
        {
            "id":23,
            "title":"Live in Berkeley",
            "group":"King Crimson",
            "release_date":"5/1/01",
            "no_of_discs":1,
            "wiki_link":"http://en.wikipedia.org/wiki/Live_in_Berkeley,_CA",
            "recording_date":"8/13/82"
        },
        {
            "id":24,
            "title":"Live in Brighton",
            "group":"King Crimson",
            "release_date":"2/1/05",
            "no_of_discs":2,
            "wiki_link":"http://en.wikipedia.org/wiki/Live_in_Brighton",
            "recording_date":"10/16/71"
        },
        {
            "id":25,
            "title":"Live in Central Park",
            "group":"King Crimson",
            "release_date":"4/1/00",
            "no_of_discs":1,
            "wiki_link":"http://en.wikipedia.org/wiki/Live_in_Central_Park,_NYC",
            "recording_date":"4/1/74"
        },
        {
            "id":26,
            "title":"Live in Detroit",
            "group":"King Crimson",
            "release_date":"10/1/01",
            "no_of_discs":2,
            "wiki_link":"http://en.wikipedia.org/wiki/Live_in_Detroit,_MI",
            "recording_date":"11/13/71"
        },
        {
            "id":27,
            "title":"Live in Guildford",
            "group":"King Crimson",
            "release_date":"10/1/03",
            "no_of_discs":1,
            "wiki_link":"http://en.wikipedia.org/wiki/Live_in_Guildford",
            "recording_date":"11/13/72"
        },
        {
            "id":28,
            "title":"Live in Heidelberg",
            "group":"King Crimson",
            "release_date":"9/1/04",
            "no_of_discs":1,
            "wiki_link":"http://en.wikipedia.org/wiki/Live_in_Heidelberg",
            "recording_date":"3/29/74"
        },
        {
            "id":29,
            "title":"Live in Nashville",
            "group":"King Crimson",
            "release_date":"2/1/02",
            "no_of_discs":1,
            "wiki_link":"http://en.wikipedia.org/wiki/Live_in_Nashville,_TN",
            "recording_date":"11/9/01"
        },
        {
            "id":30,
            "title":"Live in Northampton",
            "group":"ProjeKct Two",
            "release_date":"6/1/01",
            "no_of_discs":1,
            "wiki_link":"http://en.wikipedia.org/wiki/Live_in_Northampton,_MA",
            "recording_date":"4/1/98"
        },
        {
            "id":31,
            "title":"Live in Orlando",
            "group":"King Crimson",
            "release_date":"6/1/03",
            "no_of_discs":2,
            "wiki_link":"http://en.wikipedia.org/wiki/Live_in_Orlando,_FL",
            "recording_date":"2/27/72"
        },
        {
            "id":32,
            "title":"Live in Philadelphia",
            "group":"King Crimson",
            "release_date":"5/1/04",
            "no_of_discs":1,
            "wiki_link":"http://en.wikipedia.org/wiki/Live_in_Philadelphia,_PA",
            "recording_date":"7/30/82"
        },
        {
            "id":33,
            "title":"Live in San Francisco",
            "group":"ProjeKct Four",
            "release_date":"8/1/99",
            "no_of_discs":1,
            "wiki_link":"http://en.wikipedia.org/wiki/Live_in_San_Francisco_(ProjeKct_Four_album)",
            "recording_date":"11/1/98"
        },
        {
            "id":34,
            "title":"Live in Warsaw",
            "group":"King Crimson",
            "release_date":"6/1/05",
            "no_of_discs":2,
            "wiki_link":"http://en.wikipedia.org/wiki/Live_in_Warsaw,_Poland",
            "recording_date":"6/11/00"
        },
        {
            "id":35,
            "title":"Masque",
            "group":"ProjeKct Three",
            "release_date":"8/18/99",
            "no_of_discs":1,
            "wiki_link":"http://en.wikipedia.org/wiki/Masque_(King_Crimson_album)",
            "recording_date":""
        },
        {
            "id":36,
            "title":"The Night Watch",
            "group":"King Crimson",
            "release_date":"6/20/1997",
            "no_of_discs":2,
            "wiki_link":"http://en.wikipedia.org/wiki/The_Night_Watch_(album)",
            "recording_date":"11/23/73"
        },
        {
            "id":37,
            "title":"Thrakattak",
            "group":"King Crimson",
            "release_date":"5/21/96",
            "no_of_discs":1,
            "wiki_link":"http://en.wikipedia.org/wiki/Thrakattak",
            "recording_date":""
        },
        {
            "id":38,
            "title":"USA",
            "group":"King Crimson",
            "release_date":"5/3/75",
            "no_of_discs":2,
            "wiki_link":"http://en.wikipedia.org/wiki/USA_(album)",
            "recording_date":"6/28/74"
        },
        {
            "id":39,
            "title":"VROOOM VROOOM",
            "group":"King Crimson",
            "release_date":"11/13/01",
            "no_of_discs":2,
            "wiki_link":"http://en.wikipedia.org/wiki/Vrooom_Vrooom",
            "recording_date":""
        }
    ];

    global.exports['albums'] = albums.slice();
} (window));