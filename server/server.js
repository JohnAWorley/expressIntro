// app.use(bodyParser.urlencoded({ extended: true });

let express = require('express');

let app = express();

const PORT = 5001;

app.use(express.static('server/public'));

app.listen(PORT, function() {
    console.log(`listening to port ${PORT}`);
    
})