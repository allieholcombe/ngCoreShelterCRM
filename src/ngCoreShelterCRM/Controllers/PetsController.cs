using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ngCoreShelterCRM.Models.Repositories;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ngCoreShelterCRM.Controllers
{
    [Route("api/[controller]")]
    public class PetsController : Controller
    {
        private FBPetRepository _repo = new FBPetRepository();

        // GET api/pets
        [HttpGet]
        public IEnumerable<string> Get()
        {
            var pets = _repo.Pets().Result;
            yield return JsonConvert.SerializeObject(pets);
        }

        // GET api/pets/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/pets
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/pets/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/pets/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
