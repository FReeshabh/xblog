
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
    "url": "https://FReeshabh.github.io/2020/03/30/Panda3D-native-video-2020-proposal.html",
    "title": "Panda3d Native Video 2020 Proposal",
    "body": "2020/03/30 - &lt;!DOCTYPE html&gt; Panda3D: More options for native video loadingPanda3D: More options for native video loadingRishabh Tewari: 3/30/2020: Problem DescriptionPanda3D’s current video solution FFmpeg while reliable limits users to only one choice for their video needs. FFmpeg uses a restrictive LGPL license which limits the freedom of the users and contributors, and the large dependency makes it quite hard to maintain. The proposed solution to the problem is to implement an alternative native video loader for Panda3D to give the user the ability to switch their video loader. My proposed solution is to implement WebM’s libvpx as an option into Panda3D to load files, implement threading support for libvpx as done for FFmpeg already, and provide tests and documentation for the implemented video loader. Project GoalsImplement WebM video loader into the existing Panda3D codebaseImplement threading support for WebMWrite up documentation, add new tests, and clean up the codeStretch goalsThese are the goals that are more ambitious, that I might work on, but do not constitute as the primary goals for the project as presented by this proposal. Implement libtheora as a third option for video loadingAdd threading support to the aforementioned libtheoraProvide documentation for the implemented libtheora libraryProject Implementation PlanGet more familiar with libvpx the literature on the subject and the codebase before the project officially starts. Implement stubs for the classes required to implement libvpx to make it return blank output. Get libvpx to be able to decode the initial frame of a test fileGet libvpx to decode the frames with a test file properly. Get libvpx to start working with multiple . webm videosTest and implement error handling featuresInterface libvpx with existing audio libraries such as libopus and libvorbisAdd seeking functionalityAdd in documentation for the integrated libvpxWork on adding threading support11Project TimelinePrior to June 1 Reading up documentation for libvpx and learn more about video compression and codecs. Gain familiarity with Panda3D’s codebase Write more tests for the existing Panda3D codebase Relieve off any GSoC independent time commitments Start working on Video Loader Implementation June 1 - June 10 Implement a method stub for WebM loader, and lay groundwork for future work. June 10 - June 24 Integrate library for loading Matroska files Get the implementation to be able to decode the first frame of an example video. June 24 - July 1 Integrate libvpx for video decodingJuly 1 - 3 Making sure the crafted implementation works as expected. Deal with any errors that might arise, for example, corrupted files, changed extension names etc. Turn in Phase 1 evaluation July 3 - July 6 Read up literature on threading and to formulate a way to implement threading into the newly integrated libvpxJuly 6 - July 21 Implement threading support for libvpx in Panda3D as is done in the ffmpeg implementation. July 21 - August 3 Turn in Phase 2 EvaluationsAugust 6 - August 10 Review over the code base and write unit tests and integration tests in order to ensure everything is working as expected Start writing documentation and cleaning up. August 10 - August 24 Buffer time for writing tests, and adding features that are not in the scope of this proposal. Existing Contributions to Panda3DPR #663 [MERGED]: Added unit tests for audio and video functionality of Panda3D. Added tests for Added test for audio_length, audio_rate, audio seek, audio seek fast, audio channels and many more. More information about this PR can be found in PR #612 PR #595 [MERGED]: Update Header File Names to fit Panda3D’s naming convention. PR #592 [MERGED]: Similar to PR #595 PR #596 [MERGED]: Tested OpenAL’s functionality on MacOS, and whether it actually needed FMOD by testing audio using the Media Sampler Program PR #623: Expanding on the work done by @hitesh4 in PR #593 . Added a new test for testing setting modes for Clock Objects PR #624: To remove deprecated methods, once a depreciation policy is decided upon. Benefits to the communityThis project will allow users to switch out their native video loader from FFmpeg to WebM’s libvpx if they choose. This helps the users to not be limited to only FFmpeg to satisfy their video needs and helps them get some of the freedom they experience when choosing an video loader for Panda3D. FFMpeg’s large codebase provides a lot of functionality that the user doesn’t often need for their games, and this causes a large overhead, which is something integration of libvpx aims to reduce. Time ConstraintsI plan to spend up to 40 hours a week working on this project. I might have to travel a bit in the early, or late stages of the project, but due to COVID-19 pandemic, it’d be hard to tell the exact dates on when this might occur. Aside from that I have no other commitments planned that might occupy my time. About meI’m a sophomore (junior by credit hours) studying Computer Science at Texas Tech University. I used to go by Dr. Euler on Github, but I go by FReeshabh now. I still go by Dr. Euler (or oiler) on Discord, and can be contacted there, or by email rishabhtewari1@gmail. com. I mostly run my systems on Arch Linux these days, although I have access to MacOS, and Windows machine if the need arises. I’d either be available in the CDT Timezone, or the IST timezone, but due to the pandemic, I’m unable to say which one currently. "
    }, {
    "id": 6,
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