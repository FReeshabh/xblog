---
toc: true
description: A guide to minimalist Linux Distributions for you and me
categories: [linux]
---
So what are my credentials to give you this advice? None, really. I'm not a sysadmin. And if I say something wrong, or if there's simply just a better way to do something let me know! Shoot me an email or something. I'm just a dude who's spent quite a few hours with Linux and the related.

This tutorial assumes at least a bit of UNIX-related knowledge. I have tried to give context to anything I wrote. But honestly the biggest purpose of this tutorial is to help you solve problems yourself, rather than me solving all of them myself. Google is your friend! (Or Duck Duck Go!)

# INSTALLATION - The bane of existence
Okay, so honestly 90% of the problems I see people complain about are mostly caused by people just not following the installation process correctly. Most minimal Linux installation start with downloading the iso for the OS you're going to install. Now it could be fine to use an iso that's a few months old, and you will probably do okay, (given you have an internet connection, and packages will update anyways. But recommending using an old iso will consitute as BAD advice.

```***Get the freshest image you can ***```, if it's only a couple of days old, that should be fine but a few momths and I'd recommend getting a new iso. It will help you avoid some of the pain.

Now the other step is to burn the image on to a flash drive. If you're gonna use `dd`, just be careful. There's a reason why it's named "Disk Destroyer" around this part. To use a graphical method use [Balena Etcher](https://www.balena.io/etcher/) (Some people will be opposed to using this app,but I'm just helping people avoid the most pain they can.

Now I highly recommend using an Ethernet cable while installing packages, at least initially. The installation should typically have `dhcpcd`, so just run `dhcpcd`, wait a couple of seconds and then run `ping freeshabh.github.io` to ensure that the internet connection is active. (You can try any other website you trust to be up too, Also Press Control-C to quit the ping)

Now check if your system is BIOS or UEFI. If the command given below does not
exist, it indicates that the system is BIOS, which good news makes things
simpler, but is an older system, so is less secure, although as long as you
don't put in unknown drives in your machine, you don't need to worry about it.

```# ls /sys/firmware/efi/efivars```

# After a minimal Linux Install
1. Get network working
>> During the installation stage confirm that you have dhcpcd

# Why, this superior Linux user doesn't care

Yes, of course. GNU/Linux is the one true Operating System and Linux is it's
only Kernel (Sorry Hurd!). That's a good way to alienate both sides of the
argument. However I have a case to make, and it is me taking the extreme
centrist view.

## What I use
Let's get this out of the way first, I'm an Arch Linux user. Mostly because it
makes things easier for myself. 
