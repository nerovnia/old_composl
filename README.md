# composl

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

mongodump --forceTableScan --uri mongodb+srv://nervuk:Uk2ULdRoYSixJ3y8@cluster0.pa2dv.mongodb.net/ComunalPayment


dbUser="nervuk"
dbPasswd="Uk2ULdRoYSixJ3y8"
dbHost="cluster0.pa2dv.mongodb.net"
dbName="ComunalPayment"



mongoexport --uri="mongodb+srv://nervuk:Uk2ULdRoYSixJ3y8@cluster0.pa2dv.mongodb.net/ComunalPayment" --collection=accountings --out=accountings.json
mongoexport --uri="mongodb+srv://nervuk:Uk2ULdRoYSixJ3y8@cluster0.pa2dv.mongodb.net/ComunalPayment" --collection=companies --out=companies.json
mongoexport --uri="mongodb+srv://nervuk:Uk2ULdRoYSixJ3y8@cluster0.pa2dv.mongodb.net/ComunalPayment" --collection=months --out=months.json
mongoexport --uri="mongodb+srv://nervuk:Uk2ULdRoYSixJ3y8@cluster0.pa2dv.mongodb.net/ComunalPayment" --collection=servcoms --out=servcoms.json
mongoexport --uri="mongodb+srv://nervuk:Uk2ULdRoYSixJ3y8@cluster0.pa2dv.mongodb.net/ComunalPayment" --collection=services --out=services.json


mongoimport --uri="mongodb+srv://<your username>:<your password>@<your cluster>.mongodb.net/sample‐supplies" --drop sales.json



