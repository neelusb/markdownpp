#!/bin/bash
sudo apt-get install python &&
sudo apt-get install curl &&
sudo apt-get install git &&
git clone https://www.github.com/neelusb/markdownpp.git &&
echo Cloned into repository. &&
sudo mv markdownpp/md++.sh /usr/local/bin/md++ &&
echo Created MarkDown++ file. &&
chmod +x /usr/local/bin/md++ &&
echo Made MarkDown++ file executable &&
mkdir /usr/local/bin/markdownpp &&
echo Created Markdown++ directory. &&
mv markdownpp/VERSION /usr/local/bin/markdownpp/VERSION &&
mv markdownpp/md++.py /usr/local/bin/markdownpp/md++.py &&
echo Updated VERSION file &&
sudo mv markdownpp/md++PythonModule /usr/local/bin/markdownpp/mdpp.py &&
sudo mv markdownpp/md++.py /usr/local/bin/markdownpp/md++.py &&
echo Created Python Module. &&
mv -f markdownpp/update.sh /usr/local/bin/markdownpp/update.sh &&
mv -f markdownpp/uninstall.sh /usr/local/bin/markdownpp/uninstall.sh &&
mv -f markdownpp/installFiles/update.sh /usr/local/bin/update-md++ &&
mv -f markdownpp/installFiles/uninstall.sh /usr/local/bin/uninstall-md++ &&
chmod +x /usr/local/bin/uninstall-md++ &&
chmod +x /usr/local/bin/update-md++ &&
echo Created Uninstall and Update files and made them executable.
rm -rf markdownpp &&
echo Deleted repository &&
echo MarkDown++ has been installed.;
