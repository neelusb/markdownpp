if md.startswith("<(<["):
    md=md[4:]
    while md[0] is not "]":
        styleContent=styleContent+md[0]
        md=md[1:]
    md=md[1:]
    while md[0] is not ">":
        sys.stdout.write(md[0])
        md=md[1:]
    md=md[1:]
    while md[0] is not ")":
        imageUrl=imageUrl+md[0]
        md=md[1:]
    md=md[1:]
    while md[0] is not ">":
        imageAlt=imageAlt+md[0]
        md=md[1:]
    md=md[1:]
    sys.stdout.write('<img src="'+imageUrl+'" style="'+styleContent+'" alt="'+imageAlt'" title="'+imageAlt'" />')
    styleContent=''
    imageUrl=''
    imageAlt=''
    createspan()
    continue
    
