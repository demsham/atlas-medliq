var LANGUAGE = 0; //0-ENG, 1-GR, 2-TR

function getSubtitles(index){
  if(index==-1){
    return "";
  }
  if(LANGUAGE==0){
    if(index==0){
      return dearAText_0();
    }
    if(index==1){
      return dearAText_1();
    }
    if(index ==2){
      return dearAText_2();
    }
    if(index==3){
      return dearAText_3();
    }
    if(index==4){
      return dearAText_4();
    }
    if(index==5){
      return dearAText_5();
    }
    if(index==6){
      return dearAText_6();
    }
  }
  else if(LANGUAGE==1){
    if(index==0){
      return dearAText_0_GR();
    }
    if(index==1){
      return dearAText_1_GR();
    }
    if(index ==2){
      return dearAText_2_GR();
    }
    if(index==3){
      return dearAText_3_GR();
    }
    if(index==4){
      return dearAText_4_GR();
    }
    if(index==5){
      return dearAText_5_GR();
    }
    if(index==6){
      return dearAText_6_GR();
    }
  }
  else if(LANGUAGE==2){
    if(index==0){
      return dearAText_0_TR();
    }
    if(index==1){
      return dearAText_1_TR();
    }
    if(index ==2){
      return dearAText_2_TR();
    }
    if(index==3){
      return dearAText_3_TR();
    }
    if(index==4){
      return dearAText_4_TR();
    }
    if(index==5){
      return dearAText_5_TR();
    }
    if(index==6){
      return dearAText_6_TR();
    }
  }
}

function dearAText_0_GR(){
  var text = "";
  text += "Αγαπητέ μου Α,<br>";
  text += "<br>";
  text += "Περπατάς στη παραλία και σκέφτεσαι<br>";
  text += "Πόσα σώματα δημιουργούνται κάθε μέρα στην ακτή,<br>";
  text += "μεταξύ θάλασσας και γης.<br>";
  text += "Μόνο που αυτή τη φορά,<br>";
  text += "Τα φτιάχνουν παιδιά. <br>";
  text += "<br>";
  text += "Βουτάω το δάχτυλο μου στην άμμο<br>";
  text += "Και της φτιάχνω ρόγες.<br>";
  text += "Απλώνω το χέρι μου στον ώμο της,<br>";
  text += "Της πιάνω τον καρπό και,<br>";
  text += "Μου δίνει μια χούφτα άμμο.<br>";
  text += "<br>";
  text += "Μαθαίνω ότι:<br>";
  text += "Ο καρπός της είναι ίσος με το μέσα του χεριού μου";
  return text;
}

function dearAText_1_GR(){
  var text = "";
  text += "Αγαπητέ μου Α,<br>";
  text += "<br>";
  text += "Δεν ξεχνώ το Α<br>";
  text += "Να την<br>";
  text += "Καρπασία<br>";
  text += "Την καλύτερη μορφή της Κύπρου<br>";
  text += "ΜΑ<br>";
  text += "Μου είπες,<br>";
  text += "Σ’ αγαπάει πίσω.<br>";
  text += "Σε αφήνει να την κοιτάς.<br>";
  text += "<br>";
/*  text += "--<br>";
  text += "<br>";*/
  text += "Ο Θείος Μ&emsp;&emsp;&emsp;&emsp;&emsp;Α<br>";
  text += "το Θείο<br>";
  text += "Μεταξύ Γοργόνας και Κένταυρου<br>";
  text += "<br>";
/*  text += "--<br>";
  text += "<br>";*/
  text += "Συναντιούνται οι παλάμες σου<br>";
  text += "Ψηλά πάνω από το κεφάλι σου<br>";
  text += "Τα αυτιά σου απορροφούν<br>";
  text += "Το δέρμα των δικεφάλων σου<br>";
  text += "Ακούω τα υγρά του σώματος μου / σου<br>";
  text += "Μέσα από τα χέρια μου / σου<br>";
  text += "Aκούω Και την καρδιά μου<br>";
  text += "Aκούω Και την καρδιά σου.<br>";
  text += "<br>";
  text += "Α ΗΗ<br>";
  text += "Α ΗΗ<br>";
  text += "Α ΗΗ<br>";
  text += "<br>";
  text += "Μαθαίνεις να κολυμπάς<br>";
  text += "<br>";
  text += "Είσαι το Α";
  return text;
}

