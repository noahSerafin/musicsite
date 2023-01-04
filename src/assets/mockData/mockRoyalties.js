//in js so I can leave comments.
//all numbers are collected from the monthly csv files and represent the value of "Units" * "Net Payable" for each respective track/release/territory etc.
//first two values should probably come from a seperate call as they are totals from multiple monthly csv files

const royaltyTotals = [ 
    {
        "2022": {
            "Jan": 213.23,
            "Feb": 123.23,
            "Mar": 2143.23,
            "Apr": 23.43,
            "May": 231,43,
            "Jun": 837.32,
            "Jul": 23.32,
            "Aug": 23.43,
            "Sep": 122.55,
            "Oct": 239.45,
            "Nov": 194.54,
            "Dec": 184.55
        },
        "2021": {
            "Jan": 313.23,
            "Feb": 23.23,
            "Mar": 253.23,
            "Apr": 232.43,
            "May": 222.44,
            "Jun": 132.32,
            "Jul": 253.32,
            "Aug": 323.43,
            "Sep": 222.55,
            "Oct": 139.45,
            "Nov": 94.54,
            "Dec": 484.55
        }
    }
]
const totals = [ 
    {
        "2022-01": 213.23,
        "2022-02": 2143.23,
        "2022-03": 23.43,
        "2022-04": 231.43,
        "2022-05": 837.32,
        "2022-06": 23.32,
        "2022-07": 23.43,
        "2022-08": 122.55,
        "2022-09": 239.45,
        "2022-10": 194.54,
        "2022-11": 184.55,
        "2022-12": 123.23
    },{
        "2021-01": 413.23,
        "2021-02": 143.23,
        "2021-03": 223.43,
        "2021-04": 31.43,
        "2021-05": 237.32,
        "2021-06": 23.32,
        "2021-07": 53.43,
        "2021-08": 322.55,
        "2021-09": 139.45,
        "2021-10": 394.54,
        "2021-11": 284.55,
        "2021-12": 123.23
    }
]

