using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ngCoreShelterCRM.Models.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ngCoreShelterCRM.Controllers
{
    public class SpeciesController
    {
        private FBSpeciesRepository _repo = new FBSpeciesRepository();

        // GET api/species
        [HttpGet]
        public IEnumerable<string> Get()
        {
            var species = _repo.Species().Result;
            yield return JsonConvert.SerializeObject(species);
        }

        // GET api/species/5
        [HttpGet("{id}")]
        public string Get(string id)
        {
            var species = _repo.GetSpecies(id).Result;
            return JsonConvert.SerializeObject(species);
        }
    }
}
