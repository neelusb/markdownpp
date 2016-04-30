var out='';
function mdpprun(md) {  
  out='';
  var bold=0;
  var escapeMd='';
  var imageUrl='';
  var imageAlt='';
  var isStyle=false;
  var isHeading=false;
  var footerContent='';
  var style=0;
  var styleContent='';
  var cssCodeClass='';
  var cssSupClass='';
  var beforeSize='';
  var color="black";
  var lineSize=0;
  var lineLength=0;
  var linkText='';
  var link='';
  var fixBr='';
  var title='test';
  var line=0;
  var isCode=false;
  var isSup=false;
  var isHtml=false;
  var size="medium";
  var align='left';
  function createspan(){
    out=out+'</span><span '+cssCodeClass+cssSupClass+'style="font-weight: '+Array('normal','bold')[bold]+'; text-decoration: '+Array('none','underline','line-through','overline')[line]+'; font-style: '+Array('normal','oblique','italic')[style]+'; font-size: '+size+'; text-align: '+align+'; '+styleContent+'" >';
  }
  out=out+"<span>";
  createspan();
  while (md.length>0) {
    if (md[0]=="\\") {
      md=md.slice(1);
      continue;
    }
    if (md[0]=='@') {
      ucode='';
      md=md.slice(1);
      if ('0123456789'.indexOf(md[0]) > -1) {
        while ('0123456789'.indexOf(md[0]) > -1) {
          ucode=ucode+md[0];
          md=md.slice(1);
        out=out+"&#"+ucode+";";
        }
      }
      else {
        out=out+"@";
      }
      continue;
    }
    if (md.startsWith("/*")) {
      while (!md.startsWith("*/")) {
        md=md.slice(1);
      }
      md=md.slice(2);
      continue;
    }
    if (md.startsWith("=#=")) {
      bold=0;
      size="medium";
      isHeading=false;
      md=md.slice(3);
      createspan();
      continue;
    }
    if (md.startsWith("######")) {
      isHeading=true;
      size="0.75em";
      bold=1;
      md=md.slice(6);
      createspan();
      continue;
    }
    if (md.startsWith("#####")) {
      isHeading=true;
      size="0.83em";
      bold=1;
      md=md.slice(5);
      createspan();
      continue;
    }
    if (md.startsWith("####")) {
      isHeading=true;
      size="1em";
      bold=1;
      md=md.slice(4);
      createspan();
      continue;
    }
    if (md.startsWith("###")) {
      isHeading=true;
      size="1.17em";
      bold=1;
      md=md.slice(3);
      createspan();
      continue;
    }
    if (md.startsWith("##")) {
      isHeading=true;
      size="1.5em";
      bold=1;
      md=md.slice(2);
      createspan();
      continue;
    }
    if (md.startsWith("#")) {
      isHeading=true;
      size="2em";
      bold=1;
      md=md.slice(1);
      createspan();
      continue;
    }
    if (md.startsWith("<{<(")) {
      md=md.slice(4);
      while (md[0]!=")") {
        imageUrl=imageUrl+md[0];
        md=md.slice(1);
      }
      md=md.slice(1);
      while (md[0]!=">") {
        imageAlt=imageAlt+md[0];
        md=md.slice(1);
      }
      md=md.slice(1);
      while (md[0]!="}") {
        link=link+md[0];
        md=md.slice(1);
      }
      md=md.slice(1);
      while (md[0]!=">") {
        linkText=linkText+md[0];
        md=md.slice(1);
      }
      md=md.slice(1);
      out=out+'     <a href="'+link+'"><img src="'+imageUrl+'" alt="'+imageAlt+'" style="width:30%" title="'+imageAlt+'" style="'+styleContent+'" /></a>';
      link='';
      linkText='';
      imageAlt='';
      imageUrl='';
      createspan();
      continue;
    }
    if (md.startsWith("<(<{")) {
      md=md.slice(4);
      while (md[0]!="}") {
          link=link+md[0];
          md=md.slice(1);
        }
      md=md.slice(1);
      while (md[0]!=">") {
          linkText=linkText+md[0];
          md=md.slice(1);
        }
      md=md.slice(1);
      while (md[0]!=")") {
          imageUrl=imageUrl+md[0];
          md=md.slice(1);
        }
      md=md.slice(1);
      while (md[0]!=">") {
          imageAlt=imageAlt+md[0];
          md=md.slice(1);
        }
      md=md.slice(1);
      out=out+('      <a href="'+link+'"><img src="'+imageUrl+'" alt="'+imageAlt+'" style="width:30%" title="'+imageAlt+'" style="'+styleContent+'" /></a>');
      link='';
      linkText='';
      imageAlt='';
      imageUrl='';
      createspan();
      continue;
    }
    if (md.startsWith("<[")) {
        md=md.slice(2);
        while (md[0]!="]") {
            styleContent=styleContent+md[0];
            md=md.slice(1);
        md=md.slice(1);
        createspan();
      }
        while (md[0]!=">") {
            out=out+md[0];
            md=md.slice(1);
        md=md.slice(1);
        styleContent='';
        createspan();
        continue;
      }
    }
    if (md.startsWith("<{")) {
      md=md.slice(2);
      while (md[0]!="}") {
          link=link+md[0];
          md=md.slice(1);
        }
      md=md.slice(1);
      while (md[0]!=">") {
          linkText=linkText+md[0];
          md=md.slice(1);
        }
      md=md.slice(1);
      out=out+('      <a href="'+link+'">'+linkText+'</a>');
      link='';
      linkText='';
      createspan();
      continue;
    }
    if (md.startsWith("<(")) {
      md=md.slice(2);
      while (md[0]!=")") {
          imageUrl=imageUrl+md[0];
          md=md.slice(1);
        }
      md=md.slice(1);
      while (md[0]!=">") {
          imageAlt=imageAlt+md[0];
          md=md.slice(1);
        }
      md=md.slice(1);
      out=out+('      <img src="'+imageUrl+'" alt="'+imageAlt+'" style="width:30%" title="'+imageAlt+'" style="'+styleContent+'" />');
      imageAlt='';
      imageUrl='';
      createspan();
      continue;
    }
    if (md.startsWith("6---")) {
      md=md.slice(4);
      out=out+('      <div style="width: 50%; background-color: '+color+'; margin-left: '+('0','10','10','20')[('left','center','justify','right').index(align)]+'%; height: 2px;"></div>\n');
      continue;
    }
    if (md.startsWith("5---")) {
      md=md.slice(4);
      out=out+('      <div style="width: 60%; background-color: '+color+'; margin-left: '+('0','10','10','20')[('left','center','justify','right').index(align)]+'%; height: 2px;"></div>\n');
      continue;
    }
    if (md.startsWith("4---")) {
      md=md.slice(4);
      out=out+('      <div style="width: 70%; background-color: '+color+'; margin-left: '+('0','10','10','20')[('left','center','justify','right').index(align)]+'%; height: 2px;"></div>\n');
      continue;
    }
    if (md.startsWith("3---")) {
      md=md.slice(4);
      out=out+('      <div style="width: 80%; background-color: '+color+'; margin-left: '+('0','10','10','20')[('left','center','justify','right').index(align)]+'%; height: 2px;"></div>\n');
      continue;
    }
    if (md.startsWith("2---")) {
      md=md.slice(4);
      out=out+('      <div style="width: 90%; background-color: '+color+'; margin-left: '+('0','10','10','20')[('left','center','justify','right').index(align)]+'%; height: 2px;"></div>\n');
      continue;
    }
    if (md.startsWith("1---")) {
      md=md.slice(4);
      out=out+('      <div style="width: 100%; background-color: '+color+'; margin-left: '+('0','10','10','20')[('left','center','justify','right').index(align)]+'%; height: 2px;"></div>\n');
      continue;
    }
    if (md.startsWith("---")) {
      md=md.slice(3);
      out=out+('      <div style="width: 100%; background-color: '+color+'; margin-left: '+('0','10','10','20')[('left','center','justify','right').index(align)]+'%; height: 2px;"></div>\n');
      continue;
    }
    if (md.startsWith("**")) {
      if (bold===0) {
        bold=1;
      }
      else {
        bold=0;
      }
      md=md.slice(2);
      createspan();
      continue;
    }
    if (md.startsWith("*")) {
      if (style==1) {
        style=0;
      }
      else {
        style=1;
      }
      md=md.slice(1);
      createspan();
      continue;
    }
    if (md.startsWith("__")) {
      if (line==1) {
        line=0;
      }
      else {
        line=1;
      }
      md=md.slice(2);
      createspan();
      continue;
    }
    if (md.startsWith("~")) {
      if (line==2) {
        line=0;
      }
      else {
        line=2;
      }
      md=md.slice(1);
      createspan();
      continue;
    }
    if (md.startsWith("%%")) {
      if (line==3) {
        line=0;
      }
      else {
        line=3;
      }
      md=md.slice(2);
    }
    if (md.startsWith("<--")) {
      out=out+('<span>&#8592;</span>');
      md=md.slice(3);
      createspan();
      continue;
    }
    if (md.startsWith("-->")) {
      out=out+('<span>&#8594;</span>');
      md=md.slice(3);
      createspan();
      continue;
    }
    if (md.startsWith("<->")) {
      out=out+('<span>&#8596;</span>');
      md=md.slice(3);
      createspan();
      continue;
    }
    if (md.startsWith("[[")) {
      isHtml=true;
      md=md.slice(2);
      createspan();
      continue;
    }
    if (md.startsWith("]]")) {
      isHtml=false;
      md=md.slice(2);
      createspan();
      continue;
    }
    if (md.startsWith("`")) {
      if (isCode===false) {
        cssCodeClass='class=code ';
        isCode=true;
      }
      else {
        cssCodeClass='';
        isCode=false;
      }
      md=md.slice(1);
      createspan();
      continue;
    }
    if (md[0]=='>') {
      if (isHtml===true) {
        out=out+'>';
      }
      else {
        out=out+"&gt;";
      }
      md=md.slice(1);
    } 
    if (md[0]=='<') {
      if (isHtml===true) {
        out=out+'<';
      }
      else {
        out=out+"&lt;";
      }
      md=md.slice(1);
    } 
    if (md[0]=='&') {
      out=out+"&amp;";
      md=md.slice(1);
    }
    if (md[0]=='+') {
      out=out+"&bull; ";
      md=md.slice(1);
    }
    if (md[0]=='(c)') {
      out=out+"&copy;";
      md=md.slice(3);
    }
    if (md[0]=='(tm)') {
      out=out+"&trade;";
      md=md.slice(4);
    }
    if (md.startsWith(";;")) {
      if (isHeading===true) {
        bold=0;
        size="medium";
        isHeading=false;
      }
      out=out+'<br />';
      md=md.slice(2);
      createspan();
      continue;
    }
    if (md.startsWith("  ")) {
      if (isHeading===true) {
        bold=0;
        size="medium";
        isHeading=false;
      }
      out=out+'<br />';
      md=md.slice(2);
      createspan();
      continue;
    }
    out=out+md[0];
    md=md.slice(1);
  }
  out=out+'</span><style>.code {background-color:#EEEEEE;font-family:Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New;} .sup { vertical-align: super; }</style>';
  return out;
}
function mdppdocrun(md) {
  out=out+"<!DOCTYPE html>\n<html>\n  <head>\n    \n     <title>"+title+"</title>\n  </head><body>";
  out=run(md);
  out=out+"\n    </body>\n</html>";
  return out;
}
// var tags=document.getElementsByTagName('mdpp');
// while (tags.length>0) {
//   tags[0].innerHTML=mdpprun(tags[0].innerHTML);
//   tags.shift;
// }