const totalsO = [ 
    {
        "2022-01": 213.23
    },{
        "2022-02": 2143.23
    },{
        "2022-03": 23.43
    },{
        "2022-04": 231.43
    },{
        "2022-05": 837.32
    },{
        "2022-06": 23.32
    },{
        "2022-07": 23.43
    },{
        "2022-08": 122.55
    },{
        "2022-09": 239.45
    },{
        "2022-10": 194.54
    },{
        "2022-11": 184.55
    },{
        "2022-12": 123.23
    }
]
const royalties = [
    {
        "user_artist1": {
            "tracks": {
                "track1": 10.34,
                "track2": 19.64,
                "track3": 113.34,
                "track4": 0.37,
                "track5": 78.54,
                "track6": 78.54,
                "track7": 73.24,
                "track8": 12.53,
                "track9": 8.55,
                "track10": 2.54,
                "track11": 35.53,
                "trac12": 8.53,
                "track13": 88.24,
                "track14": 68.51
            },
            "releases": {
                "almbumname1": 398.20,
                "almbumname2": 398.20,
                "almbumname3": 398.20,
                "almbumname4": 398.20,
                "ep1": 123.23,
                "ep2": 13.23,
                "ep3": 3.23
            },
            "DSPs": {
                "Spotify": 283.22,
                "Apple": 12.33,
                "Youtube": 23.43,
                "Amazon": 49.42,
                "Peloton": 3.92,
                "Resso": 5.32,
                "TIDAL": 8.20,
                "Deezer": 1.12,
                "VEVO": 23.03,
                "Soundcloud": 12.21,
                "Pandora": 1.45
            },
            "territories": {
                "EN": 32.0,
                "IR": 34.0,
                "PO": 24.0,
                "US": 24.12,
                "TO": 324.23,
                "FR": 34.23,
                "DE": 34.0
            }
        },
        "user_artist2": {
            "tracks": {
                "track1": 12.34,
                "track2": 13.64,
                "track3": 103.34,
                "track4": 0.37,
                "track5": 78.54,
                "track6": 78.54,
                "track7": 73.24,
                "track8": 12.53,
                "track9": 8.55,
                "track10": 2.54,
                "track11": 35.53,
                "trac12": 8.53,
                "track13": 88.24,
                "track14": 68.51
            },
            "releases": {
                "almbumname1": 398.20,
                "almbumname2": 398.20,
                "almbumname3": 398.20,
                "almbumname4": 398.20,
                "ep1": 123.23,
                "ep2": 13.23,
                "ep3": 3.23
            },
            "DSPs": {
                "Spotify": 283.22,
                "Apple": 12.33,
                "Youtube": 23.433,
                "Amazon": 49.42,
                "Peloton": 3.32,
                "Resso": 5.32,
                "TIDAL": 8.20,
                "Deezer": 1.13,
                "VEVO": 23.03,
                "Soundcloud": 12.21,
                "Pandora": 1.45
            },
            "territories": {
                "EN": 32.0,
                "IR": 34.0,
                "PO": 24.0,
                "US": 24.12,
                "YO": 324.23,
                "FR": 34.23,
                "DE": 34.0
            }
        },
        "user_artist3": {
            "tracks": {
                "track1": 10.32,
                "track2": 19.61,
                "track3": 112.34,
                "track4": 12.37,
                "track5": 2.54,
                "track6": 8.54,
                "track7": 3.24,
                "track8": 112.53,
                "track9": 1.55,
                "track10": 1.54,
                "track11": 25.52,
                "trac12": 1.53,
                "track13": 18.22,
                "track14": 108.31
            },
            "releases": {
                "almbumname1": 398.20,
                "almbumname2": 398.20,
                "almbumname3": 398.20,
                "almbumname4": 398.20,
                "ep1": 123.23,
                "ep2": 13.23,
                "ep3": 3.23
            },
            "DSPs": {
                "Spotify": 283.22,
                "Apple": 12.33,
                "Youtube": 23.43,
                "Amazon": 49.42,
                "Peloton": 3.92,
                "Resso": 5.32,
                "TIDAL": 8.20,
                "Deezer": 1.12,
                "VEVO": 23.03,
                "Soundcloud": 12.21,
                "Pandora": 1.45
            },
            "territories": {
                "EN": 32.0,
                "IR": 34.0,
                "PO": 24.0,
                "US": 24.12,
                "TO": 324.23,
                "FR": 34.23,
                "DE": 34.0
            }
        }
    }
]

