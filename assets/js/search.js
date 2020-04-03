
var documents = [{
    "id": 0,
    "url": "https://FReeshabh.github.io/404.html",
    "title": "",
    "body": " 404 Page not found :(  The requested page could not be found. "
    }, {
    "id": 1,
    "url": "https://FReeshabh.github.io/about/",
    "title": "About Me",
    "body": "I need to complete this webpage. "
    }, {
    "id": 2,
    "url": "https://FReeshabh.github.io/categories/",
    "title": "Tags",
    "body": "Contents: {% if site. categories. size &gt; 0 %} {% for category in site. categories %} {% capture category_name %}{{ category | first }}{% endcapture %} {{ category_name }}{% endfor %}{% endif %} {% for category in site. categories %}  {% capture category_name %}{{ category | first }}{% endcapture %} &lt;h3 id = {{ category_name }} &gt;&lt;i class= fas fa-tags category-tags-icon &gt;&lt;/i&gt;&lt;/i&gt; {{ category_name }}&lt;/h3&gt;&lt;a name= {{ category_name | slugize }} &gt;&lt;/a&gt;{% for post in site. categories[category_name] %}{%- assign date_format = site. minima. date_format | default:  %b %-d, %Y  -%}&lt;article class= archive-item &gt; &lt;p class= post-meta post-meta-title &gt;&lt;a class= page-meta  href= {{ site. baseurl }}{{ post. url }} &gt;{{post. title}}&lt;/a&gt; • {{ post. date | date: date_format }}&lt;/p&gt;&lt;/article&gt;{% endfor %} {% endfor %}"
    }, {
    "id": 3,
    "url": "https://FReeshabh.github.io/",
    "title": "Intro and Blog",
    "body": "I am a sophomore/junior at Texas Tech University studying Computer Science. I like Machine Learning, standup comedy, Linux and esoteric text editors! In the University, I’m the Marketing and Outreach, and Hacker Experience Lead for HackWesTX, the largest Hackathon in West Texas! I’m also the Technical Lead for EWoCS (Extraordinary Women of Computer Science), managing technical workshops and tutorials for women (and everyone else!) interested in Computer Science stuff in the University. Here’s a nice photograph. .   This picture was taken by Linnea Sandbakk "
    }, {
    "id": 4,
    "url": "https://FReeshabh.github.io/images/copied_from_nb/",
    "title": "",
    "body": "WarningDo not manually save images into this folder. This is used by GitHub Actions to automatically copy images.  Any images you save into this folder could be deleted at build time. "
    }, {
    "id": 5,
    "url": "https://FReeshabh.github.io/2020/04/03/2020-04-01-Illusion_of_Choice_Linux.html",
    "title": "Illusion of Choice: Linux Edition",
    "body": "2020/04/03 - It’s always hard to pinpoint the audience this blog is being written for, but then I end up realizing it’s mostly just written for me. However if anyone else happens to come across this. Aces! You get a unicorn, just not from me. Aside from the weak attempt at humor/humour gained from watching too much British telly over this quarantine break, here’s some rambling. (Keep reading find the best OS, distro, GUI to work in the most efficient way!) To follow through this incoherent jumble of thoughts I expect the following from you:    A little familiarity with Linux (if you correct me by saying GNU/Linux, or GNU+Linux, I am legally obligated to burn a GNU plushie, so let’s not harm little Gnu’s shall we?)   Ability to search for things on the internet. (much more of a skill than people usually give it credit for) Some time spent that will not benefit in you gaining any tech knowledgeI also recognize a lot of my thoughts will come to look inspired (or reflected) from and by Luke Smith. I do not share his political beliefs, however it would be unfair to say he wasn’t the reason I started using Linux full-time, and teaching me about it. That said today I will echo his words “Linux distributions are a social construct”, but go a little further down the rabbit hole and talk about why most things people usually take sides on (i. e. Window Managers, text editors, etc. ) also are. What’s inside your Linux box: So here’s what usually ends up making a functional Linux box (for the end-user, not a server):  Hardware : hah, yes The kernel: This is what “Linux” is, the kernel. It interacts the hardware and the software, pretty important don’t ya think? The userspace: This is where YOU come in, and interact with the system. So what makes separates a distribution from another?    The Graphical Stuff: This is what births most of these spinoff distributions: Kubuntu, Lubuntu, Mate, which are all Ubuntu, with a different default GUI from regular Ubuntu. I’d be ignorant to say that’s all they change, but I am not looking to make friends here, so why not throw in Elementary, Mint and others in too (I know they worked hard on Pantheon, now please let me live).     The Runit system: This I respect more. These people knew they wanted a change, and went doing this in the worst way possible. Of course more props to OG distros more than spinoff ones. OG is Void, Gentoo, GUIX(my apologies), and spinoffs are Artix, Devuan, etc. If you think I am gonna comment on SystemD (I know it’s not capitalized like that), you’re out of your mind.     PACKAGE MANAGER: Biggest one: How to install packages? pacman (represent), portage, apt, xbps, etc. Congrats you made yourself unique! Now go and do the same thing which the others do. If you can’t, doctors recommend LFS.     FSF Reasons: This website is hosted by GitHub (at the time of writing), so why are you here. Shoutouts to Parabola, Trisquel, PureOS, Hyperbola (no shoutouts to this one), etc.     Something Special: This is where something unique comes in, like Nix and guix, and you can’t figure out how to install pip packages. (For noobies: Nix is more usable, GUIX is for:___ )  To hell with ricing: To anger even more of this already segmented Linux community, something I might be a part of (verdict still out). Newbies end up forgetting they are using a COMPUTER to do actual work. I have been in this position, and well have accepted a single thing that (mostly) works out for me (hint using someone else’s dots). You are not to gain anything more from making your system look prettier, and more and more efficient. Just get what you want (quickly), and get to your real work! The amount of man hours I have wasted on delaying my actual work, and then this random rambling should give you some clue. USE IT FOR ACTUAL WORK. Ricing is for cars, 42 :) My point?: Not sure but something along the lines of, if everything you’re comparing with each other does the same thing anyways. Just shut up, pick one randomly, GET TO WORK. If you don’t like it, pick something else and GET TO WORK. Ciao? Alvida? whatever you speak bye "
    }, {
    "id": 6,
    "url": "https://FReeshabh.github.io/2020/03/30/Panda3D-native-video-2020-proposal.html",
    "title": "Panda3d Native Video 2020 Proposal",
    "body": "2020/03/30 - &lt;!DOCTYPE html&gt; Panda3D: More options for native video loadingPanda3D: More options for native video loadingRishabh Tewari: 3/30/2020: Problem Description: Panda3D’s current video solution FFmpeg while reliable limits users to only one choice for their video needs. FFmpeg uses a restrictive LGPL license which limits the freedom of the users and contributors, and the large dependency makes it quite hard to maintain. The proposed solution to the problem is to implement an alternative native video loader for Panda3D to give the user the ability to switch their video loader. My proposed solution is to implement WebM’s libvpx as an option into Panda3D to load files, implement threading support for libvpx as done for FFmpeg already, and provide tests and documentation for the implemented video loader. Project Goals: Implement WebM video loader into the existing Panda3D codebaseImplement threading support for WebMWrite up documentation, add new tests, and clean up the codeStretch goals: These are the goals that are more ambitious, that I might work on, but do not constitute as the primary goals for the project as presented by this proposal. Implement libtheora as a third option for video loadingAdd threading support to the aforementioned libtheoraProvide documentation for the implemented libtheora libraryProject Implementation Plan: Get more familiar with libvpx the literature on the subject and the codebase before the project officially starts. Implement stubs for the classes required to implement libvpx to make it return blank output. Get libvpx to be able to decode the initial frame of a test fileGet libvpx to decode the frames with a test file properly. Get libvpx to start working with multiple . webm videosTest and implement error handling featuresInterface libvpx with existing audio libraries such as libopus and libvorbisAdd seeking functionalityAdd in documentation for the integrated libvpxWork on adding threading support11Project Timeline: Prior to June 1 Reading up documentation for libvpx and learn more about video compression and codecs. Gain more familiarity with Panda3D’s codebase Write more tests for the existing Panda3D codebase Relieve off any GSoC independent time commitments Start working on Video Loader Implementation June 1 - June 10 Implement a method stub for WebM loader, and lay groundwork for future work. June 10 - June 24 Integrate library for loading Matroska files (possibly using libwebm) Integrate libvpx for video decoding Get the implementation to be able to decode the first frame of an example video. June 24 - July 1 Get libvpx to decode rest of the frames of the example video. July 1 - 3 Making sure the crafted implementation works as expected. Deal with any errors that might arise, for example, corrupted files, changed extension names etc. Turn in Phase 1 evaluation July 3 - July 6 Read up literature on threading and to formulate a way to implement threading into the newly integrated libvpxJuly 6 - July 21 Implement threading support for libvpx in Panda3D as is done in the ffmpeg implementation. July 21 - August 3 Turn in Phase 2 EvaluationsAugust 6 - August 10 Review over the code base and write unit tests and integration tests in order to ensure everything is working as expected Start writing documentation and cleaning up. August 10 - August 24 Buffer time for writing tests, and adding features that are not in the scope of this proposal. Existing Contributions to Panda3D: PR #663 [MERGED]: Added unit tests for audio and video functionality of Panda3D. Added tests for Added test for audio_length, audio_rate, audio seek, audio seek fast, audio channels and many more. More information about this PR can be found in PR #612 PR #595 [MERGED]: Update Header File Names to fit Panda3D’s naming convention. PR #592 [MERGED]: Similar to PR #595 PR #596 [MERGED]: Tested OpenAL’s functionality on MacOS, and whether it actually needed FMOD by testing audio using the Media Sampler Program PR #623: Expanding on the work done by @hitesh4 in PR #593 . Added a new test for testing setting modes for Clock Objects PR #624: To remove deprecated methods, once a depreciation policy is decided upon. Benefits to the community: This project will allow users to switch out their native video loader from FFmpeg to WebM’s libvpx if they choose. This helps the users to not be limited to only FFmpeg to satisfy their video needs and helps them get some of the freedom they experience when choosing an video loader for Panda3D. FFMpeg’s large codebase provides a lot of functionality that the user doesn’t often need for their games, and this causes a large overhead, which is something integration of libvpx aims to reduce. Time Constraints: I plan to spend up to 40 hours a week working on this project. I might have to travel a bit in the early, or late stages of the project, but due to COVID-19 pandemic, it’d be hard to tell the exact dates on when this might occur. Aside from that I have no other commitments planned that might occupy my time. About me: I’m a sophomore (junior by credit hours) studying Computer Science at Texas Tech University. I used to go by Dr. Euler on Github, but I go by FReeshabh now. I still go by Dr. Euler (or oiler) on Discord, and can be contacted there, or by email rishabhtewari1@gmail. com. I mostly run my systems on Arch Linux these days, although I have access to MacOS, and Windows machine if the need arises. I’d either be available in the CDT Timezone, or the IST timezone, but due to the pandemic, I’m unable to say which one currently. "
    }, {
    "id": 7,
    "url": "https://FReeshabh.github.io/2020/03/30/Panda3D-SoLoud-Integration-Proposal.html",
    "title": "Panda3d Soloud Integration Proposal",
    "body": "2020/03/30 - &lt;!DOCTYPE html&gt; Panda3D: Integrating SoLoud as an Audio BackendPanda3D: Integrating SoLoud as an Audio BackendRishabh Tewari: 3/30/2020: Problem Abstract: Panda3D currently provides various backends for audio functionality that include OpenAL and FMOD. Both of these backends provide excellent support for audio however, they FMOD limits the holder’s permission to distribute FMOD based on the development budget, and OpenAL has a proprietary license (Panda3D uses an LGPL version). These licensing terms don’t fit Panda3D’s licensing spirit, which being based on a Modified BSD license is very permissive. SoLoud is a free (as in speech AND beer) audio engine for games released under the very permissive ZLib/LibPNG license. Zlib/LibPNG and Modified BSD Licenses, are very similar licenses, allowing much wider usage of this audio engine in Panda3D games. Aside from licensing, SoLoud has a native C++ API making it perfect to integrate into Panda3D, while still providing support for other interfaces such C, Python Ruby, etc. SoLoud has also been integrated into RPGMaker and GameMaker, which gives it a certain credibility for its usage in games. SoLoud supports commonly used formats such as 8, 16, 32 bit wavs, floating point wavs, ogg, mp3. Although it’s mentioned that there might exist certain cases that SoLoud is not equipped to handle yet. SoLoud also has limited SSE Optimization, so there are still cases where using an alternative backend such as FMOD might be useful. Project Goals: Integrate SoLoud as an additional audio backend for Panda3DMaking sure it’s equivalent in functionality to the OpenAL’s integration into Panda3DWrite the required tests and documentation for the newly integrated SoLoudStretch Goal: Making sure it’s equivalent in functionality to the FMOD’s integration into Panda3D (or as close as possible)Implementation Plan: Study the literature and codebase on the subject and familiarize myself more with SoLoud and Panda3D, before the project officially starts. Use GENie/premake4 to create the build files and the static libraries and set it up for Panda3DImplement stubs for the classes required to implement SoLoud to make it return blank output. Craft a test audio file for the implementation. Fill out the stubs, and test the implementation works as expectedTest for edge cases, make sure the implementation can handle any errors, or edge casesWrite tests and documentation for the implementationProject Timeline: Prior to June 1Reading up documentation for SoLoud, and learn more about the audio engine, and its implementation in other gaming engines/frameworks. Gain more familiarity with Panda3D’s codebaseWrite more tests for the existing Panda3D codebaseRelieve any GSoC independent time commitmentsJune 1 - June 9Look at existing implementation of audio backends, and get an idea on my own implementationBuild the required libraries for the projectImplement the method stubs for SoLoud integrationJune 10 - June 26Fill out the method stubs. Implement a basic functioning implementation (such as being able to play test sounds)June 27 - July 3Deal with any issues that might have arisen so far. Turn in the Phase 1 EvaluationJuly 3 - July 17Test for any edge cases, or errors. Work on error handlingJuly 18 - July 25Start working on the more advanced functionality of SoLoud (such as):3D Positional AudioAdjust parameters (such as balance) as appropriatePlaying several streams at onceQueued Sounds, etc. July 26 - July 31Write documentation for the existing implementation. Deal with any unexpected issuesTurn in the Phase 2 EvaluationAugust 1 - August 15Work on other functionality for SoLoud integration to achieve a full featured functionality and reach parity in functionality as to OpenAL. August 15 - August 30Work on the stretch goal. Work on other areas of Panda3DPrepare for the final submission of the projectExisting Contributions to Panda3D: PR #663 [MERGED]: Added unit tests for audio and video functionality of Panda3D. Added tests for Added test for audio_length, audio_rate, audio seek, audio seek fast, audio channels and many more. More information about this PR can be found in PR #612 PR #595 [MERGED]: Update Header File Names to fit Panda3D’s naming convention. PR #592 [MERGED]: Similar to PR #595 PR #596 [MERGED]: Tested OpenAL’s functionality on MacOS, and whether it actually needed FMOD by testing audio using the Media Sampler Program PR #623: Expanding on the work done by @hitesh4 in PR #593 . Added a new test for testing setting modes for Clock Objects PR #624: To remove deprecated methods, once a depreciation policy is decided upon. Benefits to the community: This project adds an alternative audio backend for usage for Panda3D. This implemented audio backend would be a more permissive option than the current popular options of FMOD and OpenAL, since SoLoud uses a ZLib license. Aside from licensing, SoLoud has a relatively easy to use interface, and it has proven itself worthy for gaming, since other gaming engines/frameworks (such as RPGMaker, and GameMaker use it). Time Constraints: I plan to spend up to 40 hours a week working on this project. I might have to travel a bit in the early, or late stages of the project, but due to COVID-19 pandemic, it’d be hard to tell the exact dates on when this might occur. Aside from that I have no other commitments planned that might occupy my time. About me: I’m a sophomore (junior by credit hours) studying Computer Science at Texas Tech University. I used to go by Dr. Euler on GitHub, but I go by FReeshabh now. I still go by Dr. Euler (or oiler) on Discord, and can be contacted there, or by email rishabhtewari1@gmail. com. I mostly run my systems on Arch Linux these days, although I have access to MacOS, and Windows machine if the need arises. I’d either be available in the CDT Timezone, or the IST timezone, but due to the pandemic, I’m unable to say which one currently. "
    }, {
    "id": 8,
    "url": "https://FReeshabh.github.io/comedy/2020/02/13/Standup-Comedy-Experience-After-4-5-months.html",
    "title": "Experience with Standup comedy after 4-5 months",
    "body": "2020/02/13 - I find it quite funny, that after finally setting on a blog style, specifically made for Machine Learning and Data Science style. I choose to write the first blog on here on Standup Comedy instead and my experience with it so far.  Getting into Standup Comedy: I’ve loved standup comedy for quite some time, comedians like Dave Chappelle, George Carlin, Louis C. K. were some of my initial favorites in American Standup Comedy, and obviously there’s many, many more. . , but I’m not going to list them, cause what’s the point? My first try at standup comedy was my second semester of freshmen year of College, which was an Open Mic Night within the University. I went twice, bombed horribly, no timing, somewhat plagiarized jokes (on the advice of my roommate). And basically it was bad, but I didn’t feel like it was a bad experience, since going up on the stage, in some ways or the other, gives me a confidence boost. And then I didn’t do it anything until the next academic year. The push for actually doing standup comedy instead of just fantasizing about doing it came from a TV show and a movie, being Marvelous Mrs. Maisel, and the Big Sick (I don’t know why this pushed me to do comedy, but it did). Also with the massive boredom I was facing in my life. Then I found out about a local scene happening from the local subreddit and started going to them. First Mic was a bomb, but the second one went alright. What I learned:  You’ll never be for everyone     And that’s okay! Your goal is to make people laugh, not make all the people laugh. Some people won’t appreciate your jokes, some will find them offensive and tasteless. What’s funny is different for everybody! Some time it’s the audience, some time, it’s just you who sucks, know which ones which.     Don’t insult people! (Or the venue you’re at, or the other comedians)     Light Batter, and some passing jokes are fine, but picking someone in the audience and just roasting(read insulting) them cause they’re fat or just look peculiar (this advice doesn’t neccessarily apply to clothes and stuff), when they’ve been nothing but nice to you, just cause you think it will get you a few laughs. Don’t do that! Please.     Stick around for a little bit after the show     I think Standup comedy, can just be a great social experience. You get to meet people all from very different backgrounds as you, with the common love for Comedy, or at least seeing people laugh which I think is a great thing. See if there’s anyone doing a podcast, or anything new with their lives. This becomes a family away from family quite fast!    It’s a science of ONE     Listen to advice and criticism of your comedy, but don’t necessarily take it to heart (especially if you’re have an aversion to criticism). Every comic there has a different method of doing comedy, emulating their behavior and patterns is not going to get you the same place where it led them. Find your own science and process of doing things. This video by Exurb1a is a good watch.    "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')
    this.metadataWhitelist = ['position']

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}