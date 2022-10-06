$(document).ready(() => {

    const audioOptions = {
        song_1:
            'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3',
        song_2:
            'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
        song_3:
            'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3',
        song_4:
            'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
        song_5:
            'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3',
        song_6:
            'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
        song_7:
            'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3',
        song_8:
            'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
        song_9:
            'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3',
    };
    let songIndex = 1
    let selectedSong = audioOptions["song_" + songIndex];

    function startplayer() {
        player = $('#music-player')[0];
        player.controls = false;
    }

    function playPauseAudio() {
        songIndex = parseInt($(this).closest('.song')[0].id);
        selectedSong = audioOptions["song_" + songIndex];
        if ($(this).hasClass('playing')) {
            $('.play-pause-icon').removeClass('playing');
            $('.play-pause-icon').find('i').addClass('fa-pause');
            $('.play-pause-icon').each(function (index) {
                if ($("#song-title").text() === $(this).siblings("span").text()) {
                    $(".play-control .play-pause-icon").removeClass("playing")
                    $(".play-control .play-pause-icon i").removeClass('fa-pause').addClass('fa-play');
                    $(this).find('i').removeClass('fa-pause').addClass('fa-play');
                    songIndex = parseInt($(this).closest('.song')[0].id);
                }
            })
            $(this).find('i').removeClass('fa-pause').addClass('fa-play');
            player.pause();
        }
        else {
            $('.play-pause-icon').removeClass('playing');
            $(this).addClass('playing');
            $('.play-pause-icon').find('i').addClass('fa-play');
            $(this).find('i').removeClass('fa-play').addClass('fa-pause');
            if (!$(this).hasClass('init')) {
                $("#song-title").text($(this).siblings("span").text());
                player.setAttribute('src', selectedSong);
            }
            $('.play-pause-icon').each(function (index) {
                if ($("#song-title").text() === $(this).siblings("span").text()) {
                    $(".play-control .play-pause-icon").addClass("playing")
                    $(".play-control .play-pause-icon i").removeClass('fa-play').addClass('fa-pause');
                    $(this).find('i').removeClass('fa-play').addClass('fa-pause');
                    songIndex = parseInt($(this).closest('.song')[0].id);
                }
            })
            player.play();
        }
    }

    function previousSong() {
        $(`#${songIndex-1} .play-pause-icon`).click();
    }
    function nextSong() {
        $(`#${songIndex+1} .play-pause-icon`).click();
    }



    startplayer();

    $('.play-pause-icon').click(playPauseAudio);
    $('.forward-icon').click(nextSong);
    $('.backward-icon').click(previousSong);
    $('.listen').click(function () {
        $('#album-title').text($(this).siblings(".album-name").text());
    });
});

$("#seekAudio").on("change",seek)

function seek(){
    let seekto = player.duration * ($(this)[0].value / 100);
    player.currentTime = seekto;
}

setInterval(()=>{
    $("#seekAudio")[0].value = player.currentTime/player.duration*100;
},1000)