function dearAText_2_GR(){
  var text = "";
  text += "Αγαπητέ Μ Α<br>";
  text += "<br>";
  text += "Δεν ξεχνώ<br>";
  text += "το Α<br>";
  text += "Nα την<br>";
  text += "αγάπη<br>";
  text += "την καλύτερη μορφή του Α<br>";
  text += "Α<br>";
  text += "Α<br>";
  text += "Μου είπες,<br>";
  text += "Σ’ αγαπάει πίσω,<br>";
  text += "Σε αφήνει να την κοιτάς.<br>";
  text += "<br>";
  text += "Ο θείος Μ&emsp;&emsp;&emsp;&emsp;&emsp;Α<br>";
  text += "το Θείο<br>";
  text += "Μεταξύ τρακτέρ και κορμού δέντρου,<br>";
  text += "<br>";
  text += "Βουτάω το δάχτυλο μου στην άμμο και κάνω μια τρύπα,<br>";
  text += "Βυθίζεσαι<br>";
  text += "Ξαναχτίζεις πόδια<br>";
  text += "Αλλά βρέχεσαι<br>";
  text += "Επιπλέεις και σαν σε παίρνει το ρεύμα<br>";
  text += "Ουρλιάζω για να με ακούσεις,<br>";
  text += "Για να με βλέπεις<br>";
  text += "<br>";
  text += "Α ΜΑ<br>";
  text += "Α ΜΑ<br>";
  text += "Α ΜΑ<br>";
  text += "<br>";
  text += "Μαθαίνεις να ζητάς<br>";
  text += "<br>";
  text += "Είσαι Αγάπη.";
  return text;
}

function dearAText_3_GR(){
  var text = "";
  text += "Αγαπητέ μου Α,<br>";
  text += "<br>";

  text += "Δεν ξεχνώ το<br>";
  text += "Α<br>";
  text += "Να την<br>";
  text += "Τριανταφυλλιά<br>";
  text += "Την καλύτερη μορφή της κοκκινιάς<br>";
  text += "Μου είπες<br>";
  text += "Σ’ αγαπάει πίσω<br>";
  text += "Σε αφήνει να την κοιτάς<br>";
  text += "<br>";

  text += "Ο Θείος M&emsp;&emsp;&emsp;&emsp;&emsp;A<br>";
  text += "το Θείο<br>";
  text += "Μεταξύ Aνάσας και Απανεμιάς<br>";
  text += "<br>";

  text += "Βουτάω το δάχτυλο μου στην άμμο και<br>";
  text += "Αφήνω το στόμα σου λίγο ανοιχτό για να γεύεσαι αλάτι<br>";
  text += "Φουσκώνουν τα χείλη σου λες και σε φιλούσα όλη μέρα<br>";
  text += "Καταπίνεις νερό<br>";
  text += "Α ΤΟΥ <br>";
  text += "Α ΤΟΥ<br>";
  text += "Α ΤΟΥ<br>";
  text += "<br>";

  text += "Μαθαίνεις να αναπνέεις<br>";
  text += "<br>";

  text += "Είσαι τριανταφυλλιά";
  return text;
}

function dearAText_4_GR(){
  var text = "";
  text += "Αγαπητέ μου Α,<br>";
  text += "Δεν ξεχνώ το Α<br>";
  text += "Να την<br>";
  text += "Κοραλλιά<br>";
  text += "Την καλύτερη μορφή του<br>";
  text += "Α<br>";
  text += "Α<br>";
  text += "Α<br>";
  text += "Το άγαλμα<br>";
  text += "Μου είπες<br>";
  text += "Σ ’αγαπάει πίσω<br>";
  text += "Σε αφήνει να την κοιτάς<br>";
  text += "Ο Θείος M&emsp;&emsp;&emsp;&emsp;&emsp;A<br>";
  text += "το θείο<br>";
  text += "Μεταξύ Aνόρθωσης και Aστροφεγγιάς<br>";
  text += "<br>";

  text += "Αγναντεύεις τον ορίζοντα<br>";
  text += "Πέρα από τα δάκτυλα των ποδιών σου<br>";
  text += "Περνά κόσμος και σε θαυμάζει<br>";
  text += "<br>";

  text += "Α ΓΟΥ<br>";
  text += "Α ΓΟΥ<br>";
  text += "Α ΓΟΥ<br>";
  text += "<br>";

  text += "Μαθαίνεις να σε θαυμάζουν<br>";
  text += "<br>";

  text += "Είσαι άγαλμα<br>";
  return text;
}

