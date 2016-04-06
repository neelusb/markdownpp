localVersion=`cat /usr/local/bin/markdownpp/VERSION`
cloudVersion=$(curl https://raw.githubusercontent.com/neelusb/markdownpp/master/VERSION)
if [ "$localVersion" = "$cloudVersion" ]
then
  echo You have the latest version of MarkDown++.
else
  git clone https://www.github.com/neelusb/markdownpp.git &&
  echo Cloned into repository. &&
  bash markdownpp/extraUpdateScripts.sh&&
  echo Ran extra update scripts. &&
  sudo rm -f /usr/local/bin/md++ &&
  sudo rm -f /usr/local/bin/uninstall-md++ &&
  sudo rm -f /usr/local/bin/update-md++ &&
  sudo rm -rf /usr/local/bin/markdownpp &&
  echo Deleted outdated files. &&
  sudo mv markdownpp/md++.sh /usr/local/bin/md++ &&
  echo Created MarkDown++ file. &&
  chmod +x /usr/local/bin/md++ &&
  echo Made MarkDown++ file executable &&
  sudo mkdir /usr/local/bin/markdownpp &&
  echo Created Markdown++ directory. &&
  sudo mv markdownpp/md++.py /usr/local/bin/markdownpp/md++.py &&
  sudo cp markdownpp/md++PythonModule.py /usr/local/bin/markdownpp/mdpp.py &&
  if [ -d "/Library/Python/2.7/site-packages/" ]
  then
    sudo mv markdownpp/md++PythonModule.py /Library/Python/2.7/site-packages/mdpp.py;
  else
    sudo rm markdownpp/md++PythonModule.py;
  fi
  echo Created Python Module. &&
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
