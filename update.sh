localVersion=`cat /usr/local/bin/markdownpp/VERSION`
cloudVersion=$(curl https://raw.githubusercontent.com/neelusb/markdownpp/master/VERSION)
if [ "$localVersion" = "$cloudVersion" ]
then
  echo You have the latest version of MarkDown++.
else
  git clone https://www.github.com/neelusb/markdownpp.git &&
  echo Cloned into repository. &&
  sudo rm -f /usr/local/bin/md++ &&
  sudo rm -f /usr/local/bin/uninstall-md++ &&
  sudo rm -f /usr/local/bin/update-md++ &&
  sudo rm -rf /usr/local/bin/markdownpp &&
  echo Deleted outdated files. &&
  sudo mv markdownpp/md++.py /usr/local/bin/md++ &&
  echo Created MarkDown++ file. &&
  chmod +x /usr/local/bin/md++ &&
  echo Made MarkDown++ file executable &&
  sudo mkdir /usr/local/bin/markdownpp &&
  echo Created Markdown++ directory. &&
  sudo mv markdownpp/VERSION /usr/local/bin/markdownpp/VERSION &&
  echo Updated VERSION file &&
  sudo mv -f markdownpp/update.sh /usr/local/bin/markdownpp/update.sh &&
  sudo mv -f markdownpp/uninstall.sh /usr/local/bin/markdownpp/uninstall.sh &&
  sudo mv -f markdownpp/installFiles/update.sh /usr/local/bin/update-md++ &&
  sudo mv -f markdownpp/installFiles/uninstall.sh /usr/local/bin/uninstall-md++ &&
  chmod +x /usr/local/bin/uninstall-md++ &&
  chmod +x /usr/local/bin/update-md++ &&
  echo Created Uninstall and Update files and made them executable. &&
  rm -rf markdownpp &&
  echo Deleted repository. &&
  echo MarkDown++ has been updated.;
  localVersion=`cat /usr/local/bin/markdownpp/VERSION`
fi