function dearAText_5_GR(){
  var text = "";
  text += "Αγαπητέ μου Α<br>";
  text += "Δεν ξεχνώ το Α<br>";
  text += "Να την<br>";
  text += "Ανόρθωση<br>";
  text += "Την Καλύτερη μορφή του<br>";
  text += "Α<br>";
  text += "Μου είπες<br>";
  text += "Σ’ αγαπάει πίσω<br>";
  text += "Σε αφήνει να την κοιτάς<br>";
  text += "<br>";
  text += "Μεταξύ Αμμόχωστος και Ακάμα<br>";

  text += "Σε χτυπά η μπάλα και καταρρέεις<br>";
  text += "<br>";
  text += "Μα με κάθε παιδί που σε σκαρφαλώνει , συμπληρώνεσαι<br>";
  text += "Διακοσμείται η έκταση σου με<br>";
  text += "<br>";
  text += "Δέντρα<br>";
  text += "Πέτρες<br>";
  text += "Φρούτα<br>";
  text += "Μολύβια<br>";
  text += "Δίχτυα<br>";
  text += "Ψάρια<br>";
  text += "Αγγεία<br>";
  text += "<br>";
  text += "ΑΜ<br>";
  text += "ΑΜ<br>";
  text += "ΑΜ<br>";
  text += "<br>";
  text += "Μαθαίνεις να μοιράζεσαι<br>";
  text += "<br>";
  text += "Είσαι Αγγείο";
  return text;
}

function dearAText_6_GR(){
  var text = "";
  text += "Αγαπητέ μου Α,<br>";
  text += "Δεν ξεχνώ το<br>";
  text += "Α,<br>";
  text += "Να τον<br>";
  text += "Ακάμα<br>";
  text += "Την καλύτερη μορφή του<br>";
  text += "Α<br>";
  text += "Μου είπες<br>";
  text += "Σ’ αγαπάει πίσω<br>";
  text += "Σε αφήνει να την κοιτάς<br>";
  text += "Ο Θείος Μου A<br>";
  text += "το Θείο<br>";
  text += "Μεταξύ Καρπασίας και Ακάμα<br>";
  /*text += "<br>";*/

  text += "Σκάβω σκάβω σκάβω<br>";
  text += "Βουτάω δάκτυλα<br>";
  text += "Ξαπλώνεις ανάσκελα<br>";
  text += "Χέρια<br>";
  text += "Αγκώνες<br>";
  text += "Γόνατα<br>";
  text += "Πόδια<br>";
  text += "Υποστηρίζω την πλάτη σου στην άμμο<br>";
  text += "Τυλίγεσαι με νερό<br>";
  text += "Αλλά το κεφάλι σου, μου παραμένει<br>";
  text += "Υπέργειο<br>";
  text += "Αέρας<br>";
  text += "Απανεμιά<br>";
  text += "Θάβεσαι με μια χούφτα άμμου<br>";
  text += "Αμμόχωστος<br>";
  /*text += "<br>";*/

  text += "Η ύπαρξη σου εξαρτάται από καιρικές συνθήκες<br>";
  /*text += "<br>";*/

  text += "Αστροφεγγιά<br>";
  text += "Εδώ θα μείνω<br>";
  text += "Ακάμα<br>";
  /*text += "<br>";*/

  text += "Μαθαίνεις να περιμένεις<br>";
  /*text += "<br>";*/

  text += "Είσαι Αγγείο <br>";
  text += "Αγάπη<br>";
  text += "Άγαλμα<br>";
  text += "Ανόρθωση<br>";
  text += "Καρπασία<br>";
/*  text += "<br>";*/

  text += "Εσύ το άγαλμα<br>";
  text += "Μου είπες<br>";
  text += "Έχεις γίνει Α<br>";
  text += "Κορμός<br>";
  text += "Έχεις βγάλει ρίζες<br>";
  text += "Ακίνητος<br>";
  text += "Κινήσε<br>";
  text += "<br>";
  text += "Ησυ<br>";
  text += "χα<br>";
  text += "Ησυχί<br>";
  text += "Α<br>";
    text += "<br>";
  text += "Εσύ Αγαπητέ Μ,Α";
return text;
}

