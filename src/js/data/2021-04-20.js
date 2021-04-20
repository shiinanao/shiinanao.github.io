dataSetVersion = "2021-04-05"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Main", tooltip: "Released Characters", key: "s1" },
      { name: "NPC", tooltip: "Non-playable Characters from the game", key: "g1" },
      { name: "Unreleased", tooltip: "Unreleased characters", key: "u1" },
    ]
  },
  // {
  //   name: "Filter by Stage Enemy Appearances",
  //   key: "stage",
  //   tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
  //   checked: false,
  //   sub: [
  //     { name: "Stage 1", key: "st1" },
  //     { name: "Stage 2", key: "st2" },
  //     { name: "Stage 3", key: "st3" },
  //     { name: "Stage 4", key: "st4" },
  //     { name: "Stage 5/Penultimate", tooltip: "Stage 4 in 5-stage games, and Stage 8 in 9-stage games.", key: "st5" },
  //     { name: "Stage 6/Final", key: "st6" },
  //     { name: "Stage EX/Phantasm", key: "ex" }
  //   ]
  // },
  // {
  //   name: "Remove PC-98 Duplicates",
  //   key: "pc98",
  //   tooltip: "Check this to remove PC-98 characters with a Windows counterpart."
  // },
  // {
  //   name: "Remove Non-Girls",
  //   key: "notgirl",
  //   tooltip: "Check this to remove all non-female characters."
  // }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Special Week",
    img: "EdbVoKd.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Silence Suzuka",
    img: "m84y6LP.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Tokai Teio",
    img: "PqbRU1d.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Maruzensky",
    img: "8Honbvs.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Fuji Kiseki",
    img: "f8dkdLy.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Oguri Cap",
    img: "ca5zgs0.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Gold Ship",
    img: "Eed2FTy.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Vodka",
    img: "ZH4ZQ0h.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Daiwa Scarlet",
    img: "26e5VVO.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Taiki Shuttle",
    img: "1Wn8bW6.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Grass Wonder",
    img: "KJm7xOY.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Hishi Amazon",
    img: "cw9qxjo.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Mejiro McQueen",
    img: "EeuOhnI.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "El Condor Pasa",
    img: "vplak7c.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "TM Opera O",
    img: "Zd4GWcp.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Narita Brian",
    img: "830VJ7a.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Symboli Rudolf",
    img: "mbRIjBu.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Air Groove",
    img: "TRV8H5M.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Agnes Digital",
    img: "wrKw3OS.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Tamamo Cross",
    img: "gR1M6wu.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Seiun Sky",
    img: "84dYtQz.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Fine Motion",
    img: "964Yrho.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Biwa Hayahide",
    img: "hnHXrRl.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Mayano Top Gun",
    img: "6wsH3NW.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Manhattan Cafe",
    img: "XqGsjB6.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Mihono Bourbon",
    img: "9xFPFwU.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Mejiro Ryan",
    img: "J3xrnD2.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Hishi Akebono",
    img: "jjmpnk2.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Yukino Bijin",
    img: "DobJmQn.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Rice Shower",
    img: "gu7GOPC.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Ines Fujin",
    img: "bGfoQa0.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Agnes Tachyon",
    img: "l6XfPs3.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Admire Vega",
    img: "m9C8yz6.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Inari One",
    img: "ov3OJRL.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Winning Ticket",
    img: "XXzv5ib.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Air Shakur",
    img: "BerWBVW.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Eishin Flash",
    img: "IC9uNNu.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Curren Chan",
    img: "u6cybDQ.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Kawakami Princess",
    img: "0wtMRhR.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Gold City",
    img: "YFt0fdF.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Sakura Backushin O",
    img: "zWKjI0s.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Seeking the Pearl",
    img: "djI55cS.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Shinko Windy",
    img: "vqPeRwF.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Sweep Tosho",
    img: "NCIblEu.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Super Creek",
    img: "wm1giic.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Smart Falcon",
    img: "HDMz5lp.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Zenno Rob Roy",
    img: "DqkDiXR.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Tosen Jordan",
    img: "cEj3cG4.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Nakayama Festa",
    img: "jsPsnQq.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Narita Taishin",
    img: "vBqckJJ.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Nishino Flower",
    img: "ir6tmUv.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Haru Urara",
    img: "9hZO6bX.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Bamboo Memory",
    img: "bzDUBLJ.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Biko Pegasus",
    img: "RU7zMT7.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Marvelous Sunday",
    img: "LZToy0p.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Matikane Fukukitaru",
    img: "7HyLP41.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Mr. C.B.",
    img: "6cQhjr2.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Meisho Doto",
    img: "zZ7kWgp.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Mejiro Dober",
    img: "IX1LJYJ.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Nice Nature",
    img: "GoayId1.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "King Halo",
    img: "A50sEac.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Matikane Tannhauser",
    img: "EK5VFK3.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Ikuno Dictus",
    img: "GCnDUDk.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Mejiro Palmer",
    img: "YpA3che.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Daitaku Helios",
    img: "76fU2zK.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Twin Turbo",
    img: "sK69zGn.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Satono Diamond",
    img: "rYJ6jxD.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Kitasan Black",
    img: "6oqPYXY.png",
    opts: {
      series: ["s1"],
    }
  },
  {
    name: "Mejiro Ardan",
    img: "YoyoDUd.png",
    opts: {
      series: ["u1"],
    }
  },
  {
    name: "Sakura Chiyono O",
    img: "9UnxAJs.png",
    opts: {
      series: ["u1"],
    }
  },
  {
    name: "Sirius Symboli",
    img: "96WZcmu.png",
    opts: {
      series: ["u1"],
    }
  },
  {
    name: "Yaeno Muteki",
    img: "9wGIfHO.png",
    opts: {
      series: ["u1"],
    }
  },
  

  {
    name: "Happy Mik",
    img: "ePxRLnE.png",
    opts: {
      series: ["g1"],
    }
  },
  {
    name: "Tazuna Hayakawa",
    img: "YFaZHVW.png",
    opts: {
      series: ["g1"],
    }
  },
  {
    name: "Yayoi Akikawa",
    img: "TbZ12si.png",
    opts: {
      series: ["g1"],
    }
  },
  {
    name: "Etsuko Otonashi",
    img: "Sxt4OmY.png",
    opts: {
      series: ["g1"],
    }
  },
  {
    name: "Aoi Kiryuin",
    img: "ufePsFm.png",
    opts: {
      series: ["g1"],
    }
  },
  {
    name: "Sasami Anshinzawa",
    img: "f0VFnYz.png",
    opts: {
      series: ["g1"],
    }
  },
];
