---
layout: post
title: Technical tips
date: 2023-10-28 +0800
categories:
- Pre-requisites
tags:
- tips
math: true
pin: true
mermaid: true
---
> This blog will include encountered important techniques in coding.
{: .prompt-tip }

### Misunderstandings

1. Matrix multiplication with numpy
    + The shape of np.array([1,1]) is (2,), which will be broadcasted in addition, and reduce dimensions in multiplication.


### Useful functions

1. np.clip(data, threshold1, threshold2, out = data)
    + out means update a variable in place
2. x.ravel() takes a multi-dimensional array and returns its contents inside of a 1D vector.
3. append() is an in-place function
4. np.real() gets the real part of a complex variable
5. np.random.choice(a,b,replace, p) indicates the function will sample an array of size (b) from 1-dimensional array (a) repeatedly (replace=True) or not, according to possibilities of list (p) with the same of a.
