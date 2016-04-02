# MarkDown++
MarkDown++ is an innovated and upgraded version of Markdown, which lets you do simple and advanced design the same basic syntax. Like Markdown, MarkDown++ can be used for web development and papers like essays, but MarkDown++ adds a lot more design capability, and can also be used for more advanced design.

## Syntax
### General Text Formatting  
`*Oblique/Italic Text*` --> *`Oblique/Italic Text`*  
`**Bold Text**` --> **`Bold Text`**  
`__Underlined Text__`*(Two Underscores)* --> <u>`Underlined Text`</u>  
`%%Overlined Text%%` --> <span style='text-decoration:overline'>`Overlined Text`</span>  
`~Striked-out Text~` --> <span style='text-decoration:line-through'>`Striked-out Text`</span>  
`;;` or *two spaces* --> *Line Break*  
&#96;`Code Block` &#96; --> <span style="font-weight: normal; text-decoration: none; font-style: normal; font-size: medium; text-align: left; background-color:#EEEEEE;font-family:Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New;" >Code block</span>  
### Bullet Points
```
+Bullet 1  
+Bullet 2  
+Bullet 3  
```
 &#8595;  
&bull; Bullet 1  
&bull; Bullet 2  
&bull; Bullet 3  

### HTML Code
*Use double square brackets (`[[` and `]]`)*  

`<p>HTML</p>` --> &lt;p&gt;HTML&lt;/p&gt;  
`[[<p>HTML</p>]]` --> <span>HTML</span>

### Headings/Headers
`#H1` - `######H6` --> &lt;h1&gt; to &lt;h6&gt; 

### Images and Hyperlinks

`<{http://neelu.co/mdpp}MarkDown++>` --> [MarkDown++](http://neelu.co/mdpp/ "MarkDown++ | Neelu.co")  
`<(http://cdn2.mhpbooks.com/2016/02/google.jpg)Alt and title text>` --> <img style="width: 30%;" src="http://cdn2.mhpbooks.com/2016/02/google.jpg" alt="Alt and title text" title="Alt and title text"/>

`<{<(http://cdn2.mhpbooks.com/2016/02/google.jpg)Alt and title text>https://www.google.com}>` or `<(<{https://www.google.com}>http://cdn2.mhpbooks.com/2016/02/google.jpg)Alt and title text>  ` --> <a href="https://www.google.com"><img style="width: 30%;" src="http://cdn2.mhpbooks.com/2016/02/google.jpg" alt="Alt and title text" title="Alt and title text" /></a>

### Symbols and Unicode Characters

`-->` --> &#8594;  
`<--` --> &#8592;  
`<->` --> &#8596;  
`(c)` --> &copy;  
`(tm)` --> &trade;  

Other Unicode Characters --> `@*\<Unicode Character HTML Code\>*`  
For example: `@181` --> &#181;  

### Escape Formatting
*Use `\` to escape formatting*

`**Bold Text** \* Just an asterisk` --> **Bold Text** * Just an asterisk  

### CSS-format styling  
`<[color:blue;]Blue text>` --> <span style="color:blue;">Blue text</span> *(This text should be blue, but GitHub flavoured Markdown doesn't allow that...)* 
**NOTE:** Currently, CSS styling can not be used with images and hyperlinks. This will be fixed in a later update.

### Comments
*Comments are notes left by the user that aren't visible in the output. Use `/*` and `*/` for comments.*  
`You can see this. /*You can't see this.*/` --> You can see this.

### Lines  
    
`---` or `1---`  &#8595;<div style="width: 100%; background-color: black; height: 2px;"></div>
`2---`  &#8595;<div style="width: 90%; background-color: black; height: 2px;"></div>
`3---`  &#8595;<div style="width: 80%; background-color: black; height: 2px;"></div>
`4---`  &#8595;<div style="width: 70%; background-color: black; height: 2px;"></div>
`5---`  &#8595;<div style="width: 60%; background-color: black; height: 2px;"></div>
`6---`  &#8595;<div style="width: 50%; background-color: black; height: 2px;"></div>


### Page Title
Currently, the page title is the date and time of compile. This will change in the future.

## Downloading and Installing

Download the install script for your Operating System, and then execute it by double-clicking, or navigating to its directory using the command line and executing `./` and its exact file name.  
<a href="https://raw.githubusercontent.com/neelusb/markdownpp/master/osx-install.tool" download>Mac OS X</a>  
<a href="https://raw.githubusercontent.com/neelusb/markdownpp/master/debian-install.sh" download>Debian/Ubuntu Linux</a>  
<a href="https://raw.githubusercontent.com/neelusb/markdownpp/master/fedora21-install.sh" download>Fedora Linux 21 or earlier</a>  
<a href="https://raw.githubusercontent.com/neelusb/markdownpp/master/fedora22-install.sh" download>Fedora Linux 22 or later</a>  
<a href="https://raw.githubusercontent.com/neelusb/markdownpp/master/gentoo-install.sh" download>Gentoo Linux</a>  
**NOTE:** Only the OS X and Debian/Ubuntu Linux install scripts have been tested. Please <a href="mailto:neelu.rsa@gmail.com">contact me</a> if the other ones have any bugs.

##Usage

Use the following command to translate a MarkDown++ file into an HTML file:
```
md++ < /path/to/input.md++ > /path/to/output.html
```

## Updating and Uninstalling
Update and Uninstall scripts are automatically installed when you install MarkDown++.  
To update MarkDown++, use the command `update-md++` in your command line.  
To uninstall MarkDown++, use the command `uninstall-md++` in your command line.  
To check which version of MarkDown++ you have, use the command `cat /usr/local/bin/markdownpp/VERSION` in your command line.  
To check what the latest version of MarkDown++ is, use the command `echo $(curl https://raw.githubusercontent.com/neelusb/markdownpp/master/VERSION)` in your command line.

## Contact Me
If you find any bugs, or have any ideas for a future version of MarkDown++, then please <a href="mailto:neelu.rsa@gmail.com">email me</a>.
