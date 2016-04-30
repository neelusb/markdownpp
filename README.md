# MarkDown++
MarkDown++ is an innovated and upgraded version of Markdown, which lets you do simple and advanced design the same basic syntax. Like Markdown, MarkDown++ can be used for web development and papers like essays, but MarkDown++ adds a lot more design capability, and can also be used for more advanced design.

**NOTE:** This repo is no longer used but is still active due to various links pointing here from elsewhere on the Internet, and also because this README contains all the syntax formatting rules. Please [click here](https://www.github.com/neelusb/mdpp-pymodule "MarkDown++ - Python Module") to be redirected to the repo for the Python module. A JavaScript library will also come soon.

## Syntax
### General Text Formatting  
`*Oblique/Italic Text*` --> *`Oblique/Italic Text`*  
`**Bold Text**` --> **`Bold Text`**  
`__Underlined Text__`*(Two Underscores)* --> <u>`Underlined Text`</u>  
`%%Overlined Text%%` --> <span style='text-decoration:overline'>`Overlined Text`</span>  
`~Striked-out Text~` --> <span style='text-decoration:line-through'>`Striked-out Text`</span>  
`;;` or *two spaces* --> *Line Break*  
&#96;`Code Block` &#96; --> <span style='font-weight: normal; text-decoration: none; font-style: normal; font-size: medium; text-align: left; background-color:#EEEEEE;font-family:Consolas,Monaco,"Lucida Console","Liberation Mono","DejaVu Sans Mono","Bitstream Vera Sans Mono","Courier New";' >Code block</span>  
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

### Lines  
    
`---` or `1---`  &#8595;<div style="width: 100%; background-color: black; height: 2px;"></div>
`2---`  &#8595;<div style="width: 90%; background-color: black; height: 2px;"></div>
`3---`  &#8595;<div style="width: 80%; background-color: black; height: 2px;"></div>
`4---`  &#8595;<div style="width: 70%; background-color: black; height: 2px;"></div>
`5---`  &#8595;<div style="width: 60%; background-color: black; height: 2px;"></div>
`6---`  &#8595;<div style="width: 50%; background-color: black; height: 2px;"></div>


### Page Title
You can specify a page title when requested in the script. If you don't specify a title, it will be the date and time of compile.

## Contact Me
If you find any bugs, or have any ideas for a future version of MarkDown++, then please <a href="mailto:neelu.rsa@gmail.com">email me</a>.
