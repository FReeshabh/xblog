
var documents = [{
    "id": 0,
    "url": "https://FReeshabh.github.io/404.html",
    "title": "",
    "body": " 404 Page not found :(  The requested page could not be found.  You seem to be lost traveller, click [here](http://freeshabh. github. io/blog) to get back on track. : "
    }, {
    "id": 1,
    "url": "https://FReeshabh.github.io/about/",
    "title": "About Me",
    "body": "Oh hi, didn’t see you there. I am here, you’re here. Kind of rude I didn’tintroduce myself, isn’t it? I’m a computer science student at Texas TechUniversity, and I pretend to be clever on the internet. It hasn’t fooled anyoneyet, but a boy can dream. If you want to find me, call on to Cthullu. If Cthullu doesn’t answer, an emailis acceptable too rishabhtewari1@gmail. com "
    }, {
    "id": 2,
    "url": "https://FReeshabh.github.io/categories/",
    "title": "Tags",
    "body": "Contents: {% if site. categories. size &gt; 0 %} {% for category in site. categories %} {% capture category_name %}{{ category | first }}{% endcapture %} {{ category_name }}{% endfor %}{% endif %} {% for category in site. categories %}  {% capture category_name %}{{ category | first }}{% endcapture %} &lt;h3 id = {{ category_name }} &gt;&lt;i class= fas fa-tags category-tags-icon &gt;&lt;/i&gt;&lt;/i&gt; {{ category_name }}&lt;/h3&gt;&lt;a name= {{ category_name | slugize }} &gt;&lt;/a&gt;{% for post in site. categories[category_name] %}{%- assign date_format = site. minima. date_format | default:  %b %-d, %Y  -%}&lt;article class= archive-item &gt; &lt;p class= post-meta post-meta-title &gt;&lt;a class= page-meta  href= {{ site. baseurl }}{{ post. url }} &gt;{{post. title}}&lt;/a&gt; • {{ post. date | date: date_format }}&lt;/p&gt;&lt;/article&gt;{% endfor %} {% endfor %}"
    }, {
    "id": 3,
    "url": "https://FReeshabh.github.io/",
    "title": "Blog",
    "body": "I am a sophomore/junior at Texas Tech University studying Computer Science. I like Machine Learning, standup comedy, Linux and esoteric text editors! In the University, I’m the Marketing and Outreach, and Hacker Experience Lead for HackWesTX, the largest Hackathon in West Texas! I’m also the Technical Lead for EWoCS (Extraordinary Women of Computer Science), managing technical workshops and tutorials for women (and everyone else!) interested in Computer Science stuff in the University. Here’s a nice photograph. .   This picture was taken by Linnea Sandbakk "
    }, {
    "id": 4,
    "url": "https://FReeshabh.github.io/images/copied_from_nb/",
    "title": "",
    "body": "WarningDo not manually save images into this folder. This is used by GitHub Actions to automatically copy images.  Any images you save into this folder could be deleted at build time. "
    }, {
    "id": 5,
    "url": "https://FReeshabh.github.io/machine-learning/2020/04/06/linear-regression-a-non-authoritative-guide.html",
    "title": "Linear Regression: A non-authoritative guide",
    "body": "2020/04/06 -           This is a rather amateur attempt at explanation of Linear Regression. One of the first algorithms taught to students starting Machine Learning. If this is for an assignment, I urge you to not copy this any of this code. This blog post is a modified version of one of my first homework assignments from my Machine Learning class. Dependencies : Programming Knowledge to understand the walkthrough (Python in this case)NumPy for linear algebra computationsPandas (Optional) - To import read our csv. You could use other things such as Excel files. matplotlib - To graphRefer to CS 231's introduction to Python for an introduction/review to Python, NumPy, and scikitA dataset to test upon. In this tutorial I shall be using the carbig dataset from Matlab. High school math equivalent knowledge: For this tutorial I expect you to understand basic algebra, graphs, maybe a bit of linear algebra. I'll still try to make this as much as a self contained tutorial as I canI am not going to explain every single function I use in this tutorial,I highly encourage people to look up the reference guides for NumPy and alike Initial Setup : Since I am writing this Notebook in Kaggle, the code below is some setup boiler plate, go through the code to get an idea of what's happening in there.       # This Python 3 environment comes with many helpful analytics libraries installed# It is defined by the kaggle/python docker image: https://github. com/kaggle/docker-python# For example, here&#39;s several helpful packages to load in import numpy as np # linear algebraimport pandas as pd # data processing, CSV file I/O (e. g. pd. read_csv)import matplotlib. pyplot as plt # To graph    About the dataset : The carbig dataset is a relatively simple dataset, with two columns: Weight and Horsepower. Our task in this case would be a simple  Given this weight, predict the Horsepower . In this dataset, we notice that there are a few missing datapoints for the Horsepower column, so we need to deal with that too.       # Loading up the datasetcarbig_data = pd. read_csv(&quot;/kaggle/input/proj1-dataset/proj1Dataset. csv&quot;)# Assign Data to variablesX = carbig_data[&#39;Weight&#39;]carbig_data[&#39;Horsepower&#39;] = carbig_data[&#39;Horsepower&#39;]. fillna(carbig_data[&#39;Horsepower&#39;]. median()) #Replacing missing values with the mediant_target = carbig_data[&#39;Horsepower&#39;]    So in the code above, we loaded up our data, and assigned the columns to 2 variables: X and t. We also dealt with the missing values in the code above by replacing them with the median of the rest of the dataset. There's quite a few different methods of dealing with this, this is just one of them.     Note: For debugging, I suggest you to familiarize yourself with the reshape function within numpy: https://docs. scipy. org/doc/numpy/reference/generated/numpy. ndarray. shape. html . Checking for the shapes of these matrices is one way to tell if you&#8217;re on the right track, and might explain the steps next. More preprocessing of the data: :       # Reshape and prep X, and X_normX = np. reshape(X. values, (-1, 1))X_norm = np. empty(X. shape)X_norm = X/X. max() # What we&#39;re doing is Normalizing the datat_target = np. reshape(t_target. values, (-1, 1))    Before implementing the Linear Regression Algorithms, we still need to do one final thing to our X variable. And that is to append a column of ones, so it transforms into something called a design matrix. We also are normalizing our data, to understand why we normalize our data, the fast version is that it makes computations easier and fast for the computer. To get a more detailed explanation here is a link to an actual paper that I have totally read /s http://arxiv-export-lb. library. cornell. edu/pdf/1503. 06462       # Add one as the design matrices to both of themX = np. hstack((X, np. ones(X. shape)))X_norm = np. hstack((X_norm, np. ones(X_norm. shape))) # This is our normalized X    Implementing the Linear Regression Algorithm: Closed Form Solution : (Expecting this image to show up, if it doesn't go ahead and click on the link to see the equation). Keep in mind that I won't use the same convention as the one showed in the image. I shall be calling  beta  as  weight , and y as target (or t in the code) So after seeing the equation, let's start implementing it!       def closed_form_solution(x, t):  &quot;&quot;&quot;Linear Regression using the closed form solution&quot;&quot;&quot;  weight = (np. linalg. pinv(x) @ t). T # The weight equation implemented in one swoop, notice we take the transpose of the whole thing  d_closed = np. linspace(1500, 5500, 3500) # For graphing purposes, to have all the x values in order  #print(weight. T) # For debugging purposes  prediction_closed = weight. T [0][0]*d_closed + weight. T[1][0] # After calculating the weight, we find our prediction    # Actually graphing the prediction  plt. title(&quot;Closed Form Solution - Linear Regression&quot;)  plt. scatter(X[:,0], t, label=&quot;actual data&quot;)  plt. xlabel(&#39;Weight&#39;)  plt. ylabel(&#39;Horsepower&#39;)  plt. plot(d_closed, prediction_closed, color = &quot;red&quot;, label=&quot;Closed Form Solution&quot;)  plt. legend()  plt. figure()    Let's call this silly function and see what happens!       closed_form_solution(X, t_target)  &lt;Figure size 432x288 with 0 Axes&gt;  That actually looks like a pretty great. But notice that this was everything done in one amazing swoop. This rarely happens in any actual machine learning, since most of the time it's an iterative process, and that's what we're going to talk about next - Linear Regression using Gradient Descent. Keep in mind Gradient Descent is a much more general algorithm, and this is one type of G. D. being used in one particular way. Bu. . . tt before we do, let's talk about the concept of Cost Function Loss/Cost Function: What is it? : For now I am going to be using Loss and Cost as interchangable terms, even though they're technically not, just bear with me for the time being. A loss/cost function is basically a way to compute how wrong (or right, if you're that kind of person) your prediction was from the true value. Loss functions are absolutely essential for Machine Learning Algorithms, and in the upcoming Gradient Descent Solution, you shall see why Gradient Descent Solution to Linear Regression : Now I know I tried to say that I will try to keep this as contained of a blog post I could, but I feel like Gradient Descent is one of those topics which could really help some visualization rather than a boring blog post. So I'll link you to a classic old yet relevant video by Andrew Ng. Now this is just one video, you can find numerous others. It's not that it's my favorite, but Ng does an amazing job behind explaining the intution of Gradient Descent. Come back here for the code. --- I'm serious, I am not explaining the theory here. Go! --- Hopefully now you understand the theory behind gradient descent. So now let's implement it from scratch.       def gradient_descent(iterations, rho, weight, x, t): #rho here refers to the learning rate, told ya pay attention!  &quot;&quot;&quot;  Gradient Descent Solution for the weight for Linear Regression  &quot;&quot;&quot;  for i in range(iterations):    gradient = ((2* weight. T @ x. T@ x ) - (2* t. T @ x)). T    weight = weight - (rho * gradient)    #print(&quot;Iteration {} &#39;s loss: {}&quot;. format(i, (np. square(np. linalg. norm(t - x @ weight))))) #uncomment this to see loss updating  d_grad = np. linspace(1500, 5500, 3500)  weight[0][0] = weight[0][0] / X. max()  # print(weight) # debugging purposes  prediction_grad = weight. T [0][0]*d_grad + weight. T[0][1]  plt. title(&quot;Gradient Descent Solution to Linear Regression&quot;)  plt. scatter(X[:,0], t, label=&quot;actual data&quot;)  plt. xlabel(&#39;Weight&#39;)  plt. ylabel(&#39;Horsepower&#39;)  plt. plot(d_grad, prediction_grad, color = &quot;green&quot;, label=&quot;Gradient Descent Solution&quot;)  plt. legend()  plt. show()    Here we are commenting out the loss updates but you can see by uncommenting that line! The for loop in the code above is where we're updating the weight. Ideally we want a stop condition, aside from just going through however many iterations we call, so it should be something like when the difference between the result of the current iteration, and past iteration is too small? This part will be left as an exercise to the reader ;) Now we'll need some assumptions. By which I mean set some hyperparameters (parameters you set before learning)       # Initial Assumptions madeinit_weight = np. array([0, 0])init_weight = np. reshape(init_weight, (-1, 1))max_iterations = 1000 #(epochs)rho_learning_rate = 0. 001    These were some of my parameters which worked well for me, but I got here by tuning the numbers and seeing how it affects the performance of the function. I urge y'all to change these numbers and see how it changes the final performance. Let's call the function!       gradient_descent(max_iterations, rho_learning_rate, init_weight, X_norm, t_target)    Notice how we're using the Normalized X variable here, but we didn't do this in the Closed Form solution. Why? There's more to Linear Regression, but this should be enough to get ya started don't ya think? Alvida?Ciao?Au Revoir? bye "
    }, {
    "id": 6,
    "url": "https://FReeshabh.github.io/linux/soft-community/2020/04/05/Illusion_ofChoiceLinux.html",
    "title": "Illusion of Choice: Linux Edition",
    "body": "2020/04/05 - It’s always hard to pinpoint the audience this blog is being written for, but then I end up realizing it’s mostly just written for me. However if anyone else happens to come across this. Aces! You get a unicorn, just not from me. Aside from the weak attempt at humor/humour gained from watching too much British telly over this quarantine break, here’s some rambling. (Keep reading find the best OS, distro, GUI to work in the most efficient way!) To follow through this incoherent jumble of thoughts I expect the following from you:    A little familiarity with Linux (if you correct me by saying GNU/Linux, or GNU+Linux, I am legally obligated to burn a GNU plushie, so let’s not harm little Gnu’s shall we?)   Ability to search for things on the internet. (much more of a skill than people usually give it credit for) Some time spent that will not benefit in you gaining any tech knowledgeI also recognize a lot of my thoughts will come to look inspired (or reflected) from and by Luke Smith. I do not share his political beliefs, however it would be unfair to say he wasn’t the reason I started using Linux full-time, and teaching me about it. That said today I will echo his words “Linux distributions are a social construct”, but go a little further down the rabbit hole and talk about why most things people usually take sides on (i. e. Window Managers, text editors, etc. ) also are. What’s inside your Linux box: So here’s what usually ends up making a functional Linux box (for the end-user, not a server):  Hardware : hah, yes The kernel: This is what “Linux” is, the kernel. It interacts the hardware and the software, pretty important don’t ya think? The userspace: This is where YOU come in, and interact with the system. So what makes separates a distribution from another?    The Graphical Stuff: This is what births most of these spinoff distributions: Kubuntu, Lubuntu, Mate, which are all Ubuntu, with a different default GUI from regular Ubuntu. I’d be ignorant to say that’s all they change, but I am not looking to make friends here, so why not throw in Elementary, Mint and others in too (I know they worked hard on Pantheon, now please let me live).     The Runit system: This I respect more. These people knew they wanted a change, and went doing this in the worst way possible. Of course more props to OG distros more than spinoff ones. OG is Void, Gentoo, GUIX(my apologies), and spinoffs are Artix, Devuan, etc. If you think I am gonna comment on SystemD (I know it’s not capitalized like that), you’re out of your mind.     PACKAGE MANAGER: Biggest one: How to install packages? pacman (represent), portage, apt, xbps, etc. Congrats you made yourself unique! Now go and do the same thing which the others do. If you can’t, doctors recommend LFS.     FSF Reasons: This website is hosted by GitHub (at the time of writing), so why are you here. Shoutouts to Parabola, Trisquel, PureOS, Hyperbola (no shoutouts to this one), etc.     Something Special: This is where something unique comes in, like Nix and guix, and you can’t figure out how to install pip packages. (For noobies: Nix is more usable, GUIX is for:___ )  To hell with ricing: To anger even more of this already segmented Linux community, something I might be a part of (verdict still out). Newbies end up forgetting they are using a COMPUTER to do actual work. I have been in this position, and well have accepted a single thing that (mostly) works out for me (hint using someone else’s dots). You are not to gain anything more from making your system look prettier, and more and more efficient. Just get what you want (quickly), and get to your real work! The amount of man hours I have wasted on delaying my actual work, and then this random rambling should give you some clue. USE IT FOR ACTUAL WORK. Ricing is for cars, 42 :) My point?: Not sure but something along the lines of, if everything you’re comparing with each other does the same thing anyways. Just shut up, pick one randomly, GET TO WORK. If you don’t like it, pick something else and GET TO WORK. Ciao? Alvida? whatever you speak bye "
    }, {
    "id": 7,
    "url": "https://FReeshabh.github.io/linux/soft-community/2020/04/05/Illusion-And-reality-ofBloatware.html",
    "title": "Illusion and Reality of Bloatware: A meme saga",
    "body": "2020/04/05 - The current state of software, and the “community”: Aren’t computers great? You might get two different answers depending on whether you’re asking a classical user, or someone a bit more “hip”, which the classical trolls love to refer as Soyboys in the Tech sense. However, that’s not a term I am going to use but I still need to make a distinguish between the two types. So let’s come with up two new terms (which are named like this for no particular reason): CoVs (the classical ones), and the nCoVs (the new computer people). The n in this context refers to NodeJS Examples of CoVs are the kind of people who love C (or lisp), have a 10 year old laptop at the least, and have a strong love or hate for Microsoft. The nCoVs are the web age people, these are the people who love JavaScript, Node, Electron, and other “BLOATED” stuff. In the offense of bloat: Before we criticize bloatware, we need to first define bloatware. Bloatware is when a piece of software is often bogged down with unnecessary features or other software, which are strictly “additional” items, and are not part of the core functionality. Bloatware has been around for quite some time, but quite recently there has been a push within the software community (mostly the Free Software community) to move towards the other side of the software, which prides itself in ridding itself of useless features. These are the developers that have convinced themselves that they are following the UNIX Philosophy, and it’s alright to get rid of the features that could be considered as additional, and yet remain one of the most heavily used. I’m obviously referring to the people behind Suckless Software, whose software I actually use on a day to day basis (simple terminal, dmenu, and dwm at the time of this writing). However I’m also slightly delusional and have (finally) deemed my time worthy of more than configging and patching up things, so I end up using someone else’s patched builds of this software. Now that I have given a little background on the two different types of software in competition, let’s get this straight: I (currently) hold a firm anti bloatware stance. This stance in the meantime, is effectively useless, I’ll still continue to use software, however for ideological reasons, I have to denounce the software, and would try to avoid my own software filled with useless things. That said however, I am not opposed to Thiccware (a term that I definitely didn’t make up). With 2 C’s: Thiccware is software which might contain add-on features by default, but those features are used enough, that it validates their existence. Examples of Thiccware include the Brave Browser, a few CADs, VSCode etc. The main reason why anyone should be using any software is to make themselves more productive over all. Minimal Software is often more customizable, and might fit someone else’s workflow better. But it’s usage is only validated, when the user is able to productive with that software instead of spending all waking times configuring the damn thing. A lot of minimalists will be angry at me, and accuse me of using bloated software myself, which I might be (hint: Emacs). However next time, before you comment on that Reddit or YouTube thread. Give it some thought. Maybe the software is not bloat, it might just be thicc? ~~ :) Or it could really be super bloated, bring a dd just in case. Ciao "
    }, {
    "id": 8,
    "url": "https://FReeshabh.github.io/2020/03/30/Panda3D-native-video-2020-proposal.html",
    "title": "Panda3d Native Video 2020 Proposal",
    "body": "2020/03/30 - &lt;!DOCTYPE html&gt; Panda3D: More options for native video loadingPanda3D: More options for native video loadingRishabh Tewari: 3/30/2020: Problem Description: Panda3D’s current video solution FFmpeg while reliable limits users to only one choice for their video needs. FFmpeg uses a restrictive LGPL license which limits the freedom of the users and contributors, and the large dependency makes it quite hard to maintain. The proposed solution to the problem is to implement an alternative native video loader for Panda3D to give the user the ability to switch their video loader. My proposed solution is to implement WebM’s libvpx as an option into Panda3D to load files, implement threading support for libvpx as done for FFmpeg already, and provide tests and documentation for the implemented video loader. Project Goals: Implement WebM video loader into the existing Panda3D codebaseImplement threading support for WebMWrite up documentation, add new tests, and clean up the codeStretch goals: These are the goals that are more ambitious, that I might work on, but do not constitute as the primary goals for the project as presented by this proposal. Implement libtheora as a third option for video loadingAdd threading support to the aforementioned libtheoraProvide documentation for the implemented libtheora libraryProject Implementation Plan: Get more familiar with libvpx the literature on the subject and the codebase before the project officially starts. Implement stubs for the classes required to implement libvpx to make it return blank output. Get libvpx to be able to decode the initial frame of a test fileGet libvpx to decode the frames with a test file properly. Get libvpx to start working with multiple . webm videosTest and implement error handling featuresInterface libvpx with existing audio libraries such as libopus and libvorbisAdd seeking functionalityAdd in documentation for the integrated libvpxWork on adding threading support11Project Timeline: Prior to June 1 Reading up documentation for libvpx and learn more about video compression and codecs. Gain more familiarity with Panda3D’s codebase Write more tests for the existing Panda3D codebase Relieve off any GSoC independent time commitments Start working on Video Loader Implementation June 1 - June 10 Implement a method stub for WebM loader, and lay groundwork for future work. June 10 - June 24 Integrate library for loading Matroska files (possibly using libwebm) Integrate libvpx for video decoding Get the implementation to be able to decode the first frame of an example video. June 24 - July 1 Get libvpx to decode rest of the frames of the example video. July 1 - 3 Making sure the crafted implementation works as expected. Deal with any errors that might arise, for example, corrupted files, changed extension names etc. Turn in Phase 1 evaluation July 3 - July 6 Read up literature on threading and to formulate a way to implement threading into the newly integrated libvpxJuly 6 - July 21 Implement threading support for libvpx in Panda3D as is done in the ffmpeg implementation. July 21 - August 3 Turn in Phase 2 EvaluationsAugust 6 - August 10 Review over the code base and write unit tests and integration tests in order to ensure everything is working as expected Start writing documentation and cleaning up. August 10 - August 24 Buffer time for writing tests, and adding features that are not in the scope of this proposal. Existing Contributions to Panda3D: PR #663 [MERGED]: Added unit tests for audio and video functionality of Panda3D. Added tests for Added test for audio_length, audio_rate, audio seek, audio seek fast, audio channels and many more. More information about this PR can be found in PR #612 PR #595 [MERGED]: Update Header File Names to fit Panda3D’s naming convention. PR #592 [MERGED]: Similar to PR #595 PR #596 [MERGED]: Tested OpenAL’s functionality on MacOS, and whether it actually needed FMOD by testing audio using the Media Sampler Program PR #623: Expanding on the work done by @hitesh4 in PR #593 . Added a new test for testing setting modes for Clock Objects PR #624: To remove deprecated methods, once a depreciation policy is decided upon. Benefits to the community: This project will allow users to switch out their native video loader from FFmpeg to WebM’s libvpx if they choose. This helps the users to not be limited to only FFmpeg to satisfy their video needs and helps them get some of the freedom they experience when choosing an video loader for Panda3D. FFMpeg’s large codebase provides a lot of functionality that the user doesn’t often need for their games, and this causes a large overhead, which is something integration of libvpx aims to reduce. Time Constraints: I plan to spend up to 40 hours a week working on this project. I might have to travel a bit in the early, or late stages of the project, but due to COVID-19 pandemic, it’d be hard to tell the exact dates on when this might occur. Aside from that I have no other commitments planned that might occupy my time. About me: I’m a sophomore (junior by credit hours) studying Computer Science at Texas Tech University. I used to go by Dr. Euler on Github, but I go by FReeshabh now. I still go by Dr. Euler (or oiler) on Discord, and can be contacted there, or by email rishabhtewari1@gmail. com. I mostly run my systems on Arch Linux these days, although I have access to MacOS, and Windows machine if the need arises. I’d either be available in the CDT Timezone, or the IST timezone, but due to the pandemic, I’m unable to say which one currently. "
    }, {
    "id": 9,
    "url": "https://FReeshabh.github.io/2020/03/30/Panda3D-SoLoud-Integration-Proposal.html",
    "title": "Panda3d Soloud Integration Proposal",
    "body": "2020/03/30 - &lt;!DOCTYPE html&gt; Panda3D: Integrating SoLoud as an Audio BackendPanda3D: Integrating SoLoud as an Audio BackendRishabh Tewari: 3/30/2020: Problem Abstract: Panda3D currently provides various backends for audio functionality that include OpenAL and FMOD. Both of these backends provide excellent support for audio however, they FMOD limits the holder’s permission to distribute FMOD based on the development budget, and OpenAL has a proprietary license (Panda3D uses an LGPL version). These licensing terms don’t fit Panda3D’s licensing spirit, which being based on a Modified BSD license is very permissive. SoLoud is a free (as in speech AND beer) audio engine for games released under the very permissive ZLib/LibPNG license. Zlib/LibPNG and Modified BSD Licenses, are very similar licenses, allowing much wider usage of this audio engine in Panda3D games. Aside from licensing, SoLoud has a native C++ API making it perfect to integrate into Panda3D, while still providing support for other interfaces such C, Python Ruby, etc. SoLoud has also been integrated into RPGMaker and GameMaker, which gives it a certain credibility for its usage in games. SoLoud supports commonly used formats such as 8, 16, 32 bit wavs, floating point wavs, ogg, mp3. Although it’s mentioned that there might exist certain cases that SoLoud is not equipped to handle yet. SoLoud also has limited SSE Optimization, so there are still cases where using an alternative backend such as FMOD might be useful. Project Goals: Integrate SoLoud as an additional audio backend for Panda3DMaking sure it’s equivalent in functionality to the OpenAL’s integration into Panda3DWrite the required tests and documentation for the newly integrated SoLoudStretch Goal: Making sure it’s equivalent in functionality to the FMOD’s integration into Panda3D (or as close as possible)Implementation Plan: Study the literature and codebase on the subject and familiarize myself more with SoLoud and Panda3D, before the project officially starts. Use GENie/premake4 to create the build files and the static libraries and set it up for Panda3DImplement stubs for the classes required to implement SoLoud to make it return blank output. Craft a test audio file for the implementation. Fill out the stubs, and test the implementation works as expectedTest for edge cases, make sure the implementation can handle any errors, or edge casesWrite tests and documentation for the implementationProject Timeline: Prior to June 1Reading up documentation for SoLoud, and learn more about the audio engine, and its implementation in other gaming engines/frameworks. Gain more familiarity with Panda3D’s codebaseWrite more tests for the existing Panda3D codebaseRelieve any GSoC independent time commitmentsJune 1 - June 9Look at existing implementation of audio backends, and get an idea on my own implementationBuild the required libraries for the projectImplement the method stubs for SoLoud integrationJune 10 - June 26Fill out the method stubs. Implement a basic functioning implementation (such as being able to play test sounds)June 27 - July 3Deal with any issues that might have arisen so far. Turn in the Phase 1 EvaluationJuly 3 - July 17Test for any edge cases, or errors. Work on error handlingJuly 18 - July 25Start working on the more advanced functionality of SoLoud (such as):3D Positional AudioAdjust parameters (such as balance) as appropriatePlaying several streams at onceQueued Sounds, etc. July 26 - July 31Write documentation for the existing implementation. Deal with any unexpected issuesTurn in the Phase 2 EvaluationAugust 1 - August 15Work on other functionality for SoLoud integration to achieve a full featured functionality and reach parity in functionality as to OpenAL. August 15 - August 30Work on the stretch goal. Work on other areas of Panda3DPrepare for the final submission of the projectExisting Contributions to Panda3D: PR #663 [MERGED]: Added unit tests for audio and video functionality of Panda3D. Added tests for Added test for audio_length, audio_rate, audio seek, audio seek fast, audio channels and many more. More information about this PR can be found in PR #612 PR #595 [MERGED]: Update Header File Names to fit Panda3D’s naming convention. PR #592 [MERGED]: Similar to PR #595 PR #596 [MERGED]: Tested OpenAL’s functionality on MacOS, and whether it actually needed FMOD by testing audio using the Media Sampler Program PR #623: Expanding on the work done by @hitesh4 in PR #593 . Added a new test for testing setting modes for Clock Objects PR #624: To remove deprecated methods, once a depreciation policy is decided upon. Benefits to the community: This project adds an alternative audio backend for usage for Panda3D. This implemented audio backend would be a more permissive option than the current popular options of FMOD and OpenAL, since SoLoud uses a ZLib license. Aside from licensing, SoLoud has a relatively easy to use interface, and it has proven itself worthy for gaming, since other gaming engines/frameworks (such as RPGMaker, and GameMaker use it). Time Constraints: I plan to spend up to 40 hours a week working on this project. I might have to travel a bit in the early, or late stages of the project, but due to COVID-19 pandemic, it’d be hard to tell the exact dates on when this might occur. Aside from that I have no other commitments planned that might occupy my time. About me: I’m a sophomore (junior by credit hours) studying Computer Science at Texas Tech University. I used to go by Dr. Euler on GitHub, but I go by FReeshabh now. I still go by Dr. Euler (or oiler) on Discord, and can be contacted there, or by email rishabhtewari1@gmail. com. I mostly run my systems on Arch Linux these days, although I have access to MacOS, and Windows machine if the need arises. I’d either be available in the CDT Timezone, or the IST timezone, but due to the pandemic, I’m unable to say which one currently. "
    }, {
    "id": 10,
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