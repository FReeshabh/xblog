---
toc: false
description: Notes on Panda3D
categories: [notes]
---
# Panda3D: And other general notes

Some blog issues are more for me rather than the general public, and it's unlikely that I am going to make these posts public, however in order to preserve my own sanity for the future, And hopefully someone else (Hello if you found this! Go eat a cookie). I have decided to write some general notes on the usage of Panda3D here.

![](https://imgur.com/a/eI67Q4v "I'm something of a moron myself")



## How to install the developer build of Panda3D
Reason I am writing this, is I don't believe the instructions available on GitHub are ample for people to get started with their own development built of Panda3D. Of course you can keep pinging rdb, Moguri, and CFSWorks to high hell, like I did last year, trying to get this started.

I am currently on Arch Linux, I used to be on MacOS, which I remember made things sligtly trickier for a while. If I remember what my thoughts were on that, I will eventually put them here (Hint: Thirdparty stuff). In the meantime.

1. Step 1: Clone the repository:

	*This step has been left as an excercise to the reader*

2. Step 2: Build stuff
	Make sure you have the dependencies ready to go. I usually don't go with a wheel or an installer route
	```python makepanda/makepanda.py --everything --no-egl --no-gles --no-gles2 --no-opencv --threads=4```

	Make sure your computer is powerful enough to have 4 threads, a good rule is to 2 x number_of_cores to get how many threads you need. You can always go with no threads, keeps your PC cooler, but takes longer to compile everything.

3. Set enviroment variables
	This is the reason why I don't care about having an installer or a wheel. Just let your computer know where to find the built stuff

	```
	export PATH=*path/to*/panda3d/built/bin:$PATH
	export PYTHONPATH=*path/to*/panda3d/built:$PYTHONPATH
	export LD_LIBRARY_PATH=*path/to*/panda3d/built/lib:$LD_LIBRARY_PATH
	``` (Make sure there are no spaces in setting the enviroment variable (sh rule!)

Aloha, Ciao, Alvida, whatever you speak

bye
