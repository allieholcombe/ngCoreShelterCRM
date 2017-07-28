using Firebase.Database;
using Newtonsoft.Json;
using ngCoreShelterCRM.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ngCoreShelterCRM.Services.Speciess
{
    public class SpeciesTransform
    {
        public async Task<List<Species>> TransformSpeciess(List<FirebaseObject<Species>> Speciess)
        {
            List<Species> SpeciesList = new List<Species>();

            foreach (var Species in Speciess)
            {
                Species currentSpecies = new Species();
                currentSpecies.Key = $"{ Species.Key }";

                if ($"{Species.Object.Name}" != null)
                {
                    currentSpecies.Name = $"{ Species.Object.Name }";
                }
                else
                {
                    currentSpecies.Name = "";
                }

                SpeciesList.Add(currentSpecies);
            }
            return SpeciesList;
        }

        public async Task<Species> JsonToSpecies(string data)
        {
            Species newSpecies = JsonConvert.DeserializeObject<Species>(data);

            return newSpecies;
        }
    }
}
