import mdpp

isOutFile=1
inpFile=raw_input("Drag and drop a file or enter /path/to/input.md++ here: ")
outFile=raw_input("OPTIONAL: Drag and drop a file or enter /path/to/output.html here: (Leave this blank to print HTML output to console.) ")
title=raw_input("Page Title: (Leave this blank to make the title the date and time of compile) ")
inp=open(inpFile, "r").read()
if inpFile[-1]==' ':
    inpFile=inpFile[:-1]
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
