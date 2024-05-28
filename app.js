const shell = require('shelljs');

if (shell.exec('bin/kcadm.sh config credentials --server http://localhost:8080 --realm master --user admin --password ADMIN').code !== 0) {
    shell.echo('Error: kcadm config credentials failed');
    shell.exit(1);
}
if (shell.exec('bin/kcadm.sh update realms/test -s "loginTheme=purple-theme"').code !== 0) {
    shell.echo('Error: kcadm config credentials failed');
    shell.exit(1);
}
else {
    console.log("Theme updated successfully")
}