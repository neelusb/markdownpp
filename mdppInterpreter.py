import mdpp, sys, time

script, inp = sys.argv
mdpp.prnt(open(inp, "r").read(), time.strftime("%c"))
