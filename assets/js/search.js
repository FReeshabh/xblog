
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