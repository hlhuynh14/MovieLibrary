using MovieLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MovieLibrary.Controllers
{
    [Authorize]
    public class ValuesController : ApiController
    {
        ApplicationDbContext context;
        public ValuesController()
        {
            context = new ApplicationDbContext();
        }
        // GET api/values
        public IEnumerable<Movie> Get(int id)
        {
            
            var newMovie = context.Movies.ToList();
            return new Movie[] { "value1", "value2" };
        }

        // GET api/values/5
        public IHttpActionResult Get()
        {

            var newMovie = context.Movies;
            return Ok(newMovie);
        }

        // POST api/values
        public void Post([FromBody] Movie movie)
        {
            
            context.Movies.Add(movie);
            context.SaveChanges();
        }

        // PUT api/values/5
        public void Put(int id, [FromBody] Movie movie)
        {
            
            var newMovie = context.Movies.FirstOrDefault(e => e.id == id);

            newMovie.Title = movie.Title;
            newMovie.Genre = movie.Genre;
            newMovie.DirectorName = movie.DirectorName;
            context.SaveChanges();
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            
            var newMovie = context.Movies.FirstOrDefault(e => e.id == id);
            context.Movies.Remove(newMovie);
            context.SaveChanges();

        }
    }
}