export const streams = [
    {
      Territory: 'GB',
      'Sale Date': '2022-04-30',
      Source: 'VEVO',
      irsc: undefined,
      'Release Title': "Don't Waste My Time",
      'Track Title': 'Waste My Time',
      'Track Artist': 'Rupert Stroud',
      Units: 3,
      'Net Payable': 0.00989832265245
    },
    {
      Territory: 'IT',
      'Sale Date': '2022-04-30',
      Source: 'VEVO',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 3,
      'Net Payable': 0.0031752538344
    },
    {
      Territory: 'HR',
      'Sale Date': '2022-04-30',
      Source: 'VEVO',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 1,
      'Net Payable': 0.00043969593059999993
    },
    {
      Territory: 'CO',
      'Sale Date': '2022-04-30',
      Source: 'VEVO',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 1,
      'Net Payable': 0.00026499795012000003
    },
    {
      Territory: 'RO',
      'Sale Date': '2022-04-30',
      Source: 'VEVO',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 2,
      'Net Payable': 0.0009519859544400002
    },
    {
      Territory: 'IN',
      'Sale Date': '2022-04-30',
      Source: 'VEVO',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 2,
      'Net Payable': 0.00047038611635999997
    },
    {
      Territory: 'PT',
      'Sale Date': '2022-04-30',
      Source: 'VEVO',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 2,
      'Net Payable': 0.0010298918106
    },
    {
      Territory: 'AT',
      'Sale Date': '2022-04-30',
      Source: 'VEVO',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 2,
      'Net Payable': 0.0028518264921600003
    },
    {
      Territory: 'SK',
      'Sale Date': '2022-04-30',
      Source: 'VEVO',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 2,
      'Net Payable': 0.0016820582579999998
    },
    {
      Territory: 'MX',
      'Sale Date': '2022-04-30',
      Source: 'VEVO',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 3,
      'Net Payable': 0.00106294277988
    },
    {
      Territory: 'CZ',
      'Sale Date': '2022-04-30',
      Source: 'VEVO',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 3,
      'Net Payable': 0.00283707159516
    },
    {
      Territory: 'CA',
      'Sale Date': '2022-04-30',
      Source: 'VEVO',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 3,
      'Net Payable': 0.00812522667996
    },
    {
      Territory: 'FI',
      'Sale Date': '2022-04-30',
      Source: 'VEVO',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 3,
      'Net Payable': 0.00520080609456
    },
    {
      Territory: 'GB',
      'Sale Date': '2022-04-30',
      Source: 'VEVO',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 4,
      'Net Payable': 0.010558014097319997
    },
    {
      Territory: 'ES',
      'Sale Date': '2022-04-30',
      Source: 'VEVO',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 5,
      'Net Payable': 0.00455159062656
    },
    {
      Territory: 'DE',
      'Sale Date': '2022-04-30',
      Source: 'VEVO',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 1,
      'Net Payable': 0.0020338150024799997
    },
    {
      Territory: 'NL',
      'Sale Date': '2022-04-30',
      Source: 'VEVO',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 1,
      'Net Payable': 0.00215775613728
    },
    {
      Territory: 'IQ',
      'Sale Date': '2022-04-30',
      Source: 'VEVO',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 1,
      'Net Payable': 0.000057839196240000005
    },
    {
      Territory: 'DZ',
      'Sale Date': '2022-04-30',
      Source: 'VEVO',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 1,
      'Net Payable': 0.00004190390748
    },
    {
      Territory: 'DK',
      'Sale Date': '2022-04-30',
      Source: 'VEVO',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 1,
      'Net Payable': 0.00201610912608
    },
    {
      Territory: 'KR',
      'Sale Date': '2022-04-30',
      Source: 'VEVO',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 1,
      'Net Payable': 0.00119337606936
    },
    {
      Territory: 'ID',
      'Sale Date': '2022-04-30',
      Source: 'VEVO',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 1,
      'Net Payable': 0.00030926264112
    },
    {
      Territory: 'IL',
      'Sale Date': '2022-04-30',
      Source: 'VEVO',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 1,
      'Net Payable': 0.0007200389736
    },
    {
      Territory: 'BR',
      'Sale Date': '2022-04-30',
      Source: 'VEVO',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 1,
      'Net Payable': 0.00031339401228
    },
    {
      Territory: 'US',
      'Sale Date': '2022-04-30',
      Source: 'VEVO',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 25,
      'Net Payable': 0.10518884110476001
    },
    {
      Territory: 'GB',
      'Sale Date': '2022-06-30',
      Source: 'Apple Music',
      irsc: undefined,
      'Release Title': 'Dirty Tampon',
      'Track Title': 'Dirty Tampon',
      'Track Artist': 'Troi Irons',
      Units: 1,
      'Net Payable': 0.0038847960000000003
    },
    {
      Territory: 'GB',
      'Sale Date': '2022-06-30',
      Source: 'Apple Music',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 18,
      'Net Payable': 0.140706504
    },
    {
      Territory: 'GB',
      'Sale Date': '2022-06-30',
      Source: 'Apple Music',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 1,
      'Net Payable': 0.003578232
    },
    {
      Territory: 'GB',
      'Sale Date': '2022-06-30',
      Source: 'Apple Music',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 2,
      'Net Payable': 0.0061256159999999995
    },
    {
      Territory: 'UA',
      'Sale Date': '2022-06-30',
      Source: 'Apple Music',
      irsc: undefined,
      'Release Title': 'She Loves Me Not',
      'Track Title': 'She Loves Me Not',
      'Track Artist': 'Troi Irons',
      Units: 5,
      'Net Payable': 0.006539370350399999
    },
    {
      Territory: 'FR',
      'Sale Date': '2022-06-30',
      Source: 'Spotify',
      irsc: undefined,
      'Release Title': 'Better Days',
      'Track Title': 'Better Days',
      'Track Artist': 'Jack Hawitt',
      Units: 1,
      'Net Payable': 0.0030369831025046402
    },
    {
      Territory: 'TW',
      'Sale Date': '2022-06-30',
      Source: 'Spotify',
      irsc: undefined,
      'Release Title': 'Better Days',
      'Track Title': 'Better Days',
      'Track Artist': 'Jack Hawitt',
      Units: 7,
      'Net Payable': 0.008829409552447681
    },
    {
      Territory: 'NO',
      'Sale Date': '2022-06-30',
      Source: 'Spotify',
      irsc: undefined,
      'Release Title': 'Better Days',
      'Track Title': 'Better Days',
      'Track Artist': 'Jack Hawitt',
      Units: 196,
      'Net Payable': 0.4178940252705418
    },
    {
      Territory: 'TR',
      'Sale Date': '2022-06-30',
      Source: 'Spotify',
      irsc: undefined,
      'Release Title': 'Better Days',
      'Track Title': 'Better Days',
      'Track Artist': 'Jack Hawitt',
      Units: 9,
      'Net Payable': 0.0012186774416361602
    },
    {
      Territory: 'DK',
      'Sale Date': '2022-06-30',
      Source: 'Spotify',
      irsc: undefined,
      'Release Title': 'Better Days',
      'Track Title': 'Better Days',
      'Track Artist': 'Jack Hawitt',
      Units: 4,
      'Net Payable': 0.01824142027014144
    },
    {
      Territory: 'LV',
      'Sale Date': '2022-06-30',
      Source: 'Spotify',
      irsc: undefined,
      'Release Title': 'Better Days',
      'Track Title': 'Better Days',
      'Track Artist': 'Jack Hawitt',
      Units: 2,
      'Net Payable': 0.0017265785927904004
    },
    {
      Territory: 'TH',
      'Sale Date': '2022-06-30',
      Source: 'Spotify',
      irsc: undefined,
      'Release Title': 'Better Days',
      'Track Title': 'Better Days',
      'Track Artist': 'Jack Hawitt',
      Units: 3,
      'Net Payable': 0.00017175862156896003
    },
    {
      Territory: 'CA',
      'Sale Date': '2022-06-30',
      Source: 'Spotify',
      irsc: undefined,
      'Release Title': 'Better Days',
      'Track Title': 'Better Days',
      'Track Artist': 'Jack Hawitt',
      Units: 1,
      'Net Payable': 0.00103328681033088
    },
    {
      Territory: 'CH',
      'Sale Date': '2022-06-30',
      Source: 'Spotify',
      irsc: undefined,
      'Release Title': 'Better Days',
      'Track Title': 'Better Days',
      'Track Artist': 'Jack Hawitt',
      Units: 52,
      'Net Payable': 0.18925723593090724
    },
    {
      Territory: 'IL',
      'Sale Date': '2022-06-30',
      Source: 'Spotify',
      irsc: undefined,
      'Release Title': 'Better Days',
      'Track Title': 'Better Days',
      'Track Artist': 'Jack Hawitt',
      Units: 29,
      'Net Payable': 0.06374770380165888
    },
    {
      Territory: 'HU',
      'Sale Date': '2022-06-30',
      Source: 'Spotify',
      irsc: undefined,
      'Release Title': 'Better Days',
      'Track Title': 'Better Days',
      'Track Artist': 'Jack Hawitt',
      Units: 8,
      'Net Payable': 0.00546465189379392
    },
    {
      Territory: 'CA',
      'Sale Date': '2022-06-30',
      Source: 'Spotify',
      irsc: undefined,
      'Release Title': 'Better Days',
      'Track Title': 'Better Days',
      'Track Artist': 'Jack Hawitt',
      Units: 169,
      'Net Payable': 0.41062555797930145
    }
  ]