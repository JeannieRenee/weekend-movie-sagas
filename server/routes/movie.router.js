const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// it made most sense to me to combine both gets into one and store them together
router.get('/', (req, res) => {
  const query = `
    SELECT movies.id, movies.title, movies.poster, movies.description, 
    ARRAY_AGG(genres.name) AS genres 
    FROM movies
    JOIN movies_genres ON "movies_genres".movie_id = "movies".id
    JOIN genres ON "genres".id = "movies_genres".genre_id
    GROUP BY movies.id
    ORDER BY movies.title;
  `
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});

// I planned for a post route and functionality 
// ( i even was able to use chips to assign multiple genres in dropdown)
// due to time restraints i decided against it 

// router.post('/', (req, res) => {
//   console.log(req.body);
//   // RETURNING "id" will give us back the id of the created movie
//   const insertMovieQuery = `
//   INSERT INTO "movies" ("title", "poster", "description")
//   VALUES ($1, $2, $3)
//   RETURNING "id";`

//   // FIRST QUERY MAKES MOVIE
//   pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
//   .then(result => {
//     console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
    
//     const createdMovieId = result.rows[0].id

//     // Now handle the genre reference
//     const insertMovieGenreQuery = `
//       INSERT INTO "movies_genres" ("movie_id", "genre_id")
//       VALUES  ($1, $2);
//       `
//       // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
//       pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]).then(result => {
//         //Now that both are done, send back success!
//         res.sendStatus(201);
//       }).catch(err => {
//         // catch for second query
//         console.log(err);
//         res.sendStatus(500)
//       })

// // Catch for first query
//   }).catch(err => {
//     console.log(err);
//     res.sendStatus(500)
//   })
// })

module.exports = router;