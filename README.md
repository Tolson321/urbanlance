# urbanlance
## **urbanlance**
### A web facing application that helps PMs stay aware of upcoming project time thresholds for each developer.

##
## Database Notes:
12/29/20

* The MySQL details are presently stored in `./config/net_config.js`.  Devs should ensure that the credentials, host, port etc are correct for their environment.  

* Please be reminded that the script `./db/init_tw_schema.sql` **drops** ***all the tables and their content*** before re-creating.
  
* If MySQL is running on your computer, you can easily execute the (destructive) DB create/recreate script `./db/init_tw_schema.sql` from a bash prompt at the project root directory, like so:
```bash
$ sudo mysql -uroot -ppassword < ./db/init_tw_schema.sql 
```
* The username and password must match the local environment.

---

## 
## Auto-generated Build Setup notes

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
For detailed explanation on how Nuxt works, check out [Nuxt.js docs](https://nuxtjs.org).


