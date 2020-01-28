### TO TEST
- `git pull origin master`
- `npm start`

### TO RELEASE
- `git status`
- `git add *`
- `git commit -am 'my latest changes'`
- `git push origin master`
- `npm run build`
- `rsync -avH build/* -e ssh u43384095@home188812746.1and1-data.host:/kunden/homepages/22/d188812746/htdocs/sammie/sammie-react/public/`