import {BandArray} from "./domain/bands";

export const BANDARRAY = [
    {
        id: 1,
        bandName: "Poets of the Fall",
        albums: [
            {
                id: 1,
                title: "Jealous Gods",
                thumbnail: '../images/Albums/PoetsOfTheFall/JealousGods.jpg',
                releaseDate: 2014,
                songs:
                    [
                        {songTitle: "Daze", rating: 3, inConcert: true, location: "Glasgow, Scotland", date: 2017, venue: "O2 ABC"},
                        {songTitle: "Jealous Gods", rating: 5, inConcert: false},
                        {songTitle: "Rumors", rating: 4, inConcert: false},
                        {songTitle: "Brighter Than the Sun", rating: 4, inConcert: false},
                        {songTitle: "Love Will Come to You", rating: 5, inConcert: false},
                        {songTitle: "Rouge", rating: 1, inConcert: false},
                        {songTitle: "Rebirth", rating: 5, inConcert: false},
                        {songTitle: "Hounds to Hamartia", rating: 5, inConcert: false},
                        {songTitle: "Clear Blue Sky", rating: 4, inConcert: false},
                        {songTitle: "Choice Millionaire", rating: 3, inConcert: false},
                        {songTitle: "Nothing Stays the Same", rating: 3, inConcert: false},
                    ],
                },

            {
                id: 2,
                title: "Clearview",
                thumbnail: '../images/Albums/PoetsOfTheFall/Clearview.jpg',
                releaseDate: 2016,
                songs: [
                        {songTitle: "Drama for Life", rating: 3, inConcert: true, location: "Glasgow, Scotland", date: 2017, venue: "O2 ABC"},
                        {songTitle: "The Game", rating: 5, inConcert: true, location: "Glasgow, Scotland", date: 2017, venue: "O2 ABC"},
                        {songTitle: "The Child in Me", rating: 4, inConcert: true, location: "Glasgow, Scotland", date: 2017, venue: "O2 ABC"},
                        {songTitle: "Once Upon a Playground Rainy", rating: 4, inConcert: true, location: "Glasgow, Scotland", date: 2017, venue: "O2 ABC"},
                        {songTitle: "Children of the Sun", rating: 5, inConcert: true, location: "Glasgow, Scotland", date: 2017, venue: "O2 ABC"},
                        {songTitle: "Shadow Play", rating: 1, inConcert: false},
                        {songTitle: "Center Stage", rating: 5, inConcert: false},
                        {songTitle: "The Labyrinth", rating: 5, inConcert: false},
                        {songTitle: "Crystalline", rating: 4, inConcert: false},
                        {songTitle: "Moonlight Kissed", rating: 3, inConcert: false},
                        ]
            },

            {
                id: 3,
                title: "Twilight Theatre",
                thumbnail: '../images/Albums/PoetsOfTheFall/TwilightTheater.jpg',
                releaseDate: 2010,
                songs: [
                        {songTitle: "Dreaming Wide Awake", rating: 4, inConcert: true, location: "Glasgow, Scotland", date: 2017, venue: "O2 ABC"},
                        {songTitle: "War", rating: 5, inConcert: true, location: "Glasgow, Scotland", date: 2017, venue: "O2 ABC"},
                        {songTitle: "Change", rating: 3, inConcert: false},
                        {songTitle: "15 Min Flame", rating: 3, inConcert: false},
                        {songTitle: "Given and Denied", rating: 5, inConcert: false},
                        {songTitle: "Rewind", rating: 5, inConcert: false},
                        {songTitle: "Dying to Live", rating: 3, inConcert: false},
                        {songTitle: "You're Still Here", rating: 5, inConcert: false},
                        {songTitle: "Smoke and Mirrors", rating: 4, inConcert: false},
                        {songTitle: "Heal My Wounds", rating: 5, inConcert: false},
                        ]
            },

            {
                id: 4,
                title: "Carnival of Rust",
                thumbnail: '../images/Albums/PoetsOfTheFall/CarnivalOfRust.jpeg',
                releaseDate: 2006,
                songs: [
                        {songTitle: "Fire", rating: 3, inConcert: false},
                        {songTitle: "Sorry Go 'Round", rating: 2, inConcert: false},
                        {songTitle: "Carnival of Rust", rating: 5, inConcert: true, location: "Glasgow, Scotland", date: 2017, venue: "O2 ABC"},
                        {songTitle: "Locking Up the Sun", rating: 5, inConcert: true, location: "Glasgow, Scotland", date: 2017, venue: "O2 ABC"},
                        {songTitle: "Gravity", rating: 3, inConcert: false},
                        {songTitle: "King of Fools", rating: 5, inConcert: false},
                        {songTitle: "Roses", rating: 4, inConcert: false},
                        {songTitle: "Desire", rating: 2, inConcert: false},
                        {songTitle: "All the Way / 4U", rating: 5, inConcert: false},
                        {songTitle: "Delicious", rating: 2, inConcert: false},
                        {songTitle: "Maybe Tomorrow is a Better Day", rating: 5, inConcert: false},
                        {songTitle: "Dawn", rating: 4, inConcert: false}
                        ]
            },
            {
                id: 5,
                title: "Signs of Life",
                thumbnail: '../images/Albums/PoetsOfTheFall/SignsOfLife.jpg',
                releaseDate: 2005,
                songs:
                    [
                        {songTitle: "Lift", rating: 3, inConcert: true, location: "Glasgow, Scotland", date: 2017, venue: "O2 ABC"},
                        {songTitle: "Overboard", rating: 3, inConcert: false},
                        {songTitle: "Late Goodbye", rating: 3, inConcert: false},
                        {songTitle: "Don't Mess With Me", rating: 2, inConcert: false},
                        {songTitle: "3 AM", rating: 3, inConcert: false},
                        {songTitle: "Stay", rating: 3, inConcert: true, location: "Glasgow, Scotland", date: 2017, venue: "O2 ABC"},
                        {songTitle: "Seek You Out", rating: 3, inConcert: false},
                        {songTitle: "Shallow", rating: 5, inConcert: false},
                        {songTitle: "Everything Fades", rating: 3, inConcert: false},
                        {songTitle: "Someone Special", rating: 4, inConcert: true, location: "Glasgow, Scotland", date: 2017, venue: "O2 ABC"},
                        {songTitle: "Illusion & Dream", rating: 5, inConcert: false},
                        {songTitle: "Sleep", rating: 5, inConcert: true, location: "Glasgow, Scotland", date: 2017, venue: "O2 ABC"}
                    ],
                },
                 {
                id: 6,
                title: "Revolution Roulette",
                thumbnail: '../images/Albums/PoetsOfTheFall/RevolutionRoulette.jpg',
                releaseDate: 2008,
                songs:
                    [
                        {songTitle: "More", rating: 2, inConcert: false},
                        {songTitle: "The Ultimate Fling", rating: 3, inConcert: false},
                        {songTitle: "Revolution Roulette", rating: 3, inConcert: false},
                        {songTitle: "Psychosis", rating: 5, inConcert: false},
                        {songTitle: "Fragile", rating: 5, inConcert: false},
                        {songTitle: "Clevermind", rating: 4, inConcert: false},
                        {songTitle: "Miss Impossible", rating: 2, inConcert: false},
                        {songTitle: "Diamonds for Tears", rating: 2, inConcert: true, location: "Glasgow, Scotland", date: 2017, venue: "O2 ABC"},
                        {songTitle: "Passion Colors Everything", rating: 3, inConcert: false},
                        {songTitle: "Save Me", rating: 3, inConcert: false},
                        {songTitle: "Where do We Draw the Line", rating: 5, inConcert: false},
                     ],
                },
                {
                id: 7,
                title: "Temple of Thought",
                thumbnail: '../images/Albums/PoetsOfTheFall/TempleOfThought.jpg',
                releaseDate: 2012,
                songs:
                    [
                        {songTitle: "Running Out of Time", rating: 3, inConcert: true, location: "Glasgow, Scotland", date: 2017, venue: "O2 ABC"},
                        {songTitle: "Temple of Thought", rating: 3, inConcert: false},
                        {songTitle: "Cradled in Love", rating: 5, inConcert: false},
                        {songTitle: "Kamikaze Love", rating: 5, inConcert: false},
                        {songTitle: "The Lie Eternal", rating: 4, inConcert: false},
                        {songTitle: "Skin", rating: 5, inConcert: false},
                        {songTitle: "The Distance", rating: 3, inConcert: false},
                        {songTitle: "Show Me This Life", rating: 4, inConcert: false},
                        {songTitle: "Morning Tide", rating: 5, inConcert: false},
                        {songTitle: "The Ballad of Jeremiah Peacekeeper", rating: 3, inConcert: false},
                        {songTitle: "The Happy Song", rating: 4, inConcert: false},
                     ],
                },
        ],

        thumbnail: '../images/Bands/PotF.jpg',
        concert: true,
        like: true
    },

    {
        id: 2,
        bandName: "Sonata Arctica",
        albums: [
            {
                id: 1,
                title: "Silence",
                thumbnail: '../images/Albums/SonataArctica/Silence.jpg',
                releaseDate: 2001,
                songs: [
                    {songTitle: "...Of Silence"},
                    {songTitle: "Weballergy"},
                    {songTitle: "False News Travels Fast"},
                    {songTitle: "The End of This Chapter"},
                    {songTitle: "Black Sheep"},
                    {songTitle: "Land of the Free"},
                    {songTitle: "Last Drop Falls"},
                    {songTitle: "San Sebastian"},
                    {songTitle: " Sing in Silence"},
                    {songTitle: "Revontulet"},
                    {songTitle: "Tallulah"},
                    {songTitle: "Wolf & Raven"},
                    {songTitle: "The Power of One"}
                ]
            },

            {
                id: 2,
                title: "Days of Grays",
                thumbnail: '../images/Albums/SonataArctica/DaysOfGrays.jpg',
                releaseDate: 2009,
                songs: [
                    {songTitle: "Everything Fades to Gray"},
                    {songTitle: "Deathaura"},
                    {songTitle: "The Last Amazing Grays"},
                    {songTitle: "Flag in the Ground"},
                    {songTitle: "Breathing"},
                    {songTitle: "Zeroes"},
                    {songTitle: "The Dead Skin"},
                    {songTitle: "Juliet"},
                    {songTitle: "No Dream Can Heal a Broken Heart"},
                    {songTitle: "As if the World Wasn't Ending"},
                    {songTitle: "The Truth is Out There"},
                    {songTitle: "Everything Fades to Gray"}
                ]
            },

            {
                id: 3,
                title: "The Ninth Hour",
                thumbnail: '../images/Albums/SonataArctica/TheNinthHour.jpg',
                releaseDate: 2016,
                songs: [
                    {songTitle: "Closer to an Animal"},
                    {songTitle: "Life"},
                    {songTitle: "Fairytale"},
                    {songTitle: "We Are What We Are"},
                    {songTitle: "Till Death's Done Us Apart"},
                    {songTitle: "Among the Shooting Stars"},
                    {songTitle: "Rise a Night"},
                    {songTitle: "Fly, Navigate, Communicate"},
                    {songTitle: "Candle Lawns"},
                    {songTitle: "White Pearl, Black Oceans Pt II By the Grace of the Sea"},
                    {songTitle: "On the Faultline (Closure to an Animal)"}
                ]
            },
                     {
                id: 4,
                title: "Winterheart's Guild",
                thumbnail: '../images/Albums/SonataArctica/WinterheartsGuild.jpg',
                releaseDate: 2006,
                songs: [
                    {songTitle: "Abandoned Pleased Brainwashed Exploited"},
                    {songTitle: "Gravenimage"},
                    {songTitle: "Cage"},
                    {songTitle: "Silver Tongue"},
                    {songTitle: "Misery"},
                    {songTitle: "Victoria's Secret"},
                    {songTitle: "Champagne Bath"},
                    {songTitle: "Broken"},
                    {songTitle: "Ruins of My Life"},
                    {songTitle: "Draw Me"},
                    {songTitle: "Fade to Black"}
                ]
            }
        ],
        thumbnail: '../images/Bands/SonataArctica.jpg',
        concert: true,
        like: true
    },

    {
        id: 3,
        bandName: "Nightwish",
        albums: [
            {
                id: 1,
                title: "Imaginaerum",
                thumbnail: 'thumbnail',
                releaseDate: 2005,
                songs: [
                    "Talkatalvi",
                    "Storytime",
                    "Last Ride of the Day"
                ]
            },

            {
                id: 2,
                title: "Once",
                thumbnail: 'thumbnail',
                releaseDate: 0,
                songs: [
                    "I Wish I had an Angel"
                ]
            },

            {
                id: 3,
                title: "Endless Forms Most Beautiful",
                thumbnail: 'thumbnail',
                releaseDate: 2015,
                songs: []
            }
        ],
        thumbnail: '../images/Bands/Nightwish.jpg',
        concert: true,
        like: true
    },

    {
        id: 4,
        bandName: "Kamelot",
        albums: [
            {
                id: 1,
                title: "Poetry for the Poisoned",
                thumbnail: 'thumbnail',
                releaseDate: 0,
                songs: [
                    "House on a Hill",
                    "The Great Pandemoneum",
                    "The Hunter's Season"
                ]
            },

            {
                id: 2,
                title: "Karma",
                thumbnail: 'thumbnail',
                releaseDate: 0,
                songs: [
                    "A Sailorman's Hymn"
                ]
            },

            {
                id: 3,
                title: "Silverthorn",
                thumbnail: 'thumbnail',
                releaseDate: 0,
                songs: []
            }
        ],
        thumbnail: '../images/Bands/Kamelot.jpg',
        concert: true,
        like: true
    },

    {
        id: 5,
        bandName: "Indica",
        albums: [
            {
                id: 1,
                title: "Indica",
                thumbnail: 'thumbnail',
                releaseDate: 0,
                songs: [
                    "Straight and Arrow"
                ]
            },

            {
                id: 2,
                title: "Shine",
                thumbnail: 'thumbnail',
                releaseDate: 0,
                songs: [
                    "Mountain Made of Stone",
                    "Goodbye to Berlin"
                ]
            }
        ],
        thumbnail: '../images/Bands/Indica.jpg',
        concert: false,
        like: true
    },

    {
        id: 6,
        bandName: "Krypteria",
        albums: [
            {
                id: 1,
                title: "All Beauty Must Die",
                thumbnail: 'thumbnail',
                releaseDate: 0,
                songs: []
            },

            {
                id: 2,
                title: "In Media Res",
                thumbnail: 'thumbnail',
                releaseDate: 0,
                songs: [
                    "You and I"
                ]
            }
        ],
        thumbnail: '../images/Bands/Krypteria.jpg',
        concert: false,
        like: true
    }
];
