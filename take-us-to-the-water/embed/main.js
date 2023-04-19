var NUM_PHOTOS = 54;
var NUM_AUDIOS = 7;
var NUM_VIDEOS = 2;
var ACTIVE_AUDIO_INDEX = -1;
var MAX_OPACITY = "0.75";
var MAX_OPACITY_SUBS = "0.8";
var MAX_OPACITY_INFO = "1.0";
var MAX_OPACITY_GLOW = "0.4";//"0.3";
var TRANSITION_TIME = 750;
var TRANSITION_TIME_2 = 500;
var MARKER_SIZE = "25px"; //size of clickable audio marker

var array_audios = [];

var mapbox_style = "mapbox://styles/desettled/clgj4adry007801pkaun0824n";

var showing_Subtitles = false;
var showing_Info = false;

var flying = false;
var flyToIndex = -1;

var dotIndex_glow = 0;
var dotIndex_halo = 1;
var dotIndex_audio = 2;

var map;

var halo_size_max = '2000%';

var checkForNewOverflow = true;

function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
    return;
  }
  document.addEventListener('DOMContentLoaded', fn);
}

ready(function(){

  util_protectImages();
  util_populateInfo();
  
  mapboxgl.accessToken = 'pk.eyJ1IjoiZGVzZXR0bGVkIiwiYSI6ImNsZGFnZTl4MDAzNGozd25jeHg0aXhtbW0ifQ.2AccTl7IontnmbUf51LuIg';
  map = new mapboxgl.Map({
    attributionControl: false,
    container: 'map', // container ID
    style: mapbox_style,
    minZoom: 6,
    maxZoom:15,
  })
  .addControl(new mapboxgl.FullscreenControl({container: document.querySelector('body')}))
  .addControl(new mapboxgl.AttributionControl({customAttribution: 'design & development by <a href="https://www.shammas.xyz" target="_blank">shammas.xyz</a>'}));

  map.keyboard.disable();

  /* FLYTO RELATED */
  map.on('moveend', function(e){
    if(flying) {
      map.fire('flyend');
    }
  });
  map.on('flystart', function(){
    var element = $(".pswp__button--close");
    element.trigger('click');
    flying = true;
  });
  map.on('flyend', function(){
      flying = false;
  });

  /* SET TOOLTIP */
  /*
  const parentElement = document.querySelector('.mapboxgl-ctrl-fullscreen');
  parentElement.classList.add('tooltip');
  const spanElement = document.createElement('span');
  spanElement.classList.add('tooltiptext', 'fullscreen-tooltip');
  spanElement.innerText = 'Maximize';
  parentElement.appendChild(spanElement);
*/
  /* SET FLYTOS */
  setFlyTos();
  /* END SET FLYTOS */

  addPhotoMarkersToMap(map);
  addVideoMarkersToMap(map);
  addAudioMarkersToMap(map);
  createAudioDomElements();
  //setInteraction_Subtitles();
  setInteraction_ExitAudio();
  setInteraction_LanguageChange();
  setInteraction_Footer();
});

