import mdpp

inpFile=raw_input("Drag and drop a file or enter /path/to/input.md++ here: ")
outFile=raw_input("Drag and drop a file or enter /path/to/output.html here: ")
inp=open(inpFile, "r").read()
out=mdpp.run(inp)
open(outFile, "w").write(out)
