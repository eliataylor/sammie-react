### TO TEST
- `git pull origin master`
- `npm start`

### TO RELEASE
- `git status`
- `git add *`
- `git commit -am 'my latest changes'`
- `git push origin master`
- `npm run build`
- `rsync -avH build/* -e ssh user@host:serverpath/`
