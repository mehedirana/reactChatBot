module.exports = app =>{

    app.get('/', (req, res) => {
        res.send({'hello':'world'});
    });
    
    app.post('/api/df_text_query', (req, res) => {
        res.send({'do':' text query'});
    });
    
    app.post('/api/df_event_query', (req, res) => {
        res.send({'do':'event query'});
    });

};