function setFlyTos(){
  document.getElementById('flyto-0').addEventListener('click', () => {
    startFlight();
    flyToIndex = 0
    // Fly to a location
    map.flyTo({
    center: getFlyToCoordinates(flyToIndex),
    zoom: 11,
    duration: 7000,
    essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
    map.fire('flystart');
    });
    document.getElementById('flyto-1').addEventListener('click', () => {
      startFlight();
      flyToIndex = 1;
      // Fly to a location
      map.flyTo({
      center: getFlyToCoordinates(flyToIndex),
      zoom: 11,
      duration: 7000,
      essential: true // this animation is considered essential with respect to prefers-reduced-motion
      });
      map.fire('flystart');
      });
      document.getElementById('flyto-2').addEventListener('click', () => {
        startFlight();
        flyToIndex = 2;
        // Fly to a location
        map.flyTo({
        center: getFlyToCoordinates(flyToIndex),
        zoom: 11,
        duration: 7000,
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        map.fire('flystart');
        });
}

function startFlight(){
  //interrupt previous flight
  flying = false;
  //close thumbs + disable thumbs icon
  var thumbsToggle = document.getElementById("footer-icon-thumbs");
  if(thumbsToggle.classList.contains('footer-icon-thumbs-active')){
    thumbsToggle.click();
  }
}

function addPhotoMarkersToMap(map){
  const imgJson = getPhotoMarkers();
  // Add markers to the map.
  var index = 0;

  for (const marker of imgJson) {
    // Create a DOM element for each marker.
    const el = document.createElement('div');
    const parentEl = document.createElement('div');
    const size = getRandomMarkerStarSize();
    parentEl.className = 'marker';
    el.className = 'photo-marker';
    el.style.backgroundImage = getRandomMarkerStarPath();
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.backgroundSize = '100%';

    el.addEventListener('click', () => {
      el.classList.add("photo-marker-visited");
      //el.children[0].children[0].children[0].classList.add("square-visited");
      // el.children[0].children[0].add("square-visited");
    });

    parentEl.appendChild(el);

    // Add markers to the map.
    new mapboxgl.Marker(parentEl)
    .setLngLat(marker.coordinates)
    .addTo(map);
    //    .clickTolerance()

    var stringSelector = "cy-lightbox-" + index;
    //console.log(stringSelector);
    const lightbox = document.getElementById(stringSelector);
    //console.log(lightbox);
    el.appendChild(lightbox);

    index++;
  }
}

function addAudioMarkersToMap(map){
  const audioJson = getAudioMarkers();
  // Add markers to the map.
  var index = 0;

  for(var i=0;i<audioJson.length;i++){
    const marker = audioJson[i];
    //  for (const marker of audioJson) {
    // Create a DOM element for each marker.
    const parentEl = document.createElement('div');
    const el = document.createElement('div');
    parentEl.className = 'marker';
    el.className = 'audio-marker'; //'marker audio-marker dot';
    //el.id = "audio-marker-" + index;
    /*el.style.backgroundImage = `url(assets-cyprus-map/icons/marker-200b.png)`;*/
    el.style.width = MARKER_SIZE;
    el.style.height = MARKER_SIZE;
    el.style.backgroundSize = '100%';

   // array_domAudioMarkers.push(el);

    const dot = document.createElement('div');
    dot.className="dot";
    dot.style.width = "9.5px";
    dot.style.height = "9.5px";
    dot.style.scale = "1.0";
    dot.id="dot-" + index;
    el.appendChild(dot);

    el.addEventListener('click', () => {
      showing_Subtitles = true;
      //console.log("showing_Subtitles: " + showing_Subtitles);

      const dotChild = el.firstChild;
      /* Set Active Audio Index and switch subtitles */
      ACTIVE_AUDIO_INDEX = dotChild.id.slice(-1);
      switchSubtitlesTo(ACTIVE_AUDIO_INDEX);
      /* Disable footer button if active */
      var footer_audio = document.getElementById("footer-icon-audio");
      if (footer_audio.classList.contains("footer-icon-audio-active")) {
        footer_audio.classList.remove("footer-icon-audio-active");
      }

      clearAllAudioElements();
      activateElement_Dot(dotChild);

      /* Play current Audio */
      dotChild.children[dotIndex_audio].play();
      /* WHEN AUDIO FILE ENDS THEN */
      dotChild.children[dotIndex_audio].addEventListener('ended', (event) => {

        document.getElementById("subtitles-box").style.opacity = 0;
        document.getElementById("subtitles-exit").style.opacity = 0;
        document.getElementById("subtitles-footer").style.opacity = 0;

        showing_Subtitles = false;
        //console.log("showing_Subtitles: " + showing_Subtitles);

        deactivateElement_Dot(dotChild);
      });
    });


    const glow = document.createElement('div');
    glow.className = 'dot-glow';
    glow.style.opacity = 0;
    dot.appendChild(glow);

    const halo = document.createElement('div');
    halo.className = 'dot-halo';
    halo.style.opacity = 0;
    var haloSize = halo_size_max;
    halo.style.height = haloSize;
    halo.style.width = haloSize;
    dot.appendChild(halo);

    parentEl.appendChild(el);

    // Add markers to the map.
    const m = new mapboxgl.Marker(parentEl)//, {rotation: 45, draggable: true})
    .setLngLat(marker.coordinates)
    .addTo(map)
    m.on('dragend',function(e){
      var lngLat = e.target.getLngLat();
    })

    index++;
  }
}

function addVideoMarkersToMap(map){
  const imgJson = getVideoMarkers();
  // Add markers to the map.
  var index = 0;

  for (const marker of imgJson) {
    // Create a DOM element for each marker.
    const el = document.createElement('div');
    const parentEl = document.createElement('div');
    const size = getRandomMarkerStarSize();
    parentEl.className = 'marker';
    el.className = 'video-marker';
    el.style.backgroundImage = getRandomMarkerStarPathYellow();
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.backgroundSize = '100%';

    el.addEventListener('click', () => {
      //activateElement_Diamond(el);
      //document.getElementById("gallery-type-video-0").style.display = 'flex';

    el.children[0].children[0].style.display = 'flex';

    /*
    if (!el.classList.contains('already-clicked')) {
      el.classList.add('already-clicked');
      el.click();
      console.log(el);
    }
    */
      exitAllAudioRelated();
    });

    parentEl.appendChild(el);

    // Add markers to the map.
    new mapboxgl.Marker(parentEl)
    .setLngLat(marker.coordinates)
    .addTo(map);

    var stringSelector = "cy-lightbox-video-" + index;
    const lightbox = document.getElementById(stringSelector);
    //console.log(stringSelector);
    el.appendChild(lightbox);

    index++;
  }
}

var createAudioDomElements = function(){
  var soundPaths = []
  for (var i=0;i<NUM_AUDIOS;i++){
    soundPaths.push("Koral_" + i + ".mp3");
  }
  var className = "active-point";

  for (var i=0;i<soundPaths.length;i++){
    /* Create Sounds */
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'https://storage.googleapis.com/atlas-medliq/cyprus/audio/Dearest_A/' + soundPaths[i]);
    audioElement.id = "sound-file-" + i;
    audioElement.volume = 1.0;
    array_audios.push(audioElement);

    document.getElementById("dot-" + i).appendChild(audioElement);
  }
}

function util_populateInfo(){
  const box = document.getElementById("info-box");
  box.innerHTML = getInfoText();
}

function switchSubtitlesTo(active_audio_index){
  if(showing_Subtitles){
    checkForNewOverflow = false;
    //console.log("showing so " );
  const subbox = document.getElementById("subtitles-box");
  const subX = document.getElementById("subtitles-exit");
  const subF = document.getElementById("subtitles-footer");
  subbox.style.opacity = 0.0;
  subX.style.opacity = 0.0;
  subF.style.opacity = 0.0;

  // Wait for the transition
  setTimeout(function(){
    // Load new content
    checkOverflows();
    subbox.innerHTML = getSubtitles(active_audio_index);
    // Fade in
    subbox.style.opacity = MAX_OPACITY_SUBS;
    subX.style.opacity = MAX_OPACITY_SUBS;
    subF.style.opacity = MAX_OPACITY_SUBS;
  },TRANSITION_TIME);
}
}

function setInteraction_ExitAudio(){
  $("#subtitles-exit a").click(function(){
    showing_Subtitles = false;
    //console.log("showing_Subtitles: " + showing_Subtitles);
    exitAllAudioRelated();
    setTimeout(function(){
      resetSubtitlePosition();
    },TRANSITION_TIME);
  });
}

function exitAllAudioRelated(){
  $("#subtitles-exit").css('opacity', '0.0');
  $("#subtitles-box").css('opacity', '0.0');
  $("#subtitles-footer").css('opacity', '0.0');
  $(".footer-icon-audio").removeClass("footer-icon-audio-active");
  clearAllAudioElements();
}

function setInteraction_LanguageChange(){
  $(".setLanguageEN").click(function() {
    LANGUAGE = 0;

    const subbox = document.getElementById("subtitles-box");
    subbox.style.opacity = 0.0;
    const infobox = document.getElementById("info-box");
    infobox.style.opacity = 0.0;

    setTimeout(function(){
      subbox.innerHTML = getSubtitles(ACTIVE_AUDIO_INDEX);
      infobox.innerHTML = getInfoText(); 
      setFlyTos();
    },TRANSITION_TIME);

    if(showing_Subtitles){
      setTimeout(function(){ 
        subbox.style.opacity = MAX_OPACITY_SUBS;
      },TRANSITION_TIME);
    }
    if(showing_Info){
      setTimeout(function(){ 
        infobox.style.opacity = MAX_OPACITY_INFO;
      },TRANSITION_TIME);
    }
  });
  
  $(".setLanguageGR").click(function() {
    LANGUAGE = 1;

    const subbox = document.getElementById("subtitles-box");
    subbox.style.opacity = 0.0;
    const infobox = document.getElementById("info-box");
    infobox.style.opacity = 0.0;

    setTimeout(function(){
      subbox.innerHTML = getSubtitles(ACTIVE_AUDIO_INDEX);
      infobox.innerHTML = getInfoText();
      setFlyTos();
    },TRANSITION_TIME);

    if(showing_Subtitles){
      setTimeout(function(){
        subbox.style.opacity = MAX_OPACITY_SUBS;
      },TRANSITION_TIME);
    }
    if(showing_Info){
      setTimeout(function(){
        infobox.style.opacity = MAX_OPACITY_INFO;
      },TRANSITION_TIME);      
    }
  });

  $(".setLanguageTR").click(function() {
    LANGUAGE = 2;

    const subbox = document.getElementById("subtitles-box");
    subbox.style.opacity = 0.0;
    const infobox = document.getElementById("info-box");
    infobox.style.opacity = 0.0;

    setTimeout(function(){
      subbox.innerHTML = getSubtitles(ACTIVE_AUDIO_INDEX);
      infobox.innerHTML = getInfoText();
      setFlyTos();
    },TRANSITION_TIME);

    if(showing_Subtitles){
      setTimeout(function(){
        subbox.style.opacity = MAX_OPACITY_SUBS;
      },TRANSITION_TIME);
    }
    if(showing_Info){
      setTimeout(function(){
        infobox.style.opacity = MAX_OPACITY_INFO;
      },TRANSITION_TIME);      
    }
  });
}

function setInteraction_Footer(){
  const thumbsToggle = document.getElementById("footer-icon-thumbs");
  const thumbsTarget = document.getElementById("cy-lightbox-thumbs");

  thumbsToggle.addEventListener("click", function() {
    if (thumbsTarget.style.opacity === "0") {
      thumbsToggle.classList.add('footer-icon-thumbs-active');
      thumbsTarget.style.opacity = "1";
      //Set background of icons 
      $('.footer-icon-thumbs, .footer-icon-info, .footer-icon-audio, .footer-icon-atlas, .mapboxgl-ctrl button,.mapboxgl-ctrl-shrink').toggleClass('footer-icon-enabled-background');
      //
      setTimeout(function(){
        thumbsTarget.style.pointerEvents="auto";
      },TRANSITION_TIME_2);
    } else {
      thumbsToggle.classList.remove('footer-icon-thumbs-active');
      thumbsTarget.style.opacity = "0";
      //Set background of icons 
      $('.footer-icon-thumbs, .footer-icon-info, .footer-icon-audio, .footer-icon-atlas, .mapboxgl-ctrl button,.mapboxgl-ctrl-shrink').toggleClass('footer-icon-enabled-background');
      //
      setTimeout(function(){
        thumbsTarget.style.pointerEvents="none";
      },TRANSITION_TIME_2);
    }
  });

  const audioToggle = document.getElementById("footer-icon-audio");
  const infoToggle = document.getElementById("footer-icon-info");

  audioToggle.addEventListener("click", function() {

    audioToggle.classList.toggle("footer-icon-audio-active");
    if (audioToggle.classList.contains("footer-icon-audio-active")) {
      showing_Subtitles = true;
      //console.log("showing_Subtitles: " + showing_Subtitles);
      playAudioSequence();

            // if is mobile, then close info if open
            if(util_isMobile()){
              //console.log("IS MOBILE");
              if(infoToggle.classList.contains("footer-icon-info-active")){
                //console.log("IS ACTIVE ALSO");
                infoToggle.click();
              }
            }
    } else {
      showing_Subtitles = false;
      //console.log("showing_Subtitles: " + showing_Subtitles);
      exitAllAudioRelated();
    }
  });

  infoToggle.addEventListener("click", function() {
  showing_Info = !showing_Info;
  //console.log("showing_Info: " + showing_Info);

  infoToggle.classList.toggle("footer-icon-info-active");
    if (infoToggle.classList.contains("footer-icon-info-active")) {
      /* SHOW INFO */
      document.getElementById("info-box").style.display="block";
      document.getElementById("info-footer").style.display="block";
      document.getElementById("info-wrapper").style.opacity="1.0";
      document.getElementById("info-box").style.opacity="1.0";

      // if is mobile, then close audio if open
      if(util_isMobile()){
        //console.log("IS MOBILE");
        if(audioToggle.classList.contains("footer-icon-audio-active")){
          //console.log("IS ACTIVE ALSO");
          audioToggle.click();
        }
      }
      
      //document.getElementById("info-box").style.display="block";
      //document.getElementById("info-wrapper").style.opacity = "1.0";
    } else {
      /* HIDE INFO */
      //document.getElementById("info-wrapper").style.display="none";
      document.getElementById("info-wrapper").style.opacity = "0.0";
      //document.getElementById("info-box").style.opacity="0.0";
      //document.getElementById("info-footer").style.opacity="0.0";
      //document.getElementById("info-wrapper").style.opacity="0.0";
      setTimeout(function(){
        document.getElementById("info-box").style.display="none";
        document.getElementById("info-footer").style.display="none";
      },TRANSITION_TIME);
    }
  });
}

function playAudioSequence(){
    ACTIVE_AUDIO_INDEX = 0;
    clearAllAudioElements();
    playAudioRecursion();
}

function playAudioRecursion() {
  var audio = array_audios[ACTIVE_AUDIO_INDEX];
  
  // add event listener for when the audio ends
  audio.addEventListener('ended', function() {
    //console.log( "Audio " + (ACTIVE_AUDIO_INDEX ) + " has finished playing.")
    ACTIVE_AUDIO_INDEX++;

    for(var j=0;j<NUM_AUDIOS;j++){
      var dotActive = document.getElementById('dot-' + j);
      deactivateElement_Dot(dotActive);
    }

  setTimeout(function(){
    // check if there are more audio files to play
    if (ACTIVE_AUDIO_INDEX < array_audios.length) {
      // play the next audio file
      playAudioRecursion();
    }
  },1000);
  });
  // play the current audio file
  audio.play();
  activateElement_Dot(document.getElementById("dot-"+ACTIVE_AUDIO_INDEX));//array_domAudioMarkers[ACTIVE_AUDIO_INDEX].children[0]);
  switchSubtitlesTo(ACTIVE_AUDIO_INDEX);
}

/* UTIL */

function util_isMobile(){
  var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
return isMobile;
}

function util_protectImages(){
  // this will disable dragging of all images
  $("img").mousedown(function(e){
    e.preventDefault()
  });

  // this will disable right-click on all images
  $("body").on("contextmenu",function(e){
    return false;
  });
}

function activateElement_Diamond(dot){
  //dot.style.transform = "scale(2.5)";
  //dot.style.opacity = "1.0";
  /* glow around dot */
  //dot.children[1].style.opacity = MAX_OPACITY_GLOW;
  //dot.children[2].style.opacity = "0.0";
}
function activateElement_Dot(dot){
  dot.style.transform = "scale(0.5)";
  dot.style.opacity = "1.0";

  /* glow around dot */
  dot.children[dotIndex_glow].style.opacity = MAX_OPACITY_GLOW;
  //dot.children[dotIndex_halo].style.opacity = "0.0";
}
function deactivateElement_Dot(dot){
  //console.log("deactivating" + dot);
  dot.style.transform = "scale(1)"
  dot.style.opacity = MAX_OPACITY;

  dot.children[dotIndex_glow].style.opacity = "0.0"; //glow
  //dot.children[dotIndex_halo].style.opacity = "0.5"; //ring
}
function clearAllAudioElements(){
  for(var j=0;j<NUM_AUDIOS;j++){
    var sound = document.getElementById('sound-file-' + j);
    sound.pause();
    sound.currentTime = 0;

    var dotActive = document.getElementById('dot-' + j);
    //dotActive.children[1].style.opacity = 0;
    deactivateElement_Dot(dotActive);
  }
}

/* RANDOM NUMS STAR */

function getRandomMarkerStarPath(){
  var randomNumber = Math.floor(Math.random() * 9) + 1;
  var randomTwoDigitNumber = ('0' + randomNumber).slice(-2);
  return 'url(assets-cyprus-map/icons/Marker-stars/Marker-stars-'  + randomTwoDigitNumber + '.png';
}

function getRandomMarkerStarPathYellow(){
  var randomNumber = Math.floor(Math.random() * 9) + 1;
  var randomTwoDigitNumber = ('0' + randomNumber).slice(-2);
  return 'url(assets-cyprus-map/icons/Marker-stars-yellow/Marker-stars-yellow-'  + randomTwoDigitNumber + '.png';
}

function getRandomMarkerStarSize(){
    //var randomNumber = Math.floor(Math.random() * 20) + 20;
    var randomNumber = Math.floor(Math.random() * 13) + 27;
    return randomNumber;
}

/* GET MARKERS */

function getPhotoMarkerCoordinates(index){
  coords = [[32.951949, 34.985957], [33.171956, 35.661792], [34.002223, 34.987885], [33.154005, 35.011769], [33.1535, 35.011665], [33.387537, 35.129188], [32.406909, 34.75353], [33.90192, 35.437017], [32.527377, 35.144737], [33.003559, 34.618942], [33.011144, 34.640947], [33.187053, 34.704504], [32.930768, 34.631151], [33.372841, 35.161292], [33.023124, 34.942612], [33.372962, 35.162315], [33.262618, 35.34884], [33.2015, 35.063607], [33.388084, 35.127284], [32.972805, 34.574284], [33.953952, 34.981125], [33.353695, 35.172677], [34.002602, 34.987069], [32.951683, 34.986451], [33.114245, 35.035612], [33.386239, 35.126464], [33.388465, 35.127688], [32.869891, 34.903005], [33.388798, 35.129083], [32.932395, 34.631717], [33.368493, 35.09379], [32.871487, 34.927955], [33.956039, 34.980462], [34.002607, 34.987465], [32.905926, 34.926127], [33.152786, 35.010535], [33.354076, 34.856922], [33.352985, 35.172799], [33.346892, 34.949194], [33.346859, 34.949476], [32.626488, 34.664229], [32.965231, 34.570702], [33.153089, 35.011043], [32.749317, 35.172124], [33.387279, 35.128315], [33.356258, 35.179566], [33.346462, 34.949507], [34.016778, 34.985793], [32.955307, 34.56875], [33.598148, 34.911654], [33.956538, 34.980286], [32.413822, 34.76148], [33.958351, 35.117352], [33.959164, 35.116573]];
  return coords[index];
}

function getFlyToCoordinates(index){
  if(index==0){
    return [32.328762,35.032295];
  }
  else if (index==1){
    return [34.377868,35.591835];
  }
  else if (index==2){
    return [32.932029,34.914865];
  }
}

function getAudioMarkerCoordinates(index){
  coords = [];
  coords.push([33.97927688199161,34.9869905514482]);
  coords.push([34.18704362510559,35.537170965090695]);
  coords.push([34.312838268537234,35.58865407060709]);
  coords.push([33.961532240309054,35.10716243787378]);
  coords.push([34.060178112341674,35.01294894783899]);
  coords.push([33.62083729078992,34.9375661671416]);
  coords.push([32.30575039291534,35.08284901243856]);
  return coords[index];
} 

function getVideoMarkerCoordinates(index){
  coords = [[34.552459284350476,35.641784755799236],[34.324847,35.598952]];
  return coords[index];
}

function getPhotoMarkers(){
  var jsonArr = [];
  for (var i = 0; i < NUM_PHOTOS; i++) {
    jsonArr.push({
      coordinates: getPhotoMarkerCoordinates(i)
    });
  }
  return jsonArr;
}

function getAudioMarkers(){
  var jsonArr = [];

  for (var i = 0; i < NUM_AUDIOS; i++) {
    jsonArr.push({
      coordinates: getAudioMarkerCoordinates(i)
    });
  }
  return jsonArr;
}

function getVideoMarkers(){
  var jsonArr = [];
  for (var i = 0; i < NUM_VIDEOS; i++) {
    jsonArr.push({
      coordinates: getVideoMarkerCoordinates(i)
    });
  }
  return jsonArr;
}

/* OVERFLOWS */

function resetSubtitlePosition(){
  //console.log("RESETTING SUB POSITION");
  var element = document.getElementById("subtitles-box");
  element.style.top = "0px";
}

function setSubtitleOverflows(){
  //console.log("Setting Overflows...");

  var element = document.getElementById("subtitles-box-mask");
  var elementChild = document.getElementById("subtitles-box");

  maskHeight = element.clientHeight;
  textHeight = elementChild.clientHeight;

  var offset = textHeight - maskHeight;

  if(offset>0){
    //console.log("OVERFLOWING. Start Scrolling...");
    startSubtitleScroll(elementChild, 0, offset + 100);
    //elementChild.classList.add("overflow");
  }else{
   // console.log("Not overflowing");
  }
}

function startSubtitleScroll(subtitle, fromY, toY) {
  const scrollSpeed = 5;

  subtitle.style.top = fromY + "px";
  const distance = toY - fromY;
  const duration = distance / scrollSpeed * 1000;
  const startTime = performance.now();
  let lastY = fromY;

  function step(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = elapsedTime / duration;
    const newY = fromY + distance * Math.min(progress, 1);
    //const deltaY = newY - lastY;
    subtitle.style.top = -newY + "px";
    lastY = newY;
    if (progress < 1) {
      if(checkForNewOverflow){
      //console.log("progress not finished");
      window.requestAnimationFrame(step);
      }
    } else {
      //restart movement
      //startSubtitleScroll(subtitle, fromY, toY);
    }
  }
  window.requestAnimationFrame(step);
}

/*
function isOverflowing(el) {
  var curOverf = el.style.overflow;

  if ( !curOverf || curOverf === "visible" )
  el.style.overflow = "hidden";

  console.log("CH" + el.clientHeight);
  console.log("SH" + el.scrollHeight);

  var isOverflowing = el.clientWidth < el.scrollWidth
  || el.clientHeight < el.scrollHeight;

  el.style.overflow = curOverf;

  return isOverflowing;
}
*/
/*
function getSubtitlesAndCheckOverflow(index, clearOverflows){
  if(clearOverflows){
  clearSubtitleOverflows();
  
  setTimeout(function(){
    setSubtitleOverflows();
  },2000);
}
  return getSubtitles(index);
}
*/

function checkOverflows(){
  checkForNewOverflow = true;
  resetSubtitlePosition();
    
    setTimeout(function(){
      setSubtitleOverflows();
    },2000);
}