function dearAText_0(){
  var text = "";
  text += "My dearest A<br>";
  text += "I walk on the beach<br>";
  text += "mulling over how many bodies are created every day between earth and sea,<br>";
  text += "Only this time they are made by children.<br>";
  text += "I dip my finger into the sand and make holes for nipples.<br>";
  text += "I cup my hand around her shoulder,<br>";
  text += "and grab her wrist.<br>";
  text += "She gives me a handful of sand,<br>";
  text += "I learn that her wrist fits perfectly in the inside of my palm";
  return text;
}

function dearAText_1(){
  var text = "";
  text += "My Dearest A<br>";
  text += "I don't forget<br>";
  text += "the A,<br>";
  text += "There Is<br>";
  text += "Karpasia,<br>";
  text += "The best form of Cyprus<br>";
  text += "but<br>";
  text += "you said<br>";
  text += "She loves you back<br>";
  text += "She lets you look at her<br>";
  text += "My Uncle M&emsp;&emsp;&emsp;&emsp;&emsp;A<br>";
  text += "A divine<br>";
  text += "<br>";
  text += "between Mermaid and Centaur.<br>";
  text += "<br>";
  text += "You raise your arms above your head<br>";
  text += "Your palms overlap one on top of the other<br>";
  text += "You suction your ears into the skin of your arms<br>";
  text += "She lets you look at her<br>";
  text += "I hear the liquid of my,your body<br>";
  text += "Through my, your arms<br>";
  text += "<br>";
  text += "and I hear my heart<br>";
  text += "and I hear your heart<br>";
  text += "<br>";
  text += "A HH<br>";
  text += "A HH<br>";
  text += "A HH<br>";
  text += "<br>";
  text += "You learn to swim<br>";
  text += "<br>";
  text += "You are A";
  return text;
}


function dearAText_2(){
  var text = "";
  text += "My Dearest A<br>";
  text += "I don’t forget<br>";
  text += "the A,<br>";
  text += "There Is<br>";
  text += "Love,<br>";
  text += "The best form of A,<br>";
  text += "<br>";
  text += "A<br>";
  text += "A<br>";
  text += "A<br>";
  text += "<br>";
  text += "you said<br>";
  text += "She loves you back<br>";
  text += "She lets you look at her<br>";
  text += "My Uncle M&emsp;&emsp;&emsp;&emsp;&emsp;A<br>";
  text += "A divine<br>";
  text += "Between a tractor and a tree trunk<br>";
  text += "<br>";
  text += "I dip my finger into the sand and I make a hole,<br>";
  text += "You sink,<br>";
  text += "Rebuild legs,<br>";
  text += "But you get wet<br>";
  text += "You float and as the current takes you<br>";
  text += "I shriek so you can hear me,<br>";
  text += "So you can see me<br>";
  text += "<br>";
  text += "A MA<br>";
  text += "A MA<br>";
  text += "A MA<br>";
  text += "<br>";
  text += "You learn to ask<br>";
  text += "<br>";
  text += "You are Love<br>";
  return text;
}

function dearAText_3(){
  var text = "";
  text += "My Dearest A<br>";
  text += "I don't forget<br>";
  text += "A,<br>";
  text += "The Rose,<br>";
  text += "The best form of red<br>";
  text += "You said<br>";
  text += "She loves you back<br>";
  text += "She lets you look at her<br>";
  text += "My Uncle M&emsp;&emsp;&emsp;&emsp;&emsp;A<br>";
  text += "A divine<br>";
  text += "Between a breath and no wind<br>";
  text += "<br>";
  text += "I dip my finger in the sand and,<br>";
  text += "leave your mouth a little open so you can taste the salt,<br>";
  text += "Your lips swell as if I've been kissing you all day,<br>";
  text += "You swallow water<br>";
  text += "<br>";
  text += "A TOU<br>";
  text += "A TOU<br>";
  text += "A TOU<br>";
  text += "<br>";
  text += "You learn to breathe<br>";
  text += "<br>";
  text += "You are a rose<br>";
  return text;
}

