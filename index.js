const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const fonts = [
  {
    map: {
      A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚",
      H: "𝗛", I: "𝗜", J: "𝗝", K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡",
      O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧", U: "𝗨",
      V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭",
      a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴",
      h: "𝗵", i: "𝗶", j: "𝗷", k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻",
      o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁", u: "𝘂",
      v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇"
    }
  },
  {
    map: {
      A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺",
      H: "𝐻", I: "𝐼", J: "𝐽", K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁",
      O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇", U: "𝑈",
      V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
      a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔",
      h: "ℎ", i: "𝑖", j: "𝑗", k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛",
      o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡", u: "𝑢",
      v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
    }
  },
  {
    map: {
      A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾",
      H: "ℍ", I: "𝕀", J: "𝕁", K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ",
      O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋", U: "𝕌",
      V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
      a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘",
      h: "𝕙", i: "𝕚", j: "𝕛", k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟",
      o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥", u: "𝕦",
      v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
    }
  },
  {
    map: Object.fromEntries(
      [...Array(26)].map((_, i) => [String.fromCharCode(65 + i), String.fromCharCode(0x1D670 + i)])
      .concat([...Array(26)].map((_, i) => [String.fromCharCode(97 + i), String.fromCharCode(0x1D68A + i)]))
    )
  },
  {
    map: {
      a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰",
      h: "𝓱", i: "𝓲", j: "𝓳", k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷",
      o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽", u: "𝓾",
      v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
    }
  },
  {
    map: {
      a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ғ", g: "ɢ",
      h: "ʜ", i: "ɪ", j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ",
      o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "s", t: "ᴛ", u: "ᴜ",
      v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
    }
  },
  {
    map: {
      a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ",
      h: "ɥ", i: "ᴉ", j: "ɾ", k: "ʞ", l: "l", m: "ɯ", n: "u",
      o: "o", p: "d", q: "b", r: "ɹ", s: "s", t: "ʇ", u: "n",
      v: "ʌ", w: "ʍ", x: "x", y: "ʎ", z: "z",
      A: "∀", B: "𐐒", C: "Ɔ", D: "◖", E: "Ǝ", F: "Ⅎ", G: "⅁",
      H: "H", I: "I", J: "ſ", K: "ʞ", L: "˥", M: "W", N: "N",
      O: "O", P: "Ԁ", Q: "Ό", R: "ᴚ", S: "S", T: "⊥", U: "∩",
      V: "Λ", W: "M", X: "X", Y: "⅄", Z: "Z"
    }
  },
  {
    map: Object.fromEntries("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(c => [c, c + "̶"]))
  },
  {
    map: {
      a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ",
      h: "ⓗ", i: "ⓘ", j: "ⓙ", k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ",
      o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ", u: "ⓤ",
      v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ"
    }
  }
];

app.get("/api/font/list", (req, res) => {
  const sampleText = "JUBAYER";
  const styledList = fonts.map(font => {
    const styled = sampleText.split("").map(c => font.map[c] || c).join("");
    return styled;
  }).join("\n");
  res.send("Available Font Styles:\n" + styledList);
});

app.post("/api/font", (req, res) => {
  const { number, text } = req.body;
  const index = parseInt(number);
  if (isNaN(index) || index < 0 || index >= fonts.length || !text) {
    return res.status(400).json({ error: "Invalid input." });
  }
  const fontMap = fonts[index].map;
  const data = {};
  data[number] = fontMap;
  res.json({ data });
});

app.listen(port, () => {
  console.log(`Font Style API running at http://localhost:${port}`);
});
