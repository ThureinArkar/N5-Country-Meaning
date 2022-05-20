const display=document.querySelector("p"),
display1 = document.getElementById("text1"),
display2 = document.getElementById("text2"),
display3 = document.getElementById("text3"),
display4 = document.getElementById("text4"),
 button=document.querySelector("button"),
 copyBtn=document.querySelector("span.far"),
 copyActive=document.querySelector("span.fas");
//let chars ='あいうえお';
let chars = [
  
  {
    text1:`Amarica`,
  },
  {
    text1:`England`,
  },
  {
    text1:`India`,
  },
  {
    text1:`Indonesia`,
  },
  {
    text1:`Korea`,
  },
  {
    text1:`Thailand`,
  },
  {
    text1:`China`,
  },
  {
    text1:`Germany`,
  },
  {
    text1:`Japan`,
  },
  {
    text1:`Brazil`,
  },
  {
    text1:`Italy`,
  },
  {
    text1:`Switzerland`,
  },
  {
    text1:`France`,
  },
  {
    text1:`Jakarta`,
  },
  {
    text1:`Bangkok`,
  },
  {
    text1:`Berlin`,
  },
  {
    text1:`Shin-Osaka Station`,
  },
  {
    text1:`New York`,
  },
  {
    text1:`Beijing,China`,
  },
  {
    text1:`Los Angeles`,
  },
  {
    text1:`London`,
  },
  {
    text1:`Ko-Shi-An`,
  },
  {
    text1:`Shin-Osaka Castle`,
  },
  {
    text1:`အမေရိက`,
  },
  {
    text1:`အင်္ဂလန်`,
  },
  {
    text1:`အိန္ဒိယ`,
  },
  {
    text1:`အင်ဒိုနီးရှား`,
  },
  {
    text1:`ကိုရီးယား`,
  },
  {
    text1:`ထိုင်း/ယိုးဒယား`,
  },
  {
    text1:`တရုတ်`,
  },
  {
    text1:`ဂျာမနီ`,
  },
  {
    text1:`ဂျပန်`,
  },
  {
    text1:`ဘရာဇီး`,
  },
  {
    text1:`အီတလီ`,
  },
  {
    text1:`ဆွစ်ဇလန်`,
  },
  {
    text1:`ပြင်သစ်`,
  },
  {
    text1:`ဂျာကာတာ`,
  },
  {
    text1:`ဘန်ကောက်`,
  },
  {
    text1:`ဘာလင်`,
  },
  {
    text1:`ရှင်းအိုဆာကာ(အိုဆာကာရှိဘူတာအမည်)`,
  },
  {
    text1:`နယူးယောက်`,
  },
  {
    text1:`ပီကင်း`,
  },
  {
    text1:`လော့စ်အိန်ဂျလိ`,
  },
  {
    text1:`လန်ဒန်`,
  },
  {
    text1:`ခိုးရှိအမ်း`,
  },
  {
    text1:`အိုဆာကာရဲတိုက်`,
  },
];



















button.addEventListener('click', () => {
let randomPhrase=Math.floor(Math.random() * chars.length);
display.innerHTML = chars[randomPhrase].text1;
});

snowFall.snow(document.querySelector('.snow'), {
	minSize: 6,
	maxSize: 10,
	round: true,
	flakeCount: 30,
	flakeColor: 'white'
});





//  button.onclick=()=>{

// let randomPhrase=Math.floor(Math.random() * chars.length);
// display.value = chars[randomPhrase].text;
// display1.value = chars[randomPhrase].author;
// display2.value = chars[randomPhrase].text1;
// display3.value = chars[randomPhrase].text2;
// let randomPhrase1 =Math.floor(Math.random() * chars1.length);
// display1.value = chars1[randomPhrase].author;
   //
   // let i,
   // randomPassword="";
   // copyBtn.style.display = "block";
   // copyActive.style.display = "none";
   // for ( i = 0; i < 1; i++) {
   //   randomPassword = randomPassword + chars.charAt(
   //     Math.floor(Math.random() * chars.length)
   //   );
   // }

//  }