function dearAText_4(){
  var text = "";
  text += "My Dearest A,<br>";
  text += "I don't forget the<br>";
  text += "A,<br>";
  text += "There Is<br>";
  text += "Korallia<br>";
  text += "The best form of<br>";
  text += "A<br>";
  text += "A<br>";
  text += "A<br>";
  text += "The Statue,<br>";
  text += "You said<br>";
  text += "She loves you back<br>";
  text += "She lets you look at her,<br>";
  text += "My Uncle M&emsp;&emsp;&emsp;&emsp;&emsp;A<br>";
  text += "A divine<br>";
  text += "Between Anorthosis and Astrofeggia<br>";
  text += "You look at the horizon,<br>";
  text += "Over the edges of your feet<br>";
  text += "People come to admire you<br>";
  text += "<br>";
  text += "A GOU<br>";
  text += "A GOU<br>";
  text += "A GOU<br>";
  text += "<br>";
  text += "You learn to be admired<br>";
  text += "<br>";
  text += "You are a statue";
  return text;
}

function dearAText_5(){
  var text = "";
  text += "My dearest A<br>";
  text += "I don't forget the A,<br>";
  text += "There<br>";
  text += "Is<br>";
  text += "Anorthosis,<br>";
  text += "The greatest form of<br>";
  text += "A<br>";
  text += "You said<br>";
  text += "She loves you back,<br>";
  text += "She lets you look at her<br>";
  text += "<br>";
  text += "Between Famagusta and Akama<br>";
  text += "The ball is kicked and you collapse,<br>";
  text += "<br>";
  text += "But with every child that climbs on you, you become complete<br>";
  text += "Your surface is decorated with<br>";
  text += "Trees<br>";
  text += "Stones<br>";
  text += "Fruits<br>";
  text += "Pencils<br>";
  text += "Nets<br>";
  text += "Fish<br>";
  text += "Vessels<br>";
    text += "<br>";
  text += "AM<br>";
  text += "AM<br>";
  text += "AM<br>";
    text += "<br>";
  text += "You learn to share<br>";
    text += "<br>";
  text += "You are a Vessel";
  return text;
}


function dearAText_6(){
  var text = "";
  text += "My dearest A<br>";
  text += "I don't forget the<br>";
  text += "A,<br>";
  text += "There<br>";
  text += "Is<br>";
  text += "Akamas<br>";
  text += "The greatest form of<br>";
  text += "A<br>";
  text += "You said<br>";
  text += "She loves you back,<br>";
  text += "She lets you look at her<br>";
  text += "My Uncle M&emsp;&emsp;&emsp;&emsp;&emsp;A<br>";
  text += "A divine<br>";
  text += "Between Karpasia and Akamas<br>";
  text += "I dig I dig I dig<br>";
  text += "I dip my fingers<br>";
  text += "You lay on your back<br>";
  text += "Hands<br>";
  text += "Elbows<br>";
  text += "Knees<br>";
  text += "Feet<br>";
  text += "I support your back with sand<br>";
  text += "Enveloped in water<br>";
  text += "But your,my head remains above the ground<br>";
  text += "Air<br>";
  text += "No wind<br>";
  text += "Your existence is dependant on climatic conditions<br>";
  text += "Starlight<br>";
  text += "I'm staying here<br>";
  text += "Akama<br>";
  text += "You learn to wait<br>";
  text += "You are a vessel<br>";
  text += "Love<br>";
  text += "Statue<br>";
  text += "Anorthosis<br>";
  text += "KarpasiA<br>";
  text += "You the statue<br>";
  text += "Said<br>";
  text += "You became A<br>";
  text += "Trunk<br>";
  text += "You made roots<br>";
  text += "Without movement<br>";
  text += "Move<br>";
  text += "<br>";
  text += "Quietly A<br>";
  text += "Quiet<br>";
  text += "A<br>";
  text += "<br>";
  text += "You my dearest M,A";
  return text;
}

function dearAText_0_TR(){
  var text = "";
  text += "Cânım A,<br>";
  text += "Kumsalda yürüyorum<br>";
  text += "düşünüp duruyorum her gün kaç beden yaratılır yerle deniz arası,<br>";
  text += "Sâde çocuklar yapar onları böyle bir zamanda.<br>";
  text += "Parmaklarımı kuma daldırıyor ve delikler açıyorum göğüs uçlarına.<br>";
  text += "Sarıyorum omzunu, yakalıyorum bileğinden.<br>";
  text += "Bir avuç kum<br>";
  text += "Avcuma kusursuzca sığıyor bileği, öğreniyorum.";
  return text;  
}

function dearAText_1_TR(){
  var text = "";
  text += "Cânım A,<br>";
  text += "Unutamam<br>";
  text += "A’yı<br>";
  text += "İşte<br>";
  text += "Karpaz,<br>";
  text += "Kıbrıs’ın en güzel yeri<br>";
  text += "yalnız<br>";
  text += "dedin ki,<br>";
  text += "O da seni seviyor.<br>";
  text += "Onu seyretmene izin veriyor.<br>";
  text += "Amcam M&emsp;&emsp;&emsp;&emsp;&emsp;A<br>";
  text += "<br>";
  text += "Deniz kızı ve Sentor arası<br>";
  text += "Bir ilah<br>";
  text += "<br>";
  text += "Kollarını başının üstüne kaldırıyorsun<br>";
  text += "Avuçların birbiri üstünde<br>";
  text += "Kulaklarını kollarına gömüyorsun<br>";
  text += "Bedenimin, bedeninin suyunu duyuyorum<br>";
  text += "Kollarımın, kollarının ta içinden<br>";
  text += "<br>";
  text += "Ve kalbimi duyuyorum<br>";
  text += "Ve kalbini duyuyorum<br>";
  text += "<br>";
  text += "A HH<br>";
  text += "A HH<br>";
  text += "A HH<br>";
  text += "<br>";
  text += "Yüzmeyi öğreniyorsun<br>";
  text += "<br>";
  text += "A’sın sen";
  return text;
}

function dearAText_2_TR(){
  var text = "";
text += "Cânım A,<br>";
text += "Unutamam<br>";
text += "A’yı,<br>";
text += "İşte<br>";
text += "Aşk,<br>";
text += "A’nın en iyi hâli,<br>";
text += "<br>";
text += "A<br>";
text += "A<br>";
text += "A<br>";
text += "<br>";
text += "dedin,<br>";
text += "O da seni seviyor<br>";
text += "Onu seyretmene izin veriyor.<br>";
text += "Amcam M&emsp;&emsp;&emsp;&emsp;&emsp;A<br>";
text += "Bir traktör ve ağaç gövdesi arasında<br>";
text += "Bir ilah<br>";
text += "<br>";
text += "Kuma daldırıyorum parmaklarımı, bir delik açıyorum<br>";
text += "Batıyorsun,<br>";
text += "Yeniden inşa ediyorsun bacaklarını,<br>";
text += "Islanıyorsun ama<br>";
text += "Süzülüyorsun, akıntı seni alıp giderken<br>";
text += "Feryat ediyorum, beni duyasın diye,<br>";
text += "Beni göresin diye<br>";
text += "<br>";
text += "A MA<br>";
text += "A MA<br>";
text += "A MA<br>";
text += "<br>";
text += "İstemeyi öğreniyorsun<br>";
text += "<br>";
text += "Aşksın sen";
return text;
}

function dearAText_3_TR(){
  var text = "";
text += "Cânım A,<br>";
text += "Unutamam<br>";
text += "A’yı,<br>";
text += "Gül,<br>";
text += "Kırmızının en iyi hâli<br>";
text += "Dedin ki<br>";
text += "O da seni seviyor<br>";
text += "Onu seyretmene izin veriyor<br>";
text += "Amcam M&emsp;&emsp;&emsp;&emsp;&emsp;A<br>";
text += "Bir nefes ve rüzgârsızlık arasında<br>";
text += "Bir ilah<br>";
text += "<br>";
text += "Kuma daldırıyorum parmaklarımı,<br>";
text += "Tuzu tadasın diye, azıcık açıyorum ağzını,<br>";
text += "Dudakların şişiyor, seni tüm gün öpmüşüm gibi,<br>";
text += "Su yutuyorsun<br>";
text += "<br>";
text += "A TU<br>";
text += "A TU<br>";
text += "A TU<br>";
text += "<br>";
text += "Nefes almayı öğreniyorsun<br>";
text += "Bir gülsün sen";
return text;
}

