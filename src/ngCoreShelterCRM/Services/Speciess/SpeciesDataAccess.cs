using Firebase.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ngCoreShelterCRM.Models;
using Firebase.Database.Query;

namespace ngCoreShelterCRM.Services.Speciess
{
    public class SpeciesDataAccess
    {
        protected static FirebaseClient db = new FirebaseClient("https://usingwithcsharp.firebaseio.com/");

        public async Task<List<FirebaseObject<Species>>> RetrieveSpecies()
        {
            var species = await db
              .Child("species")
              .OrderByKey()
              .OnceAsync<Species>();
            return species.ToList();
        }

        public async Task<Species> RetrieveSpeciesById(string id)
        {
            var species = await db
                .Child("pets")
                .Child(id)
                .OnceSingleAsync<Species>();

            return species;
        }
    }
}
