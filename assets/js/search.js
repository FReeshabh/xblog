
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
    "url": "https://FReeshabh.github.io/2020/02/25/Incomplete-Starter-Linear-Regression.html",
    "title": "Title",
    "body": "2020/02/25 -           A traditional yet actual intro to ML (with code!, from scratch!)&#182;In this tutorial, we'll be looking at the baby stuff for ML, which will be Linear Regression. But we'll look into implementing it from scratch. So we're not going to use any Machine Learning Libraries. The only library use for the actual Regression part of this will be numpy (refer to CS 231N's excellent notes, for a quick intro). This tutorial contains code from Python, so I expect a bit of familiarity with how Python works, if not check the link above for a quick intro. Prereqs and what we need: High School MathA tiny bit of linear algebraPython KnowledgeNumpy (For computation)Matplotlib (For graphing our results)pandas (to read our file)What we'll do: Implement a Closed Form Solution for the simplest of Linear RegressionsWhat we did earlier, but now using Gradient DescentSetup&#182;      # This Python 3 environment comes with many helpful analytics libraries installed# It is defined by the kaggle/python docker image: https://github. com/kaggle/docker-python# For example, here&#39;s several helpful packages to load in import numpy as np # linear algebraimport pandas as pd # data processing, CSV file I/O (e. g. pd. read_csv)# Input data files are available in the &quot;. . /input/&quot; directory. # For example, running this (by clicking run or pressing Shift+Enter) will list all files under the input directoryimport osfor dirname, _, filenames in os. walk(&#39;/kaggle/input&#39;):  for filename in filenames:    print(os. path. join(dirname, filename))# Any results you write to the current directory are saved as output.   /kaggle/input/proj1-dataset/proj1Dataset. csv  Prepping the data&#182;Here we're reading our dataset. The dataset I'm using for this project is the carbig dataset, that's already available in Matlab, this dataset is relatively simple and the description here says: Measurements of cars, 1970–1982       proj1Dataset = pd. read_csv(&quot;. . /input/proj1-dataset/proj1Dataset. csv&quot;)    Now we apply Linear regression to this right? Actually not just yet. We need to take out the data from our dataset and make it usable. We also see it's missing a few values in the Horsepower column. So we have to deal with that.       # Assign Data to variablesX = carbig_data[&#39;Weight&#39;]carbig_data[&#39;Horsepower&#39;] = carbig_data[&#39;Horsepower&#39;]. fillna(carbig_data[&#39;Horsepower&#39;]. median()) #Replacing missing values with the mediant_target = carbig_data[&#39;Horsepower&#39;]  ---------------------------------------------------------------------------NameError                 Traceback (most recent call last)&lt;ipython-input-3-91fd4f4532fb&gt; in &lt;module&gt;   1 # Assign Data to variables----&gt; 2 X = carbig_data[&#39;Weight&#39;]   3 carbig_data[&#39;Horsepower&#39;] = carbig_data[&#39;Horsepower&#39;]. fillna(carbig_data[&#39;Horsepower&#39;]. median()) #Replacing missing values with the median   4 t_target = carbig_data[&#39;Horsepower&#39;]NameError: name &#39;carbig_data&#39; is not defined  So in the previous step, we took care of the missing values by replacing them with the median of the Horsepower column. And assigned our X and t variables. X is basically like the X axis you see in Math Textbooks, and T will be our target, or just like the y axis you see in Math Textbooks. (Keep in mind, we're not using a test dataset in this tutorial - to know what that means please check this ) So now we apply Linear Regression right? Nope not yet, if you carefully check the np arrays we store the data in (Hint: check the shape) You'll realize that we actually can't use this data. Because it's not in the shape we want it to be for the Multiplication that's coming soon! So, we need to reshape it!       # Reshape and prep X, and X_normX = np. reshape(X. values, (-1, 1))#X_norm = np. empty(X. shape) #What are these (Look up Normalization, but we&#39;ll get back to these)#X_norm = X/X. max()t_target = np. reshape(t_target. values, (-1, 1))  ---------------------------------------------------------------------------NameError                 Traceback (most recent call last)&lt;ipython-input-4-e8b58bd712ad&gt; in &lt;module&gt;   1 # Reshape and prep X, and X_norm----&gt; 2 X = np. reshape(X. values, (-1, 1))   3 #X_norm = np. empty(X. shape) #What are these (Look up Normalization, but we&#39;ll get back to these)   4 #X_norm = X/X. max()   5 t_target = np. reshape(t_target. values, (-1, 1))NameError: name &#39;X&#39; is not defined  [Incomplete . . Wait for the update]&#182;Busy with school work, it will be updated soon, don't worry "
    }, {
    "id": 6,
    "url": "https://FReeshabh.github.io/fastpages/jupyter/2020/02/20/test.html",
    "title": "Fastpages Notebook Blog Post",
    "body": "2020/02/20 -           About&#182;This notebook is a demonstration of some of capabilities of fastpages with notebooks. With fastpages you can save your jupyter notebooks into the _notebooks folder at the root of your repository, and they will be automatically be converted to Jekyll compliant blog posts! Front Matter&#182;: Front Matter is a markdown cell at the beginning of your notebook that allows you to inject metadata into your notebook. For example: Setting toc: true will automatically generate a table of contentsSetting badges: true will automatically include GitHub and Google Colab links to your notebook. Setting comments: true will enable commenting on your blog post, powered by utterances. More details and options for front matter can be viewed on the front matter section of the README. Markdown Shortcuts&#182;: put a #hide flag at the top of any cell you want to completely hide in the docs put a #collapse flag at the top of any cell if you want to hide that cell by default, but stil have it be visible to the reader:              #collapseimport pandas as pdimport altair as alt       put a #collapse_show flag at the top of any cell if you want to show that cell by default, but give the reader the option to hide it:              #collapse_showcars = &#39;https://vega. github. io/vega-datasets/data/cars. json&#39;movies = &#39;https://vega. github. io/vega-datasets/data/movies. json&#39;sp500 = &#39;https://vega. github. io/vega-datasets/data/sp500. csv&#39;stocks = &#39;https://vega. github. io/vega-datasets/data/stocks. csv&#39;flights = &#39;https://vega. github. io/vega-datasets/data/flights-5k. json&#39;       Interactive Charts With Altair&#182;: Charts made with Altair remain interactive.  Example charts taken from this repo, specifically this notebook. Example 1: DropDown&#182;:       # single-value selection over [Major_Genre, MPAA_Rating] pairs# use specific hard-wired values as the initial selected valuesselection = alt. selection_single(  name=&#39;Select&#39;,  fields=[&#39;Major_Genre&#39;, &#39;MPAA_Rating&#39;],  init={&#39;Major_Genre&#39;: &#39;Drama&#39;, &#39;MPAA_Rating&#39;: &#39;R&#39;},  bind={&#39;Major_Genre&#39;: alt. binding_select(options=genres), &#39;MPAA_Rating&#39;: alt. binding_radio(options=mpaa)}) # scatter plot, modify opacity based on selectionalt. Chart(movies). mark_circle(). add_selection(  selection). encode(  x=&#39;Rotten_Tomatoes_Rating:Q&#39;,  y=&#39;IMDB_Rating:Q&#39;,  tooltip=&#39;Title:N&#39;,  opacity=alt. condition(selection, alt. value(0. 75), alt. value(0. 05)))    Example 2: Tooltips&#182;:       alt. Chart(movies). mark_circle(). add_selection(  alt. selection_interval(bind=&#39;scales&#39;, encodings=[&#39;x&#39;])). encode(  x=&#39;Rotten_Tomatoes_Rating:Q&#39;,  y=alt. Y(&#39;IMDB_Rating:Q&#39;, axis=alt. Axis(minExtent=30)), # use min extent to stabilize axis title placement  tooltip=[&#39;Title:N&#39;, &#39;Release_Date:N&#39;, &#39;IMDB_Rating:Q&#39;, &#39;Rotten_Tomatoes_Rating:Q&#39;]). properties(  width=600,  height=400)    Example 3: More Tooltips&#182;:       # select a point for which to provide details-on-demandlabel = alt. selection_single(  encodings=[&#39;x&#39;], # limit selection to x-axis value  on=&#39;mouseover&#39;, # select on mouseover events  nearest=True,  # select data point nearest the cursor  empty=&#39;none&#39;   # empty selection includes no data points)# define our base line chart of stock pricesbase = alt. Chart(). mark_line(). encode(  alt. X(&#39;date:T&#39;),  alt. Y(&#39;price:Q&#39;, scale=alt. Scale(type=&#39;log&#39;)),  alt. Color(&#39;symbol:N&#39;))alt. layer(  base, # base line chart    # add a rule mark to serve as a guide line  alt. Chart(). mark_rule(color=&#39;#aaa&#39;). encode(    x=&#39;date:T&#39;  ). transform_filter(label),    # add circle marks for selected time points, hide unselected points  base. mark_circle(). encode(    opacity=alt. condition(label, alt. value(1), alt. value(0))  ). add_selection(label),  # add white stroked text to provide a legible background for labels  base. mark_text(align=&#39;left&#39;, dx=5, dy=-5, stroke=&#39;white&#39;, strokeWidth=2). encode(    text=&#39;price:Q&#39;  ). transform_filter(label),  # add text labels for stock prices  base. mark_text(align=&#39;left&#39;, dx=5, dy=-5). encode(    text=&#39;price:Q&#39;  ). transform_filter(label),    data=stocks). properties(  width=700,  height=400)    Data Tables&#182;: You can display tables per the usual way in your blog:       movies = &#39;https://vega. github. io/vega-datasets/data/movies. json&#39;df = pd. read_json(movies)# display table with pandasdf[[&#39;Title&#39;, &#39;Worldwide_Gross&#39;,   &#39;Production_Budget&#39;, &#39;IMDB_Rating&#39;]]. head()           Title   Worldwide_Gross   Production_Budget   IMDB_Rating         0   The Land Girls   146083. 0   8000000. 0   6. 1       1   First Love, Last Rites   10876. 0   300000. 0   6. 9       2   I Married a Strange Person   203134. 0   250000. 0   6. 8       3   Let's Talk About Sex   373615. 0   300000. 0   NaN       4   Slam   1087521. 0   1000000. 0   3. 4     Images&#182;: Local Images&#182;: You can reference local images and they will be copied and rendered on your blog automatically.  You can include these with the following markdown syntax: ![](my_icons/fastai_logo. png) Remote Images&#182;: Remote images can be included with the following markdown syntax: ![](https://image. flaticon. com/icons/svg/36/36686. svg) Animated Gifs&#182;: Animated Gifs work, too! ![](https://upload. wikimedia. org/wikipedia/commons/7/71/ChessPawnSpecialMoves. gif) Captions&#182;: You can include captions with markdown images like this: ![](https://www. fast. ai/images/fastai_paper/show_batch. png  Credit: https://www. fast. ai/2020/02/13/fastai-A-Layered-API-for-Deep-Learning/ ) Other Elements&#182;Tweetcards&#182;: Typing &gt; twitter: https://twitter. com/jakevdp/status/1204765621767901185?s=20 will render this:Altair 4. 0 is released! https://t. co/PCyrIOTcvvTry it with: pip install -U altairThe full list of changes is at https://t. co/roXmzcsT58 . . . read on for some highlights. pic. twitter. com/vWJ0ZveKbZ &mdash; Jake VanderPlas (@jakevdp) December 11, 2019 Youtube Videos&#182;: Typing &gt; youtube: https://youtu. be/XfoYk_Z5AkI will render this: Boxes / Callouts&#182;: Typing &gt; Warning: There will be no second warning! will render this:    Warning: There will be no second warning! Typing &gt; Important: Pay attention! It's important. will render this:    Important: Pay attention! It&#8217;s important. Typing &gt; Tip: This is my tip. will render this:    Tip: This is my tip. Typing &gt; Note: Take note of this. will render this:    Note: Take note of this. Typing &gt; Note: A doc link to [an example website: fast. ai](https://www. fast. ai/) should also work fine. will render in the docs:    Note: A doc link to an example website: fast. ai should also work fine. "
    }, {
    "id": 7,
    "url": "https://FReeshabh.github.io/2020/02/13/Standup-Comedy-Experience-After-4-5-months.html",
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