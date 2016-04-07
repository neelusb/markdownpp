#!/usr/bin/env python
import mdpp
import sys

isOutFile=1
print len(sys.argv)
script, inpFile, outFile = sys.argv
title=raw_input("Page Title: (Leave this blank to make the title the date and time of compile) ")
if inpFile[-1]==' ':
    inpFile=inpFile[:-1]
inp=open(inpFile, "r").read()
if outFile[-1]==' ':
    outFile=outFile[:-1]
if outFile=='':
    isOutFile=0
if outFile==' ':
    isOutFile=0
if title=='':
    title=0
if title==' ':
    title=0
if isOutFile==1:
    open(outFile, "w").write(mdpp.run(inp, title))
if isOutFile==0:
    mdpp.prnt(inp, title)