function dearAText_4_TR(){
  var text = "";
text += "Cânım A,<br>";
text += "Unutamam<br>";
text += "A’yı,<br>";
text += "İşte<br>";
text += "Koralia<br>";
text += "A<br>";
text += "A<br>";
text += "A’nın en iyi hâli<br>";
text += "Heykel,<br>";
text += "Dedin ki<br>";
text += "O da seni seviyor,<br>";
text += "Onu seyretmene izin veriyor,<br>";
text += "Amcam M&emsp;&emsp;&emsp;&emsp;&emsp;A<br>";
text += "Anortosis ve Astrofegia arasında<br>";
text += "Bir ilah<br>";
text += "Ufka bakıyorsun,<br>";
text += "Ayaklarının ucuna<br>";
text += "Toplanıyor insanlar, sana hayran olmaya<br>";
text += "A GU<br>";
text += "A GU<br>";
text += "A GU<br>";
text += "Öğreniyorsun, bir idol olmayı<br>";
text += "Bir heykelsin sen";
return text;
}

function dearAText_5_TR(){
  var text = "";
  text += "Cânım A,<br>";
  text += "Unutamam Ay’yı,<br>";
  text += "İşte<br>";
  text += "Anortosis,<br>";
  text += "A’nın<br>";
  text += "En yüce hâli<br>";
  text += "A<br>";
  text += "Dedin ki<br>";
  text += "O da seni seviyor,<br>";
  text += "Onu seyretmene izin veriyor<br>";
  text += "<br>";
  text += "Mağusa ve Akama arasında<br>";
  text += "Topa vuruluyor, yığılıyorsun,<br>";
  text += "<br>";
  text += "Üzerine tırmanan her çocuk, tamamlıyor seni ama<br>";
  text += "Ağaçlar<br>";
  text += "Taşlar<br>";
  text += "Meyveler<br>";
  text += "Kalemler<br>";
  text += "Ağlar<br>";
  text += "Balıklar<br>";
  text += "Gemilerle<br>";
  text += "Süslü yüzeyin<br>";
  text += "<br>";
  text += "AMM<br>";
  text += "AMM<br>";
  text += "AMM<br>";
  text += "<br>";
  text += "Paylaşmayı öğreniyorsun<br>";
  text += "<br>";
  text += "Bir gemisin sen";
  return text;  
}

function dearAText_6_TR(){
  var text = "";
  text += "Cânım A,<br>";
  text += "Unutamam<br>";
  text += "A’yı<br>";
  text += "İşte<br>";
  text += "Akama<br>";
  text += "Amcam M&emsp;&emsp;&emsp;&emsp;&emsp;A<br>";
  text += "Karpaz ve Akama arasında<br>";
  text += "Bir ilah<br><br>";
  text += "Kazıyorum kazıyorum kazıyorum<br>";
  text += "Daldırıyorum parmaklarımı<br>";
  text += "Sırtüstü yatıyorsun<br>";
  text += "Eller<br>";
  text += "Bilekler<br>";
  text += "Dizler<br>";
  text += "Ayaklar<br>";
  text += "Kum dolduruyorum altına<br>";
  text += "Sarmalanmışız suyla<br>";
  text += "Ama başın, başım su üstünde<br>";
  text += "Hava<br>";
  text += "Rüzgâr yok<br>";
  text += "Hava durumuna bağlı varlığın<br>";
  text += "Yıldız ışığı<br>";
  text += "Burda kalıyorum<br>";
  text += "Akama<br>";
  text += "Beklemeyi öğreniyorsun<br>";
  text += "Bir gemisin sen<br>";
  text += "Aşk<br>";
  text += "Heykel<br>";
  text += "Anortosis<br>";
  text += "KarpAz<br>";
  text += "Bir heykel olarak<br>";
  text += "Dedin ki<br>";
  text += "A oldun<br>";
  text += "Bir ağaç gövdesi<br>";
  text += "Kök saldın<br>";
  text += "Yerinden kımıldamadan.<br>";
  text += "Durma, hareket et<br><br>";
  text += "Sessizce A<br>";
  text += "Sessiz<br>";
  text += "A<br><br>";
  text += "Sen,<br>";
  text += "Cânım M,A";
  
  return text;  
}