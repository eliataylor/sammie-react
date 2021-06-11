const fs = require('fs');
const path = require('path');
const dirpath = (process.argv[2].indexOf('/') === 0) ? process.argv[2] : __dirname + '/' + process.argv[2];
const execSync = require("child_process").execSync;

if (process.argv.length < 3) {
    console.log('Usage: yarn run dir2json {dirpath}');
    process.exit(1);
}

async function list(dir) {

    const walk = async (entry) => {
        return await new Promise((resolve, reject) => {
            fs.exists(entry, exists => {
                if (!exists) {
                    console.error(`${entry} does not exist`, exists);
                    return resolve({});
                }
                return resolve(new Promise((resolve, reject) => {
                    fs.lstat(entry, (err, stats) => {
                        if (err) {
                            console.error(`lstat failed`, err);
                            return reject(err);
                        }
                        if (!stats.isDirectory()) {
                            let obj = {
                                path: entry,
                                type: 'file',
                                name: path.basename(entry),
                                time: stats.mtime,
                                size: stats.size
                            };
                            gallery.push(obj)
                            return resolve(obj);
                        }
                        resolve(new Promise((resolve, reject) => {
                            fs.readdir(entry, (err, files) => {
                                if (err) {
                                    console.error(`readdir failed`, err);
                                    return reject(err);
                                }
                                return Promise.all(files.map(async child => await walk(path.join(entry, child)))).then(children => {
                                    let obj = {
                                        path: entry,
                                        type: 'folder',
                                        name: path.basename(entry),
                                        time: stats.mtime,
                                        entries: children
                                    };
                                    gallery.push(obj);
                                    resolve(obj);
                                }).catch(err => {
                                    console.error(`files failed`, err);
                                    reject(err);
                                });
                            });
                        }));
                    });
                }));
            });
        });
    }

    return await walk(dir);
}

function dirTree(filename) {

    var stats = fs.lstatSync(filename);
    var info = {
        path: filename.substr(filename.indexOf('/public') + '/public'.length),
        name: path.basename(filename)
    };

    if (stats.isDirectory()) {
        info.type = "folder";
        // info.dirname = path.basename(filename)
        info.children = [];
        fs.readdirSync(filename).forEach(function(child) {
            if (child.indexOf('___thumbnail') > -1) {
                // ignore
            } else {
                info.children = info.children.concat(dirTree(filename + '/' + child));
            }
        });
    } else {
        info.time = stats.mtime;
        info.size = stats.size;

        if (path.extname(filename).toLowerCase() === '.mp4') {
            // todo: ffmpeg process
        } else  if (path.extname(filename).toLowerCase() === '.heic') {
            let newname = filename.substr(0, filename.lastIndexOf('.')) + '.jpg';
            let cmd = `sips -s format png ${filename} --out ${newname}`;
            let result = execSync(cmd);
            if (result) {
                console.info(result)
                fs.unlinkSync(filename)
                filename = newname;
                stats = fs.lstatSync(newname);
                info.path = newname.substr(newname.indexOf('/public') + '/public'.length)
                info.size = stats.size;
            }
        }

        if (info.size > 2000000 && path.extname(filename).toLowerCase() !== '.mp4') {
            let cmd = `convert -resize 2000x2000 ${filename} ${filename}`;
            execSync(cmd);
        }

        /*
        if (info.size > 700000 && path.extname(filename).toLowerCase() !== '.mp4') {
            let newname = filename.substr(0, filename.lastIndexOf('.')) + '___thumbnail' + filename.substr(filename.lastIndexOf('.'))
            let cmd = `convert -define jpeg:size=500x180 ${filename} -auto-orient -thumbnail 250x250 -unsharp 0x.5 ${newname}`;
            let result = execSync(cmd);
            if (result) {
                info.thumb = newname.substr(newname.indexOf('/public') + '/public'.length)
            }
        }
         */

        // Assuming it's a file. In real life it could be a symlink or something else!
        info.type = "file";
    }

    return info;
}

if (module.parent == undefined) {
    // node tools/dir2json.js /Users/elitaylor/Developer/sammie/sammie-react/public/assets
    const gallery = dirTree(dirpath);

    // var util = require('util');
    // console.log(util.inspect(gallery, false, null));

    fs.writeFileSync('/Users/elitaylor/Developer/sammie/sammie-react/src/data/assets.json', JSON.stringify(gallery), 'utf8');
}

/*
const gallery = [];
console.log("SEARCHING " + dirpath)
// let json = list(dirpath);
console.log("LIST", json);
console.log("----- gallery", gallery);
*/
