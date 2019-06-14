using MovieLibrary.CORS;
using MovieLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace MovieLibrary.Controllers
{   [AllowCrossSite]
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class MovieController : ApiController
    {
        ApplicationDbContext context;
        public MovieController()
        {
            context = new ApplicationDbContext();
        }
        [HttpGet]
        // GET api/Movies
        public IHttpActionResult Get()
        {

            var newMovie = context.Movies;
            return Ok(newMovie);
        }
        [HttpPost]
        // POST api/Movie
        public void Post( Movie movie)
        {
            
            context.Movies.Add(movie);
            context.SaveChanges();
        }
        [HttpPut]
        // PUT api/Movie/5
        public void Put(int id, [FromBody] Movie movie)
        {
            
            var newMovie = context.Movies.FirstOrDefault(e => e.id == id);

            newMovie.Title = movie.Title;
            newMovie.Genre = movie.Genre;
            newMovie.DirectorName = movie.DirectorName;
            context.SaveChanges();
        }
    }
}
