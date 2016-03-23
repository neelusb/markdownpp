#!/bin/bash
sudo apt-get install python &&
sudo apt-get install curl &&
sudo apt-get install git &&
git clone https://www.github.com/neelusb/markdownpp.git &&
echo Cloned into repository. &&
mv markdownpp/md++.py /usr/local/bin/md++ &&
echo Created MarkDown++ file. &&
chmod +x /usr/local/bin/md++ &&
echo Made MarkDown++ file executable &&
mkdir /usr/local/bin/markdownpp &&
echo Created Markdown++ directory. &&
mv markdownpp/VERSION /usr/local/bin/markdownpp/VERSION &&
echo Updated VERSION file &&
sudo mv -f markdownpp/update.sh /usr/local/bin/markdownpp/update.sh &&
sudo mv -f markdownpp/uninstall.sh /usr/local/bin/markdownpp/uninstall.sh &&
sudo mv -f markdownpp/installFiles/update.sh /usr/local/bin/update-md++ &&
sudo mv -f markdownpp/installFiles/uninstall.sh /usr/local/bin/uninstall-md++ &&
chmod +x /usr/local/bin/uninstall-md++ &&
chmod +x /usr/local/bin/update-md++ &&
echo Created Uninstall and Update files and made them executable.
rm -rf markdownpp &&
echo Deleted repository &&
echo MarkDown++ has been installed.